import { Injectable } from '@angular/core';
import { Player } from './player';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Landscape } from './landscape';
import { Missile } from './missiles/missile';
import { V2 } from './v2';
import { AudioManager } from './audio-manager';

export class Game {
  playerChange: Observable<Player>;
  currentPlayer: Player;
  audio: AudioManager;
  players: Player[] = [];

  private playerChangeSubject: Subject<Player>;
  private ctx: CanvasRenderingContext2D;
  private landscape: Landscape;
  private missiles: Missile[] = [];
  private bg: HTMLImageElement;

  constructor(
    private canvas: HTMLCanvasElement
  ) {
    this.playerChangeSubject = new Subject<Player>();
    this.playerChange = this.playerChangeSubject.asObservable();
    this.ctx = this.canvas.getContext('2d');
    this.audio = new AudioManager();

    this.bg = document.createElement('img');
    this.bg.src = 'https://i.pinimg.com/736x/f4/85/99/f48599bcbe27682a0f98a2d9838adf40--texture-snow.jpg';
    this.bg.onload = () => this.start();
  }

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === this.players[0]
        ? this.players[1]
        : this.players[0];
    this.playerChangeSubject.next(this.currentPlayer);
  }

  start() {
    this.adjustSize();
    this.players = [
        new Player('#000', 40, this.landscape, this),
        new Player('blue', 400, this.landscape, this)
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
      this.missiles.forEach(m => m.update(this.landscape));
      this.players.forEach(p => p.update());
      setTimeout(this.update.bind(this), 20);
  }

  private paint(): void {
      this.landscape.paint(this.ctx);
      this.missiles.forEach(m => m.paint(this.ctx));
      this.players.forEach(p => p.paint(this.ctx));
      window.requestAnimationFrame(this.paint.bind(this));
  }

  private adjustSize(): void {
      const rect: ClientRect = this.canvas.getBoundingClientRect();
      this.canvas.width = rect.width;
      this.canvas.height = rect.height;

      this.landscape = new Landscape(Math.random(), new V2(rect.width, rect.height), this.bg, this);

      // flip the y axis
      this.ctx.transform(1, 0, 0, -1, 0, rect.height);
  }
}
