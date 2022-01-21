
import {App, Camera, DebugRenderer, DrawSpeed, InputHandler, InputState, LineShader, Mesh, MultiLine, MultiVector3, Parameter, Plane, Scene, UI, Vector3} from "Geon";

export class TemplateApp extends App {

    // render
    scene: Scene; // a scene is a simple collection of lights, the sun, and a camera. This is what we will feed to shaders at render time
    gs: LineShader; // an abstract shader. The 'set' method shows what it needs to fill its buffers. This one requires a 'MultiLine'. 
    debug: DebugRenderer; // this is a collection of shaders, automatically created to quickly debug things. This is not the most efficient in the world, so please, use it only for debugging :).

    constructor(gl: WebGLRenderingContext) {
        super(gl);
        
        let canvas = gl.canvas as HTMLCanvasElement;
        let camera = new Camera(canvas, 10, true, true);
        
        this.scene = new Scene(camera);
        this.gs = new LineShader(gl, [0.3, 0.3, 0.3, 1]);
        this.debug = DebugRenderer.new(gl);
    }

    start() {
        this.startGrid();

        // create something!
    }

    ui(ui: UI) {
        ui.addText("hello, world!");
    }

    startGrid() {
        let grid = MultiLine.fromGrid(Plane.WorldXY().moveTo(new Vector3(0, 0, -1)), 100, 2);
        this.gs.set(grid, DrawSpeed.StaticDraw);

        this.debug.set(Mesh.newCylinder(Vector3.new(0,0,0), Vector3.new(0,0,1), 1, 20), "unit");
    }

    update(input: InputHandler) {
        this.scene.camera.update(input);
    }

    draw() {
        this.gs.render(this.scene);
        this.debug.render(this.scene);
    }
}
