import {V2} from './v2';
import { Landscape } from './landscape';
import { Player } from './player';
import { Missile, Impact } from "./missiles/missile";
export class Package {
  private pos: V2;
  private vel: V2 = new V2(0, -.8);
  private landed = false;
  private dim = new V2(20, 20);
  private collider = new RectCollider(this.dim);
  private rotation = 0;
  private hangingDist = 20;
  private radius = 24;
  private collected = false;
  private impact: Impact;

  constructor(
    private landscape: Landscape
  ) {
    const centerX = landscape.dim.x / 2;
    this.pos = new V2(centerX + centerX * Math.random() * .8 - centerX * .4, landscape.dim.y);
  }

  update(players: Player[], missiles: Missile[]) {
    if (this.collected) return;
    const pivot = new V2(0, this.hangingDist);
    const points = this.collider.getPoints(this.rotation, pivot);

    // check if a player has picked up the package
    const packageCenter = this.pos.add(points[0].add(points[2]).div(new V2(2, 2)));
    if (players.find(p => {
      if (p.pos.dist(packageCenter) > this.radius) return false;
      p.health = Math.min(100, p.health + 40);
      this.collected = true;
    })) return;

    // check if the package was shot by a missile
    const nonRotatedPoints = this.collider.getPoints(0).map(p => p.add(this.pos));
    if (missiles.find(m => {
      const adjustedPoint = m.pos.rotateAroundPivot(pivot, -this.rotation);
      if (!m.pos.subtract(nonRotatedPoints[0]).sign().equals(new V2(1, -1))) return false;
      if (!m.pos.subtract(nonRotatedPoints[1]).sign().equals(new V2(-1, -1))) return false;
      if (!m.pos.subtract(nonRotatedPoints[2]).sign().equals(new V2(-1, 1))) return false;
      if (!m.pos.subtract(nonRotatedPoints[3]).sign().equals(new V2(1, 1))) return false;
      m.explode();
      return true;
    })) {
      this.collected = true;
      this.impact = new Impact(12);
      return;
    }

    if (this.landed) return;
    this.pos = this.pos.add(this.vel);

    this.rotation = Math.sin(this.pos.y * .04);

    if (yCollision.bind(this)(points[2])) return;
    if (yCollision.bind(this)(points[3])) return;
    if (yCollision.bind(this)(points[0])) return;
    if (yCollision.bind(this)(points[1])) return;

    function yCollision(point: V2): boolean {
      const yVal = this.landscape.yValue(this.pos.x + point.x);
      if (yVal < this.pos.y + point.y) return false;
      this.pos.y = yVal - point.y;
      return this.landed = true;
    }
  }

  paint({ ctx, gameTime }): void {
    if (this.impact) this.impact.paint(ctx, this.pos);
    if (this.collected) return;
    const center = this.dim.div(new V2(2, 2));
    ctx.save();
    ctx.translate(this.pos.x, this.pos.y - this.hangingDist);
    ctx.rotate(this.rotation);
    ctx.fillStyle = '#fff';
    ctx.fillRect(-center.x, -this.hangingDist - center.y, this.dim.x, this.dim.y);
    ctx.beginPath();
    ctx.moveTo(-6, 2 - this.hangingDist);
    ctx.lineTo(-2, 2 - this.hangingDist);
    ctx.lineTo(-2, 6 - this.hangingDist);
    ctx.lineTo(2, 6 - this.hangingDist);
    ctx.lineTo(2, 2 - this.hangingDist);
    ctx.lineTo(6, 2 - this.hangingDist);
    ctx.lineTo(6, -2 - this.hangingDist);
    ctx.lineTo(2, -2 - this.hangingDist);
    ctx.lineTo(2, -6 - this.hangingDist);
    ctx.lineTo(-2, -6 - this.hangingDist);
    ctx.lineTo(-2, -2 - this.hangingDist);
    ctx.lineTo(-6, -2 - this.hangingDist);
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();

    if (!this.landed) {
      ctx.beginPath();
      ctx.moveTo(-8, 0);
      ctx.lineTo(8, 0);
      ctx.lineTo(0, -this.hangingDist);
      ctx.closePath();
      ctx.stroke();
    }
    ctx.restore();
    if (this.landed) {
      ctx.beginPath();
      const points = this.collider.getPoints(this.rotation, new V2(0, this.hangingDist));
      const packageCenter = this.pos.add(points[0].add(points[2]).div(new V2(2, 2)));
      ctx.arc(packageCenter.x, packageCenter.y, this.radius + Math.sin(gameTime * .004) * 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffff00';
      ctx.stroke();
    }

    const nonRotatedPoints = this.collider.getPoints(this.rotation, new V2(0, this.hangingDist)).map(p => p.add(this.pos));

    ctx.beginPath();
    ctx.moveTo(nonRotatedPoints[0].x, nonRotatedPoints[0].y);
    ctx.lineTo(nonRotatedPoints[1].x, nonRotatedPoints[1].y);
    ctx.lineTo(nonRotatedPoints[2].x, nonRotatedPoints[2].y);
    ctx.lineTo(nonRotatedPoints[3].x, nonRotatedPoints[3].y);
    ctx.arc(this.pos.x, this.pos.y, 3, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();
  }
}

class RectCollider {
  constructor(
    private dim: V2
  ) { }

  getPoints(rotation: number, center = new V2(0, 0)) {
    return [
      this.dim.dot(new V2(-.5, .5)).rotateAroundPivot(center, rotation),
      this.dim.dot(new V2(.5, .5)).rotateAroundPivot(center, rotation),
      this.dim.dot(new V2(.5, -.5)).rotateAroundPivot(center, rotation),
      this.dim.dot(new V2(-.5, -.5)).rotateAroundPivot(center, rotation),
    ];
  }
}
