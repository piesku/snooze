import {dispatch} from "./actions.js";
import {Game} from "./game.js";
import {scene_room} from "./scenes/sce_room.js";

let game = new Game();
scene_room(game);
game.Start();

// @ts-ignore
window.$ = dispatch.bind(null, game);

// @ts-ignore
window.game = game;
