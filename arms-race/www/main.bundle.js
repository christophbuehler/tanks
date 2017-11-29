webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu [class.hide]=\"gameStarted\" [view]=\"view\" (startGame)=\"startGame($event)\"></app-menu>\n<app-game [settings]=\"settings\" (gameOver)=\"gameOver($event)\" *ngIf=\"gameStarted\"></app-game>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.gameStarted = false;
        this.view = 'main';
    }
    AppComponent.prototype.startGame = function (settings) {
        this.settings = settings;
        this.gameStarted = true;
    };
    AppComponent.prototype.gameOver = function () {
        this.view = 'gameover';
        this.gameStarted = false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_game_module__ = __webpack_require__("../../../../../src/app/game/game.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu_module__ = __webpack_require__("../../../../../src/app/menu/menu.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__game_game_module__["a" /* GameModule */],
                __WEBPACK_IMPORTED_MODULE_4__menu_menu_module__["a" /* MenuModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/game/audio-manager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioManager; });
var AudioManager = (function () {
    function AudioManager() {
        this.playbacks = {
            missileLaunch: {
                source: 'assets/artillery1.mp3',
                startTime: 420,
                duration: 420,
                element: void 0
            },
            missileImpact: {
                source: 'assets/explosion1.mp3',
                startTime: 0,
                duration: 420,
                element: void 0
            }
        };
        Object.values(this.playbacks)
            .forEach(function (playback) {
            playback.element = document.createElement('audio');
            playback.element.src = playback.source;
        });
    }
    AudioManager.prototype.play = function (name) {
        var pb = this.playbacks[name];
        pb.element.currentTime = pb.startTime;
        pb.element.play();
    };
    return AudioManager;
}());



/***/ }),

/***/ "../../../../../src/app/game/controls.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"player-name\">{{game.currentPlayer.name}}</div>\r\n<div class=\"missiles\">\r\n  <div [style.transform]=\"'translate(0, ' + (-game.currentPlayer.activeMissileIndex * 100) + '%)'\"\r\n    (touchstart)=\"switchMissile()\" class=\"inner\">\r\n    <div *ngFor=\"let missile of game.currentPlayer.missiles\" class=\"missile grow\">\r\n      <span>{{missile.title}}</span>\r\n      <span>{{missile.count}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-slider [game]=\"game\"></app-slider>\r\n<div>\r\n  <div class=\"flex\">\r\n    <div (touchstart)=\"rotate(true, false)\" (touchend)=\"rotate(true, true)\" class=\"ingame-btn small\" style=\"background-image: url('assets/arrow-left-rot.png')\"></div>\r\n    <span class=\"num grow\">{{toInt(game.currentPlayer.bezelRotationDegrees)}} &deg;</span>\r\n    <div (touchstart)=\"rotate(false, false)\" (touchend)=\"rotate(false, true)\" class=\"ingame-btn small\" style=\"background-image: url('assets/arrow-right-rot.png')\"></div>\r\n  </div>\r\n  <div class=\"flex top-space\">\r\n    <div (touchstart)=\"move(true, false)\" (touchend)=\"move(true, true)\" class=\"ingame-btn small\" style=\"background-image: url('assets/arrow-left.png')\"></div>\r\n    <span class=\"num grow\">{{toInt(game.currentPlayer.fuel)}} m</span>\r\n    <div (touchstart)=\"move(false, false)\" (touchend)=\"move(false, true)\" class=\"ingame-btn small\" style=\"background-image: url('assets/arrow-right.png')\"></div>\r\n  </div>\r\n</div>\r\n<div class=\"flex\">\r\n  <div (click)=\"fire()\" class=\"ingame-btn fire-btn top-space grow\">FIRE</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/game/controls.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  font-size: 0;\n  position: relative;\n  white-space: nowrap;\n  height: 100%;\n  background: #000;\n  padding: 32px 8px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  box-sizing: border-box; }\n  :host .player-name {\n    color: #fff;\n    font-size: 12pt;\n    text-align: center;\n    height: 32px;\n    line-height: 32px;\n    margin-bottom: 4px; }\n  :host .missiles {\n    overflow: hidden;\n    height: 32px;\n    width: 100%;\n    position: relative; }\n    :host .missiles .inner {\n      position: absolute;\n      left: 0;\n      top: 0;\n      height: 100%;\n      width: 100%;\n      transition: -webkit-transform .1s ease;\n      transition: transform .1s ease;\n      transition: transform .1s ease, -webkit-transform .1s ease; }\n      :host .missiles .inner .missile {\n        display: block;\n        color: #fff;\n        line-height: 32px;\n        height: 32px;\n        font-size: 10pt;\n        padding: 0 16px;\n        box-sizing: border-box;\n        width: 100%; }\n  :host .space {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  :host .ingame-btn {\n    color: #fff;\n    width: 120px;\n    height: 32px;\n    position: relative;\n    background-size: auto 22px;\n    background-repeat: no-repeat;\n    background-position: center;\n    font-size: 12pt;\n    text-align: center;\n    line-height: 32px;\n    letter-spacing: 1px;\n    text-transform: uppercase; }\n    :host .ingame-btn.small {\n      width: 48px; }\n  :host .grow {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  :host .flex {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  :host .num {\n    display: inline-block;\n    width: 40px;\n    text-align: center;\n    font-size: 10pt;\n    line-height: 32px;\n    color: #fff; }\n  :host .top-space {\n    margin-top: 4px; }\n  :host .fire-btn {\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    background: rgba(255, 10, 10, 0.4); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/controls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game__ = __webpack_require__("../../../../../src/app/game/game.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlsComponent = (function () {
    function ControlsComponent() {
        this.speed = .4;
    }
    ControlsComponent.prototype.ngOnInit = function () {
    };
    ControlsComponent.prototype.toInt = function (num) {
        return ~~num;
    };
    ControlsComponent.prototype.switchMissile = function () {
        var player = this.game.currentPlayer;
        player.activeMissileIndex = (++player.activeMissileIndex) % player.missiles.length;
    };
    ControlsComponent.prototype.move = function (left, stop) {
        this.game.currentPlayer.vel = stop
            ? 0
            : (left ? -this.speed : this.speed);
    };
    ControlsComponent.prototype.rotate = function (left, stop) {
        this.game.currentPlayer.rotVel = stop
            ? 0
            : (left ? .01 : -.01);
    };
    ControlsComponent.prototype.fire = function () {
        this.game.currentPlayer.launch();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__game__["a" /* Game */])
    ], ControlsComponent.prototype, "game", void 0);
    ControlsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-controls',
            template: __webpack_require__("../../../../../src/app/game/controls.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game/controls.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ControlsComponent);
    return ControlsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas id=\"canvas\"></canvas>\n<app-controls [game]=\"game\"></app-controls>\n"

/***/ }),

