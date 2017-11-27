import { Missile } from './missile';
import { V2 } from '../v2';
import { Game } from '../game';
import { SmallMissile } from './small-missile';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

export class SpreadMissile extends Missile {
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
          this.launchMissile()
        ).subscribe(() => this.done());
      });
  }

  private launchMissile(): Observable<V2> {
    return this.game.launch(new SmallMissile({
      pos: this.pos,
      vel: this.vel.add(new V2(Math.random() * 4 - 2, Math.random() * 4 - 2))
    }));
  }
}
