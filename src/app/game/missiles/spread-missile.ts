import { Missile } from './missile';
import { V2 } from '../v2';
import { Game } from '../game';
import { SmallMissile } from './small-missile';

export class SpreadMissile extends Missile {
  constructor(
    pos: V2,
    vel: V2,
    private game: Game
  ) {
    super(pos, vel, 3, 2, '#000');

    this.highPoint
      .subscribe(p => {
        this.collided = true;
        game.launch(new SmallMissile(p, this.vel.add(new V2(Math.random() * 2 - 1, Math.random() * 2 - 1))));
        game.launch(new SmallMissile(p, this.vel.add(new V2(Math.random() * 2 - 1, Math.random() * 2 - 1))));
        game.launch(new SmallMissile(p, this.vel.add(new V2(Math.random() * 2 - 1, Math.random() * 2 - 1))));
        game.launch(new SmallMissile(p, this.vel.add(new V2(Math.random() * 2 - 1, Math.random() * 2 - 1))));
        game.launch(new SmallMissile(p, this.vel.add(new V2(Math.random() * 2 - 1, Math.random() * 2 - 1))));
        game.launch(new SmallMissile(p, this.vel.add(new V2(Math.random() * 2 - 1, Math.random() * 2 - 1))));
        game.launch(new SmallMissile(p, this.vel.add(new V2(Math.random() * 2 - 1, Math.random() * 2 - 1))));
      });
  }
}
