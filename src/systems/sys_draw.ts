/**
 * @module systems/sys_draw
 */

import {get_translation} from "../../common/mat4.js";
import {Vec3} from "../../common/math.js";
import {clamp} from "../../common/number.js";
import {transform_position} from "../../common/vec3.js";
import {CameraKind} from "../components/com_camera.js";
import {DrawImage, DrawKind, DrawRect, DrawText} from "../components/com_draw.js";
import {Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Transform | Has.Draw;

export function sys_draw(game: Game, delta: number) {
    game.Context2D.resetTransform();
    game.Context2D.clearRect(0, 0, game.ViewportWidth, game.ViewportHeight);
    let position = <Vec3>[0, 0, 0];

    let camera_entity = game.Cameras[0];
    let main_camera = game.World.Camera[camera_entity];
    if (!main_camera || main_camera.Kind === CameraKind.Xr) {
        return;
    }

    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) == QUERY) {
            // World position.
            get_translation(position, game.World.Transform[i].World);
            // NDC position.
            transform_position(position, position, main_camera.Pv);

            position[0] = clamp(-0.8, 0.8, position[0]);
            position[1] = clamp(-0.8, 0.8, position[1]);
            position[2] = clamp(-0.8, 0.8, position[2]);

            if (position[2] < -1 || position[2] > 1) {
                // The entity is outside the frustum. Only consider the Z axis
                // which allows us to discard all positions in front of the near
                // plane (behind the camera) and behind the far plane. We still
                // draw the remaining XY positions outside NDC in case the
                // drawing is wide or tall enough to be visible.
                //continue;
            }

            game.Context2D.setTransform(
                1,
                0,
                0,
                1,
                0.5 * (position[0] + 1) * game.ViewportWidth,
                0.5 * (-position[1] + 1) * game.ViewportHeight
            );

            let draw = game.World.Draw[i];
            switch (draw.Kind) {
                case DrawKind.Text:
                    draw_text(game, draw);
                    break;
                case DrawKind.Rect:
                    draw_rect(game, draw);
                    break;
                case DrawKind.Image:
                    draw_image(game, draw);
                    break;
            }
        }
    }
}

function draw_text(game: Game, draw: DrawText) {
    game.Context2D.textAlign = "center";
    game.Context2D.font = draw.Font;
    game.Context2D.fillStyle = draw.FillStyle;
    game.Context2D.fillText(draw.Text, 0, 0);
}

function draw_rect(game: Game, draw: DrawRect) {
    game.Context2D.fillStyle = draw.Color;
    game.Context2D.fillRect(-draw.Width / 2, -draw.Height / 2, draw.Width, draw.Height);
}

function draw_image(game: Game, draw: DrawImage) {
    let img = document.getElementById("face1") as HTMLImageElement;
    game.Context2D.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        -draw.Width / 2,
        -draw.Height / 2,
        draw.Width,
        draw.Height
    );
}
