import {Vec3} from "../../common/math.js";
import {normalize, scale, transform_direction} from "../../common/vec3.js";
import {Entity} from "../../common/world.js";
import {query_down} from "../components/com_children.js";
import {Game} from "../game.js";
import {snd_jump} from "../sounds/snd_jump.js";
import {Has} from "../world.js";

const QUERY = Has.ControlPlayer | Has.RigidBody | Has.Transform;

export function sys_control_jump(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) === QUERY) {
            update(game, i);
        }
    }
}

const jump_magnitude = 180;
const local_direction_title: Vec3 = [0, 1, 0];
const local_direction_playing: Vec3 = [0, 1, 0.2];
const world_direction: Vec3 = [0, 0, 0];

function update(game: Game, entity: Entity) {
    let control = game.World.ControlPlayer[entity];
    let rigid_body = game.World.RigidBody[entity];
    let transform = game.World.Transform[entity];

    if (control.Jump) {
        if (
            game.InputState["ArrowUp"] ||
            (game.InputDelta["Touch0"] === -1 && game.InputDistance["Touch0"] < 10)
        ) {
            // Jump
            if (!rigid_body.IsAirborne) {
                // Acceleration must be set in world-space.
                if (game.PlayState === "playing") {
                    transform_direction(world_direction, local_direction_playing, transform.World);
                } else {
                    transform_direction(world_direction, local_direction_title, transform.World);
                }
                normalize(world_direction, world_direction);
                scale(rigid_body.Acceleration, world_direction, jump_magnitude);

                for (let ent of query_down(game.World, entity, Has.Animate)) {
                    game.World.Animate[ent].Trigger = "jump";
                }

                let audio = game.World.AudioSource[entity];
                audio.Trigger = snd_jump;
            }
        }
    }
}
