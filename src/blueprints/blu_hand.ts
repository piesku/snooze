import {callback} from "../components/com_callback.js";
import {children} from "../components/com_children.js";
import {collide} from "../components/com_collide.js";
import {lifespan} from "../components/com_lifespan.js";
import {render_colored_shadows} from "../components/com_render.js";
import {RigidKind, rigid_body} from "../components/com_rigid_body.js";
import {transform} from "../components/com_transform.js";
import {Game, Layer} from "../game.js";

export function blueprint_hand(game: Game) {
    return [
        collide(true, Layer.Obstacle, Layer.Terrain | Layer.Player),
        rigid_body(RigidKind.Dynamic, 0.3),
        callback((game, entity) => {
            let rigid_body = game.World.RigidBody[entity];
            rigid_body.Acceleration[1] = -100;
        }),
        lifespan(10),
        children([
            transform(),
            render_colored_shadows(game.MaterialColoredShadows, game.MeshHand, [
                242 / 0xff,
                194 / 0xff,
                61 / 0xff,
                1,
            ]),
        ]),
    ];
}
