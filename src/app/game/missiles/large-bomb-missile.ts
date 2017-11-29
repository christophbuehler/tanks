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
  }
}
