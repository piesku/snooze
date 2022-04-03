import {instantiate} from "../../common/game.js";
import {blueprint_player} from "../blueprints/blu_player.js";
import {collide} from "../components/com_collide.js";
import {render_colored_shadows} from "../components/com_render.js";
import {RigidKind, rigid_body} from "../components/com_rigid_body.js";
import {transform} from "../components/com_transform.js";
import {Game, Layer} from "../game.js";

export function map_room1(game: Game) {
    instantiate(game, [
        transform([0, -0.5, 0], undefined, [10, 1, 10]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-3.8, 0.3, 3.6], undefined, [1.8, 0.35, 2.2]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-2.5, 0.4, 4.4], undefined, [0.5, 0.5, 0.5]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-2.5, 0.4, 4.4], undefined, [0.5, 0.5, 0.5]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    // Player.
    instantiate(game, [
        ...blueprint_player(game),
        transform([-2.5, 1, 4.4], [0, 1, 0, 0], [0.1, 0.1, 0.1]),
    ]);
}
