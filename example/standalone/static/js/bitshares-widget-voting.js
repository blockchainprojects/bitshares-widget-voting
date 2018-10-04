webpackJsonp([1],{

/***/ "/538":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"widget--copyright"},[_c('a',{attrs:{"href":"https://github.com/blockchainprojects/bitshares-widget-voting"}},[_vm._v("GitHub")]),_vm._v(" ©\n    "),_c('a',{attrs:{"href":"http://www.blockchainprojectsbv.com/","target":"_blank"}},[_vm._v("Blockchain Projects BV")]),_vm._v(" "),_c('a',{attrs:{"href":"http://www.blockchainprojectsbv.com/","target":"_blank"}},[_c('img',{attrs:{"src":__webpack_require__("7Otq")}})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "05Ij":
/***/ (function(module, exports) {

module.exports = {"secp128r1":{"p":"fffffffdffffffffffffffffffffffff","a":"fffffffdfffffffffffffffffffffffc","b":"e87579c11079f43dd824993c2cee5ed3","n":"fffffffe0000000075a30d1b9038a115","h":"01","Gx":"161ff7528b899b2d0c28607ca52c5b86","Gy":"cf5ac8395bafeb13c02da292dded7a83"},"secp160k1":{"p":"fffffffffffffffffffffffffffffffeffffac73","a":"00","b":"07","n":"0100000000000000000001b8fa16dfab9aca16b6b3","h":"01","Gx":"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb","Gy":"938cf935318fdced6bc28286531733c3f03c4fee"},"secp160r1":{"p":"ffffffffffffffffffffffffffffffff7fffffff","a":"ffffffffffffffffffffffffffffffff7ffffffc","b":"1c97befc54bd7a8b65acf89f81d4d4adc565fa45","n":"0100000000000000000001f4c8f927aed3ca752257","h":"01","Gx":"4a96b5688ef573284664698968c38bb913cbfc82","Gy":"23a628553168947d59dcc912042351377ac5fb32"},"secp192k1":{"p":"fffffffffffffffffffffffffffffffffffffffeffffee37","a":"00","b":"03","n":"fffffffffffffffffffffffe26f2fc170f69466a74defd8d","h":"01","Gx":"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d","Gy":"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},"secp192r1":{"p":"fffffffffffffffffffffffffffffffeffffffffffffffff","a":"fffffffffffffffffffffffffffffffefffffffffffffffc","b":"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1","n":"ffffffffffffffffffffffff99def836146bc9b1b4d22831","h":"01","Gx":"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012","Gy":"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},"secp256k1":{"p":"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f","a":"00","b":"07","n":"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141","h":"01","Gx":"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","Gy":"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},"secp256r1":{"p":"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff","a":"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc","b":"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b","n":"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551","h":"01","Gx":"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296","Gy":"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1QQ/":
/***/ (function(module, exports) {

module.exports = {"_args":[["bigi@1.4.2","/home/schiessl/Projekte/BlockchainProjectsBV/bitshares-widget-voting"]],"_from":"bigi@1.4.2","_id":"bigi@1.4.2","_inBundle":false,"_integrity":"sha1-nGZalfiLiwj8Bc/XMfVhhZ1yWCU=","_location":"/bigi","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"bigi@1.4.2","name":"bigi","escapedName":"bigi","rawSpec":"1.4.2","saveSpec":null,"fetchSpec":"1.4.2"},"_requiredBy":["/bitsharesjs","/ecurve"],"_resolved":"https://registry.npmjs.org/bigi/-/bigi-1.4.2.tgz","_spec":"1.4.2","_where":"/home/schiessl/Projekte/BlockchainProjectsBV/bitshares-widget-voting","bugs":{"url":"https://github.com/cryptocoinjs/bigi/issues"},"dependencies":{},"description":"Big integers.","devDependencies":{"coveralls":"^2.11.2","istanbul":"^0.3.5","jshint":"^2.5.1","mocha":"^2.1.0","mochify":"^2.1.0"},"homepage":"https://github.com/cryptocoinjs/bigi#readme","keywords":["cryptography","math","bitcoin","arbitrary","precision","arithmetic","big","integer","int","number","biginteger","bigint","bignumber","decimal","float"],"main":"./lib/index.js","name":"bigi","repository":{"url":"git+https://github.com/cryptocoinjs/bigi.git","type":"git"},"scripts":{"browser-test":"mochify --wd -R spec","coverage":"istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js","coveralls":"npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info","jshint":"jshint --config jshint.json lib/*.js ; true","test":"_mocha -- test/*.js","unit":"mocha"},"testling":{"files":"test/*.js","harness":"mocha","browsers":["ie/9..latest","firefox/latest","chrome/latest","safari/6.0..latest","iphone/6.0..latest","android-browser/4.2..latest"]},"version":"1.4.2"}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "6+xy":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "7Otq":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAbCAYAAABr/T8RAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAOVMAADlTAEwgkdBAAAAB3RJTUUH4QsVDjALQ9E2SgAABxxJREFUSMeVlnlw1OUZxz/Pu5vdbLKbbEJIuGIC4QiH4QggAREhQA21LXY4mkMpMFAYtIg0Fo/aYhFrIUChjJSiMpHqIFDsVGCsjcCUZiAloETuI1xBcpKbze7+fm//WBJygeM785v5/fHOc3yf7/f7PsJDjtYaEUFrvd009ay7TV4NSLtPNf+HBNtERG5orZOVUhUPiy18x9FaD6ysqTvpsNnsnx4+jtfnBw263b2wUAcTkwfyQe6+iuW//Nl6EVndXPj3Styq2x37j3yV6Q4LxWG38Z+T57BaVJu7hmHw00mPsfjFNRwtKPKeP/6RNcLtihKROw+Krx4IRSDphJr6xswbpZWcuXKTxPjudI1woVu1a2pNSlJ/rhWXcOCLY5RX1dney92ngG0PQ1I9qFvTMARYW3iuGL9h4PH6OHG2mNTRg2mNXliIgyF9Y5me+RqG1iiLhewVG7lTXZ+mtR74vRKLCKLU+NsVNclFF68jIigRCs9dRRB6RUeigYa7TUxNSWLOL96ivLLm/jyD7SxausYBrGpu5PvMOH933rGUsqraDiRSSqiqbWD04AQsXh9jp72A32+2ueew2zhxaCv9+8aOF5Ej7eNbH5B07s2yypQbpZUd6Fvm9QHgdoYwJKEXA5Kz8FbVgW6buMEweT57A//am7Nea50C+Fsz3Np+tkAI8KrbGUpW2uOdQqKBMKeDJcs3UHK7kl273mFQ/7g2NQrg8XoBRgLjReRga3lJJ/KZceqby7u6RIbprIWrTMPUnZJvcGK8ypg5RSaMm8PQ8cmEOUPa3PH7DbKXppP6ZDIhwbbzQVZr4kNn3NDoqe6XNDP8n3tyePHlP3Gk8GynXSsRThzcyvaPDrDu3d2odtqOCHNyJv8DPjtWxFMpQ+nR1f1rEfljp6zWWufkHSoMv1VZy7IVm/jz2pfQ1XVtAlpEcNiD8BsGWQtXkb00g3BXSJsWTL/B7OlPUlrfQF3DXQ4ePw2wRGsd3sxwS6uk0cC746Yscnp8BtdLypiXlUZYFzf5x4oQpTBNkxk/mcCC555m//58SsuriImJZEDCI+QfDdwBsPhN8vZv5MuCbzBMk0ZPE3ZbUHi3Lu6LInJSa41qpbHM1996L6ayqvberGHe4rdZsSwDtysUAJsIq3+zgE1b96LsQShbEOs372TFsgx6x8YEjMdvsGn9S5TeqaW20RMoRCm+vnANr8+/0TBM1z1fELTWroqK6nXbP9yHstsCM1BC0Zliduz8gvRZkzE9XnJWP8/pc1c5d/FaC6zflt7hr7mf8bvX5qMNk14xkcx+ZiKf53+NaiWf+kYPV26WhSolm1rLaesnew9SUlqFslruE8hmZc3Gjxk9chBdY7ow85mJDB07twVSAGW18OobW0BrUIqszDQu3CrHbxhYlGrD48MnztInNnq61jpOtNa9GxrvnnJGT3Uqh61TFzO9Pv7w5iLKyqtZt3knymrtRGIQFmyj+uYB3v/HITw+X7vEARkOiu/FE8mJq61A9o6PP3dOTh1ltn/ums0iyKIka+ZUSRo7h/i4HgzqG9vBfw3TZNmSWRRdvkGjx0tG2jgMw+gQz2qxAKSL1vrSt+XVCU0Bl+n0OEMdnDlzhQlpL5A+awo/z0jDMI0OFU56fDgHjp6ipKwKpVQH/fsNk9RRgxnYp+cs0VqnXSkp278nrwBbkLVdrMCq4TdN5j79BNPTX+FI/inw+tp6j2mAhvRnp5G77Q227cnDbIeI1poot4vZU1OKTa2HidbaAhQcPnF2RNGlG22YqJTgDHFQU9dAtyg3IxJi6RM/DRUVeT+nqRk5rB+niy5z19PEh+//lm6PdOP81Vsd1p4ZqaOJjgxfLCJblIgYwMIRA+Kxt+pYa81TKUMZPiAeDZRW1uByu1i9djmm/z7MURFO8j5dR58+PcEWxMpV2xiV2LsDet2j3HSNCC8UkS0tBiIiha5QxztDEmIxzcDzFuEKJToyjH8XFLWgsPfL/7Fw7o/oHh0BEmD70sUzydn8CafPFqNEuHS9lG25+/jh+OEtBKxv9JA6erAhwpLmRaPZQADWpiT1K3OGBOP1+Xns0b4cLjyHtZUkmrxeLtwq5/Xs5zBrG+nXuydL5k9n81/+jrIHBcZjUfzqlQ00NTTRLSoC09SMG9afsNCQ/Cafr6C5GNWy6ohUABunjHmUxPgeRLldXLtd3mZOSimKLlxn/pwfM/kHY9iZu5K3c/5GZU1dm4VB7MFkLniTSaMGATC0XxzAvGCbTT/wPTYMo0gpNeS/X53nyq1yBLnHbo1GMLVJYlwPkhJ6UXK7kqQxzxIV3TWgJ61prkBrze7tK+nbP44ot2uNiLz8XYvAQOD3TV6fBNZXFOhgrbGDtgPBWmMPddjttfWN9sZGj13ALmAn8LVYmSPEIS5XSBkwQkRKWpPt/02ZJFWps6g0AAAAAElFTkSuQmCC"

/***/ }),

/***/ "HRYS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "MHHs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/bitsharesjs/es/index.js + 29 modules
var es = __webpack_require__("0xiO");

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("bOdI");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__("fZjL");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("pFYg");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("Zrlr");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__("wxAW");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/bitsharesjs-ws/cjs/index.js
var cjs = __webpack_require__("B9kd");
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);

// CONCATENATED MODULE: ./src/chain.js






var chain_Blockchain = function () {
    function Blockchain() {
        classCallCheck_default()(this, Blockchain);

        this._nodes = ["wss://eu.nodes.bitshares.ws", "wss://us.nodes.bitshares.ws", "wss://sg.nodes.bitshares.ws", "wss://japan.bitshares.apasia.tech/ws"];
        this._apiInstance = null;
        this._connected = false;
        this._connectingInProgress = false;

        this._resolves = [];
        this._rejects = [];
    }

    createClass_default()(Blockchain, [{
        key: 'connect',
        value: function connect() {
            var _this = this;

            if (this._connected) {
                return new promise_default.a(function (resolve, reject) {
                    resolve();
                });
            } else {
                if (this._connectingInProgress) {
                    return new promise_default.a(function (resolve, reject) {
                        _this._resolves.push(resolve);
                        _this._rejects.push(reject);
                    });
                } else {
                    return new promise_default.a(function (resolve, reject) {
                        _this._connect(null, resolve, reject);
                    });
                }
            }
        }
    }, {
        key: '_onConnect',
        value: function _onConnect() {
            this._resolves.forEach(function (resolve) {
                resolve();
            });
        }
    }, {
        key: '_onError',
        value: function _onError(err) {
            this._rejects.forEach(function (reject) {
                reject();
            });
        }
    }, {
        key: '_connect',
        value: function _connect() {
            var idx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var _this2 = this;

            var resolve = arguments[1];
            var reject = arguments[2];

            this._connected = false;
            this._connectingInProgress = true;
            if (idx == null) {
                idx = 0;
            }
            // one is selected now, should probably be randomized
            this._apiInstance = cjs["Apis"].instance(this._nodes[idx], true);
            this._apiInstance.init_promise.then(function () {
                es["a" /* ChainStore */].init().then(function () {
                    // fetch now for quicker cashing
                    es["a" /* ChainStore */].fetchObject('2.1.0');
                    _this2._connectingInProgress = false;
                    _this2._connected = true;
                    resolve();
                    _this2._onConnect();
                });
            }).catch(function (err) {
                idx = idx + 1;
                if (idx > _this2._nodes.length - 1) {
                    _this2._connectingInProgress = false;
                    reject(err);
                    _this2._onError();
                }
                _this2._apiInstance.close().then(function () {
                    _this2._apiInstance = null;
                    _this2._connect(idx, resolve, reject);
                });
            });
        }
    }, {
        key: 'db_exec',
        value: function db_exec(callName, argumentsList) {
            return this._apiInstance._db.exec(callName, argumentsList);
        }
    }]);

    return Blockchain;
}();

var chain = new chain_Blockchain();
/* harmony default export */ var src_chain = (chain);
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/socket.io-client/lib/index.js
var lib = __webpack_require__("DmT9");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/lib/beet-js/lib/CompanionClient.js








var CompanionClient__this = this;



var host = 'http://127.0.0.1:60555';

var socket = null;
var CompanionClient_connected = false;

var CompanionClient_plugin = void 0;
var openRequests = [];

var allowReconnects = true;
var reconnectionTimeout = null;

var reconnectOnAbnormalDisconnection = function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (allowReconnects) {
                            _context.next = 2;
                            break;
                        }

                        return _context.abrupt('return');

                    case 2:

                        clearTimeout(reconnectionTimeout);
                        reconnectionTimeout = setTimeout(function () {
                            CompanionClient_CompanionClient.link();
                        }, 1000);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, CompanionClient__this);
    }));

    return function reconnectOnAbnormalDisconnection() {
        return _ref.apply(this, arguments);
    };
}();

var CompanionClient_CompanionClient = function () {
    function CompanionClient() {
        classCallCheck_default()(this, CompanionClient);
    }

    createClass_default()(CompanionClient, null, [{
        key: 'init',
        value: function init(_plugin) {
            var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60000;

            CompanionClient_plugin = _plugin;

            this.timeout = timeout;
        }
    }, {
        key: 'link',
        value: function () {
            var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee8() {
                var _this2 = this;

                return regenerator_default.a.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                return _context8.abrupt('return', promise_default.a.race([new promise_default.a(function (resolve, reject) {
                                    return setTimeout(asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
                                        return regenerator_default.a.wrap(function _callee2$(_context2) {
                                            while (1) {
                                                switch (_context2.prev = _context2.next) {
                                                    case 0:
                                                        if (!CompanionClient_connected) {
                                                            _context2.next = 2;
                                                            break;
                                                        }

                                                        return _context2.abrupt('return');

                                                    case 2:
                                                        resolve(false);

                                                        if (socket) {
                                                            socket.disconnect();
                                                            socket = null;
                                                        }

                                                        reconnectOnAbnormalDisconnection();

                                                    case 5:
                                                    case 'end':
                                                        return _context2.stop();
                                                }
                                            }
                                        }, _callee2, _this2);
                                    })), _this2.timeout);
                                }), new promise_default.a(function () {
                                    var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee7(resolve, reject) {
                                        return regenerator_default.a.wrap(function _callee7$(_context7) {
                                            while (1) {
                                                switch (_context7.prev = _context7.next) {
                                                    case 0:
                                                        socket = lib_default.a.connect(host + '/btscompanion', { secure: true, reconnection: false, rejectUnauthorized: false });

                                                        socket.on('connected', asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
                                                            return regenerator_default.a.wrap(function _callee3$(_context3) {
                                                                while (1) {
                                                                    switch (_context3.prev = _context3.next) {
                                                                        case 0:
                                                                            clearTimeout(reconnectionTimeout);
                                                                            CompanionClient_connected = true;
                                                                            resolve(true);

                                                                        case 3:
                                                                        case 'end':
                                                                            return _context3.stop();
                                                                    }
                                                                }
                                                            }, _callee3, _this2);
                                                        })));

                                                        socket.on('event', function (event) {
                                                            console.log('event', event);
                                                        });

                                                        socket.on('api', function (result) {
                                                            if (!"id" in result) {
                                                                reject("No result produced");
                                                            }
                                                            var openRequest = openRequests.find(function (x) {
                                                                return x.id === result.id;
                                                            });
                                                            if (!openRequest) return;
                                                            if (typeof_default()(result.result) === 'object' && result.result !== null && result.result.hasOwnProperty('isError')) openRequest.reject(result.result);else openRequest.resolve(result.result);
                                                        });

                                                        socket.on('disconnect', asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
                                                            return regenerator_default.a.wrap(function _callee4$(_context4) {
                                                                while (1) {
                                                                    switch (_context4.prev = _context4.next) {
                                                                        case 0:
                                                                            console.log('Disconnected');
                                                                            CompanionClient_connected = false;
                                                                            socket = null;

                                                                            // If bad disconnect, retry connection
                                                                            reconnectOnAbnormalDisconnection();

                                                                        case 4:
                                                                        case 'end':
                                                                            return _context4.stop();
                                                                    }
                                                                }
                                                            }, _callee4, _this2);
                                                        })));

                                                        socket.on('connect_error', asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
                                                            return regenerator_default.a.wrap(function _callee5$(_context5) {
                                                                while (1) {
                                                                    switch (_context5.prev = _context5.next) {
                                                                        case 0:
                                                                            allowReconnects = false;
                                                                            resolve(false);

                                                                        case 2:
                                                                        case 'end':
                                                                            return _context5.stop();
                                                                    }
                                                                }
                                                            }, _callee5, _this2);
                                                        })));

                                                        socket.on('rejected', function () {
                                                            var _ref8 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee6(reason) {
                                                                return regenerator_default.a.wrap(function _callee6$(_context6) {
                                                                    while (1) {
                                                                        switch (_context6.prev = _context6.next) {
                                                                            case 0:
                                                                                console.error('reason', reason);
                                                                                reject(reason);

                                                                            case 2:
                                                                            case 'end':
                                                                                return _context6.stop();
                                                                        }
                                                                    }
                                                                }, _callee6, _this2);
                                                            }));

                                                            return function (_x4) {
                                                                return _ref8.apply(this, arguments);
                                                            };
                                                        }());

                                                    case 7:
                                                    case 'end':
                                                        return _context7.stop();
                                                }
                                            }
                                        }, _callee7, _this2);
                                    }));

                                    return function (_x2, _x3) {
                                        return _ref4.apply(this, arguments);
                                    };
                                }())]));

                            case 1:
                            case 'end':
                                return _context8.stop();
                        }
                    }
                }, _callee8, this);
            }));

            function link() {
                return _ref2.apply(this, arguments);
            }

            return link;
        }()
    }, {
        key: 'isConnected',
        value: function isConnected() {
            return CompanionClient_connected;
        }
    }, {
        key: 'disconnect',
        value: function () {
            var _ref9 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee9() {
                return regenerator_default.a.wrap(function _callee9$(_context9) {
                    while (1) {
                        switch (_context9.prev = _context9.next) {
                            case 0:
                                socket.disconnect();
                                return _context9.abrupt('return', true);

                            case 2:
                            case 'end':
                                return _context9.stop();
                        }
                    }
                }, _callee9, this);
            }));

            function disconnect() {
                return _ref9.apply(this, arguments);
            }

            return disconnect;
        }()
    }, {
        key: 'sendApiRequest',
        value: function () {
            var _ref10 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee11(request) {
                var _this3 = this;

                return regenerator_default.a.wrap(function _callee11$(_context11) {
                    while (1) {
                        switch (_context11.prev = _context11.next) {
                            case 0:
                                return _context11.abrupt('return', new promise_default.a(function () {
                                    var _ref11 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee10(resolve, reject) {
                                        var origin;
                                        return regenerator_default.a.wrap(function _callee10$(_context10) {
                                            while (1) {
                                                switch (_context10.prev = _context10.next) {
                                                    case 0:
                                                        request.id = Math.round(Math.random() * 100000000 + 1);

                                                        if (request.hasOwnProperty('payload') && !request.payload.hasOwnProperty('origin')) {
                                                            origin = void 0;

                                                            if (typeof location !== 'undefined') {
                                                                if (location.hasOwnProperty('hostname') && location.hostname.length && location.hostname !== 'localhost') origin = location.hostname;else origin = CompanionClient_plugin;
                                                            } else origin = CompanionClient_plugin;

                                                            request.payload.origin = origin;
                                                        }
                                                        openRequests.push(assign_default()(request, { resolve: resolve, reject: reject }));
                                                        socket.emit('api', { data: request, plugin: CompanionClient_plugin });

                                                    case 4:
                                                    case 'end':
                                                        return _context10.stop();
                                                }
                                            }
                                        }, _callee10, _this3);
                                    }));

                                    return function (_x6, _x7) {
                                        return _ref11.apply(this, arguments);
                                    };
                                }()));

                            case 1:
                            case 'end':
                                return _context11.stop();
                        }
                    }
                }, _callee11, this);
            }));

            function sendApiRequest(_x5) {
                return _ref10.apply(this, arguments);
            }

            return sendApiRequest;
        }()
    }]);

    return CompanionClient;
}();

