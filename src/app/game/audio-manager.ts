import { element } from 'protractor';
export class AudioManager {
  private playbacks = {
    missileLaunch: {
      source: 'assets/artillery1.mp3',
      startTime: 420,
      duration: 800,
      element: void 0
    }
  };

  constructor() {
    Object.values(this.playbacks)
      .forEach(playback => {
        playback.element = document.createElement('audio');
        playback.element.src = playback.source;
      });
  }

  play(name) {
    const pb = this.playbacks[name];
    pb.element.currentTime = pb.startTime;
    pb.element.play();
  }
}
