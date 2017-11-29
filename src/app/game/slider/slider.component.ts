import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() game: Game;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
  }

  change(ev) {
    const touch = ev.touches[0];
    const rect = this.el.nativeElement.getBoundingClientRect();
    const totalHeight = rect.height;
    const start = rect.top + totalHeight;
    const newHeight = Math.max(start - touch.clientY, 0);
    const widthInPercent = Math.min((100 / totalHeight) * newHeight, 100);
    const force = this.game.currentPlayer.setForce(~~((widthInPercent + 5) / 10) * 10);
  }
}
