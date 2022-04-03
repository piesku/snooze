#!/usr/bin/env node

const {readFileSync} = require("fs");

if (process.argv.length !== 3) {
    console.error("Provide a GLTF file on stdin and the name of the scene:");
    console.error("  cat foo.gltf | node gltf2map.cjs foo");
    process.exit(1);
}

function float(min = 0, max = 1) {
    return Math.random() * (max - min) + min;
}

process.stdin.resume();
let json = readFileSync(process.stdin.fd, "utf8");
process.stdin.pause();

let scene_name = process.argv[2]
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

let vec = (arr) =>
    arr ? "[" + arr.map((v) => parseFloat(v.toFixed(2))).join(", ") + "]" : "undefined";

let imports = new Set([
    'import {instantiate} from "../../common/game.js";',
    'import {collide} from "../components/com_collide.js";',
    'import {cull} from "../components/com_cull.js";',
    'import {render_colored_shadows} from "../components/com_render.js";',
    'import {RigidKind, rigid_body} from "../components/com_rigid_body.js";',
    'import {transform} from "../components/com_transform.js";',
    'import {Game, Layer} from "../game.js";',
    'import {Has} from "../world.js";',
]);

function color(r, g, b) {
    let m = 15;
    return `[
            ${float(r - m, r + m)} / 0xff,
            ${float(g - m, g + m)} / 0xff,
            ${float(b - m, b + m)} / 0xff,
            1
        ]`;
}

let create_instance = (name, translation, rotation, scale) => {
    switch (name) {
        case "player":
            imports.add('import {blueprint_player} from "../blueprints/blu_player.js";');
            return `
    // Player.
    instantiate(game, [
        ...blueprint_player(game),
        transform(${vec(translation)}, [0, 1, 0, 0], [0.05, 0.05, 0.05]),
    ]);`;
        case "face":
            imports.add('import {blueprint_face} from "../blueprints/blu_face.js";');
            return `
    // Face.
    instantiate(game, [
        ...blueprint_face(game),
        transform(${vec(translation)}),
    ]);`;
        case "floor":
            return `
    instantiate(game, [
        transform(${vec(translation)}, ${vec(rotation)}, ${vec(scale)}),
        collide(false, Layer.Ground, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, ${color(221, 157, 105)}),
    ]);`;
        case "cube":
            return `
    instantiate(game, [
        transform(${vec(translation)}, ${vec(rotation)}, ${vec(scale)}),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCube, ${color(221, 157, 105)}),
        cull(Has.Render),
    ]);`;
        case "cylinder":
            return `
    instantiate(game, [
        transform(${vec(translation)}, ${vec(rotation)}, ${vec(scale)}),
        collide(false, Layer.Obstacle, Layer.None),
        rigid_body(RigidKind.Static),
        render_colored_shadows(game.MaterialColoredShadows, game.MeshCylinder, ${color(
            221,
            157,
            105
        )}),
        cull(Has.Render),
    ]);`;
        default:
            throw new Error("Unknown object: " + name);
    }
};

let gltf = JSON.parse(json);
let nodes = gltf.nodes
    .map((node) =>
        create_instance(
            node.name.toLowerCase().split(".")[0],
            node.translation,
            node.rotation,
            node.scale
        )
    )
    .join("\n");

let result = `\
${Array.from(imports).join("\n")}

export function map_${scene_name}(game: Game) {
${nodes}
}`;

console.log(result);
