import {instantiate} from "../../common/game.js";
import {collide} from "../components/com_collide.js";
import {cull} from "../components/com_cull.js";
import {render_colored_shadows} from "../components/com_render.js";
import {RigidKind, rigid_body} from "../components/com_rigid_body.js";
import {transform} from "../components/com_transform.js";
import {Game, Layer} from "../game.js";
import {Has} from "../world.js";
import {blueprint_player} from "../blueprints/blu_player.js";
import {blueprint_face} from "../blueprints/blu_face.js";

export function map_room1(game: Game) {
    instantiate(game, [
        transform([0, -0.5, 0], undefined, [10, 1, 10]),
        collide(false, Layer.Ground, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            211.38186204009423 / 0xff,
            149.14307866403394 / 0xff,
            103.41486235216583 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-3.8, 0.37, 3.6], undefined, [1.8, 0.35, 2.2]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            211.5121983799912 / 0xff,
            164.08627419128322 / 0xff,
            108.79210782001286 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.39, 0.45, 4.3], undefined, [0.7, 0.5, 0.7]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            217.31566937092657 / 0xff,
            159.881784480034 / 0xff,
            105.49788767689945 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.5, 1, 4.4], undefined, [0.25, 0.2, 0.25]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            227.69253223166325 / 0xff,
            147.41991498941354 / 0xff,
            116.3335649983421 / 0xff,
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
            234.75686490806027 / 0xff,
            142.23070601949337 / 0xff,
            95.49443311675125 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 4.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            210.8445273319966 / 0xff,
            155.17971158435964 / 0xff,
            105.34717032460944 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 4.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            211.7696918175622 / 0xff,
            142.59582131273075 / 0xff,
            99.54512856927484 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 2.8], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            227.00622738457807 / 0xff,
            147.55800844035224 / 0xff,
            90.57788585447102 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 2.8], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            208.96264004101354 / 0xff,
            170.33382579099842 / 0xff,
            105.37582547956768 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.6, 0.1, 4.5], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            230.21235347699547 / 0xff,
            171.2161144255451 / 0xff,
            112.28993131637952 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.2, 0.1, 4.5], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            213.86281353398817 / 0xff,
            151.29104934999904 / 0xff,
            101.95500403170132 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.2, 0.1, 4.1], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            214.87463350262715 / 0xff,
            143.92987528329525 / 0xff,
            115.64927281447517 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.6, 0.1, 4.1], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            229.5035682034709 / 0xff,
            143.39655149046493 / 0xff,
            91.59565260963832 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.8, 1.1, 0.3], undefined, [1.8, 1.73, -0.44]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            221.3548080488702 / 0xff,
            159.27928441827723 / 0xff,
            107.34770721504464 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 0.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            222.47691564469832 / 0xff,
            162.8780920513936 / 0xff,
            96.06877703429656 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 0.2], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            207.4537842970836 / 0xff,
            151.56572090352495 / 0xff,
            109.01681541706384 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 0.2], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            210.08187443203033 / 0xff,
            142.25074902959994 / 0xff,
            112.07346658224577 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 0.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            216.72785579539263 / 0xff,
            161.58132834372043 / 0xff,
            106.91700848915998 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.82, 0.42, 3.27], [0, -0.91, 0, 0.42], [0.72, 0.35, 0.88]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            208.46228265932123 / 0xff,
            147.97709791285695 / 0xff,
            97.50092768120203 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.72, 0.12, 2.93], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            235.15716247359552 / 0xff,
            151.838818021471 / 0xff,
            96.02332089606587 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.46, 0.12, 3.23], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            206.51105520887768 / 0xff,
            142.3560335776035 / 0xff,
            106.19980055944355 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.92, 0.12, 3.62], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            213.11876765190112 / 0xff,
            158.36053540052873 / 0xff,
            110.14017838958864 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.18, 0.12, 3.31], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            211.6229009442033 / 0xff,
            167.02411360403897 / 0xff,
            95.3171748181167 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.65, 0.77, 3.48], [0, -0.91, 0, 0.42], [0.17, 0.35, 0.88]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            211.81408424235525 / 0xff,
            157.011607215628 / 0xff,
            113.61024667959954 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.55, 0.77, 3.04], [0, -0.91, 0, 0.42], [0.72, 0.35, 0.16]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            226.06932455301805 / 0xff,
            160.61192698931546 / 0xff,
            100.3202549019268 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.1, 0.77, 3.51], [0, -0.91, 0, 0.42], [0.72, 0.35, 0.16]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            226.45494582931352 / 0xff,
            169.86985793114596 / 0xff,
            104.2324098131126 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.62, 0.44, 0.25], [0, 0.84, 0, 0.54], [0.72, 0.35, 1.76]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            234.78641979331195 / 0xff,
            150.8386861570277 / 0xff,
            103.38322091364509 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([2.34, 0.14, 0.13], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            227.05135873398675 / 0xff,
            164.53451469160362 / 0xff,
            116.16971853265458 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([2.15, 0.14, -0.28], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            220.04158023355524 / 0xff,
            167.3395740044091 / 0xff,
            114.93861966508142 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.9, 0.14, 0.36], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            231.22864291077863 / 0xff,
            148.2279148581857 / 0xff,
            100.64301868084036 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.05, 0.14, 0.68], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            233.01221062049865 / 0xff,
            171.98909687249002 / 0xff,
            95.03099871140836 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.54, 0.79, 0.06], [0, 0.84, 0, 0.54], [0.17, 0.35, 1.67]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            212.92037080479432 / 0xff,
            146.88283355187957 / 0xff,
            116.93088400279885 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.07, 0.42, 2.28], [0, -0.26, 0, 0.97], [0.72, 0.35, 0.88]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            211.89621779802252 / 0xff,
            143.40284846172514 / 0xff,
            95.56579502537873 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([3.75, 0.12, 2.44], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            227.43340911329722 / 0xff,
            159.79548784145732 / 0xff,
            97.786379055686 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.09, 0.12, 2.64], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            229.9992872445197 / 0xff,
            152.3006440964042 / 0xff,
            101.90141914367175 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.39, 0.12, 2.12], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            223.42587799466764 / 0xff,
            170.45995074005288 / 0xff,
            101.48209344005812 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.05, 0.12, 1.92], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            211.40138151333954 / 0xff,
            164.01636893953747 / 0xff,
            110.7955532437805 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.31, 0.77, 2.42], [0, -0.26, 0, 0.97], [0.17, 0.35, 0.88]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            222.45177791058455 / 0xff,
            171.1203776758028 / 0xff,
            118.95265285463189 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([3.89, 0.77, 2.6], [0, -0.26, 0, 0.97], [0.72, 0.35, 0.16]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            211.644613196167 / 0xff,
            154.2605193356791 / 0xff,
            107.00378818911096 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.25, 0.77, 1.97], [0, -0.26, 0, 0.97], [0.72, 0.35, 0.16]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            216.25097614615478 / 0xff,
            142.17702143476137 / 0xff,
            110.1290487858703 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.1, 0.3, -2.4], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            228.15505036452697 / 0xff,
            146.19807627463732 / 0xff,
            119.79561702276098 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-1.8, 0.64, -2.7], undefined, [1.44, 0.1, 1.44]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            223.39080055561988 / 0xff,
            150.59835078198225 / 0xff,
            100.24707033696357 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-1.5, 0.3, -2.4], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            206.17819210424315 / 0xff,
            160.58002585086902 / 0xff,
            105.27025267814791 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-1.5, 0.3, -3], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            215.58875903955973 / 0xff,
            160.93233100985677 / 0xff,
            119.00633107660987 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.1, 0.3, -3], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            229.74192933418064 / 0xff,
            156.02002200597602 / 0xff,
            90.99884287085209 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.2, 0, 0], [0, -0.04, 0, 1], [0.77, 0.32, 0.19]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            210.55331212840096 / 0xff,
            149.15500739387966 / 0xff,
            90.97531226729558 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0, 0, 1.8], [0, -0.68, 0, 0.74], [0.67, 0.28, 0.17]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            228.0947129908641 / 0xff,
            164.12887179178125 / 0xff,
            109.02880895294976 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([2.8, 0, -2.9], [0, -0.68, 0, 0.74], [0.58, 0.24, 0.14]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            215.83935583278594 / 0xff,
            151.9767469527537 / 0xff,
            94.25064015994997 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.8, 0.05, -3.7], [0.71, -0.03, 0.03, 0.71], [0.1, 0.35, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221.52197202680028 / 0xff,
            167.28940249213707 / 0xff,
            105.28919513065175 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1, 0.05, -3.9], [0.71, 0.03, -0.03, 0.71], [0.1, 0.35, 0.1]),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            227.26616911162864 / 0xff,
            147.601876127876 / 0xff,
            117.49229707065302 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    // Face.
    instantiate(game, [...blueprint_face(game), transform([-3.8, 0.7, 4.1])]);
}
