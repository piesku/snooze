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
            211.55842399368802 / 0xff,
            154.4841788010452 / 0xff,
            106.86504646275145 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-3.8, 0.37, 3.6], undefined, [1.8, 0.35, 2.2]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            229.98922025004572 / 0xff,
            168.38275373478587 / 0xff,
            93.73885344398931 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-2.39, 0.45, 4.3], undefined, [0.7, 0.5, 0.7]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            215.8522996926908 / 0xff,
            153.5005260590115 / 0xff,
            110.67227312836971 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-2.5, 1, 4.4], undefined, [0.25, 0.2, 0.25]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            214.9682863480201 / 0xff,
            171.9596024017679 / 0xff,
            119.15982948553435 / 0xff,
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
            223.00315804770062 / 0xff,
            153.43371355236215 / 0xff,
            98.0309118144794 / 0xff,
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
        transform([-3.78, 0.42, -1.43], [0, -0.91, 0, 0.42], [0.72, 0.35, 0.88]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            222.21070868232053 / 0xff,
            165.62722168631367 / 0xff,
            97.51898651789699 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-3.88, 0.12, -1.77], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
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
        transform([-4.14, 0.12, -1.47], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
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
        transform([-3.68, 0.12, -1.08], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
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
        transform([-3.42, 0.12, -1.39], [0, -0.91, 0, 0.42], [0.1, 0.24, 0.1]),
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
        transform([-3.95, 0.77, -1.22], [0, -0.91, 0, 0.42], [0.17, 0.35, 0.88]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            234.01405454143094 / 0xff,
            144.23202968275433 / 0xff,
            102.11925246880679 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-4.05, 0.77, -1.66], [0, -0.91, 0, 0.42], [0.72, 0.35, 0.16]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            217.58055575611306 / 0xff,
            160.92737141204034 / 0xff,
            118.76982169438546 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-3.5, 0.77, -1.19], [0, -0.91, 0, 0.42], [0.72, 0.35, 0.16]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            231.34662323473512 / 0xff,
            165.9076729368285 / 0xff,
            101.90086285257922 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-0.95, 0.44, -3], undefined, [0.72, 0.35, 1.76]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            235.45180770284068 / 0xff,
            142.83668685497275 / 0xff,
            94.99481978265536 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([-1.15, 0.14, -2.3], undefined, [0.1, 0.24, 0.1]),
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
        transform([-0.7, 0.14, -2.3], undefined, [0.1, 0.24, 0.1]),
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
        transform([-0.75, 0.14, -3.7], undefined, [0.1, 0.24, 0.1]),
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
        transform([-1.1, 0.14, -3.7], undefined, [0.1, 0.24, 0.1]),
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
        transform([-0.75, 0.79, -3], undefined, [0.17, 0.35, 1.67]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            231.53179724685043 / 0xff,
            152.71231600122385 / 0xff,
            115.08451341745015 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([4.01, 0.42, 3.98], [0, -0.26, 0, 0.97], [0.72, 0.35, 0.88]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            215.18957625127624 / 0xff,
            168.07956627745668 / 0xff,
            119.89649333042982 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([3.68, 0.12, 4.14], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
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
        transform([4.03, 0.12, 4.34], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
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
        transform([4.33, 0.12, 3.82], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
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
        transform([3.98, 0.12, 3.62], [0, -0.26, 0, 0.97], [0.1, 0.24, 0.1]),
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
        transform([4.24, 0.77, 4.12], [0, -0.26, 0, 0.97], [0.17, 0.35, 0.88]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            222.74321300529925 / 0xff,
            167.08738275497137 / 0xff,
            112.63258195251284 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([3.83, 0.77, 4.3], [0, -0.26, 0, 0.97], [0.72, 0.35, 0.16]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            222.76606152422698 / 0xff,
            156.0891440311161 / 0xff,
            114.08390603968598 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([4.19, 0.77, 3.67], [0, -0.26, 0, 0.97], [0.72, 0.35, 0.16]),
        collide(false, Layer.Terrain, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, [
            208.0193909740069 / 0xff,
            165.2335201696054 / 0xff,
            105.2285218407453 / 0xff,
            1,
        ]),
    ]);

    instantiate(game, [
        transform([2.5, 0.28, -2.5], undefined, [0.1, 0.58, 0.1]),
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
        transform([2.7, 0.6, -2.7], undefined, [1.44, 0.1, 1.44]),
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
        transform([2.9, 0.3, -2.5], undefined, [0.1, 0.58, 0.1]),
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
        transform([2.9, 0.3, -2.9], undefined, [0.1, 0.58, 0.1]),
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
        transform([2.5, 0.3, -2.9], undefined, [0.1, 0.58, 0.1]),
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
