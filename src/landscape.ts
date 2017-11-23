import * as rand from 'random-seed';
import * as spline from 'cubic-spline';
import { Missile } from './missiles/missile';
import { V2 } from './v2';

export class Landscape {
    private vertices: number[][];
    private resolution: number = 4;
    private hills: number = 8;
    private minHeight: number = 80;
    private maxHeight: number = 280;
    private minHillDist: number = 40;
    private maxHillDist: number = 320;
    private dim: V2;
    private rndGen: any;

    constructor(
        private seed: number,
        dim: V2
    ) {
        const padding: V2 = new V2(16, 16);
        this.dim = dim.add(padding);
        this.generateVertices(seed);
    }

    paint(ctx: CanvasRenderingContext2D): void {
        ctx.clearRect(0, 0, this.dim.x, this.dim.y);
        if (!this.vertices) return;
        ctx.beginPath();
        this.vertices.forEach((v, i) => {
            if (i === 0) {
                ctx.moveTo(v[0], v[1]);
            } else {
                ctx.lineTo(v[0], v[1]);
            }
        });
        ctx.fillStyle = '#8BC34A';
        ctx.fill();
        ctx.strokeStyle = '#558B2F';
        ctx.lineWidth = 2;
        // ctx.stroke();
        ctx.closePath();
    }

    collide({ pos, power }: Missile): boolean {
        const yVal: number = this.yValue(pos.x);
        if (yVal < pos.y) return false;
        this.vertices
            .forEach(v => {
                const dist = Math.abs(v[0] - pos.x);
                if (dist > power * 10) return;
                const step = 4;
                const f = power * 10 - dist;
                const rndForce = Math.random() * .2 + .8;
                v[1] -= ~~((f * power * .2 * rndForce) / step) * step;
            });
        return true;
    }

    yValue(x: number): number {
        let leftVal: number = 0;
        let rightVal: number;

        const { left, right } = this.vertices.reduce((current, vertice) => {
            if (vertice[0] <= x) current.left = vertice;
            if (vertice[0] >= x) current.right = vertice;
            return current;
        }, {left: void 0, right: void 0});

        if (left[1] === right[1]) return left[1];

        const k = (right[1] - left[1]) / (right[0] - left[0]);
        const func: any = x => left[1] + (x - left[0]) * k;
        return func(x);
    }

    private generateVertices(seed: number): void {
        this.rndGen = rand.create(seed);
        const intVertsX: number[] = [];
        const intVertsY: number[] = [];
        const intVertDist: number = this.dim.x / this.hills;
        let i: number=0;
        const lastHillDist: number = this.hillDist();
        do {
            intVertsX.push(i);
            intVertsY.push(this.intHeight());
            i += this.hillDist();
        } while (i<this.dim.x-lastHillDist);
        intVertsX.push(this.dim.x);
        intVertsY.push(this.intHeight());

        this.vertices = [[ 0, 0 ]];
        for (let i:number=0; i<=this.dim.x; i+=this.resolution) {
            this.vertices.push([ i, spline(i, intVertsX, intVertsY) ]);
        }
        this.vertices.push([ this.dim.x, 0 ]);
    }

    private intHeight(): number {
        return this.minHeight + this.rndGen(this.maxHeight - this.minHeight);
    }

    private hillDist(): number {
        return this.minHillDist + this.rndGen(this.maxHillDist - this.minHillDist);
    }
}