/* harmony default export */ var lib_CompanionClient = (CompanionClient_CompanionClient);
// EXTERNAL MODULE: ./node_modules/isomorphic-fetch/fetch-npm-browserify.js
var fetch_npm_browserify = __webpack_require__("j9g7");
var fetch_npm_browserify_default = /*#__PURE__*/__webpack_require__.n(fetch_npm_browserify);

// CONCATENATED MODULE: ./src/lib/beet-js/main.js










var main_origin = void 0;

var main_throwNoAuth = function throwNoAuth() {
    if (!holder.scatter.isExtension && !lib_CompanionClient.isConnected()) throw new Error('Connect and Authenticate first - scatter.connect( pluginName )');
};

var checkForPlugin = function checkForPlugin(resolve) {
    var tries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (tries > 20) return;
    if (holder.scatter.isExtension) return resolve(true);
    setTimeout(function () {
        return checkForPlugin(resolve, tries + 1);
    }, 100);
};

var main_BTSCompanion = function () {
    function BTSCompanion() {
        var _this = this;

        classCallCheck_default()(this, BTSCompanion);

        var noIdFunc = function noIdFunc() {
            if (!_this.identity) throw new Error('No Identity');
        };

        this.isExtension = false;
        this.identity = null;
    }

    createClass_default()(BTSCompanion, [{
        key: 'isInstalled',
        value: function () {
            var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
                return regenerator_default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt('return', new promise_default.a(function (resolve) {
                                    setTimeout(function () {
                                        resolve(false);
                                    }, 3000);

                                    promise_default.a.race([lib_CompanionClient.ping().then(function (found) {
                                        console.log('found', found);
                                        if (found) resolve(true);
                                    })]);

                                    // Tries to set up Desktop Connection
                                }));

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function isInstalled() {
                return _ref.apply(this, arguments);
            }

            return isInstalled;
        }()
    }, {
        key: 'connect',
        value: function () {
            var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3(pluginName, options) {
                var _this2 = this;

                return regenerator_default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                return _context3.abrupt('return', new promise_default.a(function (resolve) {
                                    if (!pluginName || !pluginName.length) throw new Error("You must specify a name for this connection");

                                    // Setting options defaults
                                    options = assign_default()({ initTimeout: 10000, linkTimeout: 30000 }, options);

                                    // Auto failer
                                    setTimeout(function () {
                                        resolve(false);
                                    }, options.initTimeout);

                                    // Tries to set up Desktop Connection
                                    lib_CompanionClient.init(pluginName, options.linkTimeout);
                                    lib_CompanionClient.link().then(function () {
                                        var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(authenticated) {
                                            return regenerator_default.a.wrap(function _callee2$(_context2) {
                                                while (1) {
                                                    switch (_context2.prev = _context2.next) {
                                                        case 0:
                                                            if (authenticated) {
                                                                _context2.next = 2;
                                                                break;
                                                            }

                                                            return _context2.abrupt('return', false);

                                                        case 2:
                                                            _context2.next = 4;
                                                            return _this2.getAccount();

                                                        case 4:
                                                            _this2.identity = _context2.sent;
                                                            return _context2.abrupt('return', resolve(true));

                                                        case 6:
                                                        case 'end':
                                                            return _context2.stop();
                                                    }
                                                }
                                            }, _callee2, _this2);
                                        }));

                                        return function (_x4) {
                                            return _ref3.apply(this, arguments);
                                        };
                                    }());
                                }));

                            case 1:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function connect(_x2, _x3) {
                return _ref2.apply(this, arguments);
            }

            return connect;
        }()
    }, {
        key: 'disconnect',
        value: function disconnect() {
            return lib_CompanionClient.disconnect();
        }
    }, {
        key: 'isConnected',
        value: function isConnected() {
            return lib_CompanionClient.isConnected();
        }
    }, {
        key: 'getAccount',
        value: function getAccount() {
            var _this3 = this;

            //throwNoAuth();
            return lib_CompanionClient.sendApiRequest({
                type: 'getAccount',
                payload: {
                    //        fields:requiredFields
                }
            }).then(function (id) {
                if (id) _this3.identity = id;
                return id;
            });
        }
    }, {
        key: 'requestSignature',
        value: function requestSignature(payload) {
            //throwNoAuth();
            return lib_CompanionClient.sendApiRequest({
                type: 'requestSignature',
                payload: payload
            });
        }
    }, {
        key: 'voteFor',
        value: function voteFor(payload) {
            //throwNoAuth();
            return lib_CompanionClient.sendApiRequest({
                type: 'voteFor',
                payload: payload
            });
        }
    }]);

    return BTSCompanion;
}();

