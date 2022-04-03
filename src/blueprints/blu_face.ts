import {draw_image} from "../components/com_draw.js";
import {Game} from "../game.js";

export function blueprint_face(game: Game) {
    return [draw_image(64, 64)];
}