/***/ "../../../../../src/app/game/game.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100vh;\n  width: 100vw; }\n  :host canvas {\n    display: block;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    height: 100vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game__ = __webpack_require__("../../../../../src/app/game/game.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameComponent = (function () {
    function GameComponent(el) {
        this.el = el;
        this.gameOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        var canvas = this.el.nativeElement.getElementsByTagName('canvas')[0];
        this.game = new __WEBPACK_IMPORTED_MODULE_1__game__["a" /* Game */](canvas);
        this.game.start(this.settings);
        this.game.gameOver
            .subscribe(function () { return _this.gameOver.emit(_this.game); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], GameComponent.prototype, "settings", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], GameComponent.prototype, "gameOver", void 0);
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__("../../../../../src/app/game/game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game/game.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game/game.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_component__ = __webpack_require__("../../../../../src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls_component__ = __webpack_require__("../../../../../src/app/game/controls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slider_slider_component__ = __webpack_require__("../../../../../src/app/game/slider/slider.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GameModule = (function () {
    function GameModule() {
    }
    GameModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__game_component__["a" /* GameComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__game_component__["a" /* GameComponent */],
                __WEBPACK_IMPORTED_MODULE_3__controls_component__["a" /* ControlsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__slider_slider_component__["a" /* SliderComponent */],
            ],
            providers: []
        })
    ], GameModule);
    return GameModule;
}());



/***/ }),

/***/ "../../../../../src/app/game/game.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player__ = __webpack_require__("../../../../../src/app/game/player.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landscape__ = __webpack_require__("../../../../../src/app/game/landscape.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__v2__ = __webpack_require__("../../../../../src/app/game/v2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__audio_manager__ = __webpack_require__("../../../../../src/app/game/audio-manager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__package__ = __webpack_require__("../../../../../src/app/game/package.ts");






var Game = (function () {
    function Game(canvas) {
        this.canvas = canvas;
        this.players = [];
        this.missiles = [];
        this.packages = [];
        this.hasFinished = false;
        this.gameOverSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.gameOver = this.gameOverSubject.asObservable();
        this.playerChangeSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.playerChange = this.playerChangeSubject.asObservable();
        this.ctx = this.canvas.getContext('2d');
        this.audio = new __WEBPACK_IMPORTED_MODULE_4__audio_manager__["a" /* AudioManager */]();
    }
    Game.prototype.finish = function (loser) {
        this.loser = loser;
        this.gameOverSubject.next(true);
        this.hasFinished = true;
    };
    Game.prototype.switchPlayer = function () {
        this.currentPlayer = this.currentPlayer === this.players[0]
            ? this.players[1]
            : this.players[0];
        this.currentPlayer.launched = false;
        this.playerChangeSubject.next(this.currentPlayer);
        if (this.packages.length === 0 && Math.random() > .8)
            this.packages.push(new __WEBPACK_IMPORTED_MODULE_5__package__["a" /* Package */](this.landscape));
    };
    Game.prototype.start = function (settings) {
        this.startTime = (new Date()).getTime();
        this.adjustSize();
        this.players = [
            new __WEBPACK_IMPORTED_MODULE_0__player__["a" /* Player */](settings.playerOneName, "#000", 40, this.landscape, this),
            new __WEBPACK_IMPORTED_MODULE_0__player__["a" /* Player */](settings.playerTwoName, "blue", 400, this.landscape, this)
        ];
        this.switchPlayer();
        this.paint();
        this.update();
    };
    Game.prototype.launch = function (missile) {
        this.missiles.push(missile);
        return missile.collision;
    };
    Game.prototype.update = function () {
        var _this = this;
        if (this.hasFinished)
            return;
        this.missiles.forEach(function (m) { return m.update(_this.landscape); });
        this.players.forEach(function (p) { return p.update(); });
        this.packages.forEach(function (p) { return p.update(_this.players); });
        setTimeout(this.update.bind(this), 20);
    };
    Game.prototype.paint = function () {
        var _this = this;
        if (this.hasFinished)
            return;
        var conf = {
            ctx: this.ctx,
            gameTime: (new Date()).getTime() - this.startTime
        };
        this.landscape.paint(this.ctx);
        this.missiles.forEach(function (m) { return m.paint(_this.ctx); });
        this.players.forEach(function (p) { return p.paint(_this.ctx); });
        this.packages.forEach(function (p) { return p.paint(conf); });
        window.requestAnimationFrame(this.paint.bind(this));
    };
    Game.prototype.adjustSize = function () {
        var rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        this.landscape = new __WEBPACK_IMPORTED_MODULE_2__landscape__["a" /* Landscape */](Math.random(), new __WEBPACK_IMPORTED_MODULE_3__v2__["a" /* V2 */](rect.width, rect.height), this);
        // flip the y axis
        this.ctx.transform(1, 0, 0, -1, 0, rect.height);
    };
    return Game;
}());



/***/ }),

