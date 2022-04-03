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
            227.44115116451158 / 0xff,
            150.6621629752415 / 0xff,
            107.98410558724281 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-3.8, 0.37, 3.6], undefined, [1.8, 0.35, 2.2]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            233.30550012013873 / 0xff,
            146.68335273918981 / 0xff,
            118.11689661487162 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.39, 0.45, 4.3], undefined, [0.7, 0.5, 0.7]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            229.79882578346314 / 0xff,
            159.39556916812347 / 0xff,
            114.01126233168834 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.5, 1, 4.4], undefined, [0.25, 0.2, 0.25]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            222.13001400406353 / 0xff,
            150.01349999092267 / 0xff,
            119.76447053561014 / 0xff,
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
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            225.98422768546277 / 0xff,
            166.8784631944017 / 0xff,
            111.02101494049461 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 4.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            213.61461671183258 / 0xff,
            163.8997977508755 / 0xff,
            98.13853292828793 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 4.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            212.09416411592994 / 0xff,
            143.21877961437164 / 0xff,
            117.11366360848342 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 2.8], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            227.6297566937122 / 0xff,
            158.75391370287133 / 0xff,
            107.7718471236625 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 2.8], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            225.6943903906118 / 0xff,
            165.61443267436474 / 0xff,
            111.33835974534473 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.6, 0.1, 4.5], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            219.913955816792 / 0xff,
            165.4459472924834 / 0xff,
            115.73654077787062 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.2, 0.1, 4.5], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            223.20200242393392 / 0xff,
            155.30226262342418 / 0xff,
            111.55959009225748 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.2, 0.1, 4.1], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            229.9004566176467 / 0xff,
            167.57667845342715 / 0xff,
            103.40228458778984 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.6, 0.1, 4.1], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            229.33807385378788 / 0xff,
            158.94314652035007 / 0xff,
            115.54387649000768 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.8, 1.1, 0.3], undefined, [1.8, 1.73, -0.44]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            212.58558288646756 / 0xff,
            163.53504968704902 / 0xff,
            105.85602891704984 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 0.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            208.32435633484994 / 0xff,
            169.78913906391443 / 0xff,
            100.74723832204485 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-4.5, 0.1, 0.2], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            213.54539715529384 / 0xff,
            152.2560995750377 / 0xff,
            119.31485627432322 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 0.2], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            229.45531486235956 / 0xff,
            166.75894527431802 / 0xff,
            102.79236124295758 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-3.1, 0.1, 0.4], undefined, [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            213.61231658894417 / 0xff,
            152.3132598176507 / 0xff,
            91.03307269711237 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.82, 0.42, 3.27], [0, -0.91, 0, 0.42], [0.72, 0.35, 0.88]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            221.14819676392784 / 0xff,
            160.54108485826242 / 0xff,
            117.21920358752485 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.72, 0.12, 2.93], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            209.46927435939605 / 0xff,
            146.6775751869698 / 0xff,
            103.86378513982426 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.46, 0.12, 3.23], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            232.15896066584375 / 0xff,
            167.9774462810425 / 0xff,
            102.5622990585871 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.92, 0.12, 3.62], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            208.80389415263176 / 0xff,
            166.5620805768438 / 0xff,
            93.13214682948728 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.18, 0.12, 3.31], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            235.24807738585076 / 0xff,
            160.28299342432464 / 0xff,
            112.00506401686577 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.65, 0.77, 3.48], [0, -0.91, 0, 0.42], [0.17, 0.35, 0.88]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            230.010340876182 / 0xff,
            157.69370132137794 / 0xff,
            118.2101037217461 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.55, 0.77, 3.04], [0, -0.91, 0, 0.42], [0.72, 0.35, 0.16]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            220.02495269193878 / 0xff,
            158.63458839385405 / 0xff,
            106.94402724673363 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.1, 0.77, 3.51], [0, -0.91, 0, 0.42], [0.72, 0.35, 0.16]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            229.87867989003027 / 0xff,
            156.9234073430243 / 0xff,
            112.62580797363057 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.62, 0.44, 0.25], [0, 0.84, 0, 0.54], [0.72, 0.35, 1.76]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            209.08543315321663 / 0xff,
            153.59538170844772 / 0xff,
            102.26716540799892 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([2.34, 0.14, 0.13], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            228.99354007116577 / 0xff,
            168.0992399908073 / 0xff,
            91.9669248110033 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([2.15, 0.14, -0.28], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            229.90416868293437 / 0xff,
            149.06533159327927 / 0xff,
            100.02990114720106 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.9, 0.14, 0.36], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            221.74067927279862 / 0xff,
            158.24231820968714 / 0xff,
            114.1555443814002 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.05, 0.14, 0.68], [0, 0.84, 0, 0.54], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            212.9992297749936 / 0xff,
            154.55837304551133 / 0xff,
            114.27806719767645 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1.54, 0.79, 0.06], [0, 0.84, 0, 0.54], [0.17, 0.35, 1.67]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            206.59129343909862 / 0xff,
            152.8153554950008 / 0xff,
            107.49693201940757 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.07, 0.42, 2.28], [0, -0.26, 0, 0.97], [0.72, 0.35, 0.88]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            211.5041572077033 / 0xff,
            169.96187639018254 / 0xff,
            107.97418480289406 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([3.75, 0.12, 2.44], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            230.28852458566752 / 0xff,
            166.63906711506763 / 0xff,
            108.61748998795146 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.09, 0.12, 2.64], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            232.34047152975864 / 0xff,
            166.71725228624723 / 0xff,
            117.71393490460822 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.39, 0.12, 2.12], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            207.06519180600742 / 0xff,
            156.06161870697707 / 0xff,
            119.00677276913197 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.05, 0.12, 1.92], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            230.56535930613154 / 0xff,
            143.4679414027687 / 0xff,
            110.31838574188042 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.31, 0.77, 2.42], [0, -0.26, 0, 0.97], [0.17, 0.35, 0.88]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            210.14102856112964 / 0xff,
            158.9958107061939 / 0xff,
            94.93196938577249 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([3.89, 0.77, 2.6], [0, -0.26, 0, 0.97], [0.72, 0.35, 0.16]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            217.172515958697 / 0xff,
            149.24090677510776 / 0xff,
            112.39277195468978 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.25, 0.77, 1.97], [0, -0.26, 0, 0.97], [0.72, 0.35, 0.16]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            215.68737655031313 / 0xff,
            171.53949714562475 / 0xff,
            92.54001163523999 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.1, 0.3, -2.4], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            225.2454801898199 / 0xff,
            166.74220652187861 / 0xff,
            118.71862473945232 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-1.8, 0.64, -2.7], undefined, [1.44, 0.1, 1.44]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            231.35553333944102 / 0xff,
            166.1341228887409 / 0xff,
            111.90990931375441 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-1.5, 0.3, -2.4], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            219.57645160794175 / 0xff,
            162.29359480370013 / 0xff,
            111.94239504317781 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-1.5, 0.3, -3], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            233.908060580646 / 0xff,
            167.94341468729547 / 0xff,
            104.92131577893758 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([-2.1, 0.3, -3], undefined, [0.1, 0.58, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            210.9528439034659 / 0xff,
            142.6420683175235 / 0xff,
            103.8312483381007 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([4.2, 0, 0], [0, -0.04, 0, 1], [0.77, 0.32, 0.19]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            212.60779104268948 / 0xff,
            145.32594747685826 / 0xff,
            109.69945030425318 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0, 0, 1.8], [0, -0.68, 0, 0.74], [0.67, 0.28, 0.17]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            232.46855473961745 / 0xff,
            170.69111682863064 / 0xff,
            91.00864690131743 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([2.8, 0, -2.9], [0, -0.68, 0, 0.74], [0.58, 0.24, 0.14]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            227.0459362693753 / 0xff,
            153.7495484554081 / 0xff,
            95.28198473304893 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([0.8, 0.05, -3.7], [0.71, -0.03, 0.03, 0.71], [0.1, 0.35, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            217.205293258806 / 0xff,
            159.713039745567 / 0xff,
            110.7045810308769 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);

    instantiate(game, [
        transform([1, 0.05, -3.9], [0.71, 0.03, -0.03, 0.71], [0.1, 0.35, 0.1]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, [
            222.24515179315756 / 0xff,
            171.6154884441325 / 0xff,
            92.99269951277222 / 0xff,
            1,
        ]),
        cull(Has.Render),
    ]);
}
