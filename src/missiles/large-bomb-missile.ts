import { Missile } from './missile';
import { V2 } from '../v2';

export class LargeBombMissile extends Missile {
    constructor(
        pos: V2,
        vel: V2
    ) {
        super(pos, vel, 200, 4, '#f20000');
    }
}