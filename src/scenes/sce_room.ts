import {instantiate} from "../../common/game.js";
import {from_euler} from "../../common/quat.js";
import {blueprint_camera_follow} from "../blueprints/blu_camera_follow.js";
import {blueprint_sun} from "../blueprints/blu_sun.js";
import {transform} from "../components/com_transform.js";
import {Game} from "../game.js";
import {World} from "../world.js";
import {map_room1} from "./map_room1.js";

export function scene_room(game: Game) {
    game.World = new World();
    game.ViewportResized = true;

    map_room1(game);

    // Camera.
    instantiate(game, [...blueprint_camera_follow(game), transform([0, 10, 0])]);

    // The shadow source.
    instantiate(game, [
        ...blueprint_sun(game),
        transform(undefined, from_euler([0, 0, 0, 0], -45, 45, 0)),
    ]);
}
