import {Mesh} from "../common/mesh.js";
import {
    GL_ARRAY_BUFFER,
    GL_ELEMENT_ARRAY_BUFFER,
    GL_FLOAT,
    GL_STATIC_DRAW,
} from "../common/webgl.js";
import {Attribute} from "../materials/layout.js";

export function mesh_cylinder(gl: WebGL2RenderingContext): Mesh {
    let vao = gl.createVertexArray()!;
    gl.bindVertexArray(vao);

    let vertex_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, vertex_buf);
    gl.bufferData(GL_ARRAY_BUFFER, vertex_arr, GL_STATIC_DRAW);
    gl.enableVertexAttribArray(Attribute.Position);
    gl.vertexAttribPointer(Attribute.Position, 3, GL_FLOAT, false, 0, 0);

    let normal_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, normal_buf);
    gl.bufferData(GL_ARRAY_BUFFER, normal_arr, GL_STATIC_DRAW);
    gl.enableVertexAttribArray(Attribute.Normal);
    gl.vertexAttribPointer(Attribute.Normal, 3, GL_FLOAT, false, 0, 0);

    let texcoord_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, texcoord_buf);
    gl.bufferData(GL_ARRAY_BUFFER, texcoord_arr, GL_STATIC_DRAW);
    gl.enableVertexAttribArray(Attribute.TexCoord);
    gl.vertexAttribPointer(Attribute.TexCoord, 2, GL_FLOAT, false, 0, 0);

    let weights_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, weights_buf);
    gl.bufferData(GL_ARRAY_BUFFER, weights_arr, GL_STATIC_DRAW);
    gl.enableVertexAttribArray(Attribute.Weights);
    gl.vertexAttribPointer(Attribute.Weights, 4, GL_FLOAT, false, 0, 0);

    let index_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, index_buf);
    gl.bufferData(GL_ELEMENT_ARRAY_BUFFER, index_arr, GL_STATIC_DRAW);

    gl.bindVertexArray(null);

    return {
        Vao: vao,
        VertexBuffer: vertex_buf,
        VertexArray: vertex_arr,
        NormalBuffer: normal_buf,
        NormalArray: normal_arr,
        TexCoordBuffer: texcoord_buf,
        TexCoordArray: texcoord_arr,
        WeightsBuffer: weights_buf,
        WeightsArray: weights_arr,
        IndexBuffer: index_buf,
        IndexArray: index_arr,
        IndexCount: index_arr.length,
    };
}

// prettier-ignore
let vertex_arr = Float32Array.from([
    0.0000, -0.5000, -0.5000,
    0.0000, 0.5000, -0.5000,
    0.3536, -0.5000, -0.3536,
    0.3536, 0.5000, -0.3536,
    0.5000, -0.5000, 0.0000,
    0.5000, 0.5000, 0.0000,
    0.3536, -0.5000, 0.3536,
    0.3536, 0.5000, 0.3536,
    -0.0000, -0.5000, 0.5000,
    -0.0000, 0.5000, 0.5000,
    -0.3536, -0.5000, 0.3536,
    -0.3536, 0.5000, 0.3536,
    -0.5000, -0.5000, -0.0000,
    -0.5000, 0.5000, -0.0000,
    -0.3536, -0.5000, -0.3536,
    -0.3536, 0.5000, -0.3536
]);

// prettier-ignore
let normal_arr = Float32Array.from([
    0.0000, -0.6302, -0.7764,
    0.0000, 0.6302, -0.7764,
    0.5490, -0.6302, -0.5490,
    0.5490, 0.6302, -0.5490,
    0.7764, -0.6302, 0.0000,
    0.7764, 0.6302, 0.0000,
    0.5490, -0.6302, 0.5490,
    0.5490, 0.6302, 0.5490,
    0.0000, -0.6302, 0.7764,
    0.0000, 0.6302, 0.7764,
    -0.5490, -0.6302, 0.5490,
    -0.5490, 0.6302, 0.5490,
    -0.7764, -0.6302, 0.0000,
    -0.7764, 0.6302, 0.0000,
    -0.5490, -0.6302, -0.5490,
    -0.5490, 0.6302, -0.5490
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([]);

// prettier-ignore
let weights_arr = Float32Array.from([]);

// prettier-ignore
let index_arr = Uint16Array.from([
    14, 10, 6,
    6, 2, 14,
    14, 12, 10,
    10, 8, 6,
    6, 4, 2,
    2, 0, 14,
    0, 1, 14,
    1, 15, 14,
    14, 15, 12,
    15, 13, 12,
    5, 9, 13,
    13, 1, 5,
    5, 7, 9,
    9, 11, 13,
    13, 15, 1,
    1, 3, 5,
    12, 13, 10,
    13, 11, 10,
    10, 11, 8,
    11, 9, 8,
    8, 9, 6,
    9, 7, 6,
    6, 7, 4,
    7, 5, 4,
    4, 5, 2,
    5, 3, 2,
    2, 3, 0,
    3, 1, 0
]);