/***/ "../../../../../src/app/game/landscape.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Landscape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_seed__ = __webpack_require__("../../../../random-seed/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_seed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_random_seed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cubic_spline__ = __webpack_require__("../../../../cubic-spline/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cubic_spline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cubic_spline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__v2__ = __webpack_require__("../../../../../src/app/game/v2.ts");



var Landscape = (function () {
    function Landscape(seed, dim, game) {
        this.seed = seed;
        this.game = game;
        this.resolution = 1;
        this.hills = 8;
        this.minHeight = 60;
        this.maxHeight = 260;
        this.minHillDist = 20;
        this.maxHillDist = 120;
        this.biome = new IceBiome(this);
        var padding = new __WEBPACK_IMPORTED_MODULE_2__v2__["a" /* V2 */](16, 16);
        this.dim = dim.add(padding);
        this.generateVertices(seed);
    }
    Landscape.prototype.paint = function (ctx) {
        ctx.clearRect(0, 0, this.dim.x, this.dim.y);
        if (!this.vertices)
            return;
        ctx.beginPath();
        this.vertices.forEach(function (v, i) {
            if (i === 0) {
                ctx.moveTo(v[0], v[1]);
            }
            else {
                ctx.lineTo(v[0], v[1]);
            }
        });
        ctx.closePath();
        ctx.fillStyle = this.biome.color;
        this.biome.paint(ctx);
        ctx.fill();
    };
    Landscape.prototype.collide = function (_a) {
        var pos = _a.pos, power = _a.power;
        var yVal = this.yValue(pos.x);
        if (yVal < pos.y)
            return false;
        this.game.players.forEach(function (p) { return p.impact(pos, power); });
        this.game.audio.play('missileImpact');
        this.vertices
            .forEach(function (v) {
            var dist = Math.abs(v[0] - pos.x);
            var r = 20 + power;
            if (dist > r)
                return;
            var step = 2;
            v[1] -= ~~((Math.sin(((Math.PI / 2) / r) * (r - dist)) * power) / step) * step;
        });
        return true;
    };
    Landscape.prototype.yValue = function (x) {
        var _a = this.vertices.reduce(function (current, vertice) {
            if (vertice[0] <= x)
                current.left = vertice;
            if (vertice[0] >= x && current.right === void 0)
                current.right = vertice;
            return current;
        }, { left: void 0, right: void 0 }), left = _a.left, right = _a.right;
        if (right === void 0)
            return left[1];
        if (left === void 0)
            return right[1];
        if (left[1] === right[1])
            return left[1];
        var k = (right[1] - left[1]) / (right[0] - left[0]);
        var func = function (x) { return left[1] + (x - left[0]) * k; };
        return func(x);
    };
    Landscape.prototype.generateVertices = function (seed) {
        this.rndGen = __WEBPACK_IMPORTED_MODULE_0_random_seed__["create"](seed);
        var intVertsX = [];
        var intVertsY = [];
        var intVertDist = this.dim.x / this.hills;
        var i = 0;
        var lastHillDist = this.hillDist();
        do {
            intVertsX.push(i);
            intVertsY.push(this.intHeight());
            i += this.hillDist();
        } while (i < this.dim.x - lastHillDist);
        intVertsX.push(this.dim.x);
        intVertsY.push(this.intHeight());
        this.vertices = [[0, 0]];
        for (var h = 0; h <= this.dim.x; h += this.resolution) {
            this.vertices.push([h, __WEBPACK_IMPORTED_MODULE_1_cubic_spline__(h, intVertsX, intVertsY)]);
        }
        this.vertices.push([this.dim.x, 0]);
    };
    Landscape.prototype.intHeight = function () {
        return this.minHeight + this.rndGen(this.maxHeight - this.minHeight);
    };
    Landscape.prototype.hillDist = function () {
        return this.minHillDist + this.rndGen(this.maxHillDist - this.minHillDist);
    };
    return Landscape;
}());

var MeadowBiome = (function () {
    function MeadowBiome(landscape) {
        this.landscape = landscape;
        this.color = '#126212';
    }
    MeadowBiome.prototype.paint = function (ctx) {
    };
    return MeadowBiome;
}());
var IceBiome = (function () {
    function IceBiome(landscape) {
        this.landscape = landscape;
        this.color = '#fff';
    }
    IceBiome.prototype.paint = function (ctx) {
    };
    return IceBiome;
}());


/***/ }),

