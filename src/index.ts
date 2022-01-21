// Name:    index.ts
// Author:  Jos Feenstra
// Purpose: Entry point

import {Core, FpsCounter, HelpGl, SwapApp} from "Geon"
import { TemplateApp } from "./TemplateApp";

function main() {
    // get references of all items on the canvas
    let canvas = document.getElementById("canvas")! as HTMLCanvasElement;
    let ui = document.getElementById("interface") as HTMLDivElement;

    // init core
    let gl = HelpGl.initWebglContext(canvas)!;
    let core = new Core(canvas, gl, ui);

    //@ts-ignore
    window.core = core;

    let app = new TemplateApp(gl);
    core.addApp(app);

    // time
    let accumulated = 0;
    let counter = FpsCounter.new();

    // infinite loop
    function loop(elapsed: number) {
        let dt = elapsed - accumulated;
        accumulated = elapsed;

        counter._update(dt);
        document.title = "fps: " + counter.getFps();

        core.update(dt);
        core.draw();
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
}

window.addEventListener("load", main, false);
