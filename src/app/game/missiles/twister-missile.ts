import { Missile } from './missile';
import { V2 } from '../v2';
import { Game } from '../game';
import { SmallMissile } from './small-missile';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

export class TwisterMissile extends Missile {
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

        const pivot = new V2(0, 0);
        Observable.forkJoin(
          this.launchMissile(pivot.pointTo(new V2(0, -1), 4)),
          this.launchMissile(pivot.pointTo(new V2(1, -1), 4)),
          this.launchMissile(pivot.pointTo(new V2(1, 0), 4)),
          this.launchMissile(pivot.pointTo(new V2(-1, 0), 4)),
          this.launchMissile(pivot.pointTo(new V2(-1, -1), 4)),
        ).subscribe(() => this.done());
      });
  }

  private launchMissile(vel: V2): Observable<V2> {
    return this.game.launch(new SmallMissile({
      pos: this.pos,
      vel
    }));
  }
}