/***/ "../../../../../src/app/game/missiles/hornet-missile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HornetMissile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__missile__ = __webpack_require__("../../../../../src/app/game/missiles/missile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__v2__ = __webpack_require__("../../../../../src/app/game/v2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var HornetMissile = (function (_super) {
    __extends(HornetMissile, _super);
    function HornetMissile(_a) {
        var pos = _a.pos, vel = _a.vel, game = _a.game;
        var _this = _super.call(this, pos, vel, 3, 2, '#000') || this;
        _this.game = game;
        _this.highPoint
            .subscribe(function (p) {
            _this.collided = true;
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].forkJoin(_this.launchMissile(), _this.launchMissile(), _this.launchMissile(), _this.launchMissile(), _this.launchMissile(), _this.launchMissile(), _this.launchMissile(), _this.launchMissile(), _this.launchMissile(), _this.launchMissile(), _this.launchMissile()).subscribe(function () { return _this.done(); });
        });
        return _this;
    }
    HornetMissile.prototype.launchMissile = function () {
        return this.game.launch(new TinyTracer({
            pos: this.pos.add(new __WEBPACK_IMPORTED_MODULE_1__v2__["a" /* V2 */](Math.random() * 4 - 2, Math.random() * 4 - 2)),
            vel: this.vel.add(new __WEBPACK_IMPORTED_MODULE_1__v2__["a" /* V2 */](Math.random() * 4 - 2, Math.random() * 4 - 2)),
            game: this.game
        }));
    };
    return HornetMissile;
}(__WEBPACK_IMPORTED_MODULE_0__missile__["a" /* Missile */]));

var TinyTracer = (function (_super) {
    __extends(TinyTracer, _super);
    function TinyTracer(_a) {
        var pos = _a.pos, vel = _a.vel, game = _a.game;
        var _this = _super.call(this, pos, vel, 1, 1, '#ff0000') || this;
        _this.game = game;
        return _this;
    }
    TinyTracer.prototype.update = function (landscape) {
        var _this = this;
        var closestPlayer = this.game.players
            .filter(function (p) { return p !== _this.game.currentPlayer; })
            .reduce(function (current, player) {
            if (!current)
                return player;
            return player.pos.dist(_this.pos) <= current.pos.dist(_this.pos)
                ? player
                : current;
        }, void 0);
        this.vel = this.vel.dot(new __WEBPACK_IMPORTED_MODULE_1__v2__["a" /* V2 */](.98, .98));
        this.force = this.pos.pointTo(closestPlayer.pos, .2);
        _super.prototype.update.call(this, landscape);
    };
    return TinyTracer;
}(__WEBPACK_IMPORTED_MODULE_0__missile__["a" /* Missile */]));


/***/ }),

/***/ "../../../../../src/app/game/missiles/large-bomb-missile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LargeBombMissile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__missile__ = __webpack_require__("../../../../../src/app/game/missiles/missile.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LargeBombMissile = (function (_super) {
    __extends(LargeBombMissile, _super);
    function LargeBombMissile(_a) {
        var pos = _a.pos, vel = _a.vel, game = _a.game;
        return _super.call(this, pos, vel, 28, 2, '#aa2222') || this;
    }
    return LargeBombMissile;
}(__WEBPACK_IMPORTED_MODULE_0__missile__["a" /* Missile */]));



/***/ }),

/***/ "../../../../../src/app/game/missiles/missile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Missile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v2__ = __webpack_require__("../../../../../src/app/game/v2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");


var Missile = (function () {
    function Missile(pos, vel, power, radius, color) {
        this.pos = pos;
        this.vel = vel;
        this.power = power;
        this.radius = radius;
        this.color = color;
        this.collided = false;
        this.reachedHighPoint = false;
        this.force = new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](0, -.03);
        this.collisionSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.collision = this.collisionSubject.asObservable();
        this.highPointSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.highPoint = this.highPointSubject.asObservable();
    }
    Missile.prototype.paint = function (ctx) {
        if (this.impact)
            this.impact.paint(ctx, this.pos);
        if (this.collided)
            return;
        this.paintMissile(ctx, this.pos, 1);
        this.paintMissile(ctx, this.pos.subtract(this.vel), .4);
        this.paintMissile(ctx, this.pos.subtract(this.vel).subtract(this.vel), .2);
    };
    Missile.prototype.paintMissile = function (ctx, pos, opacity) {
        ctx.beginPath();
        ctx.globalAlpha = 0.5;
        ctx.arc(pos.x, pos.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color || '#000';
        ctx.fill();
        ctx.closePath();
        ctx.globalAlpha = 1;
    };
    Missile.prototype.update = function (landscape) {
        if (this.pos.x <= 0 || this.pos.x >= landscape.dim.x) {
            this.collided = true;
            this.collisionSubject.next(this.pos);
            this.done();
            return;
        }
        if (this.collide(landscape))
            return;
        this.vel = this.vel.add(this.force);
        this.pos = this.pos.add(this.vel);
        this.checkHighPoint();
    };
    Missile.prototype.collide = function (landscape) {
        if (this.collided)
            return true;
        if (landscape.collide(this)) {
            this.collided = true;
            this.collisionSubject.next(this.pos);
            this.done();
            this.impact = new Impact(this.power);
            return true;
        }
        return false;
    };
    Missile.prototype.done = function () {
        this.collisionSubject.complete();
    };
    Missile.prototype.checkHighPoint = function () {
        if (!this.reachedHighPoint && this.vel.y <= 0) {
            this.highPointSubject.next(this.pos);
            this.reachedHighPoint = true;
        }
    };
    return Missile;
}());

