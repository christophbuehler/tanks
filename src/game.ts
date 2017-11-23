import { Landscape } from './landscape';
import { LargeBombMissile } from './missiles/large-bomb-missile';
import { Missile } from './missiles/missile';
import { V2 } from './v2';

export class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private landscape: Landscape;
    private missiles: Missile[] = [];

    constructor() {
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.adjustSize();
        this.paint();
        this.update();

        do {
            this.launch(new LargeBombMissile(
                new V2(Math.random() * 400, Math.random() * 140 + 200),
                new V2(Math.random() * 4, Math.random() * 4)));
        } while(Math.random() < .8);
    }

    launch(missile: Missile): void {
        this.missiles.push(missile);
    }

    private update(): void {
        this.missiles.forEach(m => m.update(this.landscape));
        setTimeout(this.update.bind(this), 20);
    }

    private paint(): void {
        this.landscape.paint(this.ctx);
        this.missiles.forEach(m => m.paint(this.ctx));
        window.requestAnimationFrame(this.paint.bind(this));
    }

    private adjustSize(): void {
        const rect: ClientRect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        this.landscape = new Landscape(Math.random(), new V2(rect.width, rect.height));

        // flip the y axis
        this.ctx.transform(1, 0, 0, -1, 0, rect.height);
    }
}