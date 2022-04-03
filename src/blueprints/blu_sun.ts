import {orthographic} from "../../common/projection.js";
import {camera_target} from "../components/com_camera.js";
import {children} from "../components/com_children.js";
import {light_directional} from "../components/com_light.js";
import {transform} from "../components/com_transform.js";
import {Game} from "../game.js";

export function blueprint_sun(game: Game) {
    return [
        children([
            transform([0, 0, 10]),
            light_directional([1, 1, 1], 0.3),
            camera_target(game.Targets.Sun, orthographic(15, 1, 100)),
        ]),
    ];
}
