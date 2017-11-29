import { Landscape } from '../landscape';
import { V2 } from '../v2';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export class Missile {
  collision: Observable<V2>;
  highPoint: Observable<V2>;
  collided = false;
  reachedHighPoint = false;
  force: V2 = new V2(0, -.03);
  children: Missile[];

  private collisionSubject: Subject<V2>;
  private highPointSubject: Subject<V2>;
  private impact: Impact;

  constructor(
    public pos: V2,
    public vel: V2,
    public power: number,
    public radius: number,
    private color: string
  ) {
    this.collisionSubject = new Subject<V2>();
    this.collision = this.collisionSubject.asObservable();

    this.highPointSubject = new Subject<V2>();
    this.highPoint = this.highPointSubject.asObservable();
  }

  paint(ctx: CanvasRenderingContext2D): void {
    if (this.impact) this.impact.paint(ctx, this.pos);
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
    if (this.pos.x <= 0 || this.pos.x >= landscape.dim.x) {
      this.collided = true;
      this.collisionSubject.next(this.pos);
      this.done();
      return;
    }

    if (this.collide(landscape)) return;

    this.vel = this.vel.add(this.force);
    this.pos = this.pos.add(this.vel);

    this.checkHighPoint();
  }

  collide(landscape: Landscape): boolean {
    if (this.collided) return true;
    if (landscape.collide(this)) {
      this.collided = true;
      this.collisionSubject.next(this.pos);
      this.done();
      this.impact = new Impact(this.power);
      return true;
    }
    return false;
  }

  done(): void {
    this.collisionSubject.complete();
  }

  checkHighPoint() {
    if (!this.reachedHighPoint && this.vel.y <= 0) {
      this.highPointSubject.next(this.pos);
      this.reachedHighPoint = true;
    }
  }
}

class Impact {
  private state = 0;
  constructor(
    private power: number
  ) { }

  paint(ctx, pos) {
    if (this.state > 20) return;

    const r = 8 + this.state * .05 * this.power;
    const grd = ctx.createRadialGradient(pos.x, pos.y, 5, pos.x, pos.y, r);
    grd.addColorStop(0, 'yellow');
    grd.addColorStop(1, 'red');

    ctx.beginPath();
    ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
    ctx.fillStyle = grd;
    ctx.closePath();
    ctx.fill();

    this.state++;
  }
}
