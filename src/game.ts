import {create_depth_target, RenderTarget} from "../common/framebuffer.js";
import {Game3D} from "../common/game.js";
import {MAX_FORWARD_LIGHTS} from "../materials/light.js";
import {mat_forward_colored_shadows} from "../materials/mat_forward_colored_shadows.js";
import {mat_forward_colored_wireframe} from "../materials/mat_forward_colored_unlit.js";
import {mat_forward_depth} from "../materials/mat_forward_depth.js";
import {mat_forward_particles_colored} from "../materials/mat_forward_particles_colored.js";
import {mesh_body} from "../meshes/body.js";
import {mesh_cube} from "../meshes/cube.js";
import {mesh_cylinder} from "../meshes/cylinder.js";
import {mesh_hand} from "../meshes/hand.js";
import {mesh_note} from "../meshes/note.js";
import {mesh_wheel} from "../meshes/wheel.js";
import {sys_animate} from "./systems/sys_animate.js";
import {sys_camera} from "./systems/sys_camera.js";
import {sys_collide} from "./systems/sys_collide.js";
import {sys_control_always} from "./systems/sys_control_always.js";
import {sys_control_jump} from "./systems/sys_control_jump.js";
import {sys_control_keyboard} from "./systems/sys_control_keyboard.js";
import {sys_control_touch_move} from "./systems/sys_control_touch_move.js";
import {sys_cull} from "./systems/sys_cull.js";
import {sys_debug} from "./systems/sys_debug.js";
import {sys_lifespan} from "./systems/sys_lifespan.js";
import {sys_mimic} from "./systems/sys_mimic.js";
import {sys_move} from "./systems/sys_move.js";
import {sys_physics_integrate} from "./systems/sys_physics_integrate.js";
import {sys_physics_kinematic} from "./systems/sys_physics_kinematic.js";
import {sys_physics_resolve} from "./systems/sys_physics_resolve.js";
import {sys_poll} from "./systems/sys_poll.js";
import {sys_render_depth} from "./systems/sys_render_depth.js";
import {sys_render_forward} from "./systems/sys_render_forward.js";
import {sys_resize} from "./systems/sys_resize.js";
import {sys_shake} from "./systems/sys_shake.js";
import {sys_spawn} from "./systems/sys_spawn.js";
import {sys_toggle} from "./systems/sys_toggle.js";
import {sys_transform} from "./systems/sys_transform.js";
import {sys_trigger} from "./systems/sys_trigger.js";
import {sys_ui} from "./systems/sys_ui.js";
import {World} from "./world.js";

export class Game extends Game3D {
    World = new World();

    MaterialWireframe = mat_forward_colored_wireframe(this.Gl);
    MaterialColoredShadows = mat_forward_colored_shadows(this.Gl);
    MaterialParticlesColored = mat_forward_particles_colored(this.Gl);
    MaterialDepth = mat_forward_depth(this.Gl);

    MeshCube = mesh_cube(this.Gl);
    MeshCylinder = mesh_cylinder(this.Gl);
    MeshBody = mesh_body(this.Gl);
    MeshWheel = mesh_wheel(this.Gl);
    MeshHand = mesh_hand(this.Gl);
    MeshNote = mesh_note(this.Gl);

    LightPositions = new Float32Array(4 * MAX_FORWARD_LIGHTS);
    LightDetails = new Float32Array(4 * MAX_FORWARD_LIGHTS);

    override Targets: {
        [k: string]: RenderTarget;
    } = {
        Sun: create_depth_target(this.Gl, 4096, 4096),
    };

    PlayState: "title" | "playing" | "win" | "lose" = "title";

    Sleepiness = 3;
    DistanceTraveled = 0;
    PlatformsTraveled = 0;

    override FixedUpdate(delta: number) {
        // Collisions and physics.
        sys_physics_integrate(this, delta);
        sys_transform(this, delta);
        sys_physics_kinematic(this, delta);
        sys_collide(this, delta);
        sys_physics_resolve(this, delta);
        sys_transform(this, delta);
        sys_trigger(this, delta);
    }

    override FrameUpdate(delta: number) {
        // Event loop.
        sys_poll(this, delta);

        // Camera.
        sys_resize(this, delta);
        sys_camera(this, delta);
        sys_cull(this, delta);

        // AI.
        sys_control_always(this, delta);

        // Player input.
        sys_control_keyboard(this, delta);
        sys_control_jump(this, delta);
        sys_control_touch_move(this, delta);

        // Game logic.
        sys_animate(this, delta);
        sys_move(this, delta);
        sys_mimic(this, delta);
        sys_lifespan(this, delta);
        sys_shake(this, delta);
        sys_toggle(this, delta);
        sys_spawn(this, delta);

        if (false) {
            sys_debug(this, delta);
        }

        // Commit.
        sys_transform(this, delta);

        // Rendering.
        sys_render_depth(this, delta);
        sys_render_forward(this, delta);
        sys_ui(this, delta);
    }
}

export const enum Layer {
    None = 0,
    Player = 1,
    Ground = 2,
    Obstacle = 4,
    Collectable = 8,
}
