import {instantiate} from "../../common/game.js";
import {collide} from "../components/com_collide.js";
import {cull} from "../components/com_cull.js";
import {render_colored_shadows} from "../components/com_render.js";
import {RigidKind, rigid_body} from "../components/com_rigid_body.js";
import {transform} from "../components/com_transform.js";
import {Game, Layer} from "../game.js";
import {Has} from "../world.js";
import {blueprint_player} from "../blueprints/blu_player.js";

export function map_room1(game: Game) {
    instantiate(game, [
        transform([0, -0.5, 0], undefined, [10, 1, 10]),
        collide(false, Layer.Ground, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            220.33540646578794 / 0xff,
            149.86492542673435 / 0xff,
            110.80369782834373 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-3.8, 0.37, 3.6], undefined, [1.8, 0.35, 2.2]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            232.53188967594485 / 0xff,
            149.3190561344204 / 0xff,
            90.63739961090191 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.39, 0.45, 4.3], undefined, [0.7, 0.5, 0.7]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            208.9535095699667 / 0xff,
            171.35784304637767 / 0xff,
            106.57078540190355 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.5, 1, 4.4], undefined, [0.25, 0.2, 0.25]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            232.81848016427406 / 0xff,
            147.14636251607305 / 0xff,
            111.5921883580646 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    // Player.
    instantiate(game, [
        ...blueprint_player(game),
        transform([-2.2, 1, 4.2], [0, 1, 0, 0], [0.05, 0.05, 0.05]),
    ]);

    instantiate(game, [
        transform([-2.5, 0.8, 4.4], undefined, [0.1, 0.2, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            219.40591984535484 / 0xff,
            147.2128728623924 / 0xff,
            104.69397832857665 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 4.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            217.88955380249016 / 0xff,
            159.35001759755755 / 0xff,
            91.59965868390317 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 4.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            233.67532035956708 / 0xff,
            149.25986669517786 / 0xff,
            114.07919208479531 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 2.8], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            231.08158380005548 / 0xff,
            165.2760090829908 / 0xff,
            96.27450279526394 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 2.8], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            206.84606511768433 / 0xff,
            145.82612492071263 / 0xff,
            94.98255390353167 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.6, 0.1, 4.5], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            225.38859350028463 / 0xff,
            149.69047906170266 / 0xff,
            112.7790468376937 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.2, 0.1, 4.5], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            211.54458263193496 / 0xff,
            146.38995283469723 / 0xff,
            119.27510602344289 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.2, 0.1, 4.1], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            225.0772956390963 / 0xff,
            156.08153344690837 / 0xff,
            115.98766217659087 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.6, 0.1, 4.1], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            222.16021694689937 / 0xff,
            161.54927664662665 / 0xff,
            119.98509698903383 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.8, 1.1, 0.3], undefined, [1.8, 1.73, -0.44]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            221.85218740094018 / 0xff,
            143.94530751575144 / 0xff,
            107.86600492417817 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 0.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            206.08534264296247 / 0xff,
            149.61368219107257 / 0xff,
            116.99237697886869 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 0.2], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            220.08612085437926 / 0xff,
            159.71930230763283 / 0xff,
            109.73930339510883 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 0.2], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            210.49664150973882 / 0xff,
            164.8467963942195 / 0xff,
            95.17013234140833 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 0.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            209.58104564802622 / 0xff,
            160.45545299243065 / 0xff,
            96.43734708119524 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.82, 0.42, 3.27], [0, -0.91, 0, 0.42], [0.72, 0.35, 0.88]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            232.215433312804 / 0xff,
            148.62663276081005 / 0xff,
            119.2838685054905 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.72, 0.12, 2.93], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            234.63040044787328 / 0xff,
            171.73819114920303 / 0xff,
            97.85669550237087 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.46, 0.12, 3.23], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            232.2121142640318 / 0xff,
            163.82610088866267 / 0xff,
            105.94662640483286 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.92, 0.12, 3.62], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            213.07227369481316 / 0xff,
            163.51937842686863 / 0xff,
            101.21161142628681 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.18, 0.12, 3.31], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            218.25188554038513 / 0xff,
            153.75002572211105 / 0xff,
            99.94308237073996 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.65, 0.77, 3.48], [0, -0.91, 0, 0.42], [0.17, 0.35, 0.88]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            210.7637036847372 / 0xff,
            158.21243701524534 / 0xff,
            118.1653666121534 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.55, 0.77, 3.04], [0, -0.91, 0, 0.42], [0.72, 0.35, 0.16]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            228.3241893085327 / 0xff,
            154.32489402004427 / 0xff,
            115.13230563814355 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.1, 0.77, 3.51], [0, -0.91, 0, 0.42], [0.72, 0.35, 0.16]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            209.18564763931147 / 0xff,
            145.8366279456455 / 0xff,
            100.95306301809578 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.62, 0.44, 0.25], [0, 0.84, 0, 0.54], [0.72, 0.35, 1.76]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            224.7211461650418 / 0xff,
            168.49865553704902 / 0xff,
            112.20078260654023 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([2.34, 0.14, 0.13], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            225.56861725402965 / 0xff,
            151.28063749450826 / 0xff,
            100.2379980482981 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([2.15, 0.14, -0.28], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            208.86155581516724 / 0xff,
            142.97112874729285 / 0xff,
            97.92210934292318 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.9, 0.14, 0.36], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            216.5580690008665 / 0xff,
            171.61561761648204 / 0xff,
            114.77545902773608 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.05, 0.14, 0.68], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            211.00083215761867 / 0xff,
            153.92157010302734 / 0xff,
            118.84687801705194 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.54, 0.79, 0.06], [0, 0.84, 0, 0.54], [0.17, 0.35, 1.67]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            223.05576303553082 / 0xff,
            152.05645703218127 / 0xff,
            118.83128713391262 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.07, 0.42, 2.28], [0, -0.26, 0, 0.97], [0.72, 0.35, 0.88]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            220.24078054249912 / 0xff,
            143.68311658135474 / 0xff,
            99.93426968031437 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([3.75, 0.12, 2.44], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            212.94237726241798 / 0xff,
            154.46732958041991 / 0xff,
            113.65107034166796 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.09, 0.12, 2.64], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            208.19525107703 / 0xff,
            160.7611167986247 / 0xff,
            112.31335061783062 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.39, 0.12, 2.12], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            211.45804568875445 / 0xff,
            154.84035679062595 / 0xff,
            106.92358669945298 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.05, 0.12, 1.92], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            210.71502245078736 / 0xff,
            160.30110600900306 / 0xff,
            91.83624649051752 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.31, 0.77, 2.42], [0, -0.26, 0, 0.97], [0.17, 0.35, 0.88]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            220.78810165579867 / 0xff,
            165.5562314549221 / 0xff,
            118.96109193652936 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([3.89, 0.77, 2.6], [0, -0.26, 0, 0.97], [0.72, 0.35, 0.16]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            208.7674323190534 / 0xff,
            165.63080201345443 / 0xff,
            115.35876283007606 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.25, 0.77, 1.97], [0, -0.26, 0, 0.97], [0.72, 0.35, 0.16]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            222.6447041900238 / 0xff,
            151.94629625073702 / 0xff,
            90.36814159433844 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.1, 0.3, -2.4], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            218.62393916710312 / 0xff,
            142.6765297429534 / 0xff,
            114.9715187505891 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-1.8, 0.64, -2.7], undefined, [1.44, 0.1, 1.44]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            210.436369981229 / 0xff,
            167.4373556263137 / 0xff,
            92.07896206708004 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-1.5, 0.3, -2.4], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            232.87380378132235 / 0xff,
            162.95066764610988 / 0xff,
            116.02637410376502 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-1.5, 0.3, -3], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            222.77095950746943 / 0xff,
            169.31705326679236 / 0xff,
            95.91679691076777 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.1, 0.3, -3], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            212.9955332695047 / 0xff,
            168.66887849159144 / 0xff,
            103.8157964187596 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.2, 0, 0], [0, -0.04, 0, 1], [0.77, 0.32, 0.19]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            232.49345679762544 / 0xff,
            164.81385898622008 / 0xff,
            102.85386908430965 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0, 0, 1.8], [0, -0.68, 0, 0.74], [0.67, 0.28, 0.17]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            217.1237214030398 / 0xff,
            168.9221323961267 / 0xff,
            107.02774345104989 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([2.8, 0, -2.9], [0, -0.68, 0, 0.74], [0.58, 0.24, 0.14]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            227.6386561329728 / 0xff,
            150.61268536071347 / 0xff,
            91.15779865847749 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.8, 0.05, -3.7], [0.71, -0.03, 0.03, 0.71], [0.1, 0.35, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            217.22135086967927 / 0xff,
            148.98881898325567 / 0xff,
            90.9168984511547 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1, 0.05, -3.9], [0.71, 0.03, -0.03, 0.71], [0.1, 0.35, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            218.8581821422571 / 0xff,
            165.1981957650794 / 0xff,
            116.16465019581092 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);
}
