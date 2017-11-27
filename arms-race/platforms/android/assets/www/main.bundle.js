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

module.exports = "<app-game></app-game>\n"

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
        this.title = 'app';
    }
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

module.exports = "<div class=\"missiles\">\r\n  {{ game.currentPlayer.activeMissileIndex }}\r\n  <div [style.transform]=\"'translate(' + (-game.currentPlayer.activeMissileIndex * 100) + '%, 0)'\"\r\n    (touchstart)=\"switchMissile()\" class=\"inner\">\r\n    <div *ngFor=\"let missile of game.currentPlayer.missiles\" class=\"missile grow\">\r\n      <span>{{missile.title}}</span>\r\n      <span>{{missile.count}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-slider [game]=\"game\"></app-slider>\r\n<div>\r\n  <div class=\"flex\">\r\n    <div (touchstart)=\"rotate(true, false)\" (touchend)=\"rotate(true, true)\" class=\"ingame-btn small\" style=\"background-image: url('assets/arrow-left-rot.png')\"></div>\r\n    <span class=\"num grow\">{{toInt(game.currentPlayer.bezelRotationDegrees)}}</span>\r\n    <div (touchstart)=\"rotate(false, false)\" (touchend)=\"rotate(false, true)\" class=\"ingame-btn small\" style=\"background-image: url('assets/arrow-right-rot.png')\"></div>\r\n  </div>\r\n  <div class=\"flex top-space\">\r\n    <div (touchstart)=\"move(true, false)\" (touchend)=\"move(true, true)\" class=\"ingame-btn small\" style=\"background-image: url('assets/arrow-left.png')\"></div>\r\n    <span class=\"num grow\">{{toInt(game.currentPlayer.fuel)}} m</span>\r\n    <div (touchstart)=\"move(false, false)\" (touchend)=\"move(false, true)\" class=\"ingame-btn small\" style=\"background-image: url('assets/arrow-right.png')\"></div>\r\n  </div>\r\n</div>\r\n<div class=\"flex\">\r\n  <div (click)=\"fire()\" class=\"ingame-btn top-space grow\">FIRE</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/game/controls.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  font-size: 0;\n  position: relative;\n  white-space: nowrap;\n  height: 100%;\n  background: #000;\n  padding: 32px 8px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  box-sizing: border-box; }\n  :host .missiles {\n    overflow: hidden;\n    white-space: nowrap;\n    height: 32px;\n    width: 100%;\n    position: relative; }\n    :host .missiles .inner {\n      position: absolute;\n      left: 0;\n      top: 0;\n      height: 100%;\n      width: 100%;\n      transition: -webkit-transform .1s ease;\n      transition: transform .1s ease;\n      transition: transform .1s ease, -webkit-transform .1s ease; }\n      :host .missiles .inner .missile {\n        display: inline-block;\n        color: #fff;\n        line-height: 32px;\n        height: 32px;\n        font-size: 10pt;\n        padding: 0 16px;\n        box-sizing: border-box;\n        width: 100%; }\n  :host .space {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  :host .ingame-btn {\n    color: #fff;\n    width: 120px;\n    height: 32px;\n    position: relative;\n    background-size: auto 22px;\n    background-repeat: no-repeat;\n    background-position: center;\n    font-size: 12pt;\n    text-align: center;\n    line-height: 32px;\n    letter-spacing: 1px;\n    text-transform: uppercase; }\n    :host .ingame-btn.small {\n      width: 48px; }\n  :host .grow {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  :host .flex {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  :host .num {\n    display: inline-block;\n    width: 40px;\n    text-align: center;\n    font-size: 10pt;\n    line-height: 32px;\n    color: #fff; }\n  :host .top-space {\n    margin-top: 4px; }\n", ""]);

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
        this.speed = .2;
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
    }
    GameComponent.prototype.ngOnInit = function () {
        var canvas = this.el.nativeElement.getElementsByTagName('canvas')[0];
        this.game = new __WEBPACK_IMPORTED_MODULE_1__game__["a" /* Game */](canvas);
        this.game.start();
    };
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





