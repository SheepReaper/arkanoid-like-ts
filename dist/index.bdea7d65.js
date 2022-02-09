// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hcLVl":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "222e65dabdea7d65";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7PGg5":[function(require,module,exports) {
var _typings = require("./typings");
var _canvas = require("./typings/canvas");
var _assets = require("./assets");
let gameOver = false;
let score = 0;
const setGameOver = (view)=>{
    view.drawInfo("Game Over!");
    gameOver = false;
};
const setGameWin = (view)=>{
    view.drawInfo("Game Won!");
    gameOver = false;
};
const gameLoop = (canvas, bricks, paddle, ball, collisionModel)=>{
    console.log([
        "draw"
    ]);
    canvas.clear();
    canvas.drawObjects(bricks, paddle, ball);
    ball.stepBall();
    if (paddle.isMovingLeft && paddle.pos.x > 0 || paddle.isMovingRight && paddle.pos.x < canvas.width - paddle.width) paddle.movePaddle();
// Collider.
};
const buttonHandler = (canvas)=>{
    console.log([
        "button pressed, have canvas?",
        canvas
    ]);
};
const main = ()=>{
    const canvas = new _canvas.GameCanvas({
        StartButtonFunc: buttonHandler
    });
    const ball = new _typings.Ball();
    ball.height = 30;
    ball.width = 30;
    ball.pos = {
        x: 300,
        y: 30
    };
    ball.image = new Image(30, 30);
    ball.image.src = _assets.BALL;
    canvas.clear();
    canvas.drawObjects(ball);
    console.log(ball);
};
// console.log(["hello", BALL_START.x]);
main();

},{"./typings":"cGFhv","./typings/canvas":"43yb2","./assets":"aITKg"}],"cGFhv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameCanvas", ()=>_canvas.GameCanvas
);
parcelHelpers.export(exports, "XYnumber", ()=>XYnumber
);
parcelHelpers.export(exports, "supportedRenderContextModes", ()=>supportedRenderContextModes
);
parcelHelpers.export(exports, "isSupportedRenderContextMode", ()=>isSupportedRenderContextMode
);
parcelHelpers.export(exports, "Drawable", ()=>Drawable
);
parcelHelpers.export(exports, "Brick", ()=>Brick
);
parcelHelpers.export(exports, "Paddle", ()=>Paddle
);
parcelHelpers.export(exports, "Ball", ()=>Ball
);
parcelHelpers.export(exports, "Collider", ()=>Collider
);
parcelHelpers.export(exports, "CollisionModel", ()=>CollisionModel
);
var _canvas = require("./canvas");
class XYnumber {
    constructor(){
        this.x = 0;
        this.y = 0;
    }
}
const supportedRenderContextModes = [
    "2d"
];
const isSupportedRenderContextMode = (contextMode)=>supportedRenderContextModes.some((mode)=>mode === contextMode
    )
