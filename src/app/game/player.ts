import { V2 } from "./v2";
import { Landscape } from "./landscape";
import { Game } from "./game";
import { LargeBombMissile } from './missiles/large-bomb-missile';
import { SpreadMissile } from './missiles/spread-missile';
import { SmallMissile } from './missiles/small-missile';
import { TracerMissile } from './missiles/tracer-missile';

export class Player {
  dim: V2 = new V2(21, 40);
  pos: V2;
  force = 50;
  vel = 0;
  rotVel = 0;
  bezelRotationDegrees = 0;
  health = 100;
  bezelRotation = 1;
  fuel =  160;
  activeMissileIndex = 0;
  missiles: { title, count, missile }[] = [
    {
      title: 'Tiny Missile',
      count: 99,
      missile: SmallMissile
    },
    {
      title: 'Red Rain',
      count: 4,
      missile: SpreadMissile
    },
    {
      title: 'Atomic Bomb',
      count: 4,
      missile: LargeBombMissile
    },
    {
      title: 'Tracer Rocket',
      count: 4,
      missile: TracerMissile
    }
  ];

  private vehicleRotation: number;
  private height = 4;
  private bezelOffset = 7;
  private bezelLength = 14;
  private launchAudio: HTMLAudioElement;

  constructor(
    private color: string,
    xPos: number,
    private landscape: Landscape,
    private game: Game
  ) {
    this.vehicleRotation = Math.atan2(landscape.yValue(xPos + this.dim.x / 2) - landscape.yValue(xPos - this.dim.x / 2), this.dim.x);
    const yPos = landscape.yValue(xPos);
    this.pos = new V2(xPos, yPos);
  }

  update() {
    const velWithFuel = this.vel === 0
      ? 0
      : (this.vel > 0
          ? Math.min(this.vel, this.fuel)
          : Math.max(this.vel, -this.fuel));

    const dY = this.landscape.yValue(this.pos.x + 1) - this.landscape.yValue(this.pos.x);
    const alpha = Math.atan(dY / 1);
    const velX = Math.cos(alpha) * velWithFuel;

    this.pos.x += velX;
    this.fuel -= Math.abs(velWithFuel);
    const xPos = this.pos.x;
    this.bezelRotation += this.rotVel;
    this.bezelRotation = Math.max(0, this.bezelRotation);
    this.bezelRotation = Math.min(Math.PI, this.bezelRotation);
    this.bezelRotationDegrees = (Math.PI - this.bezelRotation) * (180 / Math.PI);

    this.vehicleRotation = Math.atan2(this.landscape.yValue(xPos + this.dim.x / 2) - this.landscape.yValue(xPos - this.dim.x / 2), this.dim.x);
    this.pos.y = this.landscape.yValue(xPos);
  }

  setForce(val: number): number {
    return this.force = Math.min(val, this.health);
  }

  impact(pos, power): void {
    let f = 20 + power - pos.dist(this.pos);
    if (f <= 0) return;
    f += power;
    this.health = Math.max(0, this.health - f);
    this.setForce(this.force);
  }

  launch() {
    const rotation = this.vehicleRotation + this.bezelRotation;
    const force = this.force * .04;
    const vel = new V2(Math.cos(rotation) * force, Math.sin(rotation) * force);
    const verticalVehicleRotation = this.vehicleRotation + Math.PI / 2;

    this.game.audio.play('missileLaunch');

    this.game
      .launch(new (this.missiles[this.activeMissileIndex].missile)({
        pos: this.pos
          .add(new V2(Math.cos(verticalVehicleRotation) * this.bezelOffset, Math.sin(verticalVehicleRotation) * this.bezelOffset))
          .add(new V2(Math.cos(rotation) * this.bezelLength, Math.sin(rotation) * this.bezelLength)),
        vel,
        game: this.game,
      }))
      .subscribe(void 0, void 0, () => {
        this.game.switchPlayer();
        console.log("switched player");
      });
  }

  paint(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.translate(this.pos.x, this.pos.y);
    ctx.rotate(this.vehicleRotation);

    // bezel
    ctx.beginPath();
    ctx.moveTo(0, this.bezelOffset);
    ctx.lineTo(Math.cos(this.bezelRotation) * this.bezelLength, Math.sin(this.bezelRotation) * this.bezelLength + this.bezelOffset);
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000800';
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(Math.cos(this.bezelRotation) * (this.bezelLength - 2), Math.sin(this.bezelRotation) * (this.bezelLength - 2) + this.bezelOffset);
    ctx.lineTo(Math.cos(this.bezelRotation) * this.bezelLength, Math.sin(this.bezelRotation) * this.bezelLength + this.bezelOffset);
    ctx.closePath();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#001000';
    ctx.stroke();

    // torso
    ctx.beginPath();
    ctx.moveTo(-this.dim.x / 2, 2);
    ctx.lineTo(this.dim.x / 2, 2);
    ctx.lineTo(this.dim.x / 2 - 2, this.height + 2);
    ctx.lineTo(-this.dim.x / 2 + 2, this.height + 2);
    ctx.fillStyle = '#002000';
    ctx.fill();
    ctx.closePath();

    ctx.fillRect(-4, 4, 8, 5);

    // wheels
    ctx.arc(-5, 2, 3, 0, Math.PI * 2);
    ctx.arc(5, 2, 3, 0, Math.PI * 2);
    ctx.arc(0, 2, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}