var Game = (function () {
    function Game(canvas) {
        var _this = this;
        this.canvas = canvas;
        this.players = [];
        this.missiles = [];
        this.playerChangeSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.playerChange = this.playerChangeSubject.asObservable();
        this.ctx = this.canvas.getContext('2d');
        this.audio = new __WEBPACK_IMPORTED_MODULE_4__audio_manager__["a" /* AudioManager */]();
        this.bg = document.createElement('img');
        this.bg.src = 'https://i.pinimg.com/736x/f4/85/99/f48599bcbe27682a0f98a2d9838adf40--texture-snow.jpg';
        this.bg.onload = function () { return _this.start(); };
    }
    Game.prototype.switchPlayer = function () {
        this.currentPlayer = this.currentPlayer === this.players[0]
            ? this.players[1]
            : this.players[0];
        this.playerChangeSubject.next(this.currentPlayer);
    };
    Game.prototype.start = function () {
        this.adjustSize();
        this.players = [
            new __WEBPACK_IMPORTED_MODULE_0__player__["a" /* Player */]('#000', 40, this.landscape, this),
            new __WEBPACK_IMPORTED_MODULE_0__player__["a" /* Player */]('blue', 400, this.landscape, this)
        ];
        this.switchPlayer();
        this.paint();
        this.update();
    };
    Game.prototype.launch = function (missile) {
        this.missiles.push(missile);
    };
    Game.prototype.update = function () {
        var _this = this;
        this.missiles.forEach(function (m) { return m.update(_this.landscape); });
        this.players.forEach(function (p) { return p.update(); });
        setTimeout(this.update.bind(this), 20);
    };
    Game.prototype.paint = function () {
        var _this = this;
        this.landscape.paint(this.ctx);
        this.missiles.forEach(function (m) { return m.paint(_this.ctx); });
        this.players.forEach(function (p) { return p.paint(_this.ctx); });
        window.requestAnimationFrame(this.paint.bind(this));
    };
    Game.prototype.adjustSize = function () {
        var rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        this.landscape = new __WEBPACK_IMPORTED_MODULE_2__landscape__["a" /* Landscape */](Math.random(), new __WEBPACK_IMPORTED_MODULE_3__v2__["a" /* V2 */](rect.width, rect.height), this.bg, this);
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
    function Landscape(seed, dim, background, game) {
        this.seed = seed;
        this.background = background;
        this.game = game;
        this.resolution = 1;
        this.hills = 8;
        this.minHeight = 60;
        this.maxHeight = 260;
        this.minHillDist = 20;
        this.maxHillDist = 120;
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
        // const pat = ctx.createPattern(this.background, 'repeat');
        // ctx.fillStyle = pat;
        ctx.fillStyle = '#fff';
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
        // this.collision
        //   .subscribe(p => {
        //     game.launch(new SmallMissile({
        //       pos: p,
        //       vel: new V2(Math.random() * 4, 4)
        //     }));
        //     game.launch(new SmallMissile({
        //       pos: p,
        //       vel: new V2(Math.random() * 4, 4)
        //     }));
        //     game.launch(new SmallMissile({
        //       pos: p,
        //       vel: new V2(Math.random() * 4, 4)
        //     }));
        //   });
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
        this.force = new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](0, -.03);
        this.reachedHighPoint = false;
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
        if (this.collided)
            return;
        if (landscape.collide(this)) {
            this.collisionSubject.next(this.pos);
            this.collided = true;
            this.impact = new Impact(this.power);
            return;
        }
        this.vel = this.vel.add(this.force);
        this.pos = this.pos.add(this.vel);
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
        // ctx.beginPath();
        // ctx.arc(pos.x, pos.y, this.state * this.state * .02, 0, Math.PI * 2);
        // ctx.fillStyle = '#ff8800';
        // ctx.closePath();
        // ctx.fill();
        // ctx.beginPath();
        // ctx.arc(pos.x, pos.y, this.state * this.state * .01, 0, Math.PI * 2);
        // ctx.fillStyle = '#ffff00';
        // ctx.closePath();
        // ctx.fill();
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
        _this.highPoint
            .subscribe(function (p) {
            _this.collided = true;
            game.launch(new __WEBPACK_IMPORTED_MODULE_2__small_missile__["a" /* SmallMissile */]({
                pos: p,
                vel: _this.vel.add(new __WEBPACK_IMPORTED_MODULE_1__v2__["a" /* V2 */](Math.random() * 2 - 1, Math.random() * 2 - 1))
            }));
            game.launch(new __WEBPACK_IMPORTED_MODULE_2__small_missile__["a" /* SmallMissile */]({
                pos: p,
                vel: _this.vel.add(new __WEBPACK_IMPORTED_MODULE_1__v2__["a" /* V2 */](Math.random() * 2 - 1, Math.random() * 2 - 1))
            }));
            game.launch(new __WEBPACK_IMPORTED_MODULE_2__small_missile__["a" /* SmallMissile */]({
                pos: p,
                vel: _this.vel.add(new __WEBPACK_IMPORTED_MODULE_1__v2__["a" /* V2 */](Math.random() * 2 - 1, Math.random() * 2 - 1))
            }));
            game.launch(new __WEBPACK_IMPORTED_MODULE_2__small_missile__["a" /* SmallMissile */]({
                pos: p,
                vel: _this.vel.add(new __WEBPACK_IMPORTED_MODULE_1__v2__["a" /* V2 */](Math.random() * 2 - 1, Math.random() * 2 - 1))
            }));
            game.launch(new __WEBPACK_IMPORTED_MODULE_2__small_missile__["a" /* SmallMissile */]({
                pos: p,
                vel: _this.vel.add(new __WEBPACK_IMPORTED_MODULE_1__v2__["a" /* V2 */](Math.random() * 2 - 1, Math.random() * 2 - 1))
            }));
            game.launch(new __WEBPACK_IMPORTED_MODULE_2__small_missile__["a" /* SmallMissile */]({
                pos: p,
                vel: _this.vel.add(new __WEBPACK_IMPORTED_MODULE_1__v2__["a" /* V2 */](Math.random() * 2 - 1, Math.random() * 2 - 1))
            }));
        });
        return _this;
    }
    return SpreadMissile;
}(__WEBPACK_IMPORTED_MODULE_0__missile__["a" /* Missile */]));



