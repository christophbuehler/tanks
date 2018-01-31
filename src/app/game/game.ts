import { Injectable } from "@angular/core";
import { Player } from "./player";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { Landscape } from "./landscape";
import { Missile } from "./missiles/missile";
import { V2 } from "./v2";
import { AudioManager } from "./audio-manager";

export class Game {
  playerChange: Observable<Player>;
  currentPlayer: Player;
  audio: AudioManager;
  players: Player[] = [];
  gameOver: Observable<boolean>;
  loser: Player;

  private gameOverSubject: Subject<boolean>;
  private playerChangeSubject: Subject<Player>;
  private ctx: CanvasRenderingContext2D;
  private landscape: Landscape;
  private missiles: Missile[] = [];
  // private packages: Package[] = [];
  private hasFinished = false;
  private startTime: number;

  constructor(private canvas: HTMLCanvasElement) {
    this.gameOverSubject = new Subject<boolean>();
    this.gameOver = this.gameOverSubject.asObservable();
    this.playerChangeSubject = new Subject<Player>();
    this.playerChange = this.playerChangeSubject.asObservable();
    this.ctx = this.canvas.getContext('2d');
    this.audio = new AudioManager();
  }

  finish(loser): void {
    this.loser = loser;
    this.gameOverSubject.next(true);
    this.hasFinished = true;
  }

  switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === this.players[0]
        ? this.players[1]
        : this.players[0];
    this.currentPlayer.launched = false;
    this.playerChangeSubject.next(this.currentPlayer);

    // if (this.packages.length === 0 && Math.random() > .5) this.packages.push(new Package(this.landscape));
  }

  start(settings: any): void {
    this.startTime = (new Date()).getTime();
    this.adjustSize();
    this.players = [
      new Player(settings.playerOneName, '#fff', 40, this.landscape, this),
      new Player(settings.playerTwoName, '#ffff00', 400, this.landscape, this)
    ];

    this.switchPlayer();
    this.paint();
    this.update();
  }

  launch(missile: Missile): Observable<V2> {
    this.missiles.push(missile);
    return missile.collision;
  }

  private update(): void {
    if (this.hasFinished) return;
    this.missiles.forEach(m => m.update(this.landscape));
    this.players.forEach(p => p.update());
    // this.packages.forEach(p => p.update(this.players, this.missiles));
    setTimeout(this.update.bind(this), 20);
  }

  private paint(): void {
    if (this.hasFinished) return;
    const conf = {
      ctx: this.ctx,
      gameTime: (new Date()).getTime() - this.startTime
    };

    this.landscape.paint(this.ctx);
    this.missiles.forEach(m => m.paint(this.ctx));
    this.players.forEach(p => p.paint(this.ctx));
    // this.packages.forEach(p => p.paint(conf));
    window.requestAnimationFrame(this.paint.bind(this));
  }

  private adjustSize(): void {
    const rect: ClientRect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;

    this.landscape = new Landscape(
      Math.random(),
      new V2(rect.width, rect.height),
      this
    );

    // flip the y axis
    this.ctx.transform(1, 0, 0, -1, 0, rect.height);
  }
}
