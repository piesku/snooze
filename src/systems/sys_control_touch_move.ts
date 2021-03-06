import {DEG_TO_RAD, Quat, Vec2, Vec3} from "../../common/math.js";
import {clamp} from "../../common/number.js";
import {from_axis, get_pitch, multiply} from "../../common/quat.js";
import {Entity} from "../../common/world.js";
import {Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Move | Has.ControlPlayer;
const AXIS_X: Vec3 = [1, 0, 0];
const DEAD_ZONE = 0.1;
const TOUCH_SENSITIVITY = 10;

// The position of the joystick center, given by the initial Touch0's x and y.
const joystick: Vec2 = [0, 0];
const rotation: Quat = [0, 0, 0, 0];

export function sys_control_touch_move(game: Game, delta: number) {
    if (game.InputDelta["Touch0"] === 1) {
        // The center of the invisible joystick is given by the position of the
        // first touch of the first finger on the screen's surface.
        joystick[0] = game.InputState["Touch0X"];
        joystick[1] = game.InputState["Touch0Y"];
    }

    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) === QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity) {
    let transform = game.World.Transform[entity];
    let control = game.World.ControlPlayer[entity];
    let move = game.World.Move[entity];

    if (control.Yaw && game.InputState["Touch0"] === 1) {
        let divisor = Math.min(game.ViewportWidth, game.ViewportHeight) / 4;
        let amount_x = (game.InputState["Touch0X"] - joystick[0]) / divisor;
        if (Math.abs(amount_x) > DEAD_ZONE) {
            multiply(move.LocalRotation, move.LocalRotation, [0, -clamp(-1, 1, amount_x), 0, 0]);
        }
    }

    if (control.Pitch && game.InputDelta["Touch0Y"]) {
        let current_pitch = get_pitch(transform.Rotation);
        let min_amount = control.MinPitch - current_pitch;
        let max_amount = control.MaxPitch - current_pitch;

        let amount = clamp(
            min_amount,
            max_amount,
            game.InputDelta["Touch0Y"] * control.Pitch * TOUCH_SENSITIVITY
        );
        from_axis(rotation, AXIS_X, amount * DEG_TO_RAD);
        // Pitch is post-multiplied, i.e. applied relative to the entity's self
        // space; the X axis is always aligned with its left and right sides.
        multiply(transform.Rotation, transform.Rotation, rotation);
        game.World.Signature[entity] |= Has.Dirty;
    }
}
