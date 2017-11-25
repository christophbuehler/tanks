import { Missile } from './missile';
import { V2 } from '../v2';
import { Game } from '../game';

export class SmallMissile extends Missile {
    constructor(
        pos: V2,
        vel: V2
    ) {
        super(pos, vel, 2, 1, '#f20000');
    }
}