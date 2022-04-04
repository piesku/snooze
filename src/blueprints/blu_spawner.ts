import {children} from "../components/com_children.js";
import {disable} from "../components/com_disable.js";
import {shake} from "../components/com_shake.js";
import {spawn} from "../components/com_spawn.js";
import {task_when} from "../components/com_task.js";
import {transform} from "../components/com_transform.js";
import {Game} from "../game.js";
import {Has} from "../world.js";
import {blueprint_hand} from "./blu_hand.js";

export function blueprint_spawner(game: Game) {
    return [
        children([
            transform(),
            shake(4),
            spawn(blueprint_hand, 2),
            disable(Has.Spawn),
            task_when(
                () => game.PlayState === "playing",
                (entity) => {
                    game.World.Signature[entity] |= Has.Spawn;
                }
            ),
        ]),
    ];
}
