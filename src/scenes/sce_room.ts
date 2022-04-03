import {instantiate} from "../../common/game.js";
import {from_euler} from "../../common/quat.js";
import {blueprint_camera_follow} from "../blueprints/blu_camera_follow.js";
import {blueprint_player} from "../blueprints/blu_player.js";
import {blueprint_sun} from "../blueprints/blu_sun.js";
import {children} from "../components/com_children.js";
import {collide} from "../components/com_collide.js";
import {named} from "../components/com_named.js";
import {render_colored_shadows} from "../components/com_render.js";
import {RigidKind, rigid_body} from "../components/com_rigid_body.js";
import {transform} from "../components/com_transform.js";
import {Game, Layer} from "../game.js";
import {World} from "../world.js";

export function scene_room(game: Game) {
    game.World = new World();
    game.ViewportResized = true;

    // Player.
    instantiate(game, [
        ...blueprint_player(game),
        transform([0, 7, 48], [0, 1, 0, 0], [0.5, 0.5, 0.5]),
    ]);

    // The shadow source.
    instantiate(game, [
        ...blueprint_sun(game),
        transform(undefined, from_euler([0, 0, 0, 0], -45, 45, 0)),
    ]);

    // Floor.
    instantiate(game, [
        transform([0, 0, 0], undefined, [100, 1, 100]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        children([
            transform(),
            render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
                221 / 0xff,
                157 / 0xff,
                105 / 0xff,
                1,
            ]),
        ]),
    ]);

    // Night table.
    instantiate(game, [
        transform([0, 3, 48], undefined, [5, 6, 5]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        children(
            [
                transform(),
                render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
                    221 / 0xff,
                    157 / 0xff,
                    105 / 0xff,
                    1,
                ]),
            ],
            [
                transform([0.1, 0.5, 0], from_euler([0, 0, 0, 1], 0, 15, 0)),
                named("title camera anchor"),
            ]
        ),
    ]);

    // Camera.
    instantiate(game, [...blueprint_camera_follow(game), transform([0, 10, 0])]);
}