var Impact = (function () {
    function Impact(power) {
        this.power = power;
        this.state = 0;
    }
    Impact.prototype.paint = function (ctx, pos) {
        if (this.state > 20)
            return;
        var r = 8 + this.state * .05 * this.power;
        var grd = ctx.createRadialGradient(pos.x, pos.y, 5, pos.x, pos.y, r);
        grd.addColorStop(0, 'yellow');
        grd.addColorStop(1, 'red');
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.closePath();
        ctx.fill();
        this.state++;
    };
    return Impact;
}());


/***/ }),

/***/ "../../../../../src/app/game/missiles/small-missile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmallMissile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__missile__ = __webpack_require__("../../../../../src/app/game/missiles/missile.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SmallMissile = (function (_super) {
    __extends(SmallMissile, _super);
    function SmallMissile(_a) {
        var pos = _a.pos, vel = _a.vel;
        return _super.call(this, pos, vel, 4, 1, '#f20000') || this;
    }
    return SmallMissile;
}(__WEBPACK_IMPORTED_MODULE_0__missile__["a" /* Missile */]));



/***/ }),

/***/ "../../../../../src/app/game/missiles/spread-missile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpreadMissile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__missile__ = __webpack_require__("../../../../../src/app/game/missiles/missile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__v2__ = __webpack_require__("../../../../../src/app/game/v2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__small_missile__ = __webpack_require__("../../../../../src/app/game/missiles/small-missile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var SpreadMissile = (function (_super) {
    __extends(SpreadMissile, _super);
    function SpreadMissile(_a) {
        var pos = _a.pos, vel = _a.vel, game = _a.game;
        var _this = _super.call(this, pos, vel, 3, 2, '#000') || this;
        _this.game = game;
        _this.highPoint
            .subscribe(function (p) {
            _this.collided = true;
            __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].forkJoin(_this.launchMissile(), _this.launchMissile(), _this.launchMissile(), _this.launchMissile(), _this.launchMissile(), _this.launchMissile()).subscribe(function () { return _this.done(); });
        });
        return _this;
    }
    SpreadMissile.prototype.launchMissile = function () {
        return this.game.launch(new __WEBPACK_IMPORTED_MODULE_2__small_missile__["a" /* SmallMissile */]({
            pos: this.pos,
            vel: this.vel.add(new __WEBPACK_IMPORTED_MODULE_1__v2__["a" /* V2 */](Math.random() * 4 - 2, Math.random() * 4 - 2))
        }));
    };
    return SpreadMissile;
}(__WEBPACK_IMPORTED_MODULE_0__missile__["a" /* Missile */]));



/***/ }),

/***/ "../../../../../src/app/game/missiles/tracer-missile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TracerMissile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__missile__ = __webpack_require__("../../../../../src/app/game/missiles/missile.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TracerMissile = (function (_super) {
    __extends(TracerMissile, _super);
    function TracerMissile(_a) {
        var pos = _a.pos, vel = _a.vel, game = _a.game;
        var _this = _super.call(this, pos, vel, 18, 2, '#000') || this;
        _this.game = game;
        return _this;
    }
    TracerMissile.prototype.update = function (landscape) {
        var _this = this;
        if (this.reachedHighPoint) {
            var closestPlayer = this.game.players
                .filter(function (p) { return p !== _this.game.currentPlayer; })
                .reduce(function (current, player) {
                if (!current)
                    return player;
                return player.pos.dist(_this.pos) <= current.pos.dist(_this.pos)
                    ? player
                    : current;
            }, void 0);
            this.force = this.pos.pointTo(closestPlayer.pos, .2);
        }
        _super.prototype.update.call(this, landscape);
    };
    return TracerMissile;
}(__WEBPACK_IMPORTED_MODULE_0__missile__["a" /* Missile */]));



/***/ }),

/***/ "../../../../../src/app/game/package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Package; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v2__ = __webpack_require__("../../../../../src/app/game/v2.ts");

