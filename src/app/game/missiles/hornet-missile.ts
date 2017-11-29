import { Missile } from './missile';
import { V2 } from '../v2';
import { Game } from '../game';
import { SmallMissile } from './small-missile';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';
import { TracerMissile } from './tracer-missile';
import { Landscape } from '../landscape';

export class HornetMissile extends Missile {
  private game: Game;

  constructor({
    pos,
    vel,
    game
  }) {
    super(pos, vel, 3, 2, '#000');
    this.game = game;

    this.highPoint
      .subscribe(p => {
        this.collided = true;

        Observable.forkJoin(
          this.launchMissile(),
          this.launchMissile(),
          this.launchMissile(),
          this.launchMissile(),
          this.launchMissile(),
          this.launchMissile(),
          this.launchMissile(),
          this.launchMissile(),
          this.launchMissile(),
          this.launchMissile(),
          this.launchMissile()
        ).subscribe(() => this.done());
      });
  }

  private launchMissile(): Observable<V2> {
    return this.game.launch(new TinyTracer({
      pos: this.pos.add(new V2(Math.random() * 4 - 2, Math.random() * 4 - 2)),
      vel: this.vel.add(new V2(Math.random() * 4 - 2, Math.random() * 4 - 2)),
      game: this.game
    }));
  }
}

class TinyTracer extends Missile {
  private game: Game;

  constructor({
    pos,
    vel,
    game
  }) {
    super(pos, vel, 1, 1, '#ff0000');
    this.game = game;
  }

  update(landscape: Landscape): void {
    const closestPlayer = this.game.players
      .filter(p => p !== this.game.currentPlayer)
      .reduce((current, player) => {
      if (!current) return player;
      return player.pos.dist(this.pos) <= current.pos.dist(this.pos)
        ? player
        : current;
    }, void 0);
    this.vel = this.vel.dot(new V2(.98, .98));
    this.force = this.pos.pointTo(closestPlayer.pos, .2);

    super.update(landscape);
  }
}
