import {instantiate} from "../../common/game.js";
import {collide} from "../components/com_collide.js";
import {render_colored_shadows} from "../components/com_render.js";
import {RigidKind, rigid_body} from "../components/com_rigid_body.js";
import {transform} from "../components/com_transform.js";
import {Game, Layer} from "../game.js";
import {blueprint_player} from "../blueprints/blu_player.js";

export function map_room1(game: Game) {
    instantiate(game, [
        transform([0, -0.5, 0], undefined, [10, 1, 10]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            216.40115862877437 / 0xff,
            152.71979298071014 / 0xff,
            91.65846366836819 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-3.8, 0.37, 3.6], undefined, [1.8, 0.35, 2.2]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            216.54791233545018 / 0xff,
            149.39419371684338 / 0xff,
            109.58221706565406 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-2.39, 0.45, 4.3], undefined, [0.7, 0.5, 0.7]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            234.0612258910468 / 0xff,
            170.84692815523127 / 0xff,
            99.29281116560226 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-2.5, 1, 4.4], undefined, [0.25, 0.2, 0.25]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            226.25956899185402 / 0xff,
            149.35904406823298 / 0xff,
            95.79558004646809 / 0xff,
            1,
        ]),
    ]);

    // Player.
    instantiate(game, [
        ...blueprint_player(game),
        transform([-2.2, 1, 4.2], [0, 1, 0, 0], [0.05, 0.05, 0.05]),
    ]);

    instantiate(game, [
        transform([-2.5, 0.8, 4.4], undefined, [0.1, 0.2, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 4.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 4.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 2.8], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 2.8], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-2.6, 0.1, 4.5], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-2.2, 0.1, 4.5], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-2.2, 0.1, 4.1], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-2.6, 0.1, 4.1], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-3.8, 1.1, 0.3], undefined, [1.8, 1.73, -0.44]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            225.23283935967117 / 0xff,
            164.7030908989504 / 0xff,
            113.83419757867705 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 0.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 0.2], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 0.2], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 0.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([0.82, 0.42, 3.27], [0, -0.91, 0, 0.42], [0.72, 0.35, 0.88]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            227.2177172281363 / 0xff,
            170.81702618038562 / 0xff,
            107.60527195625703 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([0.72, 0.12, 2.93], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([0.46, 0.12, 3.23], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([0.92, 0.12, 3.62], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([1.18, 0.12, 3.31], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([0.65, 0.77, 3.48], [0, -0.91, 0, 0.42], [0.17, 0.35, 0.88]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            235.5979748568876 / 0xff,
            154.72394188992763 / 0xff,
            113.31812503245561 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([0.55, 0.77, 3.04], [0, -0.91, 0, 0.42], [0.72, 0.35, 0.16]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            214.15427996206063 / 0xff,
            146.3714057766531 / 0xff,
            105.40471633438469 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([1.1, 0.77, 3.51], [0, -0.91, 0, 0.42], [0.72, 0.35, 0.16]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            209.52126021229995 / 0xff,
            142.07001143710622 / 0xff,
            99.29762477649751 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([1.62, 0.44, 0.25], [0, 0.84, 0, 0.54], [0.72, 0.35, 1.76]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            210.90450644044145 / 0xff,
            169.88577036198834 / 0xff,
            116.36311105700238 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([2.34, 0.14, 0.13], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([2.15, 0.14, -0.28], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([0.9, 0.14, 0.36], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([1.05, 0.14, 0.68], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([1.54, 0.79, 0.06], [0, 0.84, 0, 0.54], [0.17, 0.35, 1.67]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            220.0325468043512 / 0xff,
            170.63216419381368 / 0xff,
            109.11299632340652 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([4.07, 0.42, 2.28], [0, -0.26, 0, 0.97], [0.72, 0.35, 0.88]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            209.2760118238935 / 0xff,
            145.7046372439806 / 0xff,
            95.81003026085672 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([3.75, 0.12, 2.44], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([4.09, 0.12, 2.64], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([4.39, 0.12, 2.12], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([4.05, 0.12, 1.92], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([4.31, 0.77, 2.42], [0, -0.26, 0, 0.97], [0.17, 0.35, 0.88]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            233.3538283545867 / 0xff,
            160.15261933152237 / 0xff,
            90.3112343862189 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([3.89, 0.77, 2.6], [0, -0.26, 0, 0.97], [0.72, 0.35, 0.16]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            222.89537060105968 / 0xff,
            144.73031540837178 / 0xff,
            93.30191233153121 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([4.25, 0.77, 1.97], [0, -0.26, 0, 0.97], [0.72, 0.35, 0.16]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            211.15503452079636 / 0xff,
            156.65790853046997 / 0xff,
            105.83777124730888 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-2, 0.32, -2.5], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-1.8, 0.64, -2.7], undefined, [1.44, 0.1, 1.44]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-1.6, 0.34, -2.5], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-1.6, 0.34, -2.9], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-2, 0.34, -2.9], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221 / 0xff,
            157 / 0xff,
            105 / 0xff,
            1,
        ]),
    ]);
}
