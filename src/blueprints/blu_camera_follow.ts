import {perspective} from "../../common/projection.js";
import {camera_canvas} from "../components/com_camera.js";
import {children} from "../components/com_children.js";
import {mimic} from "../components/com_mimic.js";
import {first_named} from "../components/com_named.js";
import {task_until} from "../components/com_task.js";
import {transform} from "../components/com_transform.js";
import {Game} from "../game.js";

export function blueprint_camera_follow(game: Game) {
    return [
        mimic(first_named(game.World, "title camera anchor")),
        task_until(
            () => game.PlayState === "playing",
            (entity) => {
                // The camera follows the player.
                mimic(first_named(game.World, "player camera anchor"))(game, entity);
            }
        ),
        children([
            transform([0, 1, -8], [0, 1, 0, 0]),
            camera_canvas(perspective(1, 0.1, 1000), [170 / 255, 199 / 255, 172 / 255, 1]),
        ]),
    ];
}
