import {perspective} from "../../common/projection.js";
import {Entity} from "../../common/world.js";
import {audio_source} from "../components/com_audio_source.js";
import {callback} from "../components/com_callback.js";
import {camera_canvas} from "../components/com_camera.js";
import {children} from "../components/com_children.js";
import {disable} from "../components/com_disable.js";
import {mimic} from "../components/com_mimic.js";
import {multiple} from "../components/com_multiple.js";
import {first_named, named} from "../components/com_named.js";
import {shake} from "../components/com_shake.js";
import {task_when} from "../components/com_task.js";
import {transform} from "../components/com_transform.js";
import {Game} from "../game.js";
import {snd_piano} from "../sounds/snd_piano.js";
import {Has} from "../world.js";

export function blueprint_camera_follow(game: Game) {
    let camera: Entity;
    return [
        named("camera root"),
        callback((game, entity) => (camera = entity)),
        mimic(first_named(game.World, "title camera anchor")),
        audio_source(false),
        children([
            transform([0, 0.1, -1.2], [0, 1, 0, 0]),
            children([
                transform(),
                shake(0.02),
                disable(Has.Shake),
                camera_canvas(perspective(1, 0.1, 100), [170 / 255, 199 / 255, 172 / 255, 1]),
            ]),
        ]),
        multiple(
            [
                task_when(
                    () => game.PlayState === "playing",
                    (entity) => {
                        // The camera follows the player.
                        mimic(first_named(game.World, "player camera anchor"))(game, camera);

                        let audio = game.World.AudioSource[camera];
                        audio.Trigger = snd_piano();
                    }
                ),
            ],
            [
                task_when(
                    () => game.PlayState === "win",
                    (entity) => {
                        mimic(first_named(game.World, "title camera anchor"))(game, camera);

                        let audio = game.World.AudioSource[camera];
                        audio.Trigger = undefined;
                    }
                ),
            ],
            [
                task_when(
                    () => game.PlayState === "lose",
                    (entity) => {
                        mimic(first_named(game.World, "lose camera anchor"))(game, camera);

                        let audio = game.World.AudioSource[camera];
                        audio.Trigger = undefined;
                    }
                ),
            ]
        ),
    ];
}
