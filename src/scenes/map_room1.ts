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
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            226.62646581132924 / 0xff,
            145.25775671274022 / 0xff,
            98.86691049296672 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-3.8, 0.37, 3.6], undefined, [1.8, 0.35, 2.2]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            216.27764569735177 / 0xff,
            164.83714605924766 / 0xff,
            104.07544586774654 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.39, 0.45, 4.3], undefined, [0.7, 0.5, 0.7]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            233.79042962728573 / 0xff,
            154.14553218261744 / 0xff,
            95.41397682431324 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.5, 1, 4.4], undefined, [0.25, 0.2, 0.25]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            219.2067223426168 / 0xff,
            151.7062386803476 / 0xff,
            114.326444612209 / 0xff,
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
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            233.48768020126457 / 0xff,
            142.73688198802338 / 0xff,
            94.39508480874281 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 4.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            207.02610290565715 / 0xff,
            149.39101673919802 / 0xff,
            90.0705893611105 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 4.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            209.3046787007104 / 0xff,
            158.90019684775265 / 0xff,
            115.59982301389691 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 2.8], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            229.70795071181212 / 0xff,
            142.1602568671378 / 0xff,
            109.52986632075928 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 2.8], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            207.38724806047017 / 0xff,
            165.27318223065174 / 0xff,
            92.55051557742689 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.6, 0.1, 4.5], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            212.53992972215684 / 0xff,
            148.58116496374274 / 0xff,
            98.30445630333128 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.2, 0.1, 4.5], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            207.97987233379928 / 0xff,
            156.3263012422623 / 0xff,
            93.13637652064496 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.2, 0.1, 4.1], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            226.17053651547684 / 0xff,
            150.3084891023513 / 0xff,
            91.34806351933736 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.6, 0.1, 4.1], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            232.2341484064215 / 0xff,
            148.81483482681466 / 0xff,
            100.22400748126843 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.8, 1.1, 0.3], undefined, [1.8, 1.73, -0.44]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            224.95515608857048 / 0xff,
            159.74149077388518 / 0xff,
            116.50111495285759 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 0.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            227.04064146236976 / 0xff,
            157.1825254429045 / 0xff,
            102.74025810927192 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 0.2], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            216.3861917592639 / 0xff,
            164.40657166311453 / 0xff,
            95.31064078340009 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 0.2], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            213.95010621253897 / 0xff,
            147.16907188951575 / 0xff,
            112.82002214490126 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 0.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            221.69659621462856 / 0xff,
            156.5801349793491 / 0xff,
            94.18651289495395 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.82, 0.42, 3.27], [0, -0.91, 0, 0.42], [0.72, 0.35, 0.88]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            228.86900262756356 / 0xff,
            148.49312678678342 / 0xff,
            94.89891480907922 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.72, 0.12, 2.93], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            218.14769770926006 / 0xff,
            164.21705539070715 / 0xff,
            91.89768715832791 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.46, 0.12, 3.23], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            224.92828123825666 / 0xff,
            146.29167955887925 / 0xff,
            119.11896403943898 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.92, 0.12, 3.62], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            221.75904138318518 / 0xff,
            154.23083655821713 / 0xff,
            96.76538442840437 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.18, 0.12, 3.31], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            231.8915908971943 / 0xff,
            150.035353299085 / 0xff,
            92.54884083232797 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.65, 0.77, 3.48], [0, -0.91, 0, 0.42], [0.17, 0.35, 0.88]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            226.93073209456773 / 0xff,
            157.9892565640609 / 0xff,
            107.54535443134165 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.55, 0.77, 3.04], [0, -0.91, 0, 0.42], [0.72, 0.35, 0.16]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            206.70274267642347 / 0xff,
            146.1604520163499 / 0xff,
            111.1691149723218 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.1, 0.77, 3.51], [0, -0.91, 0, 0.42], [0.72, 0.35, 0.16]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            214.71283006140735 / 0xff,
            160.33789247819863 / 0xff,
            110.78414584704842 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.62, 0.44, 0.25], [0, 0.84, 0, 0.54], [0.72, 0.35, 1.76]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            231.26055447778316 / 0xff,
            155.27862295699694 / 0xff,
            93.79924723879547 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([2.34, 0.14, 0.13], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            209.84276310817796 / 0xff,
            146.912294726208 / 0xff,
            93.18544889882318 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([2.15, 0.14, -0.28], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            224.6803222117202 / 0xff,
            143.83913188014708 / 0xff,
            98.89307089905208 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.9, 0.14, 0.36], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            233.37688068964582 / 0xff,
            148.21770951111674 / 0xff,
            112.944188555918 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.05, 0.14, 0.68], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            218.45569447825093 / 0xff,
            156.01233148856812 / 0xff,
            103.38196791592907 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.54, 0.79, 0.06], [0, 0.84, 0, 0.54], [0.17, 0.35, 1.67]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            229.27426348654686 / 0xff,
            163.26394870481786 / 0xff,
            110.19495918976415 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.07, 0.42, 2.28], [0, -0.26, 0, 0.97], [0.72, 0.35, 0.88]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            221.16258333251602 / 0xff,
            168.43145251181443 / 0xff,
            94.05211422340523 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([3.75, 0.12, 2.44], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            224.17422393762843 / 0xff,
            164.77416998277533 / 0xff,
            95.65608648134514 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.09, 0.12, 2.64], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            224.54934366926557 / 0xff,
            150.92589050524882 / 0xff,
            118.91696385056301 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.39, 0.12, 2.12], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            211.3031334605731 / 0xff,
            148.0242053621933 / 0xff,
            100.88263843618266 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.05, 0.12, 1.92], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            230.4415429114464 / 0xff,
            167.77589395995358 / 0xff,
            92.14503442626375 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.31, 0.77, 2.42], [0, -0.26, 0, 0.97], [0.17, 0.35, 0.88]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            226.9061723371245 / 0xff,
            158.61748354186756 / 0xff,
            117.28518548644564 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([3.89, 0.77, 2.6], [0, -0.26, 0, 0.97], [0.72, 0.35, 0.16]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            230.97814186254007 / 0xff,
            155.8986753032226 / 0xff,
            107.69683673144151 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.25, 0.77, 1.97], [0, -0.26, 0, 0.97], [0.72, 0.35, 0.16]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            208.59742963639312 / 0xff,
            157.83135613508355 / 0xff,
            95.74819431054637 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2, 0.32, -2.5], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            227.8711866724623 / 0xff,
            160.03703333630705 / 0xff,
            102.5268290798797 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-1.8, 0.64, -2.7], undefined, [1.44, 0.1, 1.44]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            222.60563645980002 / 0xff,
            161.402771928834 / 0xff,
            103.12917474878878 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-1.6, 0.34, -2.5], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            207.16378138481082 / 0xff,
            154.09318680928186 / 0xff,
            110.71820183307588 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-1.6, 0.34, -2.9], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            220.7597707416725 / 0xff,
            146.85645374686317 / 0xff,
            97.52370744051026 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2, 0.34, -2.9], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            209.42412038445823 / 0xff,
            163.59585915406558 / 0xff,
            93.56446527553005 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);
}
