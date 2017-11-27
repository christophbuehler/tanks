import { Missile } from './missile';
import { V2 } from '../v2';
import { Game } from '../game';
import { SmallMissile } from './small-missile';

export class LargeBombMissile extends Missile {
  constructor({
    pos,
    vel,
    game
  }) {
    super(pos, vel, 28, 2, '#aa2222');

    // this.collision
    //   .subscribe(p => {
    //     game.launch(new SmallMissile({
    //       pos: p,
    //       vel: new V2(Math.random() * 4, 4)
    //     }));
    //     game.launch(new SmallMissile({
    //       pos: p,
    //       vel: new V2(Math.random() * 4, 4)
    //     }));
    //     game.launch(new SmallMissile({
    //       pos: p,
    //       vel: new V2(Math.random() * 4, 4)
    //     }));
    //   });
  }
}
