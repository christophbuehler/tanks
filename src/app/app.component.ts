import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  gameStarted = false;
  settings: any;
  view = 'main';

  startGame(settings) {
    this.settings = settings;
    this.gameStarted = true;
  }

  gameOver() {
    this.view = 'gameover';
    this.gameStarted = false;
  }
}
