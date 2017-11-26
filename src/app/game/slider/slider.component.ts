import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() game: Game;

  height = 20;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.game.playerChange
      .subscribe(p => this.height = p.force * 10);
  }

  change(ev) {
    const touch = ev.touches[0];
    const rect = this.el.nativeElement.getBoundingClientRect();
    const totalHeight = rect.height;
    const start = rect.y + totalHeight;
    const newHeight = Math.max(start - touch.clientY, 0);
    const widthInPercent = Math.min((100 / totalHeight) * newHeight, 100);
    const force = ~~((widthInPercent + 5) / 10);
    this.game.currentPlayer.force = force;
    this.height = force * 10;
  }
}
