import {play_synth_clip} from "../common/audio.js";
import {Entity} from "../common/world.js";
import {destroy_all} from "./components/com_children.js";
import {Game, Layer} from "./game.js";
import {scene_room} from "./scenes/sce_room.js";
import {snd_alarm} from "./sounds/snd_alarm.js";

export const enum Action {
    ToggleFullscreen,
    GameTitle,
    GameStart,
    CollectItem,
    Snooze,
}

export function dispatch(game: Game, action: Action, payload: unknown) {
    switch (action) {
        case Action.ToggleFullscreen: {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                document.body.requestFullscreen();
            }
            break;
        }
        case Action.GameTitle: {
            game.PlayState = "title";
            requestAnimationFrame(() => scene_room(game));
            break;
        }
        case Action.GameStart: {
            game.PlayState = "playing";
            play_synth_clip(game.Audio, undefined, snd_alarm);
            break;
        }
        case Action.CollectItem: {
            let [item_entity, other_entity] = payload as [Entity, Entity];
            let other_collide = game.World.Collide[other_entity];
            if (other_collide.Layers & Layer.Player) {
                game.Sleepiness--;
                play_synth_clip(game.Audio, undefined, snd_alarm);

                if (game.Sleepiness <= 0) {
                    game.PlayState = "win";
                }
            }
            destroy_all(game.World, item_entity);
            break;
        }
        case Action.Snooze: {
            let [hand_entity, other_entity] = payload as [Entity, Entity];
            let other_collide = game.World.Collide[other_entity];
            if (other_collide.Layers & Layer.Player) {
                game.PlayState = "lose";
            } else {
                let hand_collide = game.World.Collide[hand_entity];
                hand_collide.Mask &= ~Layer.Player;
            }
            break;
        }
    }
}
