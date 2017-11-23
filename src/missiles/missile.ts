import { Landscape } from './landscape';
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
        if (this.collided) return false;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color || '#000';
        ctx.fill();
        ctx.closePath();
    }

    update(landscape: Landscape): void {
        if (this.collided) return;
        if (landscape.collide(this.pos, this.vel, this.power)) {
            this.collided = true;
            return;
        }

        this.vel = this.vel.add(this.force);
        this.pos = this.pos.add(this.vel);
    }
}