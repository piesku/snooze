import {get_translation} from "../../common/mat4.js";
import {Mat4, Vec3} from "../../common/math.js";
import {transform_position} from "../../common/vec3.js";
import {Entity} from "../../common/world.js";
import {CameraCanvas} from "../components/com_camera.js";
import {Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Transform | Has.Cull;

export function sys_cull(game: Game, delta: number) {
    let camera_entity = game.Cameras[0];
    let pv = (game.World.Camera[camera_entity] as CameraCanvas).Pv;

    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) === QUERY) {
            update(game, i, pv);
        }
    }
}

const position: Vec3 = [0, 0, 0];

function update(game: Game, entity: Entity, pv: Mat4) {
    let cull = game.World.Cull[entity];
    let transform = game.World.Transform[entity];

    get_translation(position, transform.World);
    transform_position(position, position, pv);

    if (Math.abs(position[2]) > 1) {
        game.World.Signature[entity] &= ~cull.Mask;
    } else {
        game.World.Signature[entity] |= cull.Mask;
    }
}