/***/ }),

/***/ "../../../../../src/app/game/player.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v2__ = __webpack_require__("../../../../../src/app/game/v2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__missiles_large_bomb_missile__ = __webpack_require__("../../../../../src/app/game/missiles/large-bomb-missile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__missiles_spread_missile__ = __webpack_require__("../../../../../src/app/game/missiles/spread-missile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__missiles_small_missile__ = __webpack_require__("../../../../../src/app/game/missiles/small-missile.ts");




var Player = (function () {
    function Player(color, xPos, landscape, game) {
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
        this.fuel = 120;
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
                count: 4,
                missile: __WEBPACK_IMPORTED_MODULE_1__missiles_large_bomb_missile__["a" /* LargeBombMissile */]
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
        this.setForce(this.force);
    };
    Player.prototype.launch = function () {
        var rotation = this.vehicleRotation + this.bezelRotation;
        var force = this.force * .04;
        var vel = new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](Math.cos(rotation) * force, Math.sin(rotation) * force);
        var verticalVehicleRotation = this.vehicleRotation + Math.PI / 2;
        this.game.audio.play('missileLaunch');
        this.game.launch(new (this.missiles[this.activeMissileIndex].missile)({
            pos: this.pos
                .add(new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](Math.cos(verticalVehicleRotation) * this.bezelOffset, Math.sin(verticalVehicleRotation) * this.bezelOffset))
                .add(new __WEBPACK_IMPORTED_MODULE_0__v2__["a" /* V2 */](Math.cos(rotation) * this.bezelLength, Math.sin(rotation) * this.bezelLength)),
            vel: vel,
            game: this.game,
        }));
        this.game.switchPlayer();
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
        ctx.strokeStyle = '#000800';
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(Math.cos(this.bezelRotation) * (this.bezelLength - 2), Math.sin(this.bezelRotation) * (this.bezelLength - 2) + this.bezelOffset);
        ctx.lineTo(Math.cos(this.bezelRotation) * this.bezelLength, Math.sin(this.bezelRotation) * this.bezelLength + this.bezelOffset);
        ctx.closePath();
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = '#001000';
        ctx.stroke();
        // torso
        ctx.beginPath();
        ctx.moveTo(-this.dim.x / 2, 2);
        ctx.lineTo(this.dim.x / 2, 2);
        ctx.lineTo(this.dim.x / 2 - 2, this.height + 2);
        ctx.lineTo(-this.dim.x / 2 + 2, this.height + 2);
        ctx.fillStyle = '#002000';
        ctx.fill();
        ctx.closePath();
        ctx.fillRect(-4, 4, 8, 5);
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

module.exports = "<div (touchmove)=\"change($event)\" class=\"wrapper\">\n  <div class=\"shape\">\n    <div [style.height]=\"game.currentPlayer.health + '%'\" class=\"health\"></div>\n    <div [style.height]=\"game.currentPlayer.force + '%'\" class=\"indicator\"></div>\n  </div>\n</div>\n"

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
    return V2;
}());



/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Arms Race</h1>\n<section name=\"fullscreen\">\n    <button class=\"btn fullscreen-btn\">Play in Fullscreen</button>\n</section>\n<section name=\"choose-player1\">\n    <input type=\"text\" id=\"player1-name\" placeholder=\"Player 1 Name\"><br>\n    <button class=\"btn toplayer2-btn\">Set Player 2</button>\n</section>\n<section name=\"choose-player2\">\n    <input type=\"text\" id=\"player1-name\" placeholder=\"Player 2 Name\"><br>\n    <button class=\"btn start-btn\">Start Game!</button>\n</section>\n<img style=\"display: none;\" src=\"https://i.pinimg.com/736x/f4/85/99/f48599bcbe27682a0f98a2d9838adf40--texture-snow.jpg\" id=\"bg\" alt=\"\">\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-size: cover;\n  color: rgba(0, 0, 0, 0.8);\n  text-align: center;\n  background: #fff; }\n  :host h1 {\n    text-align: center;\n    margin: 0;\n    padding: 0 0 24px;\n    font-size: 20pt;\n    line-height: 48px;\n    height: 48px;\n    letter-spacing: 2px;\n    color: #311B92; }\n  :host .btn {\n    display: inline-block;\n    padding: 0 16px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    line-height: 42px;\n    color: #fff;\n    text-transform: uppercase;\n    height: 42px;\n    letter-spacing: 1px;\n    width: 220px;\n    box-sizing: border-box; }\n  :host input {\n    display: inline-block;\n    background: rgba(255, 255, 255, 0.8);\n    border: 2px solid black;\n    height: 42px;\n    line-height: 42px;\n    text-align: center;\n    font-size: 16pt;\n    color: rgba(0, 0, 0, 0.8);\n    width: 220px;\n    margin-bottom: 16px;\n    box-sizing: border-box; }\n", ""]);

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
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
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
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
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