var Package = (function () {
    function Package(landscape) {
        this.landscape = landscape;
        this.vel = new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](0, -.8);
        this.landed = false;
        this.dim = new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](20, 20);
        this.collider = new RectCollider(this.dim);
        this.rotation = 0;
        this.hangingDist = 20;
        this.radius = 24;
        this.collected = false;
        var centerX = landscape.dim.x / 2;
        this.pos = new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](centerX + centerX * Math.random() * .8 - centerX * .4, landscape.dim.y);
    }
    Package.prototype.update = function (players) {
        var _this = this;
        if (this.collected)
            return;
        var points = this.collider.getPoints(this.rotation, new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](0, this.hangingDist));
        var packageCenter = this.pos.add(points[0].add(points[2]).div(new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](2, 2)));
        if (players.find(function (p) {
            if (p.pos.dist(packageCenter) > _this.radius)
                return false;
            p.health = Math.min(100, p.health + 40);
            _this.collected = true;
        }))
            return;
        if (this.landed)
            return;
        this.pos = this.pos.add(this.vel);
        this.rotation = Math.sin(this.pos.y * .04);
        if (yCollision.bind(this)(points[2]))
            return;
        if (yCollision.bind(this)(points[3]))
            return;
        if (yCollision.bind(this)(points[0]))
            return;
        if (yCollision.bind(this)(points[1]))
            return;
        function yCollision(point) {
            var yVal = this.landscape.yValue(this.pos.x + point.x);
            if (yVal < this.pos.y + point.y)
                return false;
            this.pos.y = yVal - point.y;
            return this.landed = true;
        }
    };
    Package.prototype.paint = function (_a) {
        var ctx = _a.ctx, gameTime = _a.gameTime;
        if (this.collected)
            return;
        var center = this.dim.div(new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](2, 2));
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = '#fff';
        ctx.fillRect(-center.x, -this.hangingDist - center.y, this.dim.x, this.dim.y);
        ctx.beginPath();
        ctx.moveTo(-6, 2 - this.hangingDist);
        ctx.lineTo(-2, 2 - this.hangingDist);
        ctx.lineTo(-2, 6 - this.hangingDist);
        ctx.lineTo(2, 6 - this.hangingDist);
        ctx.lineTo(2, 2 - this.hangingDist);
        ctx.lineTo(6, 2 - this.hangingDist);
        ctx.lineTo(6, -2 - this.hangingDist);
        ctx.lineTo(2, -2 - this.hangingDist);
        ctx.lineTo(2, -6 - this.hangingDist);
        ctx.lineTo(-2, -6 - this.hangingDist);
        ctx.lineTo(-2, -2 - this.hangingDist);
        ctx.lineTo(-6, -2 - this.hangingDist);
        ctx.closePath();
        ctx.fillStyle = 'red';
        ctx.fill();
        if (!this.landed) {
            ctx.beginPath();
            ctx.moveTo(-8, 0);
            ctx.lineTo(8, 0);
            ctx.lineTo(0, -this.hangingDist);
            ctx.closePath();
            ctx.stroke();
        }
        ctx.restore();
        if (this.landed) {
            ctx.beginPath();
            var points = this.collider.getPoints(this.rotation, new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](0, this.hangingDist));
            var packageCenter = this.pos.add(points[0].add(points[2]).div(new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](2, 2)));
            ctx.arc(packageCenter.x, packageCenter.y, this.radius + Math.sin(gameTime * .004) * 2, 0, Math.PI * 2);
            ctx.closePath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#ffff00';
            ctx.stroke();
        }
    };
    return Package;
}());

var RectCollider = (function () {
    function RectCollider(dim) {
        this.dim = dim;
    }
    RectCollider.prototype.getPoints = function (rotation, center) {
        if (center === void 0) { center = new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](0, 0); }
        return [
            this.dim.dot(new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](-.5, .5)).rotateAroundPivot(center, rotation),
            this.dim.dot(new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](.5, .5)).rotateAroundPivot(center, rotation),
            this.dim.dot(new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](.5, -.5)).rotateAroundPivot(center, rotation),
            this.dim.dot(new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](-.5, -.5)).rotateAroundPivot(center, rotation),
        ];
    };
    return RectCollider;
}());


/***/ }),

