import {ease_in_out_quad, ease_in_quad, ease_out_quad} from "../../common/easing.js";
import {from_euler} from "../../common/quat.js";
import {animate, AnimationFlag} from "../components/com_animate.js";
import {audio_listener} from "../components/com_audio_listener.js";
import {audio_source} from "../components/com_audio_source.js";
import {children} from "../components/com_children.js";
import {collide} from "../components/com_collide.js";
import {control_always} from "../components/com_control_always.js";
import {control_player} from "../components/com_control_player.js";
import {disable} from "../components/com_disable.js";
import {light_point} from "../components/com_light.js";
import {move} from "../components/com_move.js";
import {named} from "../components/com_named.js";
import {render_colored_shadows} from "../components/com_render.js";
import {RigidKind, rigid_body} from "../components/com_rigid_body.js";
import {transform} from "../components/com_transform.js";
import {Game, Layer} from "../game.js";
import {Has} from "../world.js";

export function blueprint_player(game: Game) {
    return [
        control_player(true, 0.2, 0),
        control_always([0, 0, 1], null, "move"),
        disable(Has.ControlAlways),
        move(10, 3),
        collide(true, Layer.Player, Layer.Terrain),
        rigid_body(RigidKind.Dynamic),
        audio_source(false),
        audio_listener(),
        children(
            // Body.
            [
                transform([0, 0.7, 0]),
                render_colored_shadows(game.MaterialColoredShadows, game.MeshBody, [
                    224 / 0xff,
                    114 / 0xff,
                    128 / 0xff,
                    1,
                ]),
                animate({
                    idle: {
                        Keyframes: [
                            {
                                Timestamp: 0,
                                Rotation: from_euler([0, 0, 0, 1], 0, -5, 0),
                                Ease: ease_in_out_quad,
                            },
                            {
                                Timestamp: 1,
                                Rotation: from_euler([0, 0, 0, 1], 0, 5, 0),
                                Ease: ease_in_out_quad,
                            },
                        ],
                    },
                    jump: {
                        Keyframes: [
                            {
                                Timestamp: 0,
                                Rotation: [0, 0, 0, 1],
                            },
                            {
                                Timestamp: 0.5,
                                Rotation: [1, 0, 0, 0],
                                Ease: ease_in_quad,
                            },
                            {
                                Timestamp: 1,
                                Rotation: [0, 0, 0, -1],
                                Ease: ease_out_quad,
                            },
                        ],
                        Flags: AnimationFlag.None,
                    },
                }),
                children(
                    // Display.
                    [
                        transform([0, 0, 1], [0.707, 0, 0, 0.707], [0.7, 0.1, 0.6]),
                        render_colored_shadows(game.MaterialColoredShadows, game.MeshBody, [
                            200 / 0xff,
                            231 / 0xff,
                            229 / 0xff,
                            1,
                        ]),
                    ],
                    // Button.
                    [
                        transform([0, 1, 0], [0, 0, 0, 1], [0.6, 0.2, 0.5]),
                        render_colored_shadows(game.MaterialColoredShadows, game.MeshBody, [
                            174 / 0xff,
                            248 / 0xff,
                            181 / 0xff,
                            1,
                        ]),
                    ]
                ),
            ],
            // Axel.
            [
                transform([0, 0.7, 0]),
                animate({
                    idle: {
                        Flags: AnimationFlag.None,
                        Keyframes: [
                            {
                                Timestamp: 0,
                                Rotation: [0, 0, 0, 1],
                            },
                        ],
                    },
                    move: {
                        Flags: AnimationFlag.Loop,
                        Keyframes: [
                            {
                                Timestamp: 0,
                                Rotation: [0, 0, 0, 1],
                            },
                            {
                                Timestamp: 0.5,
                                Rotation: [1, 0, 0, 0],
                            },
                            {
                                Timestamp: 1,
                                Rotation: [0, 0, 0, -1],
                            },
                        ],
                    },
                }),
                children(
                    [
                        transform([-1.8, 0, 0]),
                        render_colored_shadows(game.MaterialColoredShadows, game.MeshWheel, [
                            240 / 0xff,
                            202 / 0xff,
                            82 / 0xff,
                            1,
                        ]),
                    ],
                    [
                        transform([1.8, 0, 0]),
                        render_colored_shadows(game.MaterialColoredShadows, game.MeshWheel, [
                            240 / 0xff,
                            202 / 0xff,
                            82 / 0xff,
                            1,
                        ]),
                    ]
                ),
            ],
            // Camera rig anchor.
            [
                transform(undefined, from_euler([0, 0, 0, 1], 15, 0, 0)),
                named("player camera anchor"),
                move(0, 3),
                control_player(false, 0, 0.2, -10, 15),
            ],
            // Overhead light.
            [transform([0, 2, 0]), light_point([1, 1, 1], 5)]
        ),
    ];
}
