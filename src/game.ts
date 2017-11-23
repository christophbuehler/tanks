import { Landscape } from './landscape';
import { LargeBombMissile } from './missiles/large-bomb-missile';
import { Missile } from './missiles/missile';
import { V2 } from './v2';
import { Player } from './player';

export class Game {
    private ctx: CanvasRenderingContext2D;
    private landscape: Landscape;
    private missiles: Missile[] = [];
    private players: Player[] = [];

    constructor(
        private canvas: HTMLCanvasElement
    ) {
        this.ctx = this.canvas.getContext('2d');
        this.adjustSize();

        this.paint();
        this.update();
    }

    start() {
        this.players = [
            new Player('red', 40, this.landscape, this),
            new Player('blue', 200, this.landscape, this)
        ];
    }

    launch(missile: Missile): void {
        this.missiles.push(missile);
    }

    private update(): void {
        this.missiles.forEach(m => m.update(this.landscape));
        this.players.forEach(p => p.update());
        setTimeout(this.update.bind(this), 20);
    }

    private paint(): void {
        this.landscape.paint(this.ctx);
        this.missiles.forEach(m => m.paint(this.ctx));
        this.players.forEach(p => p.paint(this.ctx));
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