;
class Boundable {
    constructor(){
        this.pos = new XYnumber();
        this.width = 0;
        this.height = 0;
    }
}
class Collidable extends Boundable {
    constructor(collisionBoxAnchor = AnchorPoint1.bottomLeft){
        super();
        this.collisionBox = new CollisionBox(this, collisionBoxAnchor);
    }
}
class Drawable extends Collidable {
    translate(newPos, absolute = false) {
        this.pos.x = (absolute ? 0 : this.pos.x) + newPos.x;
        this.pos.y = (absolute ? 0 : this.pos.y) + newPos.y;
    }
    constructor(...args){
        super(...args);
        this.image = {
        };
    }
}
class Brick extends Drawable {
}
class Paddle extends Drawable {
    movePaddle() {
    }
    constructor(...args1){
        super(...args1);
        this.isMovingLeft = false;
        this.isMovingRight = false;
    }
}
class Ball extends Drawable {
    invertXSpeed() {
        this.speed.x /= -1;
    }
    invertYSpeed() {
        this.speed.y /= -1;
    }
    stepBall() {
        this.translate(this.speed);
        if (this.paddleCollider) {
            if (this.paddleCollider.currentCollision) this.invertYSpeed();
        }
    }
    constructor(...args2){
        super(...args2);
        this.speed = new XYnumber();
    }
}
var AnchorPoint1;
(function(AnchorPoint) {
    AnchorPoint[AnchorPoint["bottomLeft"] = 0] = "bottomLeft";
    AnchorPoint[AnchorPoint["center"] = 1] = "center";
})(AnchorPoint1 || (AnchorPoint1 = {
}));
class CollisionBox {
    constructor(obj, anchor = AnchorPoint1.bottomLeft){
        this.obj = obj;
        this.anchor = anchor;
    }
    get xBounds() {
        switch(this.anchor){
            case AnchorPoint1.bottomLeft:
                return {
                    l: this.obj.pos.x,
                    h: this.obj.pos.x + this.obj.width
                };
            case AnchorPoint1.center:
                return {
                    l: this.obj.pos.x - this.obj.width / 2,
                    h: this.obj.pos.x + this.obj.width / 2
                };
        }
    }
    get yBounds() {
        switch(this.anchor){
            case AnchorPoint1.bottomLeft:
                return {
                    l: this.obj.pos.y,
                    h: this.obj.pos.y + this.obj.height
                };
            case AnchorPoint1.center:
                return {
                    l: this.obj.pos.y - this.obj.height / 2,
                    h: this.obj.pos.y + this.obj.height / 2
                };
        }
    }
}
class Collider {
    constructor(obj1, obj2){
        this.obj1 = obj1;
        this.obj2 = obj2;
    }
    get currentCollision() {
        const { xBounds: { l: ax1 , h: ax2  } , yBounds: { l: ay1 , h: ay2  } ,  } = this.obj1.collisionBox;
        const { xBounds: { l: bx1 , h: bx2  } , yBounds: { l: by1 , h: by2  } ,  } = this.obj2.collisionBox;
        return ax1 <= bx2 && bx1 <= ax2 && ay1 <= by2 && by1 <= ay2;
    }
}
class CollisionModel {
}

},{"./canvas":"43yb2","@parcel/transformer-js/src/esmodule-helpers.js":"j65Ap"}],"43yb2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameCanvas", ()=>GameCanvas
);
var _config = require("../config");
class GameCanvas {
    #canvas;
    #context;
    #scoreDisplay;
    #start;
    #info;
    constructor(options){
        const opts = Object.assign({
        }, GameCanvas.Defaults, options);
        this.#canvas = document.querySelector(opts.CanvasElemSelector);
        this.#context = this.#canvas?.getContext(opts.RenderContextMode) ?? null;
        this.#scoreDisplay = document.querySelector(opts.ScoreElemSelector);
        this.#start = document.querySelector(opts.StartButtonSelector);
        this.#info = document.querySelector(opts.InfoBoxElemSelector);
        this.#start?.addEventListener("click", ()=>opts.StartButtonFunc(this)
        );
    }
    clear() {
        this.#context?.clearRect(0, 0, this.#canvas?.width ?? 0, this.#canvas?.height ?? 0);
    }
    drawScore(score) {
        if (this.#scoreDisplay) this.#scoreDisplay.innerHTML = score.toString();
    }
    drawInfo(text) {
        if (this.#info) this.#info.innerHTML = text;
    }
    drawObject({ image , pos: { x , y  } , width , height  }) {
        this.#context?.drawImage(image, x, y, width, height);
    }
    drawObjectArray(drawables) {
        drawables.map((drawable)=>this.drawObject(drawable)
        );
    }
    drawObjects(...drawables1) {
        drawables1.map((drawable)=>Array.isArray(drawable) ? this.drawObjects(...drawable) : this.drawObject(drawable)
        );
    }
    get width() {
        return this.#canvas?.width ?? 0;
    }
}
GameCanvas.Defaults = {
    CanvasElemSelector: _config.SELECTOR_CANVAS,
    ScoreElemSelector: _config.SELECTOR_SCORE_BOX,
    StartButtonSelector: _config.SELECTOR_START_BUTTON,
    InfoBoxElemSelector: _config.SELECTOR_INFO_BOX,
    RenderContextMode: "2d",
    StartButtonFunc: ()=>{
    }
};

},{"../config":"bpXeT","@parcel/transformer-js/src/esmodule-helpers.js":"j65Ap"}],"bpXeT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PADDLE_SPEED", ()=>PADDLE_SPEED
);
parcelHelpers.export(exports, "PADDLE_WIDTH", ()=>PADDLE_WIDTH
);
parcelHelpers.export(exports, "PADDLE_HEIGHT", ()=>PADDLE_HEIGHT
);
parcelHelpers.export(exports, "PADDLE_START_X", ()=>PADDLE_START_X
);
parcelHelpers.export(exports, "BALL_SPEED", ()=>BALL_SPEED
);
parcelHelpers.export(exports, "BALL_SIZE", ()=>BALL_SIZE
);
parcelHelpers.export(exports, "BALL_START", ()=>BALL_START
);
parcelHelpers.export(exports, "BALL_START_X", ()=>BALL_START_X
);
parcelHelpers.export(exports, "BALL_START_Y", ()=>BALL_START_Y
);
parcelHelpers.export(exports, "SELECTOR_CANVAS", ()=>SELECTOR_CANVAS
);
parcelHelpers.export(exports, "SELECTOR_SCORE_BOX", ()=>SELECTOR_SCORE_BOX
);
parcelHelpers.export(exports, "SELECTOR_START_BUTTON", ()=>SELECTOR_START_BUTTON
);
parcelHelpers.export(exports, "SELECTOR_INFO_BOX", ()=>SELECTOR_INFO_BOX
);
const PADDLE_SPEED = 0;
const PADDLE_WIDTH = 0;
const PADDLE_HEIGHT = 0;
const PADDLE_START_X = 0;
const BALL_SPEED = 0;
const BALL_SIZE = 0;
const BALL_START = {
    x: 0,
    y: 0
};
const BALL_START_X = BALL_START.x;
const BALL_START_Y = BALL_START.y;
const SELECTOR_CANVAS = "#playField";
const SELECTOR_SCORE_BOX = "#score";
const SELECTOR_START_BUTTON = "#start";
const SELECTOR_INFO_BOX = "#info";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j65Ap"}],"j65Ap":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aITKg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sprites = require("./sprites");
parcelHelpers.exportAll(_sprites, exports);

},{"./sprites":"1LBRD","@parcel/transformer-js/src/esmodule-helpers.js":"j65Ap"}],"1LBRD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BALL", ()=>_ballPngDefault.default
);
parcelHelpers.export(exports, "BRICK", ()=>brick_sprites
);
parcelHelpers.export(exports, "PADDLE", ()=>_paddlePngDefault.default
);
var _ballPng = require("./ball.png");
var _ballPngDefault = parcelHelpers.interopDefault(_ballPng);
var _brickBluePng = require("./brick-blue.png");
var _brickBluePngDefault = parcelHelpers.interopDefault(_brickBluePng);
var _brickGreenPng = require("./brick-green.png");
var _brickGreenPngDefault = parcelHelpers.interopDefault(_brickGreenPng);
var _brickPurplePng = require("./brick-purple.png");
var _brickPurplePngDefault = parcelHelpers.interopDefault(_brickPurplePng);
var _brickRedPng = require("./brick-red.png");
var _brickRedPngDefault = parcelHelpers.interopDefault(_brickRedPng);
var _brickYellowPng = require("./brick-yellow.png");
var _brickYellowPngDefault = parcelHelpers.interopDefault(_brickYellowPng);
var _paddlePng = require("./paddle.png");
var _paddlePngDefault = parcelHelpers.interopDefault(_paddlePng);
const brick_sprites = {
    BLUE: _brickBluePngDefault.default,
    GREEN: _brickGreenPngDefault.default,
    PURPLE: _brickPurplePngDefault.default,
    RED: _brickRedPngDefault.default,
    YELLOW: _brickYellowPngDefault.default
};

},{"./ball.png":"kivdo","./brick-blue.png":"4QDML","./brick-green.png":"ihdZr","./brick-purple.png":"5cusP","./brick-red.png":"ftE29","./brick-yellow.png":"azCHA","./paddle.png":"6r5wp","@parcel/transformer-js/src/esmodule-helpers.js":"j65Ap"}],"kivdo":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "ball.c6ae50d8.png" + "?" + Date.now();

},{"./helpers/bundle-url":"6Qg0z"}],"6Qg0z":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"4QDML":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "brick-blue.7549404a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"6Qg0z"}],"ihdZr":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "brick-green.b1b71ced.png" + "?" + Date.now();

},{"./helpers/bundle-url":"6Qg0z"}],"5cusP":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "brick-purple.488957c1.png" + "?" + Date.now();

},{"./helpers/bundle-url":"6Qg0z"}],"ftE29":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "brick-red.1261a1a6.png" + "?" + Date.now();

},{"./helpers/bundle-url":"6Qg0z"}],"azCHA":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "brick-yellow.9ea02956.png" + "?" + Date.now();

},{"./helpers/bundle-url":"6Qg0z"}],"6r5wp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "paddle.d216b6c7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"6Qg0z"}]},["hcLVl","7PGg5"], "7PGg5", "parcelRequire0a99")

//# sourceMappingURL=index.bdea7d65.js.map
