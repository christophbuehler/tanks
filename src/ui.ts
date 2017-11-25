import { Game } from "./game";
import { V2 } from "./v2";
import { Observable } from "rxjs/Observable";

declare const $;

export class Ui {
    private menu;
    private activeScreen: string;
    private playerOneName: string;
    private playerTwoName: string;
    private game: Game;
    private speed: number = .2;

    private ingameControls;
    private el;

    constructor() {
        this.ingameControls = $('#ingame-controls');
        this.el = $('#menu');
        const canvas = $('#canvas');
        this.game = new Game(canvas[0]);
        setTimeout(() => {
            this.el.fadeIn(800, () => this.navigate('fullscreen'))
        }, 800);
        this.setupListeners();
    }

    setupListeners() {
        this.el.on('touchend', '.fullscreen-btn', () => {
            this.setFullscreen();
            this.navigate('choose-player1');
        });

        this.el.on('touchend', '.toplayer2-btn', () => {
            this.playerOneName = this.el.find('#player1-name').val();
            this.navigate('choose-player2');
        });

        this.el.on('touchend', '.start-btn', () => {
            this.playerTwoName = this.el.find('#player2-name').val();
            this.loadGame();
        });

        this.ingameControls.on('touchstart', '.fire-btn', ev => {
            ev.stopPropagation();
            ev.preventDefault();
            ev.target.classList.add('active');
        });

        this.ingameControls.on('touchend', '.fire-btn', ev => {
            ev.target.classList.remove('active');
            this.game.currentPlayer.launch();
        });
        
        this.ingameControls.on('touchstart', '.left-rot', ev => {
            ev.stopPropagation();
            ev.preventDefault();
            ev.target.classList.add('active');
            this.game.currentPlayer.rotVel = .01;
        });

        this.ingameControls.on('touchend', '.left-rot', ev => {
            ev.target.classList.remove('active');
            this.game.currentPlayer.rotVel = 0;
        });

        this.ingameControls.on('touchstart', '.left-mov', ev => {
            ev.stopPropagation();
            ev.preventDefault();
            ev.target.classList.add('active');
            this.game.currentPlayer.vel = new V2(-this.speed, 0);
        });

        this.ingameControls.on('touchend', '.left-mov', ev => {
            ev.target.classList.remove('active');
            this.game.currentPlayer.vel = new V2(0, 0);
        });

        this.ingameControls.on('touchstart', '.right-rot', ev => {
            ev.stopPropagation();
            ev.preventDefault();
            ev.target.classList.add('active');
            this.game.currentPlayer.rotVel = -.01;
        });

        this.ingameControls.on('touchend', '.right-rot', ev => {
            ev.target.classList.remove('active');
            this.game.currentPlayer.rotVel = 0;
        });

        this.ingameControls.on('touchstart', '.right-mov', ev => {
            ev.stopPropagation();
            ev.preventDefault();
            ev.target.classList.add('active');
            this.game.currentPlayer.vel = new V2(this.speed, 0);
        });

        this.ingameControls.on('touchend', '.right-mov', ev => {
            ev.target.classList.remove('active');
            this.game.currentPlayer.vel = new V2(0, 0);
        });

        this.sliderControls();
    }

    sliderControls() {
        const slider = this.ingameControls.find('.slider')[0];
        this.game.playerChange
            .subscribe(player => adjustSlider(player.force));

        let sliding = false;
        Observable.fromEvent<TouchEvent>(slider, 'touchmove')
            .subscribe(ev => {
                const touch = ev.touches[0];
                const start = slider.getBoundingClientRect().y + slider.getBoundingClientRect().height;
                const totalHeight = slider.clientHeight;
                let newHeight = Math.max(start - touch.clientY, 0);
                const widthInPercent = Math.min((100 / totalHeight) * newHeight, 100);
                const force = ~~((widthInPercent + 5) / 10);
                this.game.currentPlayer.force = force;
                adjustSlider(force);
            });

        const indicator = this.ingameControls.find('.indicator');
        function adjustSlider(force) {
            indicator.css('height', `${force * 10}%`);
        }
    }

    loadGame() {
        this.game.start();
        this.el.fadeOut(800);
    }

    setFullscreen() {
        const doc = window.document;
        var docEl = doc.documentElement;
        var requestFullScreen = docEl.requestFullscreen || docEl.webkitRequestFullScreen;
        if (!doc.fullscreenElement && !doc.webkitFullscreenElement) {
            requestFullScreen.call(docEl);
        }
        // screen.orientation.lock('landscape');
    }

    navigate(screen) {
        if (this.activeScreen) {
            this.el.find(`section[name=${this.activeScreen}]`)
                .fadeOut(show.bind(this));
        } else {
            show.bind(this)();
        }

        function show() {
            this.el.find(`section[name=${screen}]`).fadeIn();
            this.activeScreen = screen;
        }
    }
}