import { V2 } from "./v2";
import { Landscape } from "./landscape";
import { Game } from "./game";
import { LargeBombMissile } from "./missiles/large-bomb-missile";
import { SpreadMissile } from "./missiles/spread-missile";
import { SmallMissile } from './missiles/small-missile';

export class Player {
    dim: V2 = new V2(21, 40);
    pos: V2;
    vel: V2 = new V2(0, 0);
    force = 5;
    rotVel: number = 0;
    missiles: {title, count, create}[] = [
        {
            title: 'test missile',
            count: 99,
            create: (pos, vel) => new SmallMissile(pos, vel)
        }
    ]

    private vehicleRotation: number;
    private bezelRotation: number = 1;
    private height = 4;
    private bezelLength = 14;

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
        this.pos = this.pos.add(this.vel);
        const xPos = this.pos.x;
        this.bezelRotation += this.rotVel;
        this.vehicleRotation = Math.atan2(this.landscape.yValue(xPos + this.dim.x / 2) - this.landscape.yValue(xPos - this.dim.x / 2), this.dim.x);
        this.pos.y = this.landscape.yValue(xPos);
    }

    launch() {
        const rotation = this.vehicleRotation + this.bezelRotation;
        const force = this.force * .8;
        const vel = new V2(Math.cos(rotation) * force, Math.sin(rotation) * force);
        const verticalVehicleRotation = this.vehicleRotation + Math.PI / 2;
        this.game.launch(new SpreadMissile(
            this.pos
                .add(new V2(Math.cos(verticalVehicleRotation) * 7, Math.sin(verticalVehicleRotation) * 7))
                .add(new V2(Math.cos(rotation) * this.bezelLength, Math.sin(rotation) * this.bezelLength)),
            vel, this.game));
        this.game.switchPlayer();
    }

    paint(ctx: CanvasRenderingContext2D): void {
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.rotate(this.vehicleRotation);

        // bezel
        ctx.beginPath();
        ctx.moveTo(0, 7);
        ctx.lineTo(Math.cos(this.bezelRotation) * this.bezelLength, Math.sin(this.bezelRotation) * this.bezelLength + 7);
        ctx.closePath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#000800';
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(Math.cos(this.bezelRotation) * (this.bezelLength - 2), Math.sin(this.bezelRotation) * (this.bezelLength - 2) + 7);
        ctx.lineTo(Math.cos(this.bezelRotation) * this.bezelLength, Math.sin(this.bezelRotation) * this.bezelLength + 7);
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