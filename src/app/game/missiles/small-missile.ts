import { Missile } from './missile';
import { V2 } from '../v2';
import { Game } from '../game';

export class SmallMissile extends Missile {
  constructor({
    pos,
    vel
  }) {
    super(pos, vel, 3, 1, '#f20000');
  }
}
