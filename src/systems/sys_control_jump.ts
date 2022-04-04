import {Entity} from "../../common/world.js";
import {query_down} from "../components/com_children.js";
import {Game} from "../game.js";
import {snd_jump} from "../sounds/snd_jump.js";
import {Has} from "../world.js";

const QUERY = Has.ControlPlayer | Has.RigidBody;

export function sys_control_jump(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) === QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity) {
    let control = game.World.ControlPlayer[entity];
    let rigid_body = game.World.RigidBody[entity];

    if (control.Jump) {
        if (
            game.InputState["ArrowUp"] ||
            (game.InputDelta["Touch0"] === -1 && game.InputDistance["Touch0"] < 10)
        ) {
            // Jump
            if (!rigid_body.IsAirborne) {
                rigid_body.Acceleration[1] += 200;

                for (let ent of query_down(game.World, entity, Has.Animate)) {
                    game.World.Animate[ent].Trigger = "jump";
                }

                let audio = game.World.AudioSource[entity];
                audio.Trigger = snd_jump;
            }
        }
    }
}
