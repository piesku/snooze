import {Entity} from "../common/world.js";
import {destroy_all} from "./components/com_children.js";
import {Game, Layer} from "./game.js";

export const enum Action {
    ToggleFullscreen,
    GameStart,
    CollectItem,
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
        case Action.GameStart: {
            game.PlayState = "playing";
            break;
        }
        case Action.CollectItem: {
            let [item_entity, other_entity] = payload as [Entity, Entity];
            let other_collide = game.World.Collide[other_entity];
            if (other_collide.Layers & Layer.Player) {
                game.Sleepiness--;
            }
            destroy_all(game.World, item_entity);
            break;
        }
    }
}
