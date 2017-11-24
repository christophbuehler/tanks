import { Landscape } from '../landscape';
import { V2 } from '../v2';

export class Missile {
    private force: V2 = new V2(0, -.2);
    private collided = false;

    constructor(
        public pos: V2,
        public vel: V2,
        public power: number,
        public radius: number,
        private color: string
    ) { }

    paint(ctx: CanvasRenderingContext2D): void {
        if (this.collided) return;
        this.paintMissile(ctx, this.pos, 1);
        this.paintMissile(ctx, this.pos.subtract(this.vel), .4);
        this.paintMissile(ctx, this.pos.subtract(this.vel).subtract(this.vel), .2);
    }

    private paintMissile(ctx, pos, opacity) {
        ctx.beginPath();
        ctx.globalAlpha = 0.5;
        ctx.arc(pos.x, pos.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color || '#000';
        ctx.fill();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }

    update(landscape: Landscape): void {
        if (this.collided) return;
        if (landscape.collide(this)) {
            this.collided = true;
            return;
        }

        this.vel = this.vel.add(this.force);
        this.pos = this.pos.add(this.vel);
    }
}