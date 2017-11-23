import { V2 } from "./v2";
import { Landscape } from "./landscape";
import { Game } from "./game";
import { LargeBombMissile } from "./missiles/large-bomb-missile";

export class Player {
    public dim: V2 = new V2(28, 40);
    public pos: V2;
    private rotation: number;
    private height = 6;

    constructor(
        private color: string,
        xPos: number,
        private landscape: Landscape,
        private game: Game
    ) {
        this.rotation = Math.atan2(landscape.yValue(xPos + this.dim.x / 2) - landscape.yValue(xPos - this.dim.x / 2), this.dim.x);
        const yPos = landscape.yValue(xPos);
        this.pos = new V2(xPos, yPos);
    }

    update() {
        if (Math.random() > .98) {
            this.game.launch(new LargeBombMissile(
                new V2(this.pos.x, this.pos.y + 10),
                new V2(Math.random() * 4 + 1, Math.random() * 4 + 1)));
        }
        this.pos.x += 1;
        const xPos = this.pos.x;
        this.rotation = Math.atan2(this.landscape.yValue(xPos + this.dim.x / 2) - this.landscape.yValue(xPos - this.dim.x / 2), this.dim.x);
        this.pos.y = this.landscape.yValue(xPos);
    }

    paint(ctx: CanvasRenderingContext2D): void {
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.rotate(this.rotation);
        ctx.beginPath();
        ctx.moveTo(-this.dim.x / 2, 0);
        ctx.lineTo(this.dim.x / 2, 0);
        ctx.lineTo(this.dim.x / 2 - this.height, this.height);
        ctx.lineTo(-this.dim.x / 2 + this.height, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
        ctx.closePath();
    }
}