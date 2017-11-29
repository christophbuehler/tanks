import { Component, Input, OnInit } from '@angular/core';
import { Game } from './game';
import { V2 } from './v2';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Input() game: Game;

  private speed = .4;

  constructor() { }

  ngOnInit() {
  }

  toInt(num) {
    return ~~num;
  }

  switchMissile() {
    const player = this.game.currentPlayer;
    player.activeMissileIndex = (++player.activeMissileIndex) % player.missiles.length;
  }

  move(left: boolean, stop: boolean): void {
    this.game.currentPlayer.vel = stop
      ? 0
      : (left ? -this.speed : this.speed);
  }

  rotate(left: boolean, stop: boolean): void {
    this.game.currentPlayer.rotVel = stop
      ? 0
      : (left ? .01 : -.01);
  }

  fire(): void {
    this.game.currentPlayer.launch();
  }
}
