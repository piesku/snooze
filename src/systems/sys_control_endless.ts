import {instantiate} from "../../common/game.js";
import {get_translation} from "../../common/mat4.js";
import {Vec3} from "../../common/math.js";
import {Entity} from "../../common/world.js";
import {blueprint_ground} from "../blueprints/blu_ground.js";
import {callback} from "../components/com_callback.js";
import {query_down} from "../components/com_children.js";
import {transform} from "../components/com_transform.js";
import {Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.ControlPlayer | Has.Transform;
const PADDING = 5;

export function sys_control_endless(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) === QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity) {
    let local_transform = game.World.Transform[entity];

    let world_position: Vec3 = [0, 0, 0];
    get_translation(world_position, local_transform.World);

    if (world_position[2] < game.DistanceTraveled - PADDING) {
        game.DistanceTraveled -= PADDING;

        instantiate(game, [
            ...blueprint_ground(game),
            transform([0, 0, game.DistanceTraveled - 50], undefined, [5, 1, 5]),
            callback((game, entity) => {
                for (let child of query_down(game.World, entity, Has.Animate)) {
                    let animate = game.World.Animate[child];
                    animate.Trigger = "drop";
                }
            }),
        ]);
    }
}
