import {ease_out_quad} from "../../common/easing.js";
import {float} from "../../common/random.js";
import {animate, AnimationFlag} from "../components/com_animate.js";
import {children} from "../components/com_children.js";
import {collide} from "../components/com_collide.js";
import {lifespan} from "../components/com_lifespan.js";
import {render_colored_shadows} from "../components/com_render.js";
import {RigidKind, rigid_body} from "../components/com_rigid_body.js";
import {transform} from "../components/com_transform.js";
import {Game, Layer} from "../game.js";

export function blueprint_ground(game: Game) {
    return [
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        lifespan(10),
        children([
            transform(),
            render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [0, 1, 0.1, 1]),
            animate({
                idle: {
                    Flags: AnimationFlag.None,
                    Keyframes: [
                        {
                            Timestamp: Infinity,
                            Translation: [0, 0, 0],
                        },
                    ],
                },
                drop: {
                    Flags: AnimationFlag.None,
                    Keyframes: [
                        {
                            Timestamp: 0,
                            Translation: [0, 15, 0],
                        },
                        {
                            Timestamp: 2,
                            Translation: [0, float(-0.1, 0.2), 0],
                            Ease: ease_out_quad,
                        },
                    ],
                },
            }),
        ]),
    ];
}
