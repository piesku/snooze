import {Blueprint, instantiate} from "../../common/game.js";
import {Entity} from "../../common/world.js";
import {Game} from "../game.js";

export function multiple(...blueprints: Array<Blueprint<Game>>) {
    return (game: Game, entity: Entity) => {
        for (let blueprint of blueprints) {
            instantiate(game, blueprint);
        }
    };
}
