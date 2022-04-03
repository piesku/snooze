import {Entity} from "../../common/world.js";
import {Action} from "../actions.js";
import {audio_source} from "../components/com_audio_source.js";
import {callback} from "../components/com_callback.js";
import {children} from "../components/com_children.js";
import {collide} from "../components/com_collide.js";
import {control_always} from "../components/com_control_always.js";
import {disable} from "../components/com_disable.js";
import {lifespan} from "../components/com_lifespan.js";
import {move} from "../components/com_move.js";
import {render_colored_shadows} from "../components/com_render.js";
import {RigidKind, rigid_body} from "../components/com_rigid_body.js";
import {shake} from "../components/com_shake.js";
import {task_timeout} from "../components/com_task.js";
import {toggle} from "../components/com_toggle.js";
import {transform} from "../components/com_transform.js";
import {trigger} from "../components/com_trigger.js";
import {Game, Layer} from "../game.js";
import {Has} from "../world.js";

export function blueprint_note(game: Game) {
    let shaker_entity: Entity;
    return [
        collide(true, Layer.Collectable, Layer.Ground | Layer.Player, [0.3, 0.3, 0.3]),
        trigger(Layer.Player, Action.CollectItem),
        rigid_body(RigidKind.Dynamic, 0.1),
        audio_source(true),
        lifespan(15),
        children([
            transform(),
            callback((game, entity) => (shaker_entity = entity)),
            shake(0.01),
            toggle(Has.Shake, 1, true),
            disable(Has.Shake | Has.Toggle),
            children([
                transform([0, 0, 0], undefined, [0.3, 0.3, 0.3]),
                control_always(null, [0, 1, 0, 0]),
                move(0, 2),
                render_colored_shadows(game.MaterialColoredShadows, game.MeshNote, [
                    118 / 0xff,
                    188 / 0xff,
                    255 / 0xff,
                    1,
                ]),
            ]),
        ]),
        task_timeout(10, (entity) => {
            // Start shaking the mesh.
            game.World.Signature[shaker_entity] |= Has.Shake | Has.Toggle;
        }),
    ];
}
