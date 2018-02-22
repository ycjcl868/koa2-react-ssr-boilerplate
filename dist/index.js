module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(25);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(11);

	var _path2 = _interopRequireDefault(_path);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootPath = _path2.default.join(__dirname, '../..');

	exports.default = {
	  rootPath: rootPath,
	  publicPath: '/public',
	  staticPath: '/public/static',
	  port: 3000,
	  title: 'React Koa Isomorphic Boilerplate',
	  db: {}
	};
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, "server/config"))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var REQUEST_USER_INFO = exports.REQUEST_USER_INFO = 'REQUEST_USER_INFO';
	var RECEIVE_USER_INFO = exports.RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = require("path");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = require("react-redux");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = require("react-router");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = require("redux");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.requestUserInfo = requestUserInfo;
	exports.receiveUserInfo = receiveUserInfo;
	exports.fetchUserInfo = fetchUserInfo;

	var _isomorphicFetch = __webpack_require__(34);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _actionTypes = __webpack_require__(5);

	var _config = __webpack_require__(4);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function requestUserInfo() {
	  return { type: _actionTypes.REQUEST_USER_INFO };
	}

	function receiveUserInfo(userInfo) {
	  return {
	    type: _actionTypes.RECEIVE_USER_INFO,
	    userInfo: userInfo
	  };
	}

	function fetchUserInfo() {
	  return function (dispatch) {
	    dispatch(requestUserInfo());
	    var url =  true ? 'http://localhost:' + _config2.default.port + '/api/user' : '/api/user';
	    return (0, _isomorphicFetch2.default)(url).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      dispatch(receiveUserInfo(json));
	    }).catch(function (err) {
	      throw err;
	    });
	  };
	}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(6);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(7);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(8);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _userInfo = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var propTypes = {
	  name: _react.PropTypes.string,
	  website: _react.PropTypes.string
	};

	var UserInfo = function (_Component) {
	  (0, _inherits3.default)(UserInfo, _Component);

	  function UserInfo() {
	    (0, _classCallCheck3.default)(this, UserInfo);
	    return (0, _possibleConstructorReturn3.default)(this, (UserInfo.__proto__ || (0, _getPrototypeOf2.default)(UserInfo)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(UserInfo, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          name = _props.name,
	          website = _props.website;

	      return _react2.default.createElement(
	        'div',
	        { className: 'user-info' },
	        _react2.default.createElement(
	          'p',
	          { className: 'user-info__name' },
	          name
	        ),
	        _react2.default.createElement(
	          'p',
	          { className: 'user-info__website' },
	          website
	        )
	      );
	    }
	  }], [{
	    key: 'fetchData',
	    value: function fetchData(_ref) {
	      var dispatch = _ref.dispatch;

	      var dispatchTask = [];
	      dispatchTask.push(dispatch((0, _userInfo.fetchUserInfo)()));
	      return dispatchTask;
	    }
	  }]);
	  return UserInfo;
	}(_react.Component);

	exports.default = UserInfo;


	UserInfo.propTypes = propTypes;
	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(6);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(7);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(8);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var propTypes = {
	  children: _react.PropTypes.any
	};

	var App = function (_Component) {
	  (0, _inherits3.default)(App, _Component);

	  function App() {
	    (0, _classCallCheck3.default)(this, App);
	    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(App, [{
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);
	  return App;
	}(_react.Component);

	exports.default = App;


	App.propTypes = propTypes;
	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(12);

	var _UserInfo = __webpack_require__(16);

	var _UserInfo2 = _interopRequireDefault(_UserInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function mapStateToProps(state) {
	  var userInfo = state.userInfo;
	  var _userInfo$userInfo = userInfo.userInfo,
	      name = _userInfo$userInfo.name,
	      website = _userInfo$userInfo.website;

	  return {
	    name: name,
	    website: website
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(_UserInfo2.default);
	module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(14);

	var _userInfo = __webpack_require__(20);

	var _userInfo2 = _interopRequireDefault(_userInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({
	  userInfo: _userInfo2.default
	});

	exports.default = rootReducer;
	module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(31);

	var _assign2 = _interopRequireDefault(_assign);

	exports.default = userInfo;

	var _actionTypes = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = {
	  isFetching: false,
	  userInfo: null
	};

	function userInfo() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _actionTypes.REQUEST_USER_INFO:
	      return (0, _assign2.default)({}, state, {
	        isFetching: true
	      });
	    case _actionTypes.RECEIVE_USER_INFO:
	      return (0, _assign2.default)({}, state, {
	        isFetching: false,
	        userInfo: action.userInfo
	      });
	    default:
	      return state;
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(13);

	var _App = __webpack_require__(17);

	var _App2 = _interopRequireDefault(_App);

	var _UserInfoContainer = __webpack_require__(18);

	var _UserInfoContainer2 = _interopRequireDefault(_UserInfoContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _App2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _UserInfoContainer2.default })
	  )
	);
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(14);

	var _reduxThunk = __webpack_require__(45);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(19);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default)(_redux.createStore);

	function configureStore(initialState) {
	  var store = createStoreWithMiddleware(_reducers2.default, initialState);
	  return store;
	}
	module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _koa = __webpack_require__(35);

	var _koa2 = _interopRequireDefault(_koa);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = new _koa2.default();

	exports.default = app;
	module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(2);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(1);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
	    return _regenerator2.default.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            ctx.body = {
	              name: 'koa2-react-ssr-boilerplate',
	              website: 'https://github.com/ycjcl868/koa2-react-ssr-boilerplate'
	            };

	          case 1:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, undefined);
	  }));

	  return function (_x) {
	    return _ref.apply(this, arguments);
	  };
	}();

	module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _http = __webpack_require__(33);

	var _http2 = _interopRequireDefault(_http);

	var _app = __webpack_require__(23);

	var _app2 = _interopRequireDefault(_app);

	var _middlewareRegister = __webpack_require__(26);

	var _middlewareRegister2 = _interopRequireDefault(_middlewareRegister);

	var _config = __webpack_require__(4);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_app2.default.env = 'production';
	(0, _middlewareRegister2.default)(_app2.default);

	var server = _http2.default.createServer(_app2.default.callback());
	server.listen(_config2.default.port, function () {
	  console.log('\n==> \u2705  Server is listening on port ' + _config2.default.port);
	  console.log('\n==> \uD83C\uDF0F  Open up http://localhost:' + _config2.default.port + '/ in your browser.\n');
	});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(2);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(1);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _path = __webpack_require__(11);

	var _path2 = _interopRequireDefault(_path);

	var _koaStatic = __webpack_require__(42);

	var _koaStatic2 = _interopRequireDefault(_koaStatic);

	var _koaViews = __webpack_require__(43);

	var _koaViews2 = _interopRequireDefault(_koaViews);

	var _koaBodyparser = __webpack_require__(36);

	var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

	var _koaJson = __webpack_require__(38);

	var _koaJson2 = _interopRequireDefault(_koaJson);

	var _koaLogger = __webpack_require__(39);

	var _koaLogger2 = _interopRequireDefault(_koaLogger);

	var _koaOnerror = __webpack_require__(40);

	var _koaOnerror2 = _interopRequireDefault(_koaOnerror);

	var _koaConvert = __webpack_require__(37);

	var _koaConvert2 = _interopRequireDefault(_koaConvert);

	var _routes = __webpack_require__(28);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var viewPath = _path2.default.join(__dirname, './views');

	exports.default = function (app) {
	  app.use((0, _koaBodyparser2.default)());
	  app.use((0, _koaJson2.default)());
	  app.use((0, _koaLogger2.default)());

	  app.use((0, _koaConvert2.default)((0, _koaStatic2.default)(_path2.default.join(__dirname, '../public'))));

	  app.use((0, _koaViews2.default)(viewPath, {
	    extension: 'html',
	    map: {
	      html: 'nunjucks'
	    }
	  }));

	  app.use(_routes2.default);

	  (0, _koaOnerror2.default)(app, { template: _path2.default.join(viewPath, '500.html') });

	  app.use(function () {
	    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
	      return _regenerator2.default.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              ctx.status = 404;
	              _context.next = 3;
	              return ctx.render('404');

	            case 3:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, undefined);
	    }));

	    return function (_x) {
	      return _ref.apply(this, arguments);
	    };
	  }());
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _koaRouter = __webpack_require__(41);

	var _koaRouter2 = _interopRequireDefault(_koaRouter);

	var _user = __webpack_require__(24);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = new _koaRouter2.default();

	router.prefix('/api');

	router.get('/user', _user2.default);

	exports.default = router;
	module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(2);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(1);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _api = __webpack_require__(27);

	var _api2 = _interopRequireDefault(_api);

	var _render = __webpack_require__(29);

	var _render2 = _interopRequireDefault(_render);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
	    return _regenerator2.default.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            if (!ctx.path.match(/^\/api/)) {
	              _context.next = 5;
	              break;
	            }

	            _context.next = 3;
	            return _api2.default.routes()(ctx, next);

	          case 3:
	            _context.next = 7;
	            break;

	          case 5:
	            _context.next = 7;
	            return (0, _render2.default)(ctx, next);

	          case 7:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, undefined);
	  }));

	  return function (_x, _x2) {
	    return _ref.apply(this, arguments);
	  };
	}();

	module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(2);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _stringify = __webpack_require__(30);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _asyncToGenerator2 = __webpack_require__(1);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _promise = __webpack_require__(32);

	var _promise2 = _interopRequireDefault(_promise);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(44);

	var _server2 = _interopRequireDefault(_server);

	var _reactRedux = __webpack_require__(12);

	var _reactRouter = __webpack_require__(13);

	var _routes = __webpack_require__(21);

	var _routes2 = _interopRequireDefault(_routes);

	var _configureStore = __webpack_require__(22);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	var _config = __webpack_require__(4);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _match(location) {
	  return new _promise2.default(function (resolve, reject) {
	    (0, _reactRouter.match)(location, function (error, redirectLocation, renderProps) {
	      if (error) {
	        reject(error);
	      } else {
	        resolve({ redirectLocation: redirectLocation, renderProps: renderProps });
	      }
	    });
	  });
	}

	exports.default = function () {
	  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
	    var store, _ref2, redirectLocation, renderProps, components, promises, html;

	    return _regenerator2.default.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            store = (0, _configureStore2.default)();
	            _context.prev = 1;
	            _context.next = 4;
	            return _match({ routes: _routes2.default, location: ctx.url });

	          case 4:
	            _ref2 = _context.sent;
	            redirectLocation = _ref2.redirectLocation;
	            renderProps = _ref2.renderProps;

	            if (!redirectLocation) {
	              _context.next = 11;
	              break;
	            }

	            ctx.redirect(redirectLocation.pathname + redirectLocation.search);
	            _context.next = 24;
	            break;

	          case 11:
	            if (!renderProps) {
	              _context.next = 22;
	              break;
	            }

	            components = renderProps.components.filter(function (component) {
	              return component && component.WrappedComponent && typeof component.WrappedComponent.fetchData === 'function';
	            });
	            promises = [];

	            components.forEach(function (component) {
	              var tasks = component.WrappedComponent.fetchData({
	                dispatch: store.dispatch,
	                location: renderProps.location,
	                params: renderProps.params
	              });
	              if (Array.isArray(tasks)) {
	                tasks.forEach(function (task) {
	                  promises.push(task);
	                });
	              } else {
	                promises.push(tasks);
	              }
	            });
	            _context.next = 17;
	            return _promise2.default.all(promises);

	          case 17:
	            html = _server2.default.renderToString(_react2.default.createElement(
	              _reactRedux.Provider,
	              { store: store },
	              _react2.default.createElement(_reactRouter.RouterContext, renderProps)
	            ));
	            _context.next = 20;
	            return ctx.render('index', {
	              title: _config2.default.title,
	              app: html,
	              reduxState: (0, _stringify2.default)(store.getState()),
	              development: ctx.app.env === 'development'
	            });

	          case 20:
	            _context.next = 24;
	            break;

	          case 22:
	            _context.next = 24;
	            return next();

	          case 24:
	            _context.next = 31;
	            break;

	          case 26:
	            _context.prev = 26;
	            _context.t0 = _context['catch'](1);

	            console.log('error occurred during server rendering: %s', _context.t0.stack);

	            _context.next = 31;
	            return ctx.render('500', {
	              message: _context.t0.stack
	            });

	          case 31:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, undefined, [[1, 26]]);
	  }));

	  return function (_x, _x2) {
	    return _ref.apply(this, arguments);
	  };
	}();

	module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = require("http");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	module.exports = require("koa");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = require("koa-bodyparser");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = require("koa-convert");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = require("koa-json");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports = require("koa-logger");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = require("koa-onerror");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = require("koa-router");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = require("koa-static");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = require("koa-views");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = require("react-dom/server");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = require("redux-thunk");

/***/ })
/******/ ]);