var main_Holder = function Holder(_companion) {
    classCallCheck_default()(this, Holder);

    this.btscompanion = _companion;
};

var holder = new main_Holder(new main_BTSCompanion());
if (typeof window !== 'undefined') window.btscompanion = holder.btscompanion;

/* harmony default export */ var main = (holder);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/AbstractBitSharesWidget.vue
//
//
//






/* harmony default export */ var AbstractBitSharesWidget = ({
    name: 'AbstractBitSharesWidget',
    props: [],
    data: function data() {
        return {
            // state of this widget (connecting etc.)
            stateName: "Initializing",

            // if any error occured
            errorName: null,

            // installation status
            beetFound: null,
            chainConnected: null,

            // chain connectivity

            // access to beet
            holder: main,

            // access to blockchain
            chain: src_chain,

            ChainStore: es["a" /* ChainStore */],
            FetchChainObjects: es["c" /* FetchChainObjects */]
        };
    },

    created: function created() {
        var _this = this;

        setTimeout(function () {
            _this.stateName = "ConnectingToChain";
            _this._connectToChainAndStart();
        }, 1);
    },
    methods: {
        goToBeet: function goToBeet() {
            window.open('https://github.com/bitshares/beet', '_blank');
            this.beetFound = true;
        },

        errored: function errored(error) {
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

            this.stateName = "Errored";
            this.errorName = error;
        },
        _checkBeetInstallation: function _checkBeetInstallation() {
            var _this2 = this;

            this.beetFound = true;
            this.onBeetFound(true);
            this.stateName = "Done";
            return;
            // wait for new release
            this.holder.btscompanion.isInstalled().then(function (status) {
                console.log(status);
                _this2.beetFound = status;
                _this2.onBeetFound(status);
                _this2.stateName = "Done";
            }).catch(function (err) {
                _this2.errored(err);
                _this2.beetFound = false;
                _this2.onBeetFound(false);
                setTimeout(function () {
                    console.log("retrying to find beet");
                    _this2._checkBeetInstallation();
                }, 5000);
            });
        },
        setBeetInstallationStatus: function setBeetInstallationStatus(status) {
            this.beetFound = status;
            this.onBeetFound(status);
            this.stateName = "WaitingForBeet";
        },
        /**
         * connection to bitshares via bitsharesjs
         */
        _connectToChainAndStart: function _connectToChainAndStart() {
            var _this3 = this;

            // connection and then the ChainStore is initialized
            this.chain.connect().then(function () {
                _this3.chainConnected = true;
                _this3.onConnected();

                _this3.stateName = "CheckingBeetInstallation";
                _this3._checkBeetInstallation();
            }).catch(function (err) {
                _this3.errored(err);
                console.log("Connection attempt failed", err);
                _this3.chainConnected = false;
            });
        },
        onBeetFound: function onBeetFound(status) {
            // may be overwritten
        },
        onConnected: function onConnected(status) {
            // may be overwritten
        }

    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1c39305b","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/AbstractBitSharesWidget.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_AbstractBitSharesWidget = (esExports);
// CONCATENATED MODULE: ./src/components/AbstractBitSharesWidget.vue
function injectStyle (ssrContext) {
  __webpack_require__("WGfH")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  AbstractBitSharesWidget,
  components_AbstractBitSharesWidget,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_AbstractBitSharesWidget = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/AbstractBitSharesWidgetVoting.vue




//
//
//




/* harmony default export */ var AbstractBitSharesWidgetVoting = ({
    name: 'AbstractBitSharesWidgetVoting',
    props: ['workerid', 'witnessid', 'committeeid', 'innerHTML'],
    extends: src_components_AbstractBitSharesWidget,
    components: {},
    data: function data() {
        return {
            workerIds: null,
            witnessIds: null,
            committeeIds: null,

            isPopupVisible: false,
            resolveIds: true
        };
    },

    beforeMount: function beforeMount() {
        this._resolveIdsFromProps();
    },
    methods: {
        onConnected: function onConnected() {
            if (this.resolveIds) {
                this._resolveIdsOnChain();
            }
        },
        onResolvedVotingId: function onResolvedVotingId() {
            // overwrite
        },
        onResolvedVotingProps: function onResolvedVotingProps() {
            // overwrite
        },
        showPopup: function showPopup() {
            this.isPopupVisible = !this.isPopupVisible;
        },
        _resolveIdsFromProps: function _resolveIdsFromProps() {
            var _this = this;

            if (typeof this.witnessid === 'string' && this.witnessid !== "") {
                this.witnessIds = {};
                this.witnessid.split(";").forEach(function (item) {
                    _this.witnessIds[item] = {
                        "id": item,
                        "type": "Witness"
                    };
                });
            } else if (typeof_default()(this.witnessid) === 'object') {
                // already resolved

                // convert to dict that has the ids as struct
                if ("id" in this.witnessid) {
                    this.witnessIds = {};
                    this.witnessIds[this.witnessid.id] = this.witnessid;
                } else {
                    this.witnessIds = this.witnessid;
                }
            }
            if (typeof this.workerid === 'string' && this.workerid !== "") {
                this.workerIds = {};
                this.workerid.split(";").forEach(function (item) {
                    _this.workerIds[item] = {
                        "id": item,
                        "type": "Worker"
                    };
                });
            } else if (typeof_default()(this.workerid) === 'object') {
                // already resolved

                // convert to dict that has the ids as struct
                if ("id" in this.workerid) {
                    this.workerIds = {};
                    this.workerIds[this.workerid.id] = this.workerid;
                } else {
                    this.workerIds = this.workerid;
                }
            }
            if (typeof this.committeeid === 'string' && this.committeeid !== "") {
                this.committeeIds = {};
                this.committeeid.split(";").forEach(function (item) {
                    _this.committeeIds[item] = {
                        "id": item,
                        "type": "Committee"
                    };
                });
            } else if (typeof_default()(this.committeeid) === 'object') {
                // already resolved

                // convert to dict that has the ids as struct
                if ("id" in this.committeeid) {
                    this.committeeIds = {};
                    this.committeeIds[this.committeeid.id] = this.committeeid;
                } else {
                    this.committeeIds = this.committeeid;
                }
            }
            this.onResolvedVotingProps();
        },
        _resolveIdsOnChain: function _resolveIdsOnChain() {
            var _this2 = this;

            if (!!this.witnessIds && keys_default()(this.witnessIds).length > 0) {
                this.chain.db_exec('get_objects', [keys_default()(this.witnessIds)]).then(function (chainObjects) {
                    chainObjects.forEach(function (chainObject) {
                        _this2.chain.db_exec('get_objects', [[chainObject.witness_account]]).then(function (accounts) {
                            _this2.witnessIds[chainObject.id].voteId = chainObject.vote_id;
                            _this2.witnessIds[chainObject.id].object = chainObject;
                            _this2.witnessIds[chainObject.id].text = accounts[0].name;
                            _this2.witnessIds[chainObject.id].voted = null;
                            console.log("votable chain object found", _this2.witnessIds[chainObject.id]);
                            _this2.onResolvedVotingId();
                        });
                    });
                });
            }
            if (!!this.workerIds && keys_default()(this.workerIds).length > 0) {
                this.chain.db_exec('get_objects', [keys_default()(this.workerIds)]).then(function (chainObjects) {
                    chainObjects.forEach(function (chainObject) {
                        _this2.workerIds[chainObject.id].voteId = chainObject.vote_for;
                        _this2.workerIds[chainObject.id].object = chainObject;
                        _this2.workerIds[chainObject.id].text = chainObject.name;
                        _this2.workerIds[chainObject.id].voted = null;
                        console.log("votable chain object found", _this2.workerIds[chainObject.id]);
                    });
                    _this2.onResolvedVotingId();
                });
            }
            if (!!this.committeeIds && keys_default()(this.committeeIds).length > 0) {
                this.chain.db_exec('get_objects', [keys_default()(this.committeeIds)]).then(function (chainObjects) {
                    chainObjects.forEach(function (chainObject) {
                        _this2.chain.db_exec('get_objects', [[chainObject.committee_account]]).then(function (accounts) {
                            _this2.committeeIds[chainObject.id].voteId = chainObject.vote_for;
                            _this2.committeeIds[chainObject.id].object = chainObject;
                            _this2.committeeIds[chainObject.id].text = accounts[0].name;
                            _this2.committeeIds[chainObject.id].voted = null;
                            console.log("votable chain object found", _this2.committeeIds[chainObjects.id]);
                            _this2.onResolvedVotingId();
                        });
                    });
                });
            }
        },
        onBeetFound: function onBeetFound(status) {
            var _this3 = this;

            if (status) {
                // check voting status
                var thiz = this;
                this.holder.btscompanion.connect('BitShares Voting Widget - Display voting status').then(function (connected) {
                    if (connected) {
                        thiz._checkIfVoted(window.btscompanion.identity.id);
                    } else {
                        _this3.errored("Connection to Beet could not be established");
                        _this3.setBeetInstallationStatus(false);
                    }
                });
            }
        },
        _checkIfVoted: function _checkIfVoted(accountId) {
            var _this4 = this;

            var voteId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            console.log("Checking votes");
            return new promise_default.a(function (resolve, reject) {
                var thiz = _this4;
                Object(es["b" /* FetchChain */])("getAccount", accountId, undefined, defineProperty_default()({}, accountId, true)).then(function (account) {
                    account = account.toJS();
                    if (voteId == null) {
                        thiz._checkIfVotedObjects(account, thiz.witnessIds);
                        thiz._checkIfVotedObjects(account, thiz.workerIds);
                        thiz._checkIfVotedObjects(account, thiz.committeeIds);
                        resolve();
                    } else {
                        var voted = !(account.options.votes.indexOf(voteId) == -1);
                        resolve(voted);
                    }
                }).catch(function (err) {
                    reject(err);
                });
            });
        },
        _checkIfVotedObjects: function _checkIfVotedObjects(account, objectIds) {
            // iterate all voting objects
            for (var key in objectIds) {
                if (account.options.votes.indexOf(objectIds[key].voteId) == -1) {
                    objectIds[key].voted = false;
                } else {
                    objectIds[key].voted = true;
                }
            }
        },
        vote: function vote(votingObject) {
            var _this5 = this;

            var thiz = this;

            this.holder.btscompanion.connect('BitShares Voting Widget - Cast vote').then(function (connected) {
                if (connected) {
                    thiz._checkIfVoted(window.btscompanion.identity.id, votingObject.voteId).then(function (voted) {
                        if (!voted) {
                            window.btscompanion.voteFor({
                                id: thiz.beetVoteId
                            }).then(function (result) {
                                votingObject.voted = true;
                                console.log(result);
                            }).catch(function (err) {
                                votingObject.failed = true;
                                thiz.errored(err);
                            });
                        }
                    }).catch(function (err) {
                        thiz.errored(err);
                    });
                } else {
                    _this5.errored("Connection to Beet could not be established");
                    _this5.setBeetInstallationStatus(false);
                }
            }).catch(function (err) {
                _this5.errored(err);
            });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-677d80e1","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/AbstractBitSharesWidgetVoting.vue
var AbstractBitSharesWidgetVoting_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var AbstractBitSharesWidgetVoting_staticRenderFns = []
var AbstractBitSharesWidgetVoting_esExports = { render: AbstractBitSharesWidgetVoting_render, staticRenderFns: AbstractBitSharesWidgetVoting_staticRenderFns }
/* harmony default export */ var components_AbstractBitSharesWidgetVoting = (AbstractBitSharesWidgetVoting_esExports);
// CONCATENATED MODULE: ./src/components/AbstractBitSharesWidgetVoting.vue
function AbstractBitSharesWidgetVoting_injectStyle (ssrContext) {
  __webpack_require__("6+xy")
}
var AbstractBitSharesWidgetVoting_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var AbstractBitSharesWidgetVoting___vue_template_functional__ = false
/* styles */
var AbstractBitSharesWidgetVoting___vue_styles__ = AbstractBitSharesWidgetVoting_injectStyle
/* scopeId */
var AbstractBitSharesWidgetVoting___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var AbstractBitSharesWidgetVoting___vue_module_identifier__ = null
var AbstractBitSharesWidgetVoting_Component = AbstractBitSharesWidgetVoting_normalizeComponent(
  AbstractBitSharesWidgetVoting,
  components_AbstractBitSharesWidgetVoting,
  AbstractBitSharesWidgetVoting___vue_template_functional__,
  AbstractBitSharesWidgetVoting___vue_styles__,
  AbstractBitSharesWidgetVoting___vue_scopeId__,
  AbstractBitSharesWidgetVoting___vue_module_identifier__
)

/* harmony default export */ var src_components_AbstractBitSharesWidgetVoting = (AbstractBitSharesWidgetVoting_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/BitSharesWorker.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var BitSharesWorker = ({
    name: 'BitSharesWorker',
    extends: src_components_AbstractBitSharesWidgetVoting,
    data: function data() {
        return {
            starts_in: null,
            ends_in: null,
            current_in_USD: null,
            asked_in_USD: null,
            receives: null,

            loading: true,

            FetchChain: es["b" /* FetchChain */]
        };
    },

    methods: {
        onResolvedVotingProps: function onResolvedVotingProps() {
            var uniqueIdList = null;
            if (!!this.witnessIds && keys_default()(this.witnessIds).length == 1) {
                uniqueIdList = this.witnessIds;
            }
            if (!!this.workerIds && keys_default()(this.workerIds).length == 1) {
                if (uniqueIdList != null) {
                    this.text = "Please do only provide one object type for voting";
                } else {
                    uniqueIdList = this.workerIds;
                }
            }
            if (!!this.committeeIds && keys_default()(this.committeeIds).length == 1) {
                if (uniqueIdList != null) {
                    this.text = "Please do only provide one object type for voting";
                } else {
                    uniqueIdList = this.committeeIds;
                }
            }
            if (uniqueIdList == null) {
                this.text = "Please provide exactly one object type for voting";
                this.errored("Initializing failed");
            }
            this.votingObject = uniqueIdList[keys_default()(uniqueIdList)[0]];
        },
        /**
        * connection to bitshares via bitsharesjs
        */
        onResolvedVotingId: function onResolvedVotingId() {
            // enhance to allow committee and witness
            var worker = this.votingObject.object;
            this.worker = this.votingObject.object;

            var one_day = 1000 * 60 * 60 * 24;
            this.starts_in = Math.round((new Date(worker.work_begin_date + "Z") - new Date()) / one_day);

            this.ends_in = Math.round((new Date(worker.work_end_date + "Z") - new Date()) / one_day);

            var loadingDone = this.loadingDone.bind(this);

            var thiz = this;
            if (worker.worker_account == "1.2.364315") {
                fetch("https://api.workers.bitshares.foundation/v1/escrow/" + worker.id, {
                    method: "GET",
                    headers: new Headers({
                        Accept: "application/json",
                        "content-type": "application/x-www-form-urlencoded"
                    })
                }).then(function (response) {
                    response.json().then(function (json) {
                        thiz.current_in_USD = json.amounts.currency.total_max;
                        thiz.asked_in_USD = json.amounts.currency.asked;
                        thiz.receives = json.worker.receives;
                        loadingDone();
                    }).catch(function (err) {
                        // could not load escrow details
                        console.log(err);
                        loadingDone();
                    });
                }).catch(function (err) {
                    // could not load escrow details
                    console.log(err);
                    loadingDone();
                });
            } else {
                loadingDone();
            }
        },
        loadingDone: function loadingDone() {
            this.loading = false;
        },
        vote: function vote(event) {
            var thiz = this;
            this.holder.btscompanion.connect('BitShares Voting Widget').then(function (connected) {
                if (connected) {
                    //let updateObject = {account: window.btscompanion.identity.id};

                    Object(es["b" /* FetchChain */])("getAccount", window.btscompanion.identity.id, undefined, defineProperty_default()({}, window.btscompanion.identity.id, true)).then(function (account) {
                        account = account.toJS();
                        if (account.options.votes.indexOf(thiz.worker.vote_for) == -1) {
                            window.btscompanion.voteFor({
                                id: thiz.worker.id
                            }).then(function (result) {
                                thiz.votingObject.voted = true;
                                console.log(result);
                            }).catch(function (err) {
                                thiz.votingObject.failed = true;
                                console.log(err);
                            });
                            //
                            //                            let new_options = account.options;
                            //                            new_options.votes.push(thiz.worker.vote_for)
                            //                            new_options.votes = new_options.votes.sort((a, b) => {
                            //                                let a_split = a.split(":");
                            //                                let b_split = b.split(":");
                            //
                            //                                return (
                            //                                    parseInt(a_split[1], 10) - parseInt(b_split[1], 10)
                            //                                );
                            //                            });
                            //
                            //                            updateObject.new_options = new_options;
                            //                            // Set fee asset
                            //                            updateObject.fee = {
                            //                                amount: 0,
                            //                                asset_id: "1.3.0"
                            //                            };
                            //
                            //                            window.btscompanion.requestSignature(
                            //                                {
                            //                                    op_type: "account_update",
                            //                                    op_data: updateObject
                            //                                }
                            //                            ).then((result) => {
                            //                                thiz.votingMessage = "Voted";
                            //                                thiz.voted = true;
                            //                                console.log(result);
                            //                            }).catch((err) => {
                            //                                thiz.votingMessage = "Voting failed";
                            //                                thiz.voted = false;
                            //                                console.log(err);
                            //                            })
                        } else {
                            // already voted on
                            thiz.votingMessage = "Already voted";
                            thiz.voted = true;
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-29f6fe82","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/BitSharesWorker.vue
var BitSharesWorker_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.loading)?_c('div',{staticClass:"worker"},[_c('h3',[_vm._v("Worker: "+_vm._s(_vm.worker.id)+" - "+_vm._s(_vm.worker.name))]),_vm._v(" "),(_vm.receives)?_c('div',{staticClass:"status"},[(_vm.receives.daily.float > 0)?_c('div',[_vm._v("Status: Active")]):_c('div',[_vm._v("Status: Inactive")])]):_c('div',{staticClass:"status"},[_c('div',[_vm._v("Status: Unknown")])]),_vm._v(" "),_c('div',{staticClass:"time"},[(_vm.starts_in >= 0)?_c('div',[_vm._v("Starts in: "+_vm._s(_vm.starts_in)+" days")]):_vm._e(),_vm._v(" "),(_vm.starts_in < 0)?_c('div',[_vm._v("Ends in: "+_vm._s(_vm.ends_in)+" days")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"funding"},[(_vm.current_in_USD)?_c('div',[_vm._v("\n        Funds: "),_c('a',{attrs:{"href":'https://workers.bitshares.foundation/' + _vm.worker.name,"target":"_blank"}},[_vm._v(_vm._s(Math.round(_vm.current_in_USD.float).toLocaleString())+" / "+_vm._s(Math.round(_vm.asked_in_USD.float).toLocaleString())+" (USD)")])]):_c('div',[_vm._v("\n        Funds: "),_c('a',{attrs:{"href":'http://bitshares-explorer.io/#/accounts/' + _vm.worker.worker_account,"target":"_blank"}},[_vm._v(_vm._s(_vm.worker.worker_account))])])]),_vm._v(" "),_c('div',{staticClass:"votes"},[_vm._v("\n    Votes: "+_vm._s(Math.round(_vm.worker.total_votes_for / 100000).toLocaleString())+" BTS\n  ")]),_vm._v(" "),(_vm.votingObject != null)?_c('div',{staticClass:"voting"},[(_vm.votingObject.voted)?_c('div',{staticClass:"done"},[_vm._v("Voted ✔")]):_vm._e(),_vm._v(" "),(!!_vm.votingObject.failed)?_c('div',{staticClass:"done"},[_vm._v("Voting failed")]):[(_vm.beetFound)?_c('button',{staticClass:"button",on:{"click":_vm.vote}},[_vm._v("Vote now")]):[_c('div',{staticClass:"label"},[_vm._v("Beet was not found")]),_vm._v(" "),_c('button',{staticClass:"button",on:{"click":function($event){_vm.goToBeet()}}},[_vm._v("Install now")])]]],2):_vm._e()]):_vm._e()}
var BitSharesWorker_staticRenderFns = []
var BitSharesWorker_esExports = { render: BitSharesWorker_render, staticRenderFns: BitSharesWorker_staticRenderFns }
/* harmony default export */ var components_BitSharesWorker = (BitSharesWorker_esExports);
// CONCATENATED MODULE: ./src/components/BitSharesWorker.vue
function BitSharesWorker_injectStyle (ssrContext) {
  __webpack_require__("hBeC")
}
var BitSharesWorker_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var BitSharesWorker___vue_template_functional__ = false
/* styles */
var BitSharesWorker___vue_styles__ = BitSharesWorker_injectStyle
/* scopeId */
var BitSharesWorker___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var BitSharesWorker___vue_module_identifier__ = null
var BitSharesWorker_Component = BitSharesWorker_normalizeComponent(
  BitSharesWorker,
  components_BitSharesWorker,
  BitSharesWorker___vue_template_functional__,
  BitSharesWorker___vue_styles__,
  BitSharesWorker___vue_scopeId__,
  BitSharesWorker___vue_module_identifier__
)

/* harmony default export */ var src_components_BitSharesWorker = (BitSharesWorker_Component.exports);

// EXTERNAL MODULE: ./src/components/BCPCopyright.vue
var BCPCopyright = __webpack_require__("lVzp");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/BitSharesWidgetVoting.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var BitSharesWidgetVoting = ({
    name: 'BitSharesWidgetVoting',
    props: ['layout'],
    extends: src_components_AbstractBitSharesWidgetVoting,
    components: {
        BitSharesWorker: src_components_BitSharesWorker,
        BCPCopyright: BCPCopyright["default"]
    },
    data: function data() {
        return {
            loadingMessage: "Loading ...",

            // the time that will be displayed
            currentTime: this.getFormattedTime(),

            // tooltip that is displayed on hover
            popupMessage: ""
        };
    },

    methods: {
        /**
         * general information about the blockchain
         * @returns {*}
         */
        getHeadMessage: function getHeadMessage() {
            var _this = this;

            return new promise_default.a(function (resolve) {
                Object(es["b" /* FetchChain */])("getObject", '2.1.0').then(function (object) {
                    try {
                        resolve('Head/Timestamp=' + _this.ChainStore.getObject('2.1.0').get('head_block_number') + '/' + _this.ChainStore.getObject('2.1.0').get('time'));
                    } catch (err) {
                        resolve('Initializing ...');
                    }
                });
            });
        },
        /**
         * formats current time human readable
         */
        getFormattedTime: function getFormattedTime() {
            var currentDate = new Date();
            return currentDate.getHours() + ':' + ('0' + currentDate.getMinutes()).slice(-2);
        },
        onConnected: function onConnected() {
            var _this2 = this;

            this.getHeadMessage().then(function (message) {
                _this2.popupMessage = message;
            });
        },
        /**
         * Loads the next message and displays it, also updates the tooltip
         */
        onResolvedVotingProps: function onResolvedVotingProps() {
            if (!!this.workerIds) {
                this.loadingMessage = null;
            }
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7d729298","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/BitSharesWidgetVoting.vue
var BitSharesWidgetVoting_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"widget-voting--tiles"},[(_vm.workerIds)?_c('div',[_c('div',{staticClass:"widget-voting--tiles--title",on:{"click":_vm.showPopup}},[_c('h2',[_vm._v("BitShares Widget for Voting")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isPopupVisible),expression:"isPopupVisible"}],staticClass:"widget-voting--popup"},[_c('div',{staticClass:"widget-voting--popup--content"},[_c('div',{staticClass:"widget-voting--tiles--popup-message"},[_vm._v(_vm._s(_vm.popupMessage))]),_vm._v(" "),_c('BCPCopyright')],1)]),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.loadingMessage)?_c('div',{staticClass:"widget-voting--tiles--loading-message"},[_vm._v(_vm._s(_vm.loadingMessage))]):_c('div',_vm._l((_vm.workerIds),function(worker){return _c('div',{staticClass:"widget-voting--tiles--tile"},[_c('BitSharesWorker',{attrs:{"workerid":worker}})],1)}))]):_vm._e()])}
var BitSharesWidgetVoting_staticRenderFns = []
var BitSharesWidgetVoting_esExports = { render: BitSharesWidgetVoting_render, staticRenderFns: BitSharesWidgetVoting_staticRenderFns }
/* harmony default export */ var components_BitSharesWidgetVoting = (BitSharesWidgetVoting_esExports);
// CONCATENATED MODULE: ./src/components/BitSharesWidgetVoting.vue
function BitSharesWidgetVoting_injectStyle (ssrContext) {
  __webpack_require__("MHHs")
}
var BitSharesWidgetVoting_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var BitSharesWidgetVoting___vue_template_functional__ = false
/* styles */
var BitSharesWidgetVoting___vue_styles__ = BitSharesWidgetVoting_injectStyle
/* scopeId */
var BitSharesWidgetVoting___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var BitSharesWidgetVoting___vue_module_identifier__ = null
var BitSharesWidgetVoting_Component = BitSharesWidgetVoting_normalizeComponent(
  BitSharesWidgetVoting,
  components_BitSharesWidgetVoting,
  BitSharesWidgetVoting___vue_template_functional__,
  BitSharesWidgetVoting___vue_styles__,
  BitSharesWidgetVoting___vue_scopeId__,
  BitSharesWidgetVoting___vue_module_identifier__
)

/* harmony default export */ var src_components_BitSharesWidgetVoting = (BitSharesWidgetVoting_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/BitSharesWidgetInlineVoting.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var BitSharesWidgetInlineVoting = ({
    name: 'BitSharesWidgetInlineVoting',
    extends: src_components_AbstractBitSharesWidgetVoting,
    components: {
        BCPCopyright: BCPCopyright["default"]
    },
    data: function data() {
        return {
            text: this.innerHTML, // initialize with given text
            popUpText: "Loading ...",

            votingObject: null
        };
    },

    methods: {
        showVotingObject: function showVotingObject() {
            this.text = this.votingObject.text;
            this.popUpText = this.votingObject.type + " " + this.votingObject.text;
        },

        onResolvedVotingProps: function onResolvedVotingProps() {
            var uniqueIdList = null;
            if (!!this.witnessIds && keys_default()(this.witnessIds).length == 1) {
                uniqueIdList = this.witnessIds;
            }
            if (!!this.workerIds && keys_default()(this.workerIds).length == 1) {
                if (uniqueIdList != null) {
                    this.text = "Please do only provide one object type for voting";
                } else {
                    uniqueIdList = this.workerIds;
                }
            }
            if (!!this.committeeIds && keys_default()(this.committeeIds).length == 1) {
                if (uniqueIdList != null) {
                    this.text = "Please do only provide one object type for voting";
                } else {
                    uniqueIdList = this.committeeIds;
                }
            }
            if (uniqueIdList == null) {
                this.text = "Please provide exactly one object type for voting";
                this.errored("Initializing failed");
            }
            this.votingObject = uniqueIdList[keys_default()(uniqueIdList)[0]];
        },
        onResolvedVotingId: function onResolvedVotingId() {
            this.showVotingObject();
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-83afab56","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/BitSharesWidgetInlineVoting.vue
var BitSharesWidgetInlineVoting_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"widget-voting--inline"},[_c('div',{staticClass:"widget-voting--inline--text",on:{"click":_vm.showPopup}},[_vm._v(_vm._s(_vm.text))]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isPopupVisible),expression:"isPopupVisible"}],staticClass:"widget-voting--popup"},[_c('div',{staticClass:"widget-voting--popup--content"},[_c('div',[_vm._v(_vm._s(_vm.popUpText))]),_c('br'),_vm._v(" "),(_vm.votingObject != null)?_c('div',{staticClass:"voting"},[(_vm.votingObject.voted)?_c('div',{staticClass:"done"},[_vm._v("Voted ✔")]):_vm._e(),_vm._v(" "),(!!_vm.votingObject.failed)?_c('div',{staticClass:"done"},[_vm._v("Voting failed")]):[(_vm.beetFound)?_c('button',{staticClass:"button",on:{"click":_vm.vote}},[_vm._v("Vote now")]):[_c('div',{staticClass:"label"},[_vm._v("Beet was not found")]),_vm._v(" "),_c('button',{staticClass:"button",on:{"click":function($event){_vm.goToBeet()}}},[_vm._v("Install now")])]]],2):_vm._e(),_c('br'),_c('br'),_c('br'),_vm._v(" "),_c('BCPCopyright')],1)])])}
var BitSharesWidgetInlineVoting_staticRenderFns = []
var BitSharesWidgetInlineVoting_esExports = { render: BitSharesWidgetInlineVoting_render, staticRenderFns: BitSharesWidgetInlineVoting_staticRenderFns }
/* harmony default export */ var components_BitSharesWidgetInlineVoting = (BitSharesWidgetInlineVoting_esExports);
// CONCATENATED MODULE: ./src/components/BitSharesWidgetInlineVoting.vue
function BitSharesWidgetInlineVoting_injectStyle (ssrContext) {
  __webpack_require__("HRYS")
}
var BitSharesWidgetInlineVoting_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var BitSharesWidgetInlineVoting___vue_template_functional__ = false
/* styles */
var BitSharesWidgetInlineVoting___vue_styles__ = BitSharesWidgetInlineVoting_injectStyle
/* scopeId */
var BitSharesWidgetInlineVoting___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var BitSharesWidgetInlineVoting___vue_module_identifier__ = null
var BitSharesWidgetInlineVoting_Component = BitSharesWidgetInlineVoting_normalizeComponent(
  BitSharesWidgetInlineVoting,
  components_BitSharesWidgetInlineVoting,
  BitSharesWidgetInlineVoting___vue_template_functional__,
  BitSharesWidgetInlineVoting___vue_styles__,
  BitSharesWidgetInlineVoting___vue_scopeId__,
  BitSharesWidgetInlineVoting___vue_module_identifier__
)

/* harmony default export */ var src_components_BitSharesWidgetInlineVoting = (BitSharesWidgetInlineVoting_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//




/* harmony default export */ var App = ({
    name: 'bitshares-widget-voting',
    props: ['workeridfromdiv', 'witnessidfromdiv', 'layoutfromdiv', 'committeefromdiv', 'innerHTML'],
    components: {
        BitSharesWidgetVoting: src_components_BitSharesWidgetVoting,
        BitSharesWidgetInlineVoting: src_components_BitSharesWidgetInlineVoting
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a7c74092","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var App_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.layoutfromdiv == 'inline')?_c('BitSharesWidgetInlineVoting',{attrs:{"workerid":_vm.workeridfromdiv,"witnessid":_vm.witnessidfromdiv,"committeeid":_vm.committeefromdiv,"innerHTML":_vm.innerHTML}}):_c('BitSharesWidgetVoting',{attrs:{"workerid":_vm.workeridfromdiv,"witnessid":_vm.witnessidfromdiv,"layout":_vm.layoutfromdiv}})}
var App_staticRenderFns = []
var App_esExports = { render: App_render, staticRenderFns: App_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (App_esExports);
// CONCATENATED MODULE: ./src/App.vue
function App_injectStyle (ssrContext) {
  __webpack_require__("VjmK")
}
var App_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var App___vue_template_functional__ = false
/* styles */
var App___vue_styles__ = App_injectStyle
/* scopeId */
var App___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var App___vue_module_identifier__ = null
var App_Component = App_normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  App___vue_template_functional__,
  App___vue_styles__,
  App___vue_scopeId__,
  App___vue_module_identifier__
)

/* harmony default export */ var src_App = (App_Component.exports);

// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



vue_esm["a" /* default */].config.productionTip = false;

/**
 * This renders the Vue app in the HTML element bitshares-widget-voting.
 *
 * The App.vue serves as middleware that can enable routing if required.
 * The pricesfromdiv property is filled with the markets property from
 * the div tag in index.html and passed forward, see App.vue
 *
 */
/* eslint-disable no-new */
var i = 0;

var main__loop = function _loop() {
    var idName = null;
    if (i == 10) {
        idName = "bitshares-widget-voting";
    } else {
        idName = "bitshares-widget-voting-" + i;
    }
    var element = document.getElementById(idName);
    if (!!element) {
        new vue_esm["a" /* default */]({
            el: element,
            template: '<App :workeridfromdiv="workeridfromdiv" :witnessidfromdiv="witnessidfromdiv" :committeefromdiv="committeefromdiv" :layoutfromdiv="layoutfromdiv" :innerHTML="innerHTML" />',
            components: { App: src_App },
            beforeMount: function beforeMount() {
                try {
                    this.workeridfromdiv = this.$el.attributes["workerid"].value;
                } catch (err) {
                    this.workeridfromdiv = "";
                }
                try {
                    this.witnessidfromdiv = this.$el.attributes["witnessid"].value;
                } catch (err) {
                    this.witnessidfromdiv = "";
                }
                try {
                    this.committeefromdiv = this.$el.attributes["committeeid"].value;
                } catch (err) {
                    this.committeefromdiv = "";
                }
                try {
                    this.layoutfromdiv = this.$el.attributes["layout"].value;
                } catch (err) {
                    this.layoutfromdiv = false;
                }
                this.idName = idName;
                this.innerHTML = this.$el.innerHTML;
            }

        });
    }
};

for (i = 0; i < 11; i++) {
    main__loop();
}

/***/ }),

/***/ "OuxZ":
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "VjmK":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "WGfH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ef2C":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "hBeC":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lVzp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BCPCopyright_vue__ = __webpack_require__("OuxZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BCPCopyright_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BCPCopyright_vue__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72bcef1e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BCPCopyright_vue__ = __webpack_require__("/538");
function injectStyle (ssrContext) {
  __webpack_require__("ef2C")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BCPCopyright_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72bcef1e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BCPCopyright_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},["NHnr"]);