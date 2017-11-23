import { V2 } from "./v2";
import { Landscape } from "./landscape";

export class Player {
    public dim: V2 = new V2(28, 40);
    public pos: V2;
    private rotation: number;
    private height = 6;

    constructor(
        private color: string,
        xPos: number,
        landscape: Landscape
    ) {
        this.rotation = Math.atan2(landscape.yValue(xPos + this.dim.x / 2) - landscape.yValue(xPos - this.dim.x / 2), this.dim.x);
        const yPos = landscape.yValue(xPos);
        this.pos = new V2(xPos, yPos);
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