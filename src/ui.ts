import { Game } from "./game";

declare const $;

export class Ui {
    private menu;
    private activeScreen: string;
    private playerOneName: string;
    private playerTwoName: string;

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
        this.setupListeners();
        $('body').append(this.el);
        setTimeout(() => {
            this.el.fadeIn(800, () => this.navigate('fullscreen'))
        }, 800);
    }

    setupListeners() {
        this.el.on('click', '.fullscreen-btn', () => {
            this.setFullscreen();
            this.navigate('choose-player1');
        });

        this.el.on('click', '.toplayer2-btn', () => {
            this.playerOneName = this.el.find('#player1-name').val();
            this.navigate('choose-player2');
        });

        this.el.on('click', '.start-btn', () => {
            this.playerTwoName = this.el.find('#player2-name').val();
            this.loadGame();
        });
    }

    loadGame() {
        const canvas = $('<canvas></canvas>');
        $('body').append(canvas);
        const game = new Game(canvas[0]);
        this.el.fadeOut(800, () => game.start());
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