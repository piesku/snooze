import {instantiate} from "../../common/game.js";
import {from_euler} from "../../common/quat.js";
import {blueprint_camera_follow} from "../blueprints/blu_camera_follow.js";
import {blueprint_ground} from "../blueprints/blu_ground.js";
import {blueprint_player} from "../blueprints/blu_player.js";
import {blueprint_sun} from "../blueprints/blu_sun.js";
import {transform} from "../components/com_transform.js";
import {Game} from "../game.js";
import {World} from "../world.js";

export function scene_run(game: Game) {
    game.World = new World();
    game.ViewportResized = true;

    // Player.
    instantiate(game, [...blueprint_player(game), transform([0, 1, 0], [0, 1, 0, 0])]);

    // Camera.
    instantiate(game, [...blueprint_camera_follow(game), transform([0, 1, 0], [0, 1, 0, 0])]);

    // Directional light and the shadow source.
    instantiate(game, [
        ...blueprint_sun(game),
        transform(undefined, from_euler([0, 0, 0, 0], -45, 45, 0)),
    ]);

    // Ground.
    let map_length = 11;
    let tile_size = 10;
    for (let z = 0; z < map_length; z++) {
        instantiate(game, [
            ...blueprint_ground(game),
            transform([0, 0, tile_size * -z], undefined, [tile_size, 1, tile_size]),
        ]);
    }
}
