import {link, Material} from "../common/material.js";
import {GL_TRIANGLES} from "../common/webgl.js";
import {Attribute, ColoredUnlitLayout, ShadowMappingLayout} from "./layout.js";
import {INCLUDE_GAMMA_CORRECTION} from "./light.js";

let vertex = `#version 300 es\n
    uniform mat4 pv;
    uniform mat4 world;

    layout(location=${Attribute.Position}) in vec4 attr_position;

    out vec4 vert_position;

    void main() {
        vert_position = world * attr_position;
        gl_Position = pv * vert_position;
    }
`;

let fragment = `#version 300 es\n
    precision mediump float;
    precision lowp sampler2DShadow;

    uniform vec4 diffuse_color;
    uniform mat4 shadow_space;
    uniform sampler2DShadow shadow_map;

    in vec4 vert_position;

    out vec4 frag_color;

    ${INCLUDE_GAMMA_CORRECTION}

    // How much shadow to apply at world_pos, expressed as [min, 1]:
    // min = completely in shadow, 1 = completely not in shadow
    float shadow_factor(vec4 world_pos, float min) {
        vec4 shadow_space_pos = shadow_space * world_pos;
        vec3 shadow_space_ndc = shadow_space_pos.xyz / shadow_space_pos.w;
        // Transform the [-1, 1] NDC to [0, 1] to match the shadow texture data.
        shadow_space_ndc = shadow_space_ndc * 0.5 + 0.5;

        // Add shadow bias to avoid shadow acne.
        shadow_space_ndc.z -= 0.001;

        return texture(shadow_map, shadow_space_ndc) * (1.0 - min) + min;
    }

    void main() {
        vec3 diffuse_rgb = GAMMA_DECODE(diffuse_color.rgb);
        vec3 shaded_rgb = diffuse_rgb * shadow_factor(vert_position, 0.5);
        frag_color= vec4(GAMMA_ENCODE(shaded_rgb), diffuse_color.a);
    }
`;

export function mat_forward_colored_shadows(
    gl: WebGL2RenderingContext
): Material<ColoredUnlitLayout & ShadowMappingLayout> {
    let program = link(gl, vertex, fragment);
    return {
        Mode: GL_TRIANGLES,
        Program: program,
        Locations: {
            Pv: gl.getUniformLocation(program, "pv")!,
            World: gl.getUniformLocation(program, "world")!,

            Color: gl.getUniformLocation(program, "diffuse_color")!,

            ShadowSpace: gl.getUniformLocation(program, "shadow_space")!,
            ShadowMap: gl.getUniformLocation(program, "shadow_map")!,
        },
    };
}
