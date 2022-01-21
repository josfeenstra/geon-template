
import {App, Camera, DebugRenderer, DrawSpeed, InputHandler, InputState, LineShader, MultiLine, MultiVector3, Parameter, Plane, Scene, UI, Vector3} from "Geon";

export class TemplateApp extends App {

    // render
    scene: Scene;
    mr: DebugRenderer;
    gs: LineShader;

    constructor(gl: WebGLRenderingContext) {
        super(gl);
        
        let canvas = gl.canvas as HTMLCanvasElement;
        let camera = new Camera(canvas, 10, true, true);
        
        this.scene = new Scene(camera);
        this.gs = new LineShader(gl, [0.3, 0.3, 0.3, 1]);
        this.mr = DebugRenderer.new(gl);
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
    }

    update(input: InputHandler) {
        this.scene.camera.update(input);
    }

    draw() {
        this.gs.render(this.scene);
        this.mr.render(this.scene);
    }
}