/***/ "../../../../../src/app/game/player.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v2__ = __webpack_require__("../../../../../src/app/game/v2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__missiles_large_bomb_missile__ = __webpack_require__("../../../../../src/app/game/missiles/large-bomb-missile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__missiles_spread_missile__ = __webpack_require__("../../../../../src/app/game/missiles/spread-missile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__missiles_small_missile__ = __webpack_require__("../../../../../src/app/game/missiles/small-missile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__missiles_tracer_missile__ = __webpack_require__("../../../../../src/app/game/missiles/tracer-missile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__missiles_hornet_missile__ = __webpack_require__("../../../../../src/app/game/missiles/hornet-missile.ts");






var Player = (function () {
    function Player(name, color, xPos, landscape, game) {
        this.name = name;
        this.color = color;
        this.landscape = landscape;
        this.game = game;
        this.dim = new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](21, 40);
        this.force = 50;
        this.vel = 0;
        this.rotVel = 0;
        this.bezelRotationDegrees = 0;
        this.health = 100;
        this.bezelRotation = 1;
        this.fuel = 160;
        this.launched = false;
        this.activeMissileIndex = 0;
        this.missiles = [
            {
                title: 'Tiny Missile',
                count: 99,
                missile: __WEBPACK_IMPORTED_MODULE_3__missiles_small_missile__["a" /* SmallMissile */]
            },
            {
                title: 'Red Rain',
                count: 4,
                missile: __WEBPACK_IMPORTED_MODULE_2__missiles_spread_missile__["a" /* SpreadMissile */]
            },
            {
                title: 'Atomic Bomb',
                count: 1,
                missile: __WEBPACK_IMPORTED_MODULE_1__missiles_large_bomb_missile__["a" /* LargeBombMissile */]
            },
            {
                title: 'Tracer Rocket',
                count: 1,
                missile: __WEBPACK_IMPORTED_MODULE_4__missiles_tracer_missile__["a" /* TracerMissile */]
            },
            // {
            //   title: 'Twister Missile',
            //   count: 4,
            //   missile: TwisterMissile
            // },
            {
                title: 'Hornet Attack',
                count: 1,
                missile: __WEBPACK_IMPORTED_MODULE_5__missiles_hornet_missile__["a" /* HornetMissile */]
            }
        ];
        this.height = 4;
        this.bezelOffset = 7;
        this.bezelLength = 14;
        this.vehicleRotation = Math.atan2(landscape.yValue(xPos + this.dim.x / 2) - landscape.yValue(xPos - this.dim.x / 2), this.dim.x);
        var yPos = landscape.yValue(xPos);
        this.pos = new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](xPos, yPos);
    }
    Player.prototype.update = function () {
        var velWithFuel = this.vel === 0
            ? 0
            : (this.vel > 0
                ? Math.min(this.vel, this.fuel)
                : Math.max(this.vel, -this.fuel));
        var dY = this.landscape.yValue(this.pos.x + 1) - this.landscape.yValue(this.pos.x);
        var alpha = Math.atan(dY / 1);
        var velX = Math.cos(alpha) * velWithFuel;
        this.pos.x += velX;
        this.fuel -= Math.abs(velWithFuel);
        var xPos = this.pos.x;
        this.bezelRotation += this.rotVel;
        this.bezelRotation = Math.max(0, this.bezelRotation);
        this.bezelRotation = Math.min(Math.PI, this.bezelRotation);
        this.bezelRotationDegrees = (Math.PI - this.bezelRotation) * (180 / Math.PI);
        this.vehicleRotation = Math.atan2(this.landscape.yValue(xPos + this.dim.x / 2) - this.landscape.yValue(xPos - this.dim.x / 2), this.dim.x);
        this.pos.y = this.landscape.yValue(xPos);
    };
    Player.prototype.setForce = function (val) {
        return this.force = Math.min(val, this.health);
    };
    Player.prototype.impact = function (pos, power) {
        var f = 20 + power - pos.dist(this.pos);
        if (f <= 0)
            return;
        f += power;
        this.health = Math.max(0, this.health - f);
        if (this.health === 0)
            this.game.finish(this);
        this.setForce(this.force);
    };
    Player.prototype.launch = function () {
        var _this = this;
        if (this.launched)
            return;
        this.launched = true;
        var missile = this.missiles[this.activeMissileIndex];
        if (missile.count < 1)
            return false;
        missile.count--;
        this.activeMissileIndex = 0;
        var rotation = this.vehicleRotation + this.bezelRotation;
        var force = this.force * .04;
        var vel = new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](Math.cos(rotation) * force, Math.sin(rotation) * force);
        var verticalVehicleRotation = this.vehicleRotation + Math.PI / 2;
        this.game.audio.play('missileLaunch');
        this.game
            .launch(new (missile.missile)({
            pos: this.pos
                .add(new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](Math.cos(verticalVehicleRotation) * this.bezelOffset, Math.sin(verticalVehicleRotation) * this.bezelOffset))
                .add(new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](Math.cos(rotation) * this.bezelLength, Math.sin(rotation) * this.bezelLength)),
            vel: vel,
            game: this.game,
        }))
            .subscribe(void 0, void 0, function () {
            _this.game.switchPlayer();
        });
    };
    Player.prototype.paint = function (ctx) {
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.rotate(this.vehicleRotation);
        // bezel
        ctx.beginPath();
        ctx.moveTo(0, this.bezelOffset);
        ctx.lineTo(Math.cos(this.bezelRotation) * this.bezelLength, Math.sin(this.bezelRotation) * this.bezelLength + this.bezelOffset);
        ctx.closePath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(Math.cos(this.bezelRotation) * (this.bezelLength - 2), Math.sin(this.bezelRotation) * (this.bezelLength - 2) + this.bezelOffset);
        ctx.lineTo(Math.cos(this.bezelRotation) * this.bezelLength, Math.sin(this.bezelRotation) * this.bezelLength + this.bezelOffset);
        ctx.closePath();
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = this.color;
        ctx.stroke();
        // torso
        ctx.beginPath();
        ctx.moveTo(-this.dim.x / 2, 2);
        ctx.lineTo(-this.dim.x / 2 + 4, 2);
        ctx.lineTo(-this.dim.x / 2 + 4, 0);
        ctx.lineTo(this.dim.x / 2 - 4, 0);
        ctx.lineTo(this.dim.x / 2 - 4, 2);
        ctx.lineTo(this.dim.x / 2, 2);
        ctx.lineTo(this.dim.x / 2 - 2, this.height + 2);
        ctx.lineTo(this.dim.x / 2 - 6, this.height + 2);
        ctx.lineTo(this.dim.x / 2 - 6, this.height + 5);
        ctx.lineTo(-this.dim.x / 2 + 6, this.height + 5);
        ctx.lineTo(-this.dim.x / 2 + 6, this.height + 2);
        ctx.lineTo(-this.dim.x / 2 + 2, this.height + 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        // wheels
        ctx.arc(-5, 2, 3, 0, Math.PI * 2);
        ctx.arc(5, 2, 3, 0, Math.PI * 2);
        ctx.arc(0, 2, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    };
    return Player;
}());



/***/ }),

