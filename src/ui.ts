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

    private ingameControls = $(`
        <div class="ingame-controls">
            <div class="left">
                <div class="rot"><div></div></div>
                <div class="space"></div>
                <div class="mov"><div></div></div>
            </div>
            <div class="power">
                <div class="slider"><div class="indicator"></div></div>
                <div class="space"></div>
                <div class="fire-btn">FIRE</div>
            </div>
            <div class="right">
                <div class="rot"><div></div></div>
                <div class="space"></div>
                <div class="mov"><div></div></div>
            </div>
        </div>`);

    private el = $(`
        <div id="menu">
            <div class="overlay">
                <h1>Tanks 2.0</h1>
                <section name="fullscreen">
                    <button class="btn fullscreen-btn">Play in Fullscreen</button>
                </section>
                <section name="choose-player1">
                    <input type="text" id="player1-name" placeholder="Player 1 Name"><br>
                    <button class="btn toplayer2-btn">Set Player 2</button>
                </section>
                <section name="choose-player2">
                    <input type="text" id="player1-name" placeholder="Player 2 Name"><br>
                    <button class="btn start-btn">Start Game!</button>
                </section>
            </div>
        </div>`);

    constructor() {
        $('body').append(this.ingameControls);
        $('body').append(this.el);
        const canvas = $('<canvas></canvas>');
        $('body').append(canvas);
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
            this.loadGame();
        });

        this.el.on('touchend', '.toplayer2-btn', () => {
            this.playerOneName = this.el.find('#player1-name').val();
            this.navigate('choose-player2');
        });

        this.el.on('touchend', '.start-btn', () => {
            this.playerTwoName = this.el.find('#player2-name').val();
            this.loadGame();
        });

        this.ingameControls.on('touchend', '.fire-btn', ev => {
            this.game.currentPlayer.launch();
        });
        
        this.ingameControls.on('touchstart', '.left .rot', ev => {
            ev.stopPropagation();
            ev.preventDefault();
            ev.target.classList.add('active');
            this.game.currentPlayer.rotVel = .01;
        });

        this.ingameControls.on('touchend', '.left .rot', ev => {
            ev.target.classList.remove('active');
            this.game.currentPlayer.rotVel = 0;
        });

        this.ingameControls.on('touchstart', '.left .mov', ev => {
            ev.stopPropagation();
            ev.preventDefault();
            ev.target.classList.add('active');
            this.game.currentPlayer.vel = new V2(-.4, 0);
        });

        this.ingameControls.on('touchend', '.left .mov', ev => {
            ev.target.classList.remove('active');
            this.game.currentPlayer.vel = new V2(0, 0);
        });

        this.ingameControls.on('touchstart', '.right .rot', ev => {
            ev.stopPropagation();
            ev.preventDefault();
            ev.target.classList.add('active');
            this.game.currentPlayer.rotVel = -.01;
        });

        this.ingameControls.on('touchend', '.right .rot', ev => {
            ev.target.classList.remove('active');
            this.game.currentPlayer.rotVel = 0;
        });

        this.ingameControls.on('touchstart', '.right .mov', ev => {
            ev.stopPropagation();
            ev.preventDefault();
            ev.target.classList.add('active');
            this.game.currentPlayer.vel = new V2(.4, 0);
        });

        this.ingameControls.on('touchend', '.right .mov', ev => {
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
                const start = slider.offsetLeft;
                const totalWidth = slider.clientWidth;
                let newWidth = Math.max(touch.clientX - start, 0);
                const widthInPercent = Math.min((100 / totalWidth) * newWidth, 100);
                const force = ~~((widthInPercent + 5) / 10);
                this.game.currentPlayer.force = force;
                adjustSlider(force);
            });

        const indicator = this.ingameControls.find('.indicator');
        function adjustSlider(force) {
            indicator.css('width', `${force * 10}%`);
        }
    }

    loadGame() {
        this.el.fadeOut(800, () => this.game.start());
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