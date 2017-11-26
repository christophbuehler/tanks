import { Missile } from './missile';
import { V2 } from '../v2';
import { Game } from '../game';
import { SmallMissile } from './small-missile';

export class SpreadMissile extends Missile {
  constructor({
    pos,
    vel,
    game
  }) {
    super(pos, vel, 3, 2, '#000');

    this.highPoint
      .subscribe(p => {
        this.collided = true;
        game.launch(new SmallMissile({
          pos: p,
          vel: this.vel.add(new V2(Math.random() * 2 - 1, Math.random() * 2 - 1))
        }));
        game.launch(new SmallMissile({
          pos: p,
          vel: this.vel.add(new V2(Math.random() * 2 - 1, Math.random() * 2 - 1))
        }));
        game.launch(new SmallMissile({
          pos: p,
          vel: this.vel.add(new V2(Math.random() * 2 - 1, Math.random() * 2 - 1))
        }));
        game.launch(new SmallMissile({
          pos: p,
          vel: this.vel.add(new V2(Math.random() * 2 - 1, Math.random() * 2 - 1))
        }));
        game.launch(new SmallMissile({
          pos: p,
          vel: this.vel.add(new V2(Math.random() * 2 - 1, Math.random() * 2 - 1))
        }));
        game.launch(new SmallMissile({
          pos: p,
          vel: this.vel.add(new V2(Math.random() * 2 - 1, Math.random() * 2 - 1))
        }));
      });
  }
}
