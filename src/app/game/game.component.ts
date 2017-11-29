import { Component, OnInit, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { Game } from './game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() settings: any;
  @Output() gameOver = new EventEmitter<Game>();
  public game: Game;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    const canvas = this.el.nativeElement.getElementsByTagName('canvas')[0];
    this.game = new Game(canvas);
    this.game.start(this.settings);
    this.game.gameOver
      .subscribe(() => this.gameOver.emit(this.game));
  }
}
