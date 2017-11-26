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
    super(pos, vel, 3, 2, '#000');

    this.collision
      .subscribe(p => {
        game.launch(new SmallMissile(p, new V2(Math.random() * 4, 4)));
        game.launch(new SmallMissile(p, new V2(Math.random() * 4, 4)));
        game.launch(new SmallMissile(p, new V2(Math.random() * 4, 4)));
      });
  }
}