/***/ "../../../../../src/app/game/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div (touchmove)=\"change($event)\" (touchstart)=\"change($event)\" class=\"wrapper\">\n  <div class=\"shape\">\n    <div [style.height]=\"game.currentPlayer.health + '%'\" class=\"health\"></div>\n    <div [style.height]=\"game.currentPlayer.force + '%'\" class=\"indicator\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/game/slider/slider.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  width: 32px;\n  height: 120px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin: 16px 0;\n  padding: 0 52px; }\n  :host .wrapper {\n    height: 100%; }\n    :host .wrapper .shape {\n      width: 32px;\n      overflow: hidden;\n      height: 100%;\n      -webkit-clip-path: polygon(0 0, 100% 0, 50% 100%, 0 0);\n              clip-path: polygon(0 0, 100% 0, 50% 100%, 0 0);\n      background: rgba(255, 255, 255, 0.2);\n      position: relative; }\n    :host .wrapper .indicator,\n    :host .wrapper .health {\n      transition: height 0.2s ease;\n      width: 100%;\n      background: linear-gradient(#ffaa11, #ffff11);\n      position: absolute;\n      bottom: 0; }\n    :host .wrapper .health {\n      background: rgba(255, 255, 255, 0.2); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game__ = __webpack_require__("../../../../../src/app/game/game.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderComponent = (function () {
    function SliderComponent(el) {
        this.el = el;
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent.prototype.change = function (ev) {
        var touch = ev.touches[0];
        var rect = this.el.nativeElement.getBoundingClientRect();
        var totalHeight = rect.height;
        var start = rect.top + totalHeight;
        var newHeight = Math.max(start - touch.clientY, 0);
        var widthInPercent = Math.min((100 / totalHeight) * newHeight, 100);
        var force = this.game.currentPlayer.setForce(~~((widthInPercent + 5) / 10) * 10);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__game__["a" /* Game */])
    ], SliderComponent.prototype, "game", void 0);
    SliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-slider',
            template: __webpack_require__("../../../../../src/app/game/slider/slider.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game/v2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V2; });
var V2 = (function () {
    function V2(x, y) {
        this.x = x;
        this.y = y;
    }
    V2.prototype.add = function (v2) {
        return new V2(this.x + v2.x, this.y + v2.y);
    };
    V2.prototype.subtract = function (v2) {
        return new V2(this.x - v2.x, this.y - v2.y);
    };
    V2.prototype.dist = function (v2) {
        var x = Math.abs(this.x - v2.x);
        var y = Math.abs(this.y - v2.y);
        return Math.sqrt(x * x + y * y);
    };
    V2.prototype.pointTo = function (v2, radius) {
        var phi = Math.atan2(v2.y - this.y, v2.x - this.x);
        return new V2(Math.cos(phi) * radius, Math.sin(phi) * radius);
    };
    V2.prototype.dot = function (v2) {
        return new V2(this.x * v2.x, this.y * v2.y);
    };
    V2.prototype.div = function (v2) {
        return new V2(this.x / v2.x, this.y / v2.y);
    };
    V2.prototype.rotateAroundPivot = function (v2, phi) {
        var delta = this.subtract(v2);
        phi += Math.atan2(delta.y, delta.x);
        var radius = new V2(0, 0).dist(delta);
        return new V2(Math.cos(phi) * radius, Math.sin(phi) * radius);
    };
    return V2;
}());



/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Arms Race</h1>\n<section *ngIf=\"view === 'main'\" name=\"fullscreen\">\n  <div>\n      <div (click)=\"view = 'singleplayer'\" class=\"btn\">Singleplayer</div>\n  </div>\n  <div>\n      <div (click)=\"view = 'multiplayer'\" class=\"btn\">Multiplayer</div>\n  </div>\n</section>\n<section *ngIf=\"view === 'singleplayer'\">\n  <span>coming soon...</span>\n</section>\n<section *ngIf=\"view === 'gameover'\">\n  <h2>Game Over</h2>\n  <div>\n      <div (click)=\"view = 'main'\" class=\"btn\">Back</div>\n  </div>\n</section>\n<section *ngIf=\"view === 'multiplayer'\">\n  <div>\n    <input type=\"text\" [(ngModel)]=\"settings.playerOneName\" placeholder=\"Player One Name\">\n  </div>\n  <div>\n    <input type=\"text\" [(ngModel)]=\"settings.playerTwoName\" placeholder=\"Player Two Name\">\n  </div>\n  <div>\n    <div (click)=\"startGame.emit(settings)\" class=\"btn\">Start Game</div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  left: 0;\n  color: #fff;\n  top: 0;\n  z-index: 1;\n  width: 100vw;\n  height: 100vh;\n  background-size: cover;\n  color: rgba(0, 0, 0, 0.8);\n  text-align: center;\n  background: #000; }\n  :host.hide {\n    -webkit-transform: translate(0, -100%);\n            transform: translate(0, -100%); }\n  :host h1 {\n    text-align: center;\n    margin: 0;\n    padding: 0 0 24px;\n    font-size: 28pt;\n    line-height: 48px;\n    height: 48px;\n    letter-spacing: 2px;\n    color: #ffaa11; }\n  :host .btn {\n    margin: 8px;\n    display: inline-block;\n    padding: 0 16px;\n    border: 1px solid white;\n    line-height: 40px;\n    color: #fff;\n    text-transform: uppercase;\n    height: 42px;\n    letter-spacing: 2px;\n    width: 220px;\n    box-sizing: border-box; }\n  :host input {\n    display: inline-block;\n    background: rgba(255, 255, 255, 0.1);\n    border: 1px solid white;\n    height: 42px;\n    line-height: 42px;\n    text-align: center;\n    font-size: 16pt;\n    color: #fff;\n    width: 220px;\n    margin-bottom: 16px;\n    box-sizing: border-box; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
        this.startGame = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.settings = {};
    }
    MenuComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], MenuComponent.prototype, "startGame", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], MenuComponent.prototype, "view", void 0);
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menu/menu.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MenuModule = (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__menu_component__["a" /* MenuComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_component__["a" /* MenuComponent */]
            ]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map