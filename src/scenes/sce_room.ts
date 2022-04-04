import {instantiate} from "../../common/game.js";
import {from_euler} from "../../common/quat.js";
import {Action} from "../actions.js";
import {blueprint_camera_follow} from "../blueprints/blu_camera_follow.js";
import {blueprint_note} from "../blueprints/blu_note.js";
import {blueprint_sun} from "../blueprints/blu_sun.js";
import {children} from "../components/com_children.js";
import {collide} from "../components/com_collide.js";
import {control_always} from "../components/com_control_always.js";
import {move} from "../components/com_move.js";
import {shake} from "../components/com_shake.js";
import {spawn} from "../components/com_spawn.js";
import {transform} from "../components/com_transform.js";
import {trigger} from "../components/com_trigger.js";
import {Game, Layer} from "../game.js";
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
        transform(undefined, from_euler([0, 0, 0, 0], -75, 30, 0)),
    ]);

    // Note spawner.
    instantiate(game, [
        transform([0, 15, 0]),
        control_always(null, [0, 1, 0, 0]),
        move(0, 1),
        children([
            transform([0, 0, 5]),
            children([transform(), shake(3), spawn(blueprint_note, 1.5)]),
        ]),
    ]);

    // The void.
    instantiate(game, [
        transform([0, -15, 0], undefined, [100, 1, 100]),
        collide(false, Layer.None, Layer.Player),
        trigger(Layer.Player, Action.GameTitle),
    ]);
}
