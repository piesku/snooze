import {element} from "../../common/random.js";
import {GL_CCW, GL_CW} from "../../common/webgl.js";
import {Action} from "../actions.js";
import {children} from "../components/com_children.js";
import {collide} from "../components/com_collide.js";
import {lifespan} from "../components/com_lifespan.js";
import {render_colored_shadows} from "../components/com_render.js";
import {RigidKind, rigid_body} from "../components/com_rigid_body.js";
import {transform} from "../components/com_transform.js";
import {trigger} from "../components/com_trigger.js";
import {Game, Layer} from "../game.js";

export function blueprint_hand(game: Game) {
    let side = element([-1, 1]);
    return [
        collide(
            true,
            Layer.Obstacle,
            Layer.Ground | Layer.Obstacle | Layer.Player,
            [0.4, 0.2, 0.6]
        ),
        trigger(Layer.Ground | Layer.Player | Layer.Obstacle, Action.Snooze),
        rigid_body(RigidKind.Dynamic, 0.3),
        lifespan(10),
        children([
            transform(undefined, undefined, [5 * side, 5, 5]),
            render_colored_shadows(
                game.MaterialColoredShadows,
                game.MeshHand,
                [242 / 0xff, 194 / 0xff, 61 / 0xff, 1],
                side > 0 ? GL_CW : GL_CCW
            ),
        ]),
    ];
}
