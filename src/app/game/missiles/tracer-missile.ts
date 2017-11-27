import { Missile } from './missile';
import { V2 } from '../v2';
import { Game } from '../game';
import { SmallMissile } from './small-missile';
import { Landscape } from '../landscape';
import { Player } from '../player';

export class TracerMissile extends Missile {
  private game: Game;

  constructor({
    pos,
    vel,
    game
  }) {
    super(pos, vel, 3, 2, '#000');
    this.game = game;
  }

  update(landscape: Landscape): void {
    if (this.collide(landscape)) return;

    if (this.reachedHighPoint) {
      const closestPlayer = this.game.players
        .filter(p => p !== this.game.currentPlayer)
        .reduce((current, player) => {
        if (!current) return player;
        return player.pos.dist(this.pos) <= current.pos.dist(this.pos)
          ? player
          : current;
      }, void 0);
      this.force = this.pos.pointTo(closestPlayer.pos, .2);
    }

    this.vel = this.vel.add(this.force);
    this.pos = this.pos.add(this.vel);

    this.checkHighPoint();
  }
}
