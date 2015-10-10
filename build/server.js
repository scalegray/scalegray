require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _this2 = this;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  __webpack_require__(61);
  
  var _path = __webpack_require__(11);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(10);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDomServer = __webpack_require__(71);
  
  var _reactDomServer2 = _interopRequireDefault(_reactDomServer);
  
  var _routes = __webpack_require__(33);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _componentsHtml = __webpack_require__(23);
  
  var _componentsHtml2 = _interopRequireDefault(_componentsHtml);
  
  var server = global.server = (0, _express2['default'])();
  
  server.set('port', process.env.PORT || 5000);
  server.use(_express2['default']['static'](_path2['default'].join(__dirname, 'public')));
  
  //
  // Register API middleware
  // -----------------------------------------------------------------------------
  server.use('/api/content', __webpack_require__(15));
  
  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  server.get('*', function callee$0$0(req, res, next) {
    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
      var _this = this;
  
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.prev = 0;
          context$1$0.next = 3;
          return regeneratorRuntime.awrap((function callee$1$0() {
            var statusCode, data, css, context, html;
            return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
              while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                  statusCode = 200;
                  data = { title: '', description: '', css: '', body: '' };
                  css = [];
                  context = {
                    onInsertCss: function onInsertCss(value) {
                      return css.push(value);
                    },
                    onSetTitle: function onSetTitle(value) {
                      return data.title = value;
                    },
                    onSetMeta: function onSetMeta(key, value) {
                      return data[key] = value;
                    },
                    onPageNotFound: function onPageNotFound() {
                      return statusCode = 404;
                    }
                  };
                  context$2$0.next = 6;
                  return regeneratorRuntime.awrap(_routes2['default'].dispatch({ path: req.path, context: context }, function (state, component) {
                    data.body = _reactDomServer2['default'].renderToString(component);
                    data.css = css.join('');
                  }));
  
                case 6:
                  html = _reactDomServer2['default'].renderToStaticMarkup(_react2['default'].createElement(_componentsHtml2['default'], data));
  
                  res.status(statusCode).send('<!doctype html>\n' + html);
  
                case 8:
                case 'end':
                  return context$2$0.stop();
              }
            }, null, _this);
          })());
  
        case 3:
          context$1$0.next = 8;
          break;
  
        case 5:
          context$1$0.prev = 5;
          context$1$0.t0 = context$1$0['catch'](0);
  
          next(context$1$0.t0);
  
        case 8:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this2, [[0, 5]]);
  });
  
  //
  // Launch the server
  // -----------------------------------------------------------------------------
  
  server.listen(server.get('port'), function () {
    /* eslint-disable no-console */
    console.log('The server is running at http://localhost:' + server.get('port'));
    if (process.send) {
      process.send('online');
    }
  });

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  // eslint-disable-line no-unused-vars
  
  var _fbjsLibInvariant = __webpack_require__(65);
  
  var _fbjsLibInvariant2 = _interopRequireDefault(_fbjsLibInvariant);
  
  var _fbjsLibExecutionEnvironment = __webpack_require__(4);
  
  var count = 0;
  
  function withStyles(styles) {
    return function (ComposedComponent) {
      return (function (_Component) {
        _inherits(WithStyles, _Component);
  
        _createClass(WithStyles, null, [{
          key: 'contextTypes',
          value: {
            onInsertCss: _react.PropTypes.func
          },
          enumerable: true
        }]);
  
        function WithStyles() {
          _classCallCheck(this, WithStyles);
  
          _get(Object.getPrototypeOf(WithStyles.prototype), 'constructor', this).call(this);
          this.refCount = 0;
          ComposedComponent.prototype.renderCss = (function render(css) {
            var style = undefined;
            if (_fbjsLibExecutionEnvironment.canUseDOM) {
              style = this.styleId && document.getElementById(this.styleId);
              if (style) {
                if ('textContent' in style) {
                  style.textContent = css;
                } else {
                  style.styleSheet.cssText = css;
                }
              } else {
                this.styleId = 'dynamic-css-' + count++;
                style = document.createElement('style');
                style.setAttribute('id', this.styleId);
                style.setAttribute('type', 'text/css');
  
                if ('textContent' in style) {
                  style.textContent = css;
                } else {
                  style.styleSheet.cssText = css;
                }
  
                document.getElementsByTagName('head')[0].appendChild(style);
                this.refCount++;
              }
            } else {
              this.context.onInsertCss(css);
            }
          }).bind(this);
        }
  
        _createClass(WithStyles, [{
          key: 'componentWillMount',
          value: function componentWillMount() {
            if (_fbjsLibExecutionEnvironment.canUseDOM) {
              (0, _fbjsLibInvariant2['default'])(styles.use, 'The style-loader must be configured with reference-counted API.');
              styles.use();
            } else {
              this.context.onInsertCss(styles.toString());
            }
          }
        }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            styles.unuse();
            if (this.styleId) {
              this.refCount--;
              if (this.refCount < 1) {
                var style = document.getElementById(this.styleId);
                if (style) {
                  style.parentNode.removeChild(style);
                }
              }
            }
          }
        }, {
          key: 'render',
          value: function render() {
            return _react2['default'].createElement(ComposedComponent, this.props);
          }
        }]);
  
        return WithStyles;
      })(_react.Component);
    };
  }
  
  exports['default'] = withStyles;
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _this = this;
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _coreLocation = __webpack_require__(30);
  
  var _coreLocation2 = _interopRequireDefault(_coreLocation);
  
  function isLeftClickEvent(event) {
    return event.button === 0;
  }
  
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  
  var Link = (function (_Component) {
    _inherits(Link, _Component);
  
    function Link() {
      _classCallCheck(this, Link);
  
      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;
  
        var props = _objectWithoutProperties(_props, ['to', 'children']);
  
        return _react2['default'].createElement(
          'a',
          _extends({ onClick: Link.handleClick.bind(this) }, props),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;
  
        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }
  
        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }
  
        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }
  
        event.preventDefault();
  
        if (allowTransition) {
          var link = event.currentTarget;
          _coreLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);
  
    return Link;
  })(_react.Component);
  
  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "7ad17c6085dee9a33787bac28fb23d46.eot"

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "85efa900c0fc12fee15a5398deba06e8.png"

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "8307c45ca34d4af71912b535b6c05c54.png"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "bf471ec3d4085883e061ca35006e86e8.png"

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 12 */
/***/ function(module, exports) {

  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  var Match = function Match(route, path, keys, match) {
    _classCallCheck(this, Match);
  
    this.route = route;
    this.path = path;
    this.params = Object.create(null);
    for (var i = 1; i < match.length; i++) {
      this.params[keys[i - 1].name] = decodeParam(match[i]);
    }
  };
  
  function decodeParam(val) {
    if (!(typeof val === 'string' || val instanceof String)) {
      return val;
    }
  
    try {
      return decodeURIComponent(val);
    } catch (e) {
      var err = new TypeError('Failed to decode param \'' + val + '\'');
      err.status = 400;
      throw err;
    }
  }
  
  exports['default'] = Match;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  var _pathToRegexp = __webpack_require__(49);
  
  var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);
  
  var _Match = __webpack_require__(12);
  
  var _Match2 = _interopRequireDefault(_Match);
  
  var Route = (function () {
    function Route(path, handlers) {
      _classCallCheck(this, Route);
  
      this.path = path;
      this.handlers = handlers;
      this.regExp = (0, _pathToRegexp2['default'])(path, this.keys = []);
    }
  
    _createClass(Route, [{
      key: 'match',
      value: function match(path) {
        var match = this.regExp.exec(path);
        return match ? new _Match2['default'](this, path, this.keys, match) : null;
      }
    }]);
  
    return Route;
  })();
  
  exports['default'] = Route;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  var _Route = __webpack_require__(13);
  
  var _Route2 = _interopRequireDefault(_Route);
  
  var emptyFunction = function emptyFunction() {};
  
  var Router = (function () {
  
    /**
     * Creates a new instance of the `Router` class.
     */
  
    function Router(initialize) {
      _classCallCheck(this, Router);
  
      this.routes = [];
      this.events = Object.create(null);
  
      if (typeof initialize === 'function') {
        initialize(this.on.bind(this));
      }
    }
  
    /**
     * Adds a new route to the routing table or registers an event listener.
     *
     * @param {String} path A string in the Express format, an array of strings, or a regular expression.
     * @param {Function|Array} handlers Asynchronous route handler function(s).
     */
  
    _createClass(Router, [{
      key: 'on',
      value: function on(path) {
        for (var _len = arguments.length, handlers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          handlers[_key - 1] = arguments[_key];
        }
  
        if (path === 'error') {
          this.events[path] = handlers[0];
        } else {
          this.routes.push(new _Route2['default'](path, handlers));
        }
      }
    }, {
      key: 'dispatch',
      value: function dispatch(state, cb) {
        var routes, handlers, value, result, done, next;
        return regeneratorRuntime.async(function dispatch$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              next = function next() {
                var _handlers$next;
  
                var _value, _value2, match, handler;
  
                return regeneratorRuntime.async(function next$(context$3$0) {
                  while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                      if (!((_handlers$next = handlers.next(), value = _handlers$next.value, done = _handlers$next.done, _handlers$next) && !done)) {
                        context$3$0.next = 16;
                        break;
                      }
  
                      _value = value;
                      _value2 = _slicedToArray(_value, 2);
                      match = _value2[0];
                      handler = _value2[1];
  
                      state.params = match.params;
  
                      if (!(handler.length > 1)) {
                        context$3$0.next = 12;
                        break;
                      }
  
                      context$3$0.next = 9;
                      return regeneratorRuntime.awrap(handler(state, next));
  
                    case 9:
                      context$3$0.t0 = context$3$0.sent;
                      context$3$0.next = 15;
                      break;
  
                    case 12:
                      context$3$0.next = 14;
                      return regeneratorRuntime.awrap(handler(state));
  
                    case 14:
                      context$3$0.t0 = context$3$0.sent;
  
                    case 15:
                      return context$3$0.abrupt('return', context$3$0.t0);
  
                    case 16:
                    case 'end':
                      return context$3$0.stop();
                  }
                }, null, this);
              };
  
              if (typeof state === 'string' || state instanceof String) {
                state = { path: state };
              }
              cb = cb || emptyFunction;
              routes = this.routes;
              handlers = regeneratorRuntime.mark(function callee$2$0() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, route, match, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, handler;
  
                return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                  while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                      _iteratorNormalCompletion = true;
                      _didIteratorError = false;
                      _iteratorError = undefined;
                      context$3$0.prev = 3;
                      _iterator = routes[Symbol.iterator]();
  
                    case 5:
                      if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                        context$3$0.next = 38;
                        break;
                      }
  
                      route = _step.value;
                      match = route.match(state.path);
  
                      if (!match) {
                        context$3$0.next = 35;
                        break;
                      }
  
                      _iteratorNormalCompletion2 = true;
                      _didIteratorError2 = false;
                      _iteratorError2 = undefined;
                      context$3$0.prev = 12;
                      _iterator2 = match.route.handlers[Symbol.iterator]();
  
                    case 14:
                      if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                        context$3$0.next = 21;
                        break;
                      }
  
                      handler = _step2.value;
                      context$3$0.next = 18;
                      return [match, handler];
  
                    case 18:
                      _iteratorNormalCompletion2 = true;
                      context$3$0.next = 14;
                      break;
  
                    case 21:
                      context$3$0.next = 27;
                      break;
  
                    case 23:
                      context$3$0.prev = 23;
                      context$3$0.t0 = context$3$0['catch'](12);
                      _didIteratorError2 = true;
                      _iteratorError2 = context$3$0.t0;
  
                    case 27:
                      context$3$0.prev = 27;
                      context$3$0.prev = 28;
  
                      if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                        _iterator2['return']();
                      }
  
                    case 30:
                      context$3$0.prev = 30;
  
                      if (!_didIteratorError2) {
                        context$3$0.next = 33;
                        break;
                      }
  
                      throw _iteratorError2;
  
                    case 33:
                      return context$3$0.finish(30);
  
                    case 34:
                      return context$3$0.finish(27);
  
                    case 35:
                      _iteratorNormalCompletion = true;
                      context$3$0.next = 5;
                      break;
  
                    case 38:
                      context$3$0.next = 44;
                      break;
  
                    case 40:
                      context$3$0.prev = 40;
                      context$3$0.t1 = context$3$0['catch'](3);
                      _didIteratorError = true;
                      _iteratorError = context$3$0.t1;
  
                    case 44:
                      context$3$0.prev = 44;
                      context$3$0.prev = 45;
  
                      if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                      }
  
                    case 47:
                      context$3$0.prev = 47;
  
                      if (!_didIteratorError) {
                        context$3$0.next = 50;
                        break;
                      }
  
                      throw _iteratorError;
  
                    case 50:
                      return context$3$0.finish(47);
  
                    case 51:
                      return context$3$0.finish(44);
  
                    case 52:
                    case 'end':
                      return context$3$0.stop();
                  }
                }, callee$2$0, this, [[3, 40, 44, 52], [12, 23, 27, 35], [28,, 30, 34], [45,, 47, 51]]);
              })();
              value = undefined, result = undefined, done = false;
  
            case 6:
              if (done) {
                context$2$0.next = 16;
                break;
              }
  
              context$2$0.next = 9;
              return regeneratorRuntime.awrap(next());
  
            case 9:
              result = context$2$0.sent;
  
              if (!result) {
                context$2$0.next = 14;
                break;
              }
  
              state.statusCode = 200;
              cb(state, result);
              return context$2$0.abrupt('return');
  
            case 14:
              context$2$0.next = 6;
              break;
  
            case 16:
              if (!this.events.error) {
                context$2$0.next = 32;
                break;
              }
  
              context$2$0.prev = 17;
  
              state.statusCode = 404;
              context$2$0.next = 21;
              return regeneratorRuntime.awrap(this.events.error(state, new Error('Cannot found a route matching \'' + state.path + '\'.')));
  
            case 21:
              result = context$2$0.sent;
  
              cb(state, result);
              context$2$0.next = 32;
              break;
  
            case 25:
              context$2$0.prev = 25;
              context$2$0.t0 = context$2$0['catch'](17);
  
              state.statusCode = 500;
              context$2$0.next = 30;
              return regeneratorRuntime.awrap(this.events.error(state, context$2$0.t0));
  
            case 30:
              result = context$2$0.sent;
  
              cb(state, result);
  
            case 32:
            case 'end':
              return context$2$0.stop();
          }
        }, null, this, [[17, 25]]);
      }
    }]);
  
    return Router;
  })();
  
  exports['default'] = Router;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _this = this;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _path = __webpack_require__(11);
  
  var _express = __webpack_require__(10);
  
  var _jade = __webpack_require__(70);
  
  var _jade2 = _interopRequireDefault(_jade);
  
  var _frontMatter = __webpack_require__(66);
  
  var _frontMatter2 = _interopRequireDefault(_frontMatter);
  
  var _utilsFs = __webpack_require__(34);
  
  var _utilsFs2 = _interopRequireDefault(_utilsFs);
  
  // A folder with Jade/Markdown/HTML content pages
  var CONTENT_DIR = (0, _path.join)(__dirname, './content');
  
  // Extract 'front matter' metadata and generate HTML
  var parseJade = function parseJade(path, jadeContent) {
    var fmContent = (0, _frontMatter2['default'])(jadeContent);
    var htmlContent = _jade2['default'].render(fmContent.body);
    return Object.assign({ path: path, content: htmlContent }, fmContent.attributes);
  };
  
  var router = new _express.Router();
  
  router.get('/', function callee$0$0(req, res, next) {
    var path, fileName, source, content;
    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.prev = 0;
          path = req.query.path;
  
          if (!(!path || path === 'undefined')) {
            context$1$0.next = 5;
            break;
          }
  
          res.status(400).send({ error: 'The \'path\' query parameter cannot be empty.' });
          return context$1$0.abrupt('return');
  
        case 5:
          fileName = (0, _path.join)(CONTENT_DIR, (path === '/' ? '/index' : path) + '.jade');
          context$1$0.next = 8;
          return regeneratorRuntime.awrap(_utilsFs2['default'].exists(fileName));
  
        case 8:
          if (context$1$0.sent) {
            context$1$0.next = 10;
            break;
          }
  
          fileName = (0, _path.join)(CONTENT_DIR, path + '/index.jade');
  
        case 10:
          context$1$0.next = 12;
          return regeneratorRuntime.awrap(_utilsFs2['default'].exists(fileName));
  
        case 12:
          if (context$1$0.sent) {
            context$1$0.next = 16;
            break;
          }
  
          res.status(404).send({ error: 'The page \'' + path + '\' is not found.' });
          context$1$0.next = 21;
          break;
  
        case 16:
          context$1$0.next = 18;
          return regeneratorRuntime.awrap(_utilsFs2['default'].readFile(fileName, { encoding: 'utf8' }));
  
        case 18:
          source = context$1$0.sent;
          content = parseJade(path, source);
  
          res.status(200).send(content);
  
        case 21:
          context$1$0.next = 26;
          break;
  
        case 23:
          context$1$0.prev = 23;
          context$1$0.t0 = context$1$0['catch'](0);
  
          next(context$1$0.t0);
  
        case 26:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this, [[0, 23]]);
  });
  
  exports['default'] = router;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _AppCss = __webpack_require__(35);
  
  var _AppCss2 = _interopRequireDefault(_AppCss);
  
  var _decoratorsWithContext = __webpack_require__(31);
  
  var _decoratorsWithContext2 = _interopRequireDefault(_decoratorsWithContext);
  
  var _decoratorsWithStyles = __webpack_require__(3);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _Header = __webpack_require__(22);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _Feedback = __webpack_require__(20);
  
  var _Feedback2 = _interopRequireDefault(_Feedback);
  
  var _Footer = __webpack_require__(21);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  var App = (function (_Component) {
    _inherits(App, _Component);
  
    function App() {
      _classCallCheck(this, _App);
  
      _get(Object.getPrototypeOf(_App.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(App, [{
      key: 'render',
      value: function render() {
        return !this.props.error ? _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_Header2['default'], null),
          this.props.children,
          _react2['default'].createElement(_Feedback2['default'], null),
          _react2['default'].createElement(_Footer2['default'], null)
        ) : this.props.children;
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.element.isRequired,
        error: _react.PropTypes.object
      },
      enumerable: true
    }]);
  
    var _App = App;
    App = (0, _decoratorsWithStyles2['default'])(_AppCss2['default'])(App) || App;
    App = (0, _decoratorsWithContext2['default'])(App) || App;
    return App;
  })(_react.Component);
  
  exports['default'] = App;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ContactPageCss = __webpack_require__(36);
  
  var _ContactPageCss2 = _interopRequireDefault(_ContactPageCss);
  
  var _decoratorsWithStyles = __webpack_require__(3);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var ContactPage = (function (_Component) {
    _inherits(ContactPage, _Component);
  
    function ContactPage() {
      _classCallCheck(this, _ContactPage);
  
      _get(Object.getPrototypeOf(_ContactPage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(ContactPage, [{
      key: 'render',
      value: function render() {
        var title = 'Contact Us';
        this.context.onSetTitle(title);
        return _react2['default'].createElement(
          'div',
          { className: 'ContactPage' },
          _react2['default'].createElement(
            'div',
            { className: 'ContactPage-container' },
            _react2['default'].createElement(
              'h1',
              null,
              title
            ),
            _react2['default'].createElement(
              'p',
              null,
              '...'
            )
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _ContactPage = ContactPage;
    ContactPage = (0, _decoratorsWithStyles2['default'])(_ContactPageCss2['default'])(ContactPage) || ContactPage;
    return ContactPage;
  })(_react.Component);
  
  exports['default'] = ContactPage;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ContentPageCss = __webpack_require__(37);
  
  var _ContentPageCss2 = _interopRequireDefault(_ContentPageCss);
  
  var _decoratorsWithStyles = __webpack_require__(3);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var ContentPage = (function (_Component) {
    _inherits(ContentPage, _Component);
  
    function ContentPage() {
      _classCallCheck(this, _ContentPage);
  
      _get(Object.getPrototypeOf(_ContentPage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(ContentPage, [{
      key: 'render',
      value: function render() {
        this.context.onSetTitle(this.props.title);
        return _react2['default'].createElement(
          'div',
          { className: 'ContentPage' },
          _react2['default'].createElement(
            'div',
            { className: 'ContentPage-container' },
            this.props.path === '/' ? null : _react2['default'].createElement(
              'h1',
              null,
              this.props.title
            ),
            _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: this.props.content || '' } })
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        path: _react.PropTypes.string.isRequired,
        content: _react.PropTypes.string.isRequired,
        title: _react.PropTypes.string
      },
      enumerable: true
    }, {
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _ContentPage = ContentPage;
    ContentPage = (0, _decoratorsWithStyles2['default'])(_ContentPageCss2['default'])(ContentPage) || ContentPage;
    return ContentPage;
  })(_react.Component);
  
  exports['default'] = ContentPage;
  module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _decoratorsWithStyles = __webpack_require__(3);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _ErrorPageCss = __webpack_require__(38);
  
  var _ErrorPageCss2 = _interopRequireDefault(_ErrorPageCss);
  
  var ErrorPage = (function (_Component) {
    _inherits(ErrorPage, _Component);
  
    function ErrorPage() {
      _classCallCheck(this, _ErrorPage);
  
      _get(Object.getPrototypeOf(_ErrorPage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(ErrorPage, [{
      key: 'render',
      value: function render() {
        var title = 'Error';
        this.context.onSetTitle(title);
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            title
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Sorry, an critical error occurred on this page.'
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired,
        onPageNotFound: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _ErrorPage = ErrorPage;
    ErrorPage = (0, _decoratorsWithStyles2['default'])(_ErrorPageCss2['default'])(ErrorPage) || ErrorPage;
    return ErrorPage;
  })(_react.Component);
  
  exports['default'] = ErrorPage;
  module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _FeedbackCss = __webpack_require__(39);
  
  var _FeedbackCss2 = _interopRequireDefault(_FeedbackCss);
  
  var _decoratorsWithStyles = __webpack_require__(3);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var Feedback = (function (_Component) {
    _inherits(Feedback, _Component);
  
    function Feedback() {
      _classCallCheck(this, _Feedback);
  
      _get(Object.getPrototypeOf(_Feedback.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Feedback, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement('div', { className: 'Feedback' });
      }
    }]);
  
    var _Feedback = Feedback;
    Feedback = (0, _decoratorsWithStyles2['default'])(_FeedbackCss2['default'])(Feedback) || Feedback;
    return Feedback;
  })(_react.Component);
  
  exports['default'] = Feedback;
  module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _FooterCss = __webpack_require__(40);
  
  var _FooterCss2 = _interopRequireDefault(_FooterCss);
  
  var _decoratorsWithViewport = __webpack_require__(32);
  
  var _decoratorsWithViewport2 = _interopRequireDefault(_decoratorsWithViewport);
  
  var _decoratorsWithStyles = __webpack_require__(3);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _Link = __webpack_require__(5);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var Footer = (function (_Component) {
    _inherits(Footer, _Component);
  
    function Footer() {
      _classCallCheck(this, _Footer);
  
      _get(Object.getPrototypeOf(_Footer.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Footer, [{
      key: 'render',
      value: function render() {
        // This is just an example how one can render CSS
        var _props$viewport = this.props.viewport;
        var width = _props$viewport.width;
        var height = _props$viewport.height;
  
        this.renderCss('.Footer-viewport:after {content:\' ' + width + 'x' + height + '\';}');
  
        return _react2['default'].createElement('div', null);
      }
    }], [{
      key: 'propTypes',
      value: {
        viewport: _react.PropTypes.shape({
          width: _react.PropTypes.number.isRequired,
          height: _react.PropTypes.number.isRequired
        }).isRequired
      },
      enumerable: true
    }]);
  
    var _Footer = Footer;
    Footer = (0, _decoratorsWithStyles2['default'])(_FooterCss2['default'])(Footer) || Footer;
    Footer = (0, _decoratorsWithViewport2['default'])(Footer) || Footer;
    return Footer;
  })(_react.Component);
  
  exports['default'] = Footer;
  module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _HeaderCss = __webpack_require__(41);
  
  var _HeaderCss2 = _interopRequireDefault(_HeaderCss);
  
  var _decoratorsWithStyles = __webpack_require__(3);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _Link = __webpack_require__(5);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _Navigation = __webpack_require__(25);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  var Header = (function (_Component) {
    _inherits(Header, _Component);
  
    function Header() {
      _classCallCheck(this, _Header);
  
      _get(Object.getPrototypeOf(_Header.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Header, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement('div', null);
      }
    }]);
  
    var _Header = Header;
    Header = (0, _decoratorsWithStyles2['default'])(_HeaderCss2['default'])(Header) || Header;
    return Header;
  })(_react.Component);
  
  exports['default'] = Header;
  module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _config = __webpack_require__(28);
  
  var Html = (function (_Component) {
    _inherits(Html, _Component);
  
    function Html() {
      _classCallCheck(this, Html);
  
      _get(Object.getPrototypeOf(Html.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Html, [{
      key: 'trackingCode',
      value: function trackingCode() {
        return { __html: '(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=' + 'function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;' + 'e=o.createElement(i);r=o.getElementsByTagName(i)[0];' + 'e.src=\'https://www.google-analytics.com/analytics.js\';' + 'r.parentNode.insertBefore(e,r)}(window,document,\'script\',\'ga\'));' + ('ga(\'create\',\'' + _config.googleAnalyticsId + '\',\'auto\');ga(\'send\',\'pageview\');')
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'html',
          { className: 'no-js', lang: '' },
          _react2['default'].createElement(
            'head',
            null,
            _react2['default'].createElement('meta', { charSet: 'utf-8' }),
            _react2['default'].createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
            _react2['default'].createElement(
              'title',
              null,
              this.props.title
            ),
            _react2['default'].createElement('meta', { name: 'description', content: this.props.description }),
            _react2['default'].createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
            _react2['default'].createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }),
            _react2['default'].createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: this.props.css } })
          ),
          _react2['default'].createElement(
            'body',
            null,
            _react2['default'].createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: this.props.body } }),
            _react2['default'].createElement('script', { src: '/app.js' }),
            _react2['default'].createElement('script', { dangerouslySetInnerHTML: this.trackingCode() })
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        title: _react.PropTypes.string,
        description: _react.PropTypes.string,
        css: _react.PropTypes.string,
        body: _react.PropTypes.string.isRequired
      },
      enumerable: true
    }, {
      key: 'defaultProps',
      value: {
        title: '',
        description: ''
      },
      enumerable: true
    }]);
  
    return Html;
  })(_react.Component);
  
  exports['default'] = Html;
  module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _LoginPageCss = __webpack_require__(42);
  
  var _LoginPageCss2 = _interopRequireDefault(_LoginPageCss);
  
  var _stylesCssBootstrapCss = __webpack_require__(46);
  
  var _stylesCssBootstrapCss2 = _interopRequireDefault(_stylesCssBootstrapCss);
  
  var _stylesCssStyleCss = __webpack_require__(47);
  
  var _stylesCssStyleCss2 = _interopRequireDefault(_stylesCssStyleCss);
  
  var _decoratorsWithStyles = __webpack_require__(3);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var LoginPage = (function (_Component) {
    _inherits(LoginPage, _Component);
  
    function LoginPage() {
      _classCallCheck(this, _LoginPage);
  
      _get(Object.getPrototypeOf(_LoginPage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(LoginPage, [{
      key: 'render',
      value: function render() {
        var title = 'Log In';
        this.context.onSetTitle(title);
        return _react2['default'].createElement(
          'div',
          { className: 'middle-box text-center loginscreen  animated fadeInDown' },
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'h1',
                { className: 'logo-name' },
                _react2['default'].createElement('img', { className: 'Header-brandImg', src: __webpack_require__(51), width: '300', height: '200', alt: 'React' })
              )
            ),
            _react2['default'].createElement(
              'p',
              null,
              'Login in. To see it in action.'
            ),
            _react2['default'].createElement(
              'form',
              { className: 'm-t', role: 'form', action: '#' },
              _react2['default'].createElement(
                'div',
                { className: 'form-group' },
                _react2['default'].createElement('input', { type: 'email', className: 'form-control', placeholder: 'Username', required: true })
              ),
              _react2['default'].createElement(
                'div',
                { className: 'form-group' },
                _react2['default'].createElement('input', { type: 'password', className: 'form-control', placeholder: 'Password', required: true })
              ),
              _react2['default'].createElement(
                'button',
                { type: 'submit', className: 'btn btn-primary block full-width m-b' },
                'Login'
              ),
              _react2['default'].createElement(
                'a',
                { 'ui-sref': 'forgot_password' },
                _react2['default'].createElement(
                  'small',
                  null,
                  'Forgot password?'
                )
              ),
              _react2['default'].createElement(
                'p',
                { className: 'text-muted text-center' },
                _react2['default'].createElement(
                  'small',
                  null,
                  'Do not have an account?'
                )
              ),
              _react2['default'].createElement(
                'a',
                { className: 'btn btn-sm btn-white btn-block', 'ui-sref': 'register' },
                'Create an account'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'm-t' },
              ' ',
              _react2['default'].createElement(
                'small',
                null,
                'scalegray | Monitoring done right © 2015'
              ),
              ' '
            )
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _LoginPage = LoginPage;
    LoginPage = (0, _decoratorsWithStyles2['default'])(_stylesCssStyleCss2['default'])(LoginPage) || LoginPage;
    LoginPage = (0, _decoratorsWithStyles2['default'])(_stylesCssBootstrapCss2['default'])(LoginPage) || LoginPage;
    LoginPage = (0, _decoratorsWithStyles2['default'])(_LoginPageCss2['default'])(LoginPage) || LoginPage;
    return LoginPage;
  })(_react.Component);
  
  exports['default'] = LoginPage;
  module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(62);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _NavigationCss = __webpack_require__(43);
  
  var _NavigationCss2 = _interopRequireDefault(_NavigationCss);
  
  var _decoratorsWithStyles = __webpack_require__(3);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _Link = __webpack_require__(5);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var Navigation = (function (_Component) {
    _inherits(Navigation, _Component);
  
    function Navigation() {
      _classCallCheck(this, _Navigation);
  
      _get(Object.getPrototypeOf(_Navigation.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Navigation, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: (0, _classnames2['default'])(this.props.className, 'Navigation'), role: 'navigation' },
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link', href: '/about', onClick: _Link2['default'].handleClick },
            'About'
          ),
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link', href: '/contact', onClick: _Link2['default'].handleClick },
            'Contact'
          ),
          _react2['default'].createElement(
            'span',
            { className: 'Navigation-spacer' },
            ' | '
          ),
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link', href: '/login', onClick: _Link2['default'].handleClick },
            'Log in'
          ),
          _react2['default'].createElement(
            'span',
            { className: 'Navigation-spacer' },
            'or'
          ),
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link Navigation-link--highlight', href: '/register', onClick: _Link2['default'].handleClick },
            'Sign up'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        className: _react.PropTypes.string
      },
      enumerable: true
    }]);
  
    var _Navigation = Navigation;
    Navigation = (0, _decoratorsWithStyles2['default'])(_NavigationCss2['default'])(Navigation) || Navigation;
    return Navigation;
  })(_react.Component);
  
  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _decoratorsWithStyles = __webpack_require__(3);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _NotFoundPageCss = __webpack_require__(44);
  
  var _NotFoundPageCss2 = _interopRequireDefault(_NotFoundPageCss);
  
  var NotFoundPage = (function (_Component) {
    _inherits(NotFoundPage, _Component);
  
    function NotFoundPage() {
      _classCallCheck(this, _NotFoundPage);
  
      _get(Object.getPrototypeOf(_NotFoundPage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(NotFoundPage, [{
      key: 'render',
      value: function render() {
        var title = 'Page Not Found';
        this.context.onSetTitle(title);
        this.context.onPageNotFound();
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            title
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Sorry, but the page you were trying to view does not exist.'
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired,
        onPageNotFound: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _NotFoundPage = NotFoundPage;
    NotFoundPage = (0, _decoratorsWithStyles2['default'])(_NotFoundPageCss2['default'])(NotFoundPage) || NotFoundPage;
    return NotFoundPage;
  })(_react.Component);
  
  exports['default'] = NotFoundPage;
  module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _decoratorsWithStyles = __webpack_require__(3);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _RegisterPageCss = __webpack_require__(45);
  
  var _RegisterPageCss2 = _interopRequireDefault(_RegisterPageCss);
  
  var RegisterPage = (function (_Component) {
    _inherits(RegisterPage, _Component);
  
    function RegisterPage() {
      _classCallCheck(this, _RegisterPage);
  
      _get(Object.getPrototypeOf(_RegisterPage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(RegisterPage, [{
      key: 'render',
      value: function render() {
        var title = 'New User Registration';
        this.context.onSetTitle(title);
        return _react2['default'].createElement(
          'div',
          { className: 'RegisterPage' },
          _react2['default'].createElement(
            'div',
            { className: 'RegisterPage-container' },
            _react2['default'].createElement(
              'h1',
              null,
              title
            ),
            _react2['default'].createElement(
              'p',
              null,
              '...'
            )
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _RegisterPage = RegisterPage;
    RegisterPage = (0, _decoratorsWithStyles2['default'])(_RegisterPageCss2['default'])(RegisterPage) || RegisterPage;
    return RegisterPage;
  })(_react.Component);
  
  exports['default'] = RegisterPage;
  module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = {
    googleAnalyticsId: 'UA-XXXXX-X'
  };
  module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _superagent = __webpack_require__(72);
  
  var _superagent2 = _interopRequireDefault(_superagent);
  
  var _fbjsLibExecutionEnvironment = __webpack_require__(4);
  
  function getUrl(path) {
    if (path.startsWith('http') || _fbjsLibExecutionEnvironment.canUseDOM) {
      return path;
    }
  
    return process.env.WEBSITE_HOSTNAME ? 'http://' + process.env.WEBSITE_HOSTNAME + path : 'http://127.0.0.1:' + global.server.get('port') + path;
  }
  
  var HttpClient = {
  
    get: function get(path) {
      return new Promise(function (resolve, reject) {
        _superagent2['default'].get(getUrl(path)).accept('application/json').end(function (err, res) {
          if (err) {
            if (err.status === 404) {
              resolve(null);
            } else {
              reject(err);
            }
          } else {
            resolve(res.body);
          }
        });
      });
    }
  
  };
  
  exports['default'] = HttpClient;
  module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _fbjsLibExecutionEnvironment = __webpack_require__(4);
  
  var _historyLibCreateBrowserHistory = __webpack_require__(68);
  
  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);
  
  var _historyLibUseQueries = __webpack_require__(69);
  
  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);
  
  var location = _fbjsLibExecutionEnvironment.canUseDOM ? (0, _historyLibUseQueries2['default'])(_historyLibCreateBrowserHistory2['default'])() : {};
  
  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  // eslint-disable-line no-unused-vars
  
  var _fbjsLibEmptyFunction = __webpack_require__(64);
  
  var _fbjsLibEmptyFunction2 = _interopRequireDefault(_fbjsLibEmptyFunction);
  
  function withContext(ComposedComponent) {
    return (function (_Component) {
      _inherits(WithContext, _Component);
  
      function WithContext() {
        _classCallCheck(this, WithContext);
  
        _get(Object.getPrototypeOf(WithContext.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(WithContext, [{
        key: 'getChildContext',
        value: function getChildContext() {
          var context = this.props.context;
          return {
            onInsertCss: context.onInsertCss || _fbjsLibEmptyFunction2['default'],
            onSetTitle: context.onSetTitle || _fbjsLibEmptyFunction2['default'],
            onSetMeta: context.onSetMeta || _fbjsLibEmptyFunction2['default'],
            onPageNotFound: context.onPageNotFound || _fbjsLibEmptyFunction2['default']
          };
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props;
          var context = _props.context;
  
          var other = _objectWithoutProperties(_props, ['context']);
  
          // eslint-disable-line no-unused-vars
          return _react2['default'].createElement(ComposedComponent, other);
        }
      }], [{
        key: 'propTypes',
        value: {
          context: _react.PropTypes.shape({
            onInsertCss: _react.PropTypes.func,
            onSetTitle: _react.PropTypes.func,
            onSetMeta: _react.PropTypes.func,
            onPageNotFound: _react.PropTypes.func
          })
        },
        enumerable: true
      }, {
        key: 'childContextTypes',
        value: {
          onInsertCss: _react.PropTypes.func.isRequired,
          onSetTitle: _react.PropTypes.func.isRequired,
          onSetMeta: _react.PropTypes.func.isRequired,
          onPageNotFound: _react.PropTypes.func.isRequired
        },
        enumerable: true
      }]);
  
      return WithContext;
    })(_react.Component);
  }
  
  exports['default'] = withContext;
  module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  // eslint-disable-line no-unused-vars
  
  var _eventemitter3 = __webpack_require__(63);
  
  var _eventemitter32 = _interopRequireDefault(_eventemitter3);
  
  var _fbjsLibExecutionEnvironment = __webpack_require__(4);
  
  var EE = undefined;
  var viewport = { width: 1366, height: 768 }; // Default size for server-side rendering
  var RESIZE_EVENT = 'resize';
  
  function handleWindowResize() {
    if (viewport.width !== window.innerWidth || viewport.height !== window.innerHeight) {
      viewport = { width: window.innerWidth, height: window.innerHeight };
      EE.emit(RESIZE_EVENT, viewport);
    }
  }
  
  function withViewport(ComposedComponent) {
    return (function (_Component) {
      _inherits(WithViewport, _Component);
  
      function WithViewport() {
        _classCallCheck(this, WithViewport);
  
        _get(Object.getPrototypeOf(WithViewport.prototype), 'constructor', this).call(this);
  
        this.state = {
          viewport: _fbjsLibExecutionEnvironment.canUseDOM ? { width: window.innerWidth, height: window.innerHeight } : viewport
        };
      }
  
      _createClass(WithViewport, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (!EE) {
            EE = new _eventemitter32['default']();
            window.addEventListener('resize', handleWindowResize);
            window.addEventListener('orientationchange', handleWindowResize);
          }
  
          EE.on(RESIZE_EVENT, this.handleResize, this);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          EE.removeListener(RESIZE_EVENT, this.handleResize, this);
          if (!EE.listeners(RESIZE_EVENT, true)) {
            window.removeEventListener('resize', handleWindowResize);
            window.removeEventListener('orientationchange', handleWindowResize);
            EE = null;
          }
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2['default'].createElement(ComposedComponent, _extends({}, this.props, { viewport: this.state.viewport }));
        }
      }, {
        key: 'handleResize',
        value: function handleResize(value) {
          this.setState({ viewport: value }); // eslint-disable-line react/no-set-state
        }
      }]);
  
      return WithViewport;
    })(_react.Component);
  }
  
  exports['default'] = withViewport;
  module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _this = this;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRoutingSrcRouter = __webpack_require__(14);
  
  var _reactRoutingSrcRouter2 = _interopRequireDefault(_reactRoutingSrcRouter);
  
  var _coreHttpClient = __webpack_require__(29);
  
  var _coreHttpClient2 = _interopRequireDefault(_coreHttpClient);
  
  var _componentsApp = __webpack_require__(16);
  
  var _componentsApp2 = _interopRequireDefault(_componentsApp);
  
  var _componentsContentPage = __webpack_require__(18);
  
  var _componentsContentPage2 = _interopRequireDefault(_componentsContentPage);
  
  var _componentsContactPage = __webpack_require__(17);
  
  var _componentsContactPage2 = _interopRequireDefault(_componentsContactPage);
  
  var _componentsLoginPage = __webpack_require__(24);
  
  var _componentsLoginPage2 = _interopRequireDefault(_componentsLoginPage);
  
  var _componentsRegisterPage = __webpack_require__(27);
  
  var _componentsRegisterPage2 = _interopRequireDefault(_componentsRegisterPage);
  
  var _componentsNotFoundPage = __webpack_require__(26);
  
  var _componentsNotFoundPage2 = _interopRequireDefault(_componentsNotFoundPage);
  
  var _componentsErrorPage = __webpack_require__(19);
  
  var _componentsErrorPage2 = _interopRequireDefault(_componentsErrorPage);
  
  var router = new _reactRoutingSrcRouter2['default'](function (on) {
    on('*', function callee$1$0(state, next) {
      var component;
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return regeneratorRuntime.awrap(next());
  
          case 2:
            component = context$2$0.sent;
            return context$2$0.abrupt('return', component && _react2['default'].createElement(
              _componentsApp2['default'],
              { context: state.context },
              component
            ));
  
          case 4:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
  
    on('/contact', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_componentsContactPage2['default'], null));
  
          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
  
    on('/login', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_componentsLoginPage2['default'], null));
  
          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
  
    on('/register', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_componentsRegisterPage2['default'], null));
  
          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
  
    on('*', function callee$1$0(state) {
      var content;
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return regeneratorRuntime.awrap(_coreHttpClient2['default'].get('/api/content?path=' + state.path));
  
          case 2:
            content = context$2$0.sent;
            return context$2$0.abrupt('return', content && _react2['default'].createElement(_componentsContentPage2['default'], content));
  
          case 4:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
  
    on('error', function (state, error) {
      return state.statusCode === 404 ? _react2['default'].createElement(
        _componentsApp2['default'],
        { context: state.context, error: error },
        _react2['default'].createElement(_componentsNotFoundPage2['default'], null)
      ) : _react2['default'].createElement(
        _componentsApp2['default'],
        { context: state.context, error: error },
        _react2['default'].createElement(_componentsErrorPage2['default'], null)
      );
    });
  });
  
  exports['default'] = router;
  module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _fs = __webpack_require__(67);
  
  var _fs2 = _interopRequireDefault(_fs);
  
  var exists = function exists(filename) {
    return new Promise(function (resolve) {
      _fs2['default'].exists(filename, resolve);
    });
  };
  
  var readFile = function readFile(filename) {
    return new Promise(function (resolve, reject) {
      _fs2['default'].readFile(filename, 'utf8', function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
  
  exports['default'] = { exists: exists, readFile: readFile };
  module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  
  
  // module
  exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  box-sizing: content-box; /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", ""]);
  
  // exports


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.ContactPage-container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", ""]);
  
  // exports


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.ContentPage-container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", ""]);
  
  // exports


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n* {\n  margin: 0;\n  line-height: 1.2;\n}\n\nhtml {\n  display: table;\n  width: 100%;\n  height: 100%;\n  color: #888;\n  text-align: center;\n  font-family: sans-serif;\n}\n\nbody {\n  display: table-cell;\n  margin: 2em auto;\n  vertical-align: middle;\n}\n\nh1 {\n  color: #555;\n  font-weight: 400;\n  font-size: 2em;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\n@media only screen and (max-width: 280px) {\n\n  body, p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n\n  }\n\n}\n", ""]);
  
  // exports


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.Feedback {\n  background: #f5f5f5;\n  color: #333;\n}\n\n.Feedback-container {\n  margin: 0 auto;\n  padding: 20px 8px;\n  max-width: 1000px;\n  text-align: center;\n  font-size: 1.5em; /* ~24px */\n}\n\n.Feedback-link,\n.Feedback-link:active,\n.Feedback-link:hover,\n.Feedback-link:visited {\n  color: #333;\n  text-decoration: none;\n}\n\n.Feedback-link:hover {\n  text-decoration: underline;\n}\n\n.Feedback-spacer {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n", ""]);
  
  // exports


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.Footer {\n  background: #333;\n  color: #fff;\n}\n\n.Footer-container {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  text-align: center;\n}\n\n.Footer-text {\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, .5);\n}\n\n.Footer-text--muted {\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, .3);\n}\n\n.Footer-spacer {\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, .3);\n}\n\n.Footer-text,\n.Footer-link {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.Footer-link,\n.Footer-link:active,\n.Footer-link:visited {\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, .6);\n  text-decoration: none;\n}\n\n.Footer-link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n", ""]);
  
  // exports


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  
  
  // module
  exports.push([module.id, "\n/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.Header {\n  background: #373277;\n  color: #fff;\n}\n\n.Header-container {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: 1000px;\n}\n\n.Header-brand {\n  color: rgb(146, 229, 252);\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n\n.Header-brandTxt {\n  margin-left: 10px;\n}\n\n.Header-nav {\n  float: right;\n  margin-top: 6px;\n}\n\n.Header-banner {\n  text-align: center;\n}\n\n.Header-bannerTitle {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.Header-bannerDesc {\n  padding: 0;\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, .5);\n  font-size: 1.25em;\n  margin: 0;\n}\n", ""]);
  
  // exports


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.LoginPage-container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n\n/*ece0ca*/\n", ""]);
  
  // exports


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n.Navigation-link {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.Navigation-link,\n.Navigation-link:active,\n.Navigation-link:visited {\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, .6);\n}\n\n.Navigation-link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.Navigation-link--highlight {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: #000000;\n  background: rgba(0, 0, 0, .15);\n  color: #fff;\n}\n\n.Navigation-link--highlight:hover {\n  background: #000000;\n  background: rgba(0, 0, 0, .3);\n}\n\n.Navigation-spacer {\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, .3);\n}\n", ""]);
  
  // exports


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n* {\n  margin: 0;\n  line-height: 1.2;\n}\n\nhtml {\n  display: table;\n  width: 100%;\n  height: 100%;\n  color: #888;\n  text-align: center;\n  font-family: sans-serif;\n}\n\nbody {\n  display: table-cell;\n  margin: 2em auto;\n  vertical-align: middle;\n}\n\nh1 {\n  color: #555;\n  font-weight: 400;\n  font-size: 2em;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\n@media only screen and (max-width: 280px) {\n\n  body, p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n\n}\n", ""]);
  
  // exports


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.RegisterPage-container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", ""]);
  
  // exports


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  
  
  // module
  exports.push([module.id, "/*!\n * Bootstrap v3.3.4 (http://getbootstrap.com)\n * Copyright 2011-2015 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\nhtml {\n    font-family: sans-serif;\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n}\nbody {\n    margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n    display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n    display: inline-block;\n    vertical-align: baseline;\n}\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n[hidden],\ntemplate {\n    display: none;\n}\na {\n    background-color: transparent;\n}\na:active,\na:hover {\n    outline: 0;\n}\nabbr[title] {\n    border-bottom: 1px dotted;\n}\nb,\nstrong {\n    font-weight: bold;\n}\ndfn {\n    font-style: italic;\n}\nh1 {\n    margin: .67em 0;\n    font-size: 2em;\n}\nmark {\n    color: #000;\n    background: #ff0;\n}\nsmall {\n    font-size: 80%;\n}\nsub,\nsup {\n    position: relative;\n    font-size: 75%;\n    line-height: 0;\n    vertical-align: baseline;\n}\nsup {\n    top: -.5em;\n}\nsub {\n    bottom: -.25em;\n}\nimg {\n    border: 0;\n}\nsvg:not(:root) {\n    overflow: hidden;\n}\nfigure {\n    margin: 1em 40px;\n}\nhr {\n    height: 0;\n    box-sizing: content-box;\n}\npre {\n    overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n    font-family: monospace, monospace;\n    font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    margin: 0;\n    font: inherit;\n    color: inherit;\n}\nbutton {\n    overflow: visible;\n}\nbutton,\nselect {\n    text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button;\n    cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n}\ninput {\n    line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box;\n    padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n}\ninput[type=\"search\"] {\n    box-sizing: content-box;\n    -webkit-appearance: textfield;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\nfieldset {\n    padding: .35em .625em .75em;\n    margin: 0 2px;\n    border: 1px solid #c0c0c0;\n}\nlegend {\n    padding: 0;\n    border: 0;\n}\ntextarea {\n    overflow: auto;\n}\noptgroup {\n    font-weight: bold;\n}\ntable {\n    border-spacing: 0;\n    border-collapse: collapse;\n}\ntd,\nth {\n    padding: 0;\n}\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n    *,\n    *:before,\n    *:after {\n        color: #000 !important;\n        text-shadow: none !important;\n        background: transparent !important;\n        box-shadow: none !important;\n    }\n    a,\n    a:visited {\n        text-decoration: underline;\n    }\n    a[href]:after {\n        content: \" (\" attr(href) \")\";\n    }\n    abbr[title]:after {\n        content: \" (\" attr(title) \")\";\n    }\n    a[href^=\"#\"]:after,\n    a[href^=\"javascript:\"]:after {\n        content: \"\";\n    }\n    pre,\n    blockquote {\n        border: 1px solid #999;\n\n        page-break-inside: avoid;\n    }\n    thead {\n        display: table-header-group;\n    }\n    tr,\n    img {\n        page-break-inside: avoid;\n    }\n    img {\n        max-width: 100% !important;\n    }\n    p,\n    h2,\n    h3 {\n        orphans: 3;\n        widows: 3;\n    }\n    h2,\n    h3 {\n        page-break-after: avoid;\n    }\n    select {\n        background: #fff !important;\n    }\n    .navbar {\n        display: none;\n    }\n    .btn > .caret,\n    .dropup > .btn > .caret {\n        border-top-color: #000 !important;\n    }\n    .label {\n        border: 1px solid #000;\n    }\n    .table {\n        border-collapse: collapse !important;\n    }\n    .table td,\n    .table th {\n        background-color: #fff !important;\n    }\n    .table-bordered th,\n    .table-bordered td {\n        border: 1px solid #ddd !important;\n    }\n}\n@font-face {\n    font-family: 'Glyphicons Halflings';\n\n    src: url(" + __webpack_require__(6) + ");\n    src: url(" + __webpack_require__(6) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(56) + ") format('woff2'), url(" + __webpack_require__(55) + ") format('woff'), url(" + __webpack_require__(48) + ") format('truetype'), url(" + __webpack_require__(54) + "#glyphicons_halflingsregular) format('svg');\n}\n.glyphicon {\n    position: relative;\n    top: 1px;\n    display: inline-block;\n    font-family: 'Glyphicons Halflings';\n    font-style: normal;\n    font-weight: normal;\n    line-height: 1;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.glyphicon-asterisk:before {\n    content: \"*\";\n}\n.glyphicon-plus:before {\n    content: \"+\";\n}\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n    content: \"\\20AC\";\n}\n.glyphicon-minus:before {\n    content: \"\\2212\";\n}\n.glyphicon-cloud:before {\n    content: \"\\2601\";\n}\n.glyphicon-envelope:before {\n    content: \"\\2709\";\n}\n.glyphicon-pencil:before {\n    content: \"\\270F\";\n}\n.glyphicon-glass:before {\n    content: \"\\E001\";\n}\n.glyphicon-music:before {\n    content: \"\\E002\";\n}\n.glyphicon-search:before {\n    content: \"\\E003\";\n}\n.glyphicon-heart:before {\n    content: \"\\E005\";\n}\n.glyphicon-star:before {\n    content: \"\\E006\";\n}\n.glyphicon-star-empty:before {\n    content: \"\\E007\";\n}\n.glyphicon-user:before {\n    content: \"\\E008\";\n}\n.glyphicon-film:before {\n    content: \"\\E009\";\n}\n.glyphicon-th-large:before {\n    content: \"\\E010\";\n}\n.glyphicon-th:before {\n    content: \"\\E011\";\n}\n.glyphicon-th-list:before {\n    content: \"\\E012\";\n}\n.glyphicon-ok:before {\n    content: \"\\E013\";\n}\n.glyphicon-remove:before {\n    content: \"\\E014\";\n}\n.glyphicon-zoom-in:before {\n    content: \"\\E015\";\n}\n.glyphicon-zoom-out:before {\n    content: \"\\E016\";\n}\n.glyphicon-off:before {\n    content: \"\\E017\";\n}\n.glyphicon-signal:before {\n    content: \"\\E018\";\n}\n.glyphicon-cog:before {\n    content: \"\\E019\";\n}\n.glyphicon-trash:before {\n    content: \"\\E020\";\n}\n.glyphicon-home:before {\n    content: \"\\E021\";\n}\n.glyphicon-file:before {\n    content: \"\\E022\";\n}\n.glyphicon-time:before {\n    content: \"\\E023\";\n}\n.glyphicon-road:before {\n    content: \"\\E024\";\n}\n.glyphicon-download-alt:before {\n    content: \"\\E025\";\n}\n.glyphicon-download:before {\n    content: \"\\E026\";\n}\n.glyphicon-upload:before {\n    content: \"\\E027\";\n}\n.glyphicon-inbox:before {\n    content: \"\\E028\";\n}\n.glyphicon-play-circle:before {\n    content: \"\\E029\";\n}\n.glyphicon-repeat:before {\n    content: \"\\E030\";\n}\n.glyphicon-refresh:before {\n    content: \"\\E031\";\n}\n.glyphicon-list-alt:before {\n    content: \"\\E032\";\n}\n.glyphicon-lock:before {\n    content: \"\\E033\";\n}\n.glyphicon-flag:before {\n    content: \"\\E034\";\n}\n.glyphicon-headphones:before {\n    content: \"\\E035\";\n}\n.glyphicon-volume-off:before {\n    content: \"\\E036\";\n}\n.glyphicon-volume-down:before {\n    content: \"\\E037\";\n}\n.glyphicon-volume-up:before {\n    content: \"\\E038\";\n}\n.glyphicon-qrcode:before {\n    content: \"\\E039\";\n}\n.glyphicon-barcode:before {\n    content: \"\\E040\";\n}\n.glyphicon-tag:before {\n    content: \"\\E041\";\n}\n.glyphicon-tags:before {\n    content: \"\\E042\";\n}\n.glyphicon-book:before {\n    content: \"\\E043\";\n}\n.glyphicon-bookmark:before {\n    content: \"\\E044\";\n}\n.glyphicon-print:before {\n    content: \"\\E045\";\n}\n.glyphicon-camera:before {\n    content: \"\\E046\";\n}\n.glyphicon-font:before {\n    content: \"\\E047\";\n}\n.glyphicon-bold:before {\n    content: \"\\E048\";\n}\n.glyphicon-italic:before {\n    content: \"\\E049\";\n}\n.glyphicon-text-height:before {\n    content: \"\\E050\";\n}\n.glyphicon-text-width:before {\n    content: \"\\E051\";\n}\n.glyphicon-align-left:before {\n    content: \"\\E052\";\n}\n.glyphicon-align-center:before {\n    content: \"\\E053\";\n}\n.glyphicon-align-right:before {\n    content: \"\\E054\";\n}\n.glyphicon-align-justify:before {\n    content: \"\\E055\";\n}\n.glyphicon-list:before {\n    content: \"\\E056\";\n}\n.glyphicon-indent-left:before {\n    content: \"\\E057\";\n}\n.glyphicon-indent-right:before {\n    content: \"\\E058\";\n}\n.glyphicon-facetime-video:before {\n    content: \"\\E059\";\n}\n.glyphicon-picture:before {\n    content: \"\\E060\";\n}\n.glyphicon-map-marker:before {\n    content: \"\\E062\";\n}\n.glyphicon-adjust:before {\n    content: \"\\E063\";\n}\n.glyphicon-tint:before {\n    content: \"\\E064\";\n}\n.glyphicon-edit:before {\n    content: \"\\E065\";\n}\n.glyphicon-share:before {\n    content: \"\\E066\";\n}\n.glyphicon-check:before {\n    content: \"\\E067\";\n}\n.glyphicon-move:before {\n    content: \"\\E068\";\n}\n.glyphicon-step-backward:before {\n    content: \"\\E069\";\n}\n.glyphicon-fast-backward:before {\n    content: \"\\E070\";\n}\n.glyphicon-backward:before {\n    content: \"\\E071\";\n}\n.glyphicon-play:before {\n    content: \"\\E072\";\n}\n.glyphicon-pause:before {\n    content: \"\\E073\";\n}\n.glyphicon-stop:before {\n    content: \"\\E074\";\n}\n.glyphicon-forward:before {\n    content: \"\\E075\";\n}\n.glyphicon-fast-forward:before {\n    content: \"\\E076\";\n}\n.glyphicon-step-forward:before {\n    content: \"\\E077\";\n}\n.glyphicon-eject:before {\n    content: \"\\E078\";\n}\n.glyphicon-chevron-left:before {\n    content: \"\\E079\";\n}\n.glyphicon-chevron-right:before {\n    content: \"\\E080\";\n}\n.glyphicon-plus-sign:before {\n    content: \"\\E081\";\n}\n.glyphicon-minus-sign:before {\n    content: \"\\E082\";\n}\n.glyphicon-remove-sign:before {\n    content: \"\\E083\";\n}\n.glyphicon-ok-sign:before {\n    content: \"\\E084\";\n}\n.glyphicon-question-sign:before {\n    content: \"\\E085\";\n}\n.glyphicon-info-sign:before {\n    content: \"\\E086\";\n}\n.glyphicon-screenshot:before {\n    content: \"\\E087\";\n}\n.glyphicon-remove-circle:before {\n    content: \"\\E088\";\n}\n.glyphicon-ok-circle:before {\n    content: \"\\E089\";\n}\n.glyphicon-ban-circle:before {\n    content: \"\\E090\";\n}\n.glyphicon-arrow-left:before {\n    content: \"\\E091\";\n}\n.glyphicon-arrow-right:before {\n    content: \"\\E092\";\n}\n.glyphicon-arrow-up:before {\n    content: \"\\E093\";\n}\n.glyphicon-arrow-down:before {\n    content: \"\\E094\";\n}\n.glyphicon-share-alt:before {\n    content: \"\\E095\";\n}\n.glyphicon-resize-full:before {\n    content: \"\\E096\";\n}\n.glyphicon-resize-small:before {\n    content: \"\\E097\";\n}\n.glyphicon-exclamation-sign:before {\n    content: \"\\E101\";\n}\n.glyphicon-gift:before {\n    content: \"\\E102\";\n}\n.glyphicon-leaf:before {\n    content: \"\\E103\";\n}\n.glyphicon-fire:before {\n    content: \"\\E104\";\n}\n.glyphicon-eye-open:before {\n    content: \"\\E105\";\n}\n.glyphicon-eye-close:before {\n    content: \"\\E106\";\n}\n.glyphicon-warning-sign:before {\n    content: \"\\E107\";\n}\n.glyphicon-plane:before {\n    content: \"\\E108\";\n}\n.glyphicon-calendar:before {\n    content: \"\\E109\";\n}\n.glyphicon-random:before {\n    content: \"\\E110\";\n}\n.glyphicon-comment:before {\n    content: \"\\E111\";\n}\n.glyphicon-magnet:before {\n    content: \"\\E112\";\n}\n.glyphicon-chevron-up:before {\n    content: \"\\E113\";\n}\n.glyphicon-chevron-down:before {\n    content: \"\\E114\";\n}\n.glyphicon-retweet:before {\n    content: \"\\E115\";\n}\n.glyphicon-shopping-cart:before {\n    content: \"\\E116\";\n}\n.glyphicon-folder-close:before {\n    content: \"\\E117\";\n}\n.glyphicon-folder-open:before {\n    content: \"\\E118\";\n}\n.glyphicon-resize-vertical:before {\n    content: \"\\E119\";\n}\n.glyphicon-resize-horizontal:before {\n    content: \"\\E120\";\n}\n.glyphicon-hdd:before {\n    content: \"\\E121\";\n}\n.glyphicon-bullhorn:before {\n    content: \"\\E122\";\n}\n.glyphicon-bell:before {\n    content: \"\\E123\";\n}\n.glyphicon-certificate:before {\n    content: \"\\E124\";\n}\n.glyphicon-thumbs-up:before {\n    content: \"\\E125\";\n}\n.glyphicon-thumbs-down:before {\n    content: \"\\E126\";\n}\n.glyphicon-hand-right:before {\n    content: \"\\E127\";\n}\n.glyphicon-hand-left:before {\n    content: \"\\E128\";\n}\n.glyphicon-hand-up:before {\n    content: \"\\E129\";\n}\n.glyphicon-hand-down:before {\n    content: \"\\E130\";\n}\n.glyphicon-circle-arrow-right:before {\n    content: \"\\E131\";\n}\n.glyphicon-circle-arrow-left:before {\n    content: \"\\E132\";\n}\n.glyphicon-circle-arrow-up:before {\n    content: \"\\E133\";\n}\n.glyphicon-circle-arrow-down:before {\n    content: \"\\E134\";\n}\n.glyphicon-globe:before {\n    content: \"\\E135\";\n}\n.glyphicon-wrench:before {\n    content: \"\\E136\";\n}\n.glyphicon-tasks:before {\n    content: \"\\E137\";\n}\n.glyphicon-filter:before {\n    content: \"\\E138\";\n}\n.glyphicon-briefcase:before {\n    content: \"\\E139\";\n}\n.glyphicon-fullscreen:before {\n    content: \"\\E140\";\n}\n.glyphicon-dashboard:before {\n    content: \"\\E141\";\n}\n.glyphicon-paperclip:before {\n    content: \"\\E142\";\n}\n.glyphicon-heart-empty:before {\n    content: \"\\E143\";\n}\n.glyphicon-link:before {\n    content: \"\\E144\";\n}\n.glyphicon-phone:before {\n    content: \"\\E145\";\n}\n.glyphicon-pushpin:before {\n    content: \"\\E146\";\n}\n.glyphicon-usd:before {\n    content: \"\\E148\";\n}\n.glyphicon-gbp:before {\n    content: \"\\E149\";\n}\n.glyphicon-sort:before {\n    content: \"\\E150\";\n}\n.glyphicon-sort-by-alphabet:before {\n    content: \"\\E151\";\n}\n.glyphicon-sort-by-alphabet-alt:before {\n    content: \"\\E152\";\n}\n.glyphicon-sort-by-order:before {\n    content: \"\\E153\";\n}\n.glyphicon-sort-by-order-alt:before {\n    content: \"\\E154\";\n}\n.glyphicon-sort-by-attributes:before {\n    content: \"\\E155\";\n}\n.glyphicon-sort-by-attributes-alt:before {\n    content: \"\\E156\";\n}\n.glyphicon-unchecked:before {\n    content: \"\\E157\";\n}\n.glyphicon-expand:before {\n    content: \"\\E158\";\n}\n.glyphicon-collapse-down:before {\n    content: \"\\E159\";\n}\n.glyphicon-collapse-up:before {\n    content: \"\\E160\";\n}\n.glyphicon-log-in:before {\n    content: \"\\E161\";\n}\n.glyphicon-flash:before {\n    content: \"\\E162\";\n}\n.glyphicon-log-out:before {\n    content: \"\\E163\";\n}\n.glyphicon-new-window:before {\n    content: \"\\E164\";\n}\n.glyphicon-record:before {\n    content: \"\\E165\";\n}\n.glyphicon-save:before {\n    content: \"\\E166\";\n}\n.glyphicon-open:before {\n    content: \"\\E167\";\n}\n.glyphicon-saved:before {\n    content: \"\\E168\";\n}\n.glyphicon-import:before {\n    content: \"\\E169\";\n}\n.glyphicon-export:before {\n    content: \"\\E170\";\n}\n.glyphicon-send:before {\n    content: \"\\E171\";\n}\n.glyphicon-floppy-disk:before {\n    content: \"\\E172\";\n}\n.glyphicon-floppy-saved:before {\n    content: \"\\E173\";\n}\n.glyphicon-floppy-remove:before {\n    content: \"\\E174\";\n}\n.glyphicon-floppy-save:before {\n    content: \"\\E175\";\n}\n.glyphicon-floppy-open:before {\n    content: \"\\E176\";\n}\n.glyphicon-credit-card:before {\n    content: \"\\E177\";\n}\n.glyphicon-transfer:before {\n    content: \"\\E178\";\n}\n.glyphicon-cutlery:before {\n    content: \"\\E179\";\n}\n.glyphicon-header:before {\n    content: \"\\E180\";\n}\n.glyphicon-compressed:before {\n    content: \"\\E181\";\n}\n.glyphicon-earphone:before {\n    content: \"\\E182\";\n}\n.glyphicon-phone-alt:before {\n    content: \"\\E183\";\n}\n.glyphicon-tower:before {\n    content: \"\\E184\";\n}\n.glyphicon-stats:before {\n    content: \"\\E185\";\n}\n.glyphicon-sd-video:before {\n    content: \"\\E186\";\n}\n.glyphicon-hd-video:before {\n    content: \"\\E187\";\n}\n.glyphicon-subtitles:before {\n    content: \"\\E188\";\n}\n.glyphicon-sound-stereo:before {\n    content: \"\\E189\";\n}\n.glyphicon-sound-dolby:before {\n    content: \"\\E190\";\n}\n.glyphicon-sound-5-1:before {\n    content: \"\\E191\";\n}\n.glyphicon-sound-6-1:before {\n    content: \"\\E192\";\n}\n.glyphicon-sound-7-1:before {\n    content: \"\\E193\";\n}\n.glyphicon-copyright-mark:before {\n    content: \"\\E194\";\n}\n.glyphicon-registration-mark:before {\n    content: \"\\E195\";\n}\n.glyphicon-cloud-download:before {\n    content: \"\\E197\";\n}\n.glyphicon-cloud-upload:before {\n    content: \"\\E198\";\n}\n.glyphicon-tree-conifer:before {\n    content: \"\\E199\";\n}\n.glyphicon-tree-deciduous:before {\n    content: \"\\E200\";\n}\n.glyphicon-cd:before {\n    content: \"\\E201\";\n}\n.glyphicon-save-file:before {\n    content: \"\\E202\";\n}\n.glyphicon-open-file:before {\n    content: \"\\E203\";\n}\n.glyphicon-level-up:before {\n    content: \"\\E204\";\n}\n.glyphicon-copy:before {\n    content: \"\\E205\";\n}\n.glyphicon-paste:before {\n    content: \"\\E206\";\n}\n.glyphicon-alert:before {\n    content: \"\\E209\";\n}\n.glyphicon-equalizer:before {\n    content: \"\\E210\";\n}\n.glyphicon-king:before {\n    content: \"\\E211\";\n}\n.glyphicon-queen:before {\n    content: \"\\E212\";\n}\n.glyphicon-pawn:before {\n    content: \"\\E213\";\n}\n.glyphicon-bishop:before {\n    content: \"\\E214\";\n}\n.glyphicon-knight:before {\n    content: \"\\E215\";\n}\n.glyphicon-baby-formula:before {\n    content: \"\\E216\";\n}\n.glyphicon-tent:before {\n    content: \"\\26FA\";\n}\n.glyphicon-blackboard:before {\n    content: \"\\E218\";\n}\n.glyphicon-bed:before {\n    content: \"\\E219\";\n}\n.glyphicon-apple:before {\n    content: \"\\F8FF\";\n}\n.glyphicon-erase:before {\n    content: \"\\E221\";\n}\n.glyphicon-hourglass:before {\n    content: \"\\231B\";\n}\n.glyphicon-lamp:before {\n    content: \"\\E223\";\n}\n.glyphicon-duplicate:before {\n    content: \"\\E224\";\n}\n.glyphicon-piggy-bank:before {\n    content: \"\\E225\";\n}\n.glyphicon-scissors:before {\n    content: \"\\E226\";\n}\n.glyphicon-bitcoin:before {\n    content: \"\\E227\";\n}\n.glyphicon-btc:before {\n    content: \"\\E227\";\n}\n.glyphicon-xbt:before {\n    content: \"\\E227\";\n}\n.glyphicon-yen:before {\n    content: \"\\A5\";\n}\n.glyphicon-jpy:before {\n    content: \"\\A5\";\n}\n.glyphicon-ruble:before {\n    content: \"\\20BD\";\n}\n.glyphicon-rub:before {\n    content: \"\\20BD\";\n}\n.glyphicon-scale:before {\n    content: \"\\E230\";\n}\n.glyphicon-ice-lolly:before {\n    content: \"\\E231\";\n}\n.glyphicon-ice-lolly-tasted:before {\n    content: \"\\E232\";\n}\n.glyphicon-education:before {\n    content: \"\\E233\";\n}\n.glyphicon-option-horizontal:before {\n    content: \"\\E234\";\n}\n.glyphicon-option-vertical:before {\n    content: \"\\E235\";\n}\n.glyphicon-menu-hamburger:before {\n    content: \"\\E236\";\n}\n.glyphicon-modal-window:before {\n    content: \"\\E237\";\n}\n.glyphicon-oil:before {\n    content: \"\\E238\";\n}\n.glyphicon-grain:before {\n    content: \"\\E239\";\n}\n.glyphicon-sunglasses:before {\n    content: \"\\E240\";\n}\n.glyphicon-text-size:before {\n    content: \"\\E241\";\n}\n.glyphicon-text-color:before {\n    content: \"\\E242\";\n}\n.glyphicon-text-background:before {\n    content: \"\\E243\";\n}\n.glyphicon-object-align-top:before {\n    content: \"\\E244\";\n}\n.glyphicon-object-align-bottom:before {\n    content: \"\\E245\";\n}\n.glyphicon-object-align-horizontal:before {\n    content: \"\\E246\";\n}\n.glyphicon-object-align-left:before {\n    content: \"\\E247\";\n}\n.glyphicon-object-align-vertical:before {\n    content: \"\\E248\";\n}\n.glyphicon-object-align-right:before {\n    content: \"\\E249\";\n}\n.glyphicon-triangle-right:before {\n    content: \"\\E250\";\n}\n.glyphicon-triangle-left:before {\n    content: \"\\E251\";\n}\n.glyphicon-triangle-bottom:before {\n    content: \"\\E252\";\n}\n.glyphicon-triangle-top:before {\n    content: \"\\E253\";\n}\n.glyphicon-console:before {\n    content: \"\\E254\";\n}\n.glyphicon-superscript:before {\n    content: \"\\E255\";\n}\n.glyphicon-subscript:before {\n    content: \"\\E256\";\n}\n.glyphicon-menu-left:before {\n    content: \"\\E257\";\n}\n.glyphicon-menu-right:before {\n    content: \"\\E258\";\n}\n.glyphicon-menu-down:before {\n    content: \"\\E259\";\n}\n.glyphicon-menu-up:before {\n    content: \"\\E260\";\n}\n* {\n    box-sizing: border-box;\n}\n*:before,\n*:after {\n    box-sizing: border-box;\n}\nhtml {\n    font-size: 10px;\n\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #333;\n    background-color: #fff;\n}\ninput,\nbutton,\nselect,\ntextarea {\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n}\na {\n    color: #337ab7;\n    text-decoration: none;\n}\na:hover,\na:focus {\n    color: #23527c;\n    text-decoration: underline;\n}\na:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\nfigure {\n    margin: 0;\n}\nimg {\n    vertical-align: middle;\n}\n.img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n    display: block;\n    max-width: 100%;\n    height: auto;\n}\n.img-rounded {\n    border-radius: 6px;\n}\n.img-thumbnail {\n    display: inline-block;\n    max-width: 100%;\n    height: auto;\n    padding: 4px;\n    line-height: 1.42857143;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    -webkit-transition: all .2s ease-in-out;\n    transition: all .2s ease-in-out;\n}\n.img-circle {\n    border-radius: 50%;\n}\nhr {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    border: 0;\n    border-top: 1px solid #eee;\n}\n.sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n    position: static;\n    width: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    clip: auto;\n}\n[role=\"button\"] {\n    cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n    font-family: inherit;\n    font-weight: 500;\n    line-height: 1.1;\n    color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n    font-weight: normal;\n    line-height: 1;\n    color: #777;\n}\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n    margin-top: 20px;\n    margin-bottom: 10px;\n}\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n    font-size: 65%;\n}\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n    font-size: 75%;\n}\nh1,\n.h1 {\n    font-size: 36px;\n}\nh2,\n.h2 {\n    font-size: 30px;\n}\nh3,\n.h3 {\n    font-size: 24px;\n}\nh4,\n.h4 {\n    font-size: 18px;\n}\nh5,\n.h5 {\n    font-size: 14px;\n}\nh6,\n.h6 {\n    font-size: 12px;\n}\np {\n    margin: 0 0 10px;\n}\n.lead {\n    margin-bottom: 20px;\n    font-size: 16px;\n    font-weight: 300;\n    line-height: 1.4;\n}\n@media (min-width: 768px) {\n    .lead {\n        font-size: 21px;\n    }\n}\nsmall,\n.small {\n    font-size: 85%;\n}\nmark,\n.mark {\n    padding: .2em;\n    background-color: #fcf8e3;\n}\n.text-left {\n    text-align: left;\n}\n.text-right {\n    text-align: right;\n}\n.text-center {\n    text-align: center;\n}\n.text-justify {\n    text-align: justify;\n}\n.text-nowrap {\n    white-space: nowrap;\n}\n.text-lowercase {\n    text-transform: lowercase;\n}\n.text-uppercase {\n    text-transform: uppercase;\n}\n.text-capitalize {\n    text-transform: capitalize;\n}\n.text-muted {\n    color: #777;\n}\n.text-primary {\n    color: #337ab7;\n}\na.text-primary:hover {\n    color: #286090;\n}\n.text-success {\n    color: #3c763d;\n}\na.text-success:hover {\n    color: #2b542c;\n}\n.text-info {\n    color: #31708f;\n}\na.text-info:hover {\n    color: #245269;\n}\n.text-warning {\n    color: #8a6d3b;\n}\na.text-warning:hover {\n    color: #66512c;\n}\n.text-danger {\n    color: #a94442;\n}\na.text-danger:hover {\n    color: #843534;\n}\n.bg-primary {\n    color: #fff;\n    background-color: #337ab7;\n}\na.bg-primary:hover {\n    background-color: #286090;\n}\n.bg-success {\n    background-color: #dff0d8;\n}\na.bg-success:hover {\n    background-color: #c1e2b3;\n}\n.bg-info {\n    background-color: #d9edf7;\n}\na.bg-info:hover {\n    background-color: #afd9ee;\n}\n.bg-warning {\n    background-color: #fcf8e3;\n}\na.bg-warning:hover {\n    background-color: #f7ecb5;\n}\n.bg-danger {\n    background-color: #f2dede;\n}\na.bg-danger:hover {\n    background-color: #e4b9b9;\n}\n.page-header {\n    padding-bottom: 9px;\n    margin: 40px 0 20px;\n    border-bottom: 1px solid #eee;\n}\nul,\nol {\n    margin-top: 0;\n    margin-bottom: 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n    margin-bottom: 0;\n}\n.list-unstyled {\n    padding-left: 0;\n    list-style: none;\n}\n.list-inline {\n    padding-left: 0;\n    margin-left: -5px;\n    list-style: none;\n}\n.list-inline > li {\n    display: inline-block;\n    padding-right: 5px;\n    padding-left: 5px;\n}\ndl {\n    margin-top: 0;\n    margin-bottom: 20px;\n}\ndt,\ndd {\n    line-height: 1.42857143;\n}\ndt {\n    font-weight: bold;\n}\ndd {\n    margin-left: 0;\n}\n@media (min-width: 768px) {\n    .dl-horizontal dt {\n        float: left;\n        width: 160px;\n        overflow: hidden;\n        clear: left;\n        text-align: right;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n    }\n    .dl-horizontal dd {\n        margin-left: 180px;\n    }\n}\nabbr[title],\nabbr[data-original-title] {\n    cursor: help;\n    border-bottom: 1px dotted #777;\n}\n.initialism {\n    font-size: 90%;\n    text-transform: uppercase;\n}\nblockquote {\n    padding: 10px 20px;\n    margin: 0 0 20px;\n    font-size: 17.5px;\n    border-left: 5px solid #eee;\n}\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n    margin-bottom: 0;\n}\nblockquote footer,\nblockquote small,\nblockquote .small {\n    display: block;\n    font-size: 80%;\n    line-height: 1.42857143;\n    color: #777;\n}\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n    content: '\\2014   \\A0';\n}\n.blockquote-reverse,\nblockquote.pull-right {\n    padding-right: 15px;\n    padding-left: 0;\n    text-align: right;\n    border-right: 5px solid #eee;\n    border-left: 0;\n}\n.blockquote-reverse footer:before,\nblockquote.pull-right footer:before,\n.blockquote-reverse small:before,\nblockquote.pull-right small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right .small:before {\n    content: '';\n}\n.blockquote-reverse footer:after,\nblockquote.pull-right footer:after,\n.blockquote-reverse small:after,\nblockquote.pull-right small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right .small:after {\n    content: '\\A0   \\2014';\n}\naddress {\n    margin-bottom: 20px;\n    font-style: normal;\n    line-height: 1.42857143;\n}\ncode,\nkbd,\npre,\nsamp {\n    font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n    padding: 2px 4px;\n    font-size: 90%;\n    color: #c7254e;\n    background-color: #f9f2f4;\n    border-radius: 4px;\n}\nkbd {\n    padding: 2px 4px;\n    font-size: 90%;\n    color: #fff;\n    background-color: #333;\n    border-radius: 3px;\n    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n}\nkbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold;\n    box-shadow: none;\n}\npre {\n    display: block;\n    padding: 9.5px;\n    margin: 0 0 10px;\n    font-size: 13px;\n    line-height: 1.42857143;\n    color: #333;\n    word-break: break-all;\n    word-wrap: break-word;\n    background-color: #f5f5f5;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\npre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    white-space: pre-wrap;\n    background-color: transparent;\n    border-radius: 0;\n}\n.pre-scrollable {\n    max-height: 340px;\n    overflow-y: scroll;\n}\n.container {\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n@media (min-width: 768px) {\n    .container {\n        width: 750px;\n    }\n}\n@media (min-width: 992px) {\n    .container {\n        width: 970px;\n    }\n}\n@media (min-width: 1200px) {\n    .container {\n        width: 1170px;\n    }\n}\n.container-fluid {\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n.row {\n    margin-right: -15px;\n    margin-left: -15px;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n    float: left;\n}\n.col-xs-12 {\n    width: 100%;\n}\n.col-xs-11 {\n    width: 91.66666667%;\n}\n.col-xs-10 {\n    width: 83.33333333%;\n}\n.col-xs-9 {\n    width: 75%;\n}\n.col-xs-8 {\n    width: 66.66666667%;\n}\n.col-xs-7 {\n    width: 58.33333333%;\n}\n.col-xs-6 {\n    width: 50%;\n}\n.col-xs-5 {\n    width: 41.66666667%;\n}\n.col-xs-4 {\n    width: 33.33333333%;\n}\n.col-xs-3 {\n    width: 25%;\n}\n.col-xs-2 {\n    width: 16.66666667%;\n}\n.col-xs-1 {\n    width: 8.33333333%;\n}\n.col-xs-pull-12 {\n    right: 100%;\n}\n.col-xs-pull-11 {\n    right: 91.66666667%;\n}\n.col-xs-pull-10 {\n    right: 83.33333333%;\n}\n.col-xs-pull-9 {\n    right: 75%;\n}\n.col-xs-pull-8 {\n    right: 66.66666667%;\n}\n.col-xs-pull-7 {\n    right: 58.33333333%;\n}\n.col-xs-pull-6 {\n    right: 50%;\n}\n.col-xs-pull-5 {\n    right: 41.66666667%;\n}\n.col-xs-pull-4 {\n    right: 33.33333333%;\n}\n.col-xs-pull-3 {\n    right: 25%;\n}\n.col-xs-pull-2 {\n    right: 16.66666667%;\n}\n.col-xs-pull-1 {\n    right: 8.33333333%;\n}\n.col-xs-pull-0 {\n    right: auto;\n}\n.col-xs-push-12 {\n    left: 100%;\n}\n.col-xs-push-11 {\n    left: 91.66666667%;\n}\n.col-xs-push-10 {\n    left: 83.33333333%;\n}\n.col-xs-push-9 {\n    left: 75%;\n}\n.col-xs-push-8 {\n    left: 66.66666667%;\n}\n.col-xs-push-7 {\n    left: 58.33333333%;\n}\n.col-xs-push-6 {\n    left: 50%;\n}\n.col-xs-push-5 {\n    left: 41.66666667%;\n}\n.col-xs-push-4 {\n    left: 33.33333333%;\n}\n.col-xs-push-3 {\n    left: 25%;\n}\n.col-xs-push-2 {\n    left: 16.66666667%;\n}\n.col-xs-push-1 {\n    left: 8.33333333%;\n}\n.col-xs-push-0 {\n    left: auto;\n}\n.col-xs-offset-12 {\n    margin-left: 100%;\n}\n.col-xs-offset-11 {\n    margin-left: 91.66666667%;\n}\n.col-xs-offset-10 {\n    margin-left: 83.33333333%;\n}\n.col-xs-offset-9 {\n    margin-left: 75%;\n}\n.col-xs-offset-8 {\n    margin-left: 66.66666667%;\n}\n.col-xs-offset-7 {\n    margin-left: 58.33333333%;\n}\n.col-xs-offset-6 {\n    margin-left: 50%;\n}\n.col-xs-offset-5 {\n    margin-left: 41.66666667%;\n}\n.col-xs-offset-4 {\n    margin-left: 33.33333333%;\n}\n.col-xs-offset-3 {\n    margin-left: 25%;\n}\n.col-xs-offset-2 {\n    margin-left: 16.66666667%;\n}\n.col-xs-offset-1 {\n    margin-left: 8.33333333%;\n}\n.col-xs-offset-0 {\n    margin-left: 0;\n}\n@media (min-width: 768px) {\n    .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n        float: left;\n    }\n    .col-sm-12 {\n        width: 100%;\n    }\n    .col-sm-11 {\n        width: 91.66666667%;\n    }\n    .col-sm-10 {\n        width: 83.33333333%;\n    }\n    .col-sm-9 {\n        width: 75%;\n    }\n    .col-sm-8 {\n        width: 66.66666667%;\n    }\n    .col-sm-7 {\n        width: 58.33333333%;\n    }\n    .col-sm-6 {\n        width: 50%;\n    }\n    .col-sm-5 {\n        width: 41.66666667%;\n    }\n    .col-sm-4 {\n        width: 33.33333333%;\n    }\n    .col-sm-3 {\n        width: 25%;\n    }\n    .col-sm-2 {\n        width: 16.66666667%;\n    }\n    .col-sm-1 {\n        width: 8.33333333%;\n    }\n    .col-sm-pull-12 {\n        right: 100%;\n    }\n    .col-sm-pull-11 {\n        right: 91.66666667%;\n    }\n    .col-sm-pull-10 {\n        right: 83.33333333%;\n    }\n    .col-sm-pull-9 {\n        right: 75%;\n    }\n    .col-sm-pull-8 {\n        right: 66.66666667%;\n    }\n    .col-sm-pull-7 {\n        right: 58.33333333%;\n    }\n    .col-sm-pull-6 {\n        right: 50%;\n    }\n    .col-sm-pull-5 {\n        right: 41.66666667%;\n    }\n    .col-sm-pull-4 {\n        right: 33.33333333%;\n    }\n    .col-sm-pull-3 {\n        right: 25%;\n    }\n    .col-sm-pull-2 {\n        right: 16.66666667%;\n    }\n    .col-sm-pull-1 {\n        right: 8.33333333%;\n    }\n    .col-sm-pull-0 {\n        right: auto;\n    }\n    .col-sm-push-12 {\n        left: 100%;\n    }\n    .col-sm-push-11 {\n        left: 91.66666667%;\n    }\n    .col-sm-push-10 {\n        left: 83.33333333%;\n    }\n    .col-sm-push-9 {\n        left: 75%;\n    }\n    .col-sm-push-8 {\n        left: 66.66666667%;\n    }\n    .col-sm-push-7 {\n        left: 58.33333333%;\n    }\n    .col-sm-push-6 {\n        left: 50%;\n    }\n    .col-sm-push-5 {\n        left: 41.66666667%;\n    }\n    .col-sm-push-4 {\n        left: 33.33333333%;\n    }\n    .col-sm-push-3 {\n        left: 25%;\n    }\n    .col-sm-push-2 {\n        left: 16.66666667%;\n    }\n    .col-sm-push-1 {\n        left: 8.33333333%;\n    }\n    .col-sm-push-0 {\n        left: auto;\n    }\n    .col-sm-offset-12 {\n        margin-left: 100%;\n    }\n    .col-sm-offset-11 {\n        margin-left: 91.66666667%;\n    }\n    .col-sm-offset-10 {\n        margin-left: 83.33333333%;\n    }\n    .col-sm-offset-9 {\n        margin-left: 75%;\n    }\n    .col-sm-offset-8 {\n        margin-left: 66.66666667%;\n    }\n    .col-sm-offset-7 {\n        margin-left: 58.33333333%;\n    }\n    .col-sm-offset-6 {\n        margin-left: 50%;\n    }\n    .col-sm-offset-5 {\n        margin-left: 41.66666667%;\n    }\n    .col-sm-offset-4 {\n        margin-left: 33.33333333%;\n    }\n    .col-sm-offset-3 {\n        margin-left: 25%;\n    }\n    .col-sm-offset-2 {\n        margin-left: 16.66666667%;\n    }\n    .col-sm-offset-1 {\n        margin-left: 8.33333333%;\n    }\n    .col-sm-offset-0 {\n        margin-left: 0;\n    }\n}\n@media (min-width: 992px) {\n    .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n        float: left;\n    }\n    .col-md-12 {\n        width: 100%;\n    }\n    .col-md-11 {\n        width: 91.66666667%;\n    }\n    .col-md-10 {\n        width: 83.33333333%;\n    }\n    .col-md-9 {\n        width: 75%;\n    }\n    .col-md-8 {\n        width: 66.66666667%;\n    }\n    .col-md-7 {\n        width: 58.33333333%;\n    }\n    .col-md-6 {\n        width: 50%;\n    }\n    .col-md-5 {\n        width: 41.66666667%;\n    }\n    .col-md-4 {\n        width: 33.33333333%;\n    }\n    .col-md-3 {\n        width: 25%;\n    }\n    .col-md-2 {\n        width: 16.66666667%;\n    }\n    .col-md-1 {\n        width: 8.33333333%;\n    }\n    .col-md-pull-12 {\n        right: 100%;\n    }\n    .col-md-pull-11 {\n        right: 91.66666667%;\n    }\n    .col-md-pull-10 {\n        right: 83.33333333%;\n    }\n    .col-md-pull-9 {\n        right: 75%;\n    }\n    .col-md-pull-8 {\n        right: 66.66666667%;\n    }\n    .col-md-pull-7 {\n        right: 58.33333333%;\n    }\n    .col-md-pull-6 {\n        right: 50%;\n    }\n    .col-md-pull-5 {\n        right: 41.66666667%;\n    }\n    .col-md-pull-4 {\n        right: 33.33333333%;\n    }\n    .col-md-pull-3 {\n        right: 25%;\n    }\n    .col-md-pull-2 {\n        right: 16.66666667%;\n    }\n    .col-md-pull-1 {\n        right: 8.33333333%;\n    }\n    .col-md-pull-0 {\n        right: auto;\n    }\n    .col-md-push-12 {\n        left: 100%;\n    }\n    .col-md-push-11 {\n        left: 91.66666667%;\n    }\n    .col-md-push-10 {\n        left: 83.33333333%;\n    }\n    .col-md-push-9 {\n        left: 75%;\n    }\n    .col-md-push-8 {\n        left: 66.66666667%;\n    }\n    .col-md-push-7 {\n        left: 58.33333333%;\n    }\n    .col-md-push-6 {\n        left: 50%;\n    }\n    .col-md-push-5 {\n        left: 41.66666667%;\n    }\n    .col-md-push-4 {\n        left: 33.33333333%;\n    }\n    .col-md-push-3 {\n        left: 25%;\n    }\n    .col-md-push-2 {\n        left: 16.66666667%;\n    }\n    .col-md-push-1 {\n        left: 8.33333333%;\n    }\n    .col-md-push-0 {\n        left: auto;\n    }\n    .col-md-offset-12 {\n        margin-left: 100%;\n    }\n    .col-md-offset-11 {\n        margin-left: 91.66666667%;\n    }\n    .col-md-offset-10 {\n        margin-left: 83.33333333%;\n    }\n    .col-md-offset-9 {\n        margin-left: 75%;\n    }\n    .col-md-offset-8 {\n        margin-left: 66.66666667%;\n    }\n    .col-md-offset-7 {\n        margin-left: 58.33333333%;\n    }\n    .col-md-offset-6 {\n        margin-left: 50%;\n    }\n    .col-md-offset-5 {\n        margin-left: 41.66666667%;\n    }\n    .col-md-offset-4 {\n        margin-left: 33.33333333%;\n    }\n    .col-md-offset-3 {\n        margin-left: 25%;\n    }\n    .col-md-offset-2 {\n        margin-left: 16.66666667%;\n    }\n    .col-md-offset-1 {\n        margin-left: 8.33333333%;\n    }\n    .col-md-offset-0 {\n        margin-left: 0;\n    }\n}\n@media (min-width: 1200px) {\n    .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n        float: left;\n    }\n    .col-lg-12 {\n        width: 100%;\n    }\n    .col-lg-11 {\n        width: 91.66666667%;\n    }\n    .col-lg-10 {\n        width: 83.33333333%;\n    }\n    .col-lg-9 {\n        width: 75%;\n    }\n    .col-lg-8 {\n        width: 66.66666667%;\n    }\n    .col-lg-7 {\n        width: 58.33333333%;\n    }\n    .col-lg-6 {\n        width: 50%;\n    }\n    .col-lg-5 {\n        width: 41.66666667%;\n    }\n    .col-lg-4 {\n        width: 33.33333333%;\n    }\n    .col-lg-3 {\n        width: 25%;\n    }\n    .col-lg-2 {\n        width: 16.66666667%;\n    }\n    .col-lg-1 {\n        width: 8.33333333%;\n    }\n    .col-lg-pull-12 {\n        right: 100%;\n    }\n    .col-lg-pull-11 {\n        right: 91.66666667%;\n    }\n    .col-lg-pull-10 {\n        right: 83.33333333%;\n    }\n    .col-lg-pull-9 {\n        right: 75%;\n    }\n    .col-lg-pull-8 {\n        right: 66.66666667%;\n    }\n    .col-lg-pull-7 {\n        right: 58.33333333%;\n    }\n    .col-lg-pull-6 {\n        right: 50%;\n    }\n    .col-lg-pull-5 {\n        right: 41.66666667%;\n    }\n    .col-lg-pull-4 {\n        right: 33.33333333%;\n    }\n    .col-lg-pull-3 {\n        right: 25%;\n    }\n    .col-lg-pull-2 {\n        right: 16.66666667%;\n    }\n    .col-lg-pull-1 {\n        right: 8.33333333%;\n    }\n    .col-lg-pull-0 {\n        right: auto;\n    }\n    .col-lg-push-12 {\n        left: 100%;\n    }\n    .col-lg-push-11 {\n        left: 91.66666667%;\n    }\n    .col-lg-push-10 {\n        left: 83.33333333%;\n    }\n    .col-lg-push-9 {\n        left: 75%;\n    }\n    .col-lg-push-8 {\n        left: 66.66666667%;\n    }\n    .col-lg-push-7 {\n        left: 58.33333333%;\n    }\n    .col-lg-push-6 {\n        left: 50%;\n    }\n    .col-lg-push-5 {\n        left: 41.66666667%;\n    }\n    .col-lg-push-4 {\n        left: 33.33333333%;\n    }\n    .col-lg-push-3 {\n        left: 25%;\n    }\n    .col-lg-push-2 {\n        left: 16.66666667%;\n    }\n    .col-lg-push-1 {\n        left: 8.33333333%;\n    }\n    .col-lg-push-0 {\n        left: auto;\n    }\n    .col-lg-offset-12 {\n        margin-left: 100%;\n    }\n    .col-lg-offset-11 {\n        margin-left: 91.66666667%;\n    }\n    .col-lg-offset-10 {\n        margin-left: 83.33333333%;\n    }\n    .col-lg-offset-9 {\n        margin-left: 75%;\n    }\n    .col-lg-offset-8 {\n        margin-left: 66.66666667%;\n    }\n    .col-lg-offset-7 {\n        margin-left: 58.33333333%;\n    }\n    .col-lg-offset-6 {\n        margin-left: 50%;\n    }\n    .col-lg-offset-5 {\n        margin-left: 41.66666667%;\n    }\n    .col-lg-offset-4 {\n        margin-left: 33.33333333%;\n    }\n    .col-lg-offset-3 {\n        margin-left: 25%;\n    }\n    .col-lg-offset-2 {\n        margin-left: 16.66666667%;\n    }\n    .col-lg-offset-1 {\n        margin-left: 8.33333333%;\n    }\n    .col-lg-offset-0 {\n        margin-left: 0;\n    }\n}\ntable {\n    background-color: transparent;\n}\ncaption {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    color: #777;\n    text-align: left;\n}\nth {\n    text-align: left;\n}\n.table {\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 20px;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n    padding: 8px;\n    line-height: 1.42857143;\n    vertical-align: top;\n    border-top: 1px solid #ddd;\n}\n.table > thead > tr > th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #ddd;\n}\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n    border-top: 0;\n}\n.table > tbody + tbody {\n    border-top: 2px solid #ddd;\n}\n.table .table {\n    background-color: #fff;\n}\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n    padding: 5px;\n}\n.table-bordered {\n    border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n    border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n    border-bottom-width: 2px;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n    background-color: #f9f9f9;\n}\n.table-hover > tbody > tr:hover {\n    background-color: #f5f5f5;\n}\ntable col[class*=\"col-\"] {\n    position: static;\n    display: table-column;\n    float: none;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n    position: static;\n    display: table-cell;\n    float: none;\n}\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n    background-color: #f5f5f5;\n}\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n    background-color: #e8e8e8;\n}\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n    background-color: #dff0d8;\n}\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n    background-color: #d0e9c6;\n}\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n    background-color: #d9edf7;\n}\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n    background-color: #c4e3f3;\n}\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n    background-color: #fcf8e3;\n}\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n    background-color: #faf2cc;\n}\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n    background-color: #f2dede;\n}\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n    background-color: #ebcccc;\n}\n.table-responsive {\n    min-height: .01%;\n    overflow-x: auto;\n}\n@media screen and (max-width: 767px) {\n    .table-responsive {\n        width: 100%;\n        margin-bottom: 15px;\n        overflow-y: hidden;\n        -ms-overflow-style: -ms-autohiding-scrollbar;\n        border: 1px solid #ddd;\n    }\n    .table-responsive > .table {\n        margin-bottom: 0;\n    }\n    .table-responsive > .table > thead > tr > th,\n    .table-responsive > .table > tbody > tr > th,\n    .table-responsive > .table > tfoot > tr > th,\n    .table-responsive > .table > thead > tr > td,\n    .table-responsive > .table > tbody > tr > td,\n    .table-responsive > .table > tfoot > tr > td {\n        white-space: nowrap;\n    }\n    .table-responsive > .table-bordered {\n        border: 0;\n    }\n    .table-responsive > .table-bordered > thead > tr > th:first-child,\n    .table-responsive > .table-bordered > tbody > tr > th:first-child,\n    .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n    .table-responsive > .table-bordered > thead > tr > td:first-child,\n    .table-responsive > .table-bordered > tbody > tr > td:first-child,\n    .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n        border-left: 0;\n    }\n    .table-responsive > .table-bordered > thead > tr > th:last-child,\n    .table-responsive > .table-bordered > tbody > tr > th:last-child,\n    .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n    .table-responsive > .table-bordered > thead > tr > td:last-child,\n    .table-responsive > .table-bordered > tbody > tr > td:last-child,\n    .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n        border-right: 0;\n    }\n    .table-responsive > .table-bordered > tbody > tr:last-child > th,\n    .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n    .table-responsive > .table-bordered > tbody > tr:last-child > td,\n    .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n        border-bottom: 0;\n    }\n}\nfieldset {\n    min-width: 0;\n    padding: 0;\n    margin: 0;\n    border: 0;\n}\nlegend {\n    display: block;\n    width: 100%;\n    padding: 0;\n    margin-bottom: 20px;\n    font-size: 21px;\n    line-height: inherit;\n    color: #333;\n    border: 0;\n    border-bottom: 1px solid #e5e5e5;\n}\nlabel {\n    display: inline-block;\n    max-width: 100%;\n    margin-bottom: 5px;\n    font-weight: bold;\n}\ninput[type=\"search\"] {\n    box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n    margin: 4px 0 0;\n    margin-top: 1px \\9;\n    line-height: normal;\n}\ninput[type=\"file\"] {\n    display: block;\n}\ninput[type=\"range\"] {\n    display: block;\n    width: 100%;\n}\nselect[multiple],\nselect[size] {\n    height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\noutput {\n    display: block;\n    padding-top: 7px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n}\n.form-control {\n    display: block;\n    width: 100%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n            transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control:focus {\n    border-color: #66afe9;\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n}\n.form-control::-moz-placeholder {\n    color: #999;\n    opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n    color: #999;\n}\n.form-control::-webkit-input-placeholder {\n    color: #999;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n    background-color: #eee;\n    opacity: 1;\n}\n.form-control[disabled],\nfieldset[disabled] .form-control {\n    cursor: not-allowed;\n}\ntextarea.form-control {\n    height: auto;\n}\ninput[type=\"search\"] {\n    -webkit-appearance: none;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n    input[type=\"date\"],\n    input[type=\"time\"],\n    input[type=\"datetime-local\"],\n    input[type=\"month\"] {\n        line-height: 34px;\n    }\n    input[type=\"date\"].input-sm,\n    input[type=\"time\"].input-sm,\n    input[type=\"datetime-local\"].input-sm,\n    input[type=\"month\"].input-sm,\n    .input-group-sm input[type=\"date\"],\n    .input-group-sm input[type=\"time\"],\n    .input-group-sm input[type=\"datetime-local\"],\n    .input-group-sm input[type=\"month\"] {\n        line-height: 30px;\n    }\n    input[type=\"date\"].input-lg,\n    input[type=\"time\"].input-lg,\n    input[type=\"datetime-local\"].input-lg,\n    input[type=\"month\"].input-lg,\n    .input-group-lg input[type=\"date\"],\n    .input-group-lg input[type=\"time\"],\n    .input-group-lg input[type=\"datetime-local\"],\n    .input-group-lg input[type=\"month\"] {\n        line-height: 46px;\n    }\n}\n.form-group {\n    margin-bottom: 15px;\n}\n.radio,\n.checkbox {\n    position: relative;\n    display: block;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n.radio label,\n.checkbox label {\n    min-height: 20px;\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer;\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n    position: absolute;\n    margin-top: 4px \\9;\n    margin-left: -20px;\n}\n.radio + .radio,\n.checkbox + .checkbox {\n    margin-top: -5px;\n}\n.radio-inline,\n.checkbox-inline {\n    position: relative;\n    display: inline-block;\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: normal;\n    vertical-align: middle;\n    cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n    margin-top: 0;\n    margin-left: 10px;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"] {\n    cursor: not-allowed;\n}\n.radio-inline.disabled,\n.checkbox-inline.disabled,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox-inline {\n    cursor: not-allowed;\n}\n.radio.disabled label,\n.checkbox.disabled label,\nfieldset[disabled] .radio label,\nfieldset[disabled] .checkbox label {\n    cursor: not-allowed;\n}\n.form-control-static {\n    min-height: 34px;\n    padding-top: 7px;\n    padding-bottom: 7px;\n    margin-bottom: 0;\n}\n.form-control-static.input-lg,\n.form-control-static.input-sm {\n    padding-right: 0;\n    padding-left: 0;\n}\n.input-sm {\n    height: 30px;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n}\nselect.input-sm {\n    height: 30px;\n    line-height: 30px;\n}\ntextarea.input-sm,\nselect[multiple].input-sm {\n    height: auto;\n}\n.form-group-sm .form-control {\n    height: 30px;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n}\nselect.form-group-sm .form-control {\n    height: 30px;\n    line-height: 30px;\n}\ntextarea.form-group-sm .form-control,\nselect[multiple].form-group-sm .form-control {\n    height: auto;\n}\n.form-group-sm .form-control-static {\n    height: 30px;\n    min-height: 32px;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n}\n.input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 6px;\n}\nselect.input-lg {\n    height: 46px;\n    line-height: 46px;\n}\ntextarea.input-lg,\nselect[multiple].input-lg {\n    height: auto;\n}\n.form-group-lg .form-control {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 6px;\n}\nselect.form-group-lg .form-control {\n    height: 46px;\n    line-height: 46px;\n}\ntextarea.form-group-lg .form-control,\nselect[multiple].form-group-lg .form-control {\n    height: auto;\n}\n.form-group-lg .form-control-static {\n    height: 46px;\n    min-height: 38px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n}\n.has-feedback {\n    position: relative;\n}\n.has-feedback .form-control {\n    padding-right: 42.5px;\n}\n.form-control-feedback {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 2;\n    display: block;\n    width: 34px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    pointer-events: none;\n}\n.input-lg + .form-control-feedback {\n    width: 46px;\n    height: 46px;\n    line-height: 46px;\n}\n.input-sm + .form-control-feedback {\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n}\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n    color: #3c763d;\n}\n.has-success .form-control {\n    border-color: #3c763d;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-success .form-control:focus {\n    border-color: #2b542c;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n}\n.has-success .input-group-addon {\n    color: #3c763d;\n    background-color: #dff0d8;\n    border-color: #3c763d;\n}\n.has-success .form-control-feedback {\n    color: #3c763d;\n}\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n    color: #8a6d3b;\n}\n.has-warning .form-control {\n    border-color: #8a6d3b;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-warning .form-control:focus {\n    border-color: #66512c;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n}\n.has-warning .input-group-addon {\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #8a6d3b;\n}\n.has-warning .form-control-feedback {\n    color: #8a6d3b;\n}\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n    color: #a94442;\n}\n.has-error .form-control {\n    border-color: #a94442;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-error .form-control:focus {\n    border-color: #843534;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n}\n.has-error .input-group-addon {\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #a94442;\n}\n.has-error .form-control-feedback {\n    color: #a94442;\n}\n.has-feedback label ~ .form-control-feedback {\n    top: 25px;\n}\n.has-feedback label.sr-only ~ .form-control-feedback {\n    top: 0;\n}\n.help-block {\n    display: block;\n    margin-top: 5px;\n    margin-bottom: 10px;\n    color: #737373;\n}\n@media (min-width: 768px) {\n    .form-inline .form-group {\n        display: inline-block;\n        margin-bottom: 0;\n        vertical-align: middle;\n    }\n    .form-inline .form-control {\n        display: inline-block;\n        width: auto;\n        vertical-align: middle;\n    }\n    .form-inline .form-control-static {\n        display: inline-block;\n    }\n    .form-inline .input-group {\n        display: inline-table;\n        vertical-align: middle;\n    }\n    .form-inline .input-group .input-group-addon,\n    .form-inline .input-group .input-group-btn,\n    .form-inline .input-group .form-control {\n        width: auto;\n    }\n    .form-inline .input-group > .form-control {\n        width: 100%;\n    }\n    .form-inline .control-label {\n        margin-bottom: 0;\n        vertical-align: middle;\n    }\n    .form-inline .radio,\n    .form-inline .checkbox {\n        display: inline-block;\n        margin-top: 0;\n        margin-bottom: 0;\n        vertical-align: middle;\n    }\n    .form-inline .radio label,\n    .form-inline .checkbox label {\n        padding-left: 0;\n    }\n    .form-inline .radio input[type=\"radio\"],\n    .form-inline .checkbox input[type=\"checkbox\"] {\n        position: relative;\n        margin-left: 0;\n    }\n    .form-inline .has-feedback .form-control-feedback {\n        top: 0;\n    }\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n    padding-top: 7px;\n    margin-top: 0;\n    margin-bottom: 0;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n    min-height: 27px;\n}\n.form-horizontal .form-group {\n    margin-right: -15px;\n    margin-left: -15px;\n}\n@media (min-width: 768px) {\n    .form-horizontal .control-label {\n        padding-top: 7px;\n        margin-bottom: 0;\n        text-align: right;\n    }\n}\n.form-horizontal .has-feedback .form-control-feedback {\n    right: 15px;\n}\n@media (min-width: 768px) {\n    .form-horizontal .form-group-lg .control-label {\n        padding-top: 14.333333px;\n    }\n}\n@media (min-width: 768px) {\n    .form-horizontal .form-group-sm .control-label {\n        padding-top: 6px;\n    }\n}\n.btn {\n    display: inline-block;\n    padding: 6px 12px;\n    margin-bottom: 0;\n    font-size: 14px;\n    font-weight: normal;\n    line-height: 1.42857143;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\n.btn:hover,\n.btn:focus,\n.btn.focus {\n    color: #333;\n    text-decoration: none;\n}\n.btn:active,\n.btn.active {\n    background-image: none;\n    outline: 0;\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n    pointer-events: none;\n    cursor: not-allowed;\n    filter: alpha(opacity=65);\n    box-shadow: none;\n    opacity: .65;\n}\n.btn-default {\n    color: #333;\n    background-color: #fff;\n    border-color: #ccc;\n}\n.btn-default:hover,\n.btn-default:focus,\n.btn-default.focus,\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n    background-image: none;\n}\n.btn-default.disabled,\n.btn-default[disabled],\nfieldset[disabled] .btn-default,\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default.focus,\n.btn-default.disabled:active,\n.btn-default[disabled]:active,\nfieldset[disabled] .btn-default:active,\n.btn-default.disabled.active,\n.btn-default[disabled].active,\nfieldset[disabled] .btn-default.active {\n    background-color: #fff;\n    border-color: #ccc;\n}\n.btn-default .badge {\n    color: #fff;\n    background-color: #333;\n}\n.btn-primary {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #2e6da4;\n}\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary.focus,\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n    background-image: none;\n}\n.btn-primary.disabled,\n.btn-primary[disabled],\nfieldset[disabled] .btn-primary,\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary.focus,\n.btn-primary.disabled:active,\n.btn-primary[disabled]:active,\nfieldset[disabled] .btn-primary:active,\n.btn-primary.disabled.active,\n.btn-primary[disabled].active,\nfieldset[disabled] .btn-primary.active {\n    background-color: #337ab7;\n    border-color: #2e6da4;\n}\n.btn-primary .badge {\n    color: #337ab7;\n    background-color: #fff;\n}\n.btn-success {\n    color: #fff;\n    background-color: #5cb85c;\n    border-color: #4cae4c;\n}\n.btn-success:hover,\n.btn-success:focus,\n.btn-success.focus,\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n    background-image: none;\n}\n.btn-success.disabled,\n.btn-success[disabled],\nfieldset[disabled] .btn-success,\n.btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success.focus,\n.btn-success.disabled:active,\n.btn-success[disabled]:active,\nfieldset[disabled] .btn-success:active,\n.btn-success.disabled.active,\n.btn-success[disabled].active,\nfieldset[disabled] .btn-success.active {\n    background-color: #5cb85c;\n    border-color: #4cae4c;\n}\n.btn-success .badge {\n    color: #5cb85c;\n    background-color: #fff;\n}\n.btn-info {\n    color: #fff;\n    background-color: #5bc0de;\n    border-color: #46b8da;\n}\n.btn-info:hover,\n.btn-info:focus,\n.btn-info.focus,\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n    background-image: none;\n}\n.btn-info.disabled,\n.btn-info[disabled],\nfieldset[disabled] .btn-info,\n.btn-info.disabled:hover,\n.btn-info[disabled]:hover,\nfieldset[disabled] .btn-info:hover,\n.btn-info.disabled:focus,\n.btn-info[disabled]:focus,\nfieldset[disabled] .btn-info:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info.focus,\n.btn-info.disabled:active,\n.btn-info[disabled]:active,\nfieldset[disabled] .btn-info:active,\n.btn-info.disabled.active,\n.btn-info[disabled].active,\nfieldset[disabled] .btn-info.active {\n    background-color: #5bc0de;\n    border-color: #46b8da;\n}\n.btn-info .badge {\n    color: #5bc0de;\n    background-color: #fff;\n}\n.btn-warning {\n    color: #fff;\n    background-color: #f0ad4e;\n    border-color: #eea236;\n}\n.btn-warning:hover,\n.btn-warning:focus,\n.btn-warning.focus,\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n    background-image: none;\n}\n.btn-warning.disabled,\n.btn-warning[disabled],\nfieldset[disabled] .btn-warning,\n.btn-warning.disabled:hover,\n.btn-warning[disabled]:hover,\nfieldset[disabled] .btn-warning:hover,\n.btn-warning.disabled:focus,\n.btn-warning[disabled]:focus,\nfieldset[disabled] .btn-warning:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning.focus,\n.btn-warning.disabled:active,\n.btn-warning[disabled]:active,\nfieldset[disabled] .btn-warning:active,\n.btn-warning.disabled.active,\n.btn-warning[disabled].active,\nfieldset[disabled] .btn-warning.active {\n    background-color: #f0ad4e;\n    border-color: #eea236;\n}\n.btn-warning .badge {\n    color: #f0ad4e;\n    background-color: #fff;\n}\n.btn-danger {\n    color: #fff;\n    background-color: #d9534f;\n    border-color: #d43f3a;\n}\n.btn-danger:hover,\n.btn-danger:focus,\n.btn-danger.focus,\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n    background-image: none;\n}\n.btn-danger.disabled,\n.btn-danger[disabled],\nfieldset[disabled] .btn-danger,\n.btn-danger.disabled:hover,\n.btn-danger[disabled]:hover,\nfieldset[disabled] .btn-danger:hover,\n.btn-danger.disabled:focus,\n.btn-danger[disabled]:focus,\nfieldset[disabled] .btn-danger:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger.focus,\n.btn-danger.disabled:active,\n.btn-danger[disabled]:active,\nfieldset[disabled] .btn-danger:active,\n.btn-danger.disabled.active,\n.btn-danger[disabled].active,\nfieldset[disabled] .btn-danger.active {\n    background-color: #d9534f;\n    border-color: #d43f3a;\n}\n.btn-danger .badge {\n    color: #d9534f;\n    background-color: #fff;\n}\n.btn-link {\n    font-weight: normal;\n    color: #337ab7;\n    border-radius: 0;\n}\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n    background-color: transparent;\n    box-shadow: none;\n}\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n    border-color: transparent;\n}\n.btn-link:hover,\n.btn-link:focus {\n    color: #23527c;\n    text-decoration: underline;\n    background-color: transparent;\n}\n.btn-link[disabled]:hover,\nfieldset[disabled] .btn-link:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:focus {\n    color: #777;\n    text-decoration: none;\n}\n.btn-lg,\n.btn-group-lg > .btn {\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 6px;\n}\n.btn-sm,\n.btn-group-sm > .btn {\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n}\n.btn-xs,\n.btn-group-xs > .btn {\n    padding: 1px 5px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n}\n.btn-block {\n    display: block;\n    width: 100%;\n}\n.btn-block + .btn-block {\n    margin-top: 5px;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n    width: 100%;\n}\n.fade {\n    opacity: 0;\n    -webkit-transition: opacity .15s linear;\n    transition: opacity .15s linear;\n}\n.fade.in {\n    opacity: 1;\n}\n.collapse {\n    display: none;\n}\n.collapse.in {\n    display: block;\n}\ntr.collapse.in {\n    display: table-row;\n}\ntbody.collapse.in {\n    display: table-row-group;\n}\n.collapsing {\n    position: relative;\n    height: 0;\n    overflow: hidden;\n    -webkit-transition-timing-function: ease;\n    transition-timing-function: ease;\n    -webkit-transition-duration: .35s;\n    transition-duration: .35s;\n    -webkit-transition-property: height, visibility;\n    transition-property: height, visibility;\n}\n.caret {\n    display: inline-block;\n    width: 0;\n    height: 0;\n    margin-left: 2px;\n    vertical-align: middle;\n    border-top: 4px dashed;\n    border-right: 4px solid transparent;\n    border-left: 4px solid transparent;\n}\n.dropup,\n.dropdown {\n    position: relative;\n}\n.dropdown-toggle:focus {\n    outline: 0;\n}\n.dropdown-menu {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    z-index: 1000;\n    display: none;\n    float: left;\n    min-width: 160px;\n    padding: 5px 0;\n    margin: 2px 0 0;\n    font-size: 14px;\n    text-align: left;\n    list-style: none;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ccc;\n    border: 1px solid rgba(0, 0, 0, .15);\n    border-radius: 4px;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n}\n.dropdown-menu.pull-right {\n    right: 0;\n    left: auto;\n}\n.dropdown-menu .divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5;\n}\n.dropdown-menu > li > a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: normal;\n    line-height: 1.42857143;\n    color: #333;\n    white-space: nowrap;\n}\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n    color: #262626;\n    text-decoration: none;\n    background-color: #f5f5f5;\n}\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #337ab7;\n    outline: 0;\n}\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n    color: #777;\n}\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n    text-decoration: none;\n    cursor: not-allowed;\n    background-color: transparent;\n    background-image: none;\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n}\n.open > .dropdown-menu {\n    display: block;\n}\n.open > a {\n    outline: 0;\n}\n.dropdown-menu-right {\n    right: 0;\n    left: auto;\n}\n.dropdown-menu-left {\n    right: auto;\n    left: 0;\n}\n.dropdown-header {\n    display: block;\n    padding: 3px 20px;\n    font-size: 12px;\n    line-height: 1.42857143;\n    color: #777;\n    white-space: nowrap;\n}\n.dropdown-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 990;\n}\n.pull-right > .dropdown-menu {\n    right: 0;\n    left: auto;\n}\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n    content: \"\";\n    border-top: 0;\n    border-bottom: 4px solid;\n}\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n    top: auto;\n    bottom: 100%;\n    margin-bottom: 2px;\n}\n@media (min-width: 768px) {\n    .navbar-right .dropdown-menu {\n        right: 0;\n        left: auto;\n    }\n    .navbar-right .dropdown-menu-left {\n        right: auto;\n        left: 0;\n    }\n}\n.btn-group,\n.btn-group-vertical {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n    position: relative;\n    float: left;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n    z-index: 2;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n    margin-left: -1px;\n}\n.btn-toolbar {\n    margin-left: -5px;\n}\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n    float: left;\n}\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n    margin-left: 5px;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n    border-radius: 0;\n}\n.btn-group > .btn:first-child {\n    margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.btn-group > .btn-group {\n    float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n    border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n    outline: 0;\n}\n.btn-group > .btn + .dropdown-toggle {\n    padding-right: 8px;\n    padding-left: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n    padding-right: 12px;\n    padding-left: 12px;\n}\n.btn-group.open .dropdown-toggle {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn-group.open .dropdown-toggle.btn-link {\n    box-shadow: none;\n}\n.btn .caret {\n    margin-left: 0;\n}\n.btn-lg .caret {\n    border-width: 5px 5px 0;\n    border-bottom-width: 0;\n}\n.dropup .btn-lg .caret {\n    border-width: 0 5px 5px;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n    display: block;\n    float: none;\n    width: 100%;\n    max-width: 100%;\n}\n.btn-group-vertical > .btn-group > .btn {\n    float: none;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n    margin-top: -1px;\n    margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n    border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-bottom-left-radius: 4px;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n    border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.btn-group-justified {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n    border-collapse: separate;\n}\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n    display: table-cell;\n    float: none;\n    width: 1%;\n}\n.btn-group-justified > .btn-group .btn {\n    width: 100%;\n}\n.btn-group-justified > .btn-group .dropdown-menu {\n    left: auto;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n    pointer-events: none;\n}\n.input-group {\n    position: relative;\n    display: table;\n    border-collapse: separate;\n}\n.input-group[class*=\"col-\"] {\n    float: none;\n    padding-right: 0;\n    padding-left: 0;\n}\n.input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 6px;\n}\nselect.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n    height: 46px;\n    line-height: 46px;\n}\ntextarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn,\nselect[multiple].input-group-lg > .form-control,\nselect[multiple].input-group-lg > .input-group-addon,\nselect[multiple].input-group-lg > .input-group-btn > .btn {\n    height: auto;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n    height: 30px;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n}\nselect.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n    height: 30px;\n    line-height: 30px;\n}\ntextarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn,\nselect[multiple].input-group-sm > .form-control,\nselect[multiple].input-group-sm > .input-group-addon,\nselect[multiple].input-group-sm > .input-group-btn > .btn {\n    height: auto;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n    display: table-cell;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n    width: 1%;\n    white-space: nowrap;\n    vertical-align: middle;\n}\n.input-group-addon {\n    padding: 6px 12px;\n    font-size: 14px;\n    font-weight: normal;\n    line-height: 1;\n    color: #555;\n    text-align: center;\n    background-color: #eee;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n.input-group-addon.input-sm {\n    padding: 5px 10px;\n    font-size: 12px;\n    border-radius: 3px;\n}\n.input-group-addon.input-lg {\n    padding: 10px 16px;\n    font-size: 18px;\n    border-radius: 6px;\n}\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.input-group-addon:first-child {\n    border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.input-group-addon:last-child {\n    border-left: 0;\n}\n.input-group-btn {\n    position: relative;\n    font-size: 0;\n    white-space: nowrap;\n}\n.input-group-btn > .btn {\n    position: relative;\n}\n.input-group-btn > .btn + .btn {\n    margin-left: -1px;\n}\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n    z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n    margin-right: -1px;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n    margin-left: -1px;\n}\n.nav {\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none;\n}\n.nav > li {\n    position: relative;\n    display: block;\n}\n.nav > li > a {\n    position: relative;\n    display: block;\n    padding: 10px 15px;\n}\n.nav > li > a:hover,\n.nav > li > a:focus {\n    text-decoration: none;\n    background-color: #eee;\n}\n.nav > li.disabled > a {\n    color: #777;\n}\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n    color: #777;\n    text-decoration: none;\n    cursor: not-allowed;\n    background-color: transparent;\n}\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n    background-color: #eee;\n    border-color: #337ab7;\n}\n.nav .nav-divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5;\n}\n.nav > li > a > img {\n    max-width: none;\n}\n.nav-tabs {\n    border-bottom: 1px solid #ddd;\n}\n.nav-tabs > li {\n    float: left;\n    margin-bottom: -1px;\n}\n.nav-tabs > li > a {\n    margin-right: 2px;\n    line-height: 1.42857143;\n    border: 1px solid transparent;\n    border-radius: 4px 4px 0 0;\n}\n.nav-tabs > li > a:hover {\n    border-color: #eee #eee #ddd;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n    color: #555;\n    cursor: default;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-bottom-color: transparent;\n}\n.nav-tabs.nav-justified {\n    width: 100%;\n    border-bottom: 0;\n}\n.nav-tabs.nav-justified > li {\n    float: none;\n}\n.nav-tabs.nav-justified > li > a {\n    margin-bottom: 5px;\n    text-align: center;\n}\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto;\n}\n@media (min-width: 768px) {\n    .nav-tabs.nav-justified > li {\n        display: table-cell;\n        width: 1%;\n    }\n    .nav-tabs.nav-justified > li > a {\n        margin-bottom: 0;\n    }\n}\n.nav-tabs.nav-justified > li > a {\n    margin-right: 0;\n    border-radius: 4px;\n}\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:focus {\n    border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n    .nav-tabs.nav-justified > li > a {\n        border-bottom: 1px solid #ddd;\n        border-radius: 4px 4px 0 0;\n    }\n    .nav-tabs.nav-justified > .active > a,\n    .nav-tabs.nav-justified > .active > a:hover,\n    .nav-tabs.nav-justified > .active > a:focus {\n        border-bottom-color: #fff;\n    }\n}\n.nav-pills > li {\n    float: left;\n}\n.nav-pills > li > a {\n    border-radius: 4px;\n}\n.nav-pills > li + li {\n    margin-left: 2px;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n    color: #fff;\n    background-color: #337ab7;\n}\n.nav-stacked > li {\n    float: none;\n}\n.nav-stacked > li + li {\n    margin-top: 2px;\n    margin-left: 0;\n}\n.nav-justified {\n    width: 100%;\n}\n.nav-justified > li {\n    float: none;\n}\n.nav-justified > li > a {\n    margin-bottom: 5px;\n    text-align: center;\n}\n.nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto;\n}\n@media (min-width: 768px) {\n    .nav-justified > li {\n        display: table-cell;\n        width: 1%;\n    }\n    .nav-justified > li > a {\n        margin-bottom: 0;\n    }\n}\n.nav-tabs-justified {\n    border-bottom: 0;\n}\n.nav-tabs-justified > li > a {\n    margin-right: 0;\n    border-radius: 4px;\n}\n.nav-tabs-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus {\n    border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n    .nav-tabs-justified > li > a {\n        border-bottom: 1px solid #ddd;\n        border-radius: 4px 4px 0 0;\n    }\n    .nav-tabs-justified > .active > a,\n    .nav-tabs-justified > .active > a:hover,\n    .nav-tabs-justified > .active > a:focus {\n        border-bottom-color: #fff;\n    }\n}\n.tab-content > .tab-pane {\n    display: none;\n}\n.tab-content > .active {\n    display: block;\n}\n.nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.navbar {\n    position: relative;\n    min-height: 50px;\n    margin-bottom: 20px;\n    border: 1px solid transparent;\n}\n@media (min-width: 768px) {\n    .navbar {\n        border-radius: 4px;\n    }\n}\n@media (min-width: 768px) {\n    .navbar-header {\n        float: left;\n    }\n}\n.navbar-collapse {\n    padding-right: 15px;\n    padding-left: 15px;\n    overflow-x: visible;\n    -webkit-overflow-scrolling: touch;\n    border-top: 1px solid transparent;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n}\n.navbar-collapse.in {\n    overflow-y: auto;\n}\n@media (min-width: 768px) {\n    .navbar-collapse {\n        width: auto;\n        border-top: 0;\n        box-shadow: none;\n    }\n    .navbar-collapse.collapse {\n        display: block !important;\n        height: auto !important;\n        padding-bottom: 0;\n        overflow: visible !important;\n    }\n    .navbar-collapse.in {\n        overflow-y: visible;\n    }\n    .navbar-fixed-top .navbar-collapse,\n    .navbar-static-top .navbar-collapse,\n    .navbar-fixed-bottom .navbar-collapse {\n        padding-right: 0;\n        padding-left: 0;\n    }\n}\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n    max-height: 340px;\n}\n@media (max-device-width: 480px) and (orientation: landscape) {\n    .navbar-fixed-top .navbar-collapse,\n    .navbar-fixed-bottom .navbar-collapse {\n        max-height: 200px;\n    }\n}\n.container > .navbar-header,\n.container-fluid > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-collapse {\n    margin-right: -15px;\n    margin-left: -15px;\n}\n@media (min-width: 768px) {\n    .container > .navbar-header,\n    .container-fluid > .navbar-header,\n    .container > .navbar-collapse,\n    .container-fluid > .navbar-collapse {\n        margin-right: 0;\n        margin-left: 0;\n    }\n}\n.navbar-static-top {\n    z-index: 1000;\n    border-width: 0 0 1px;\n}\n@media (min-width: 768px) {\n    .navbar-static-top {\n        border-radius: 0;\n    }\n}\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n    position: fixed;\n    right: 0;\n    left: 0;\n    z-index: 1030;\n}\n@media (min-width: 768px) {\n    .navbar-fixed-top,\n    .navbar-fixed-bottom {\n        border-radius: 0;\n    }\n}\n.navbar-fixed-top {\n    top: 0;\n    border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n    bottom: 0;\n    margin-bottom: 0;\n    border-width: 1px 0 0;\n}\n.navbar-brand {\n    float: left;\n    height: 50px;\n    padding: 15px 15px;\n    font-size: 18px;\n    line-height: 20px;\n}\n.navbar-brand:hover,\n.navbar-brand:focus {\n    text-decoration: none;\n}\n.navbar-brand > img {\n    display: block;\n}\n@media (min-width: 768px) {\n    .navbar > .container .navbar-brand,\n    .navbar > .container-fluid .navbar-brand {\n        margin-left: -15px;\n    }\n}\n.navbar-toggle {\n    position: relative;\n    float: right;\n    padding: 9px 10px;\n    margin-top: 8px;\n    margin-right: 15px;\n    margin-bottom: 8px;\n    background-color: transparent;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}\n.navbar-toggle:focus {\n    outline: 0;\n}\n.navbar-toggle .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px;\n}\n.navbar-toggle .icon-bar + .icon-bar {\n    margin-top: 4px;\n}\n@media (min-width: 768px) {\n    .navbar-toggle {\n        display: none;\n    }\n}\n.navbar-nav {\n    margin: 7.5px -15px;\n}\n.navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    line-height: 20px;\n}\n@media (max-width: 767px) {\n    .navbar-nav .open .dropdown-menu {\n        position: static;\n        float: none;\n        width: auto;\n        margin-top: 0;\n        background-color: transparent;\n        border: 0;\n        box-shadow: none;\n    }\n    .navbar-nav .open .dropdown-menu > li > a,\n    .navbar-nav .open .dropdown-menu .dropdown-header {\n        padding: 5px 15px 5px 25px;\n    }\n    .navbar-nav .open .dropdown-menu > li > a {\n        line-height: 20px;\n    }\n    .navbar-nav .open .dropdown-menu > li > a:hover,\n    .navbar-nav .open .dropdown-menu > li > a:focus {\n        background-image: none;\n    }\n}\n@media (min-width: 768px) {\n    .navbar-nav {\n        float: left;\n        margin: 0;\n    }\n    .navbar-nav > li {\n        float: left;\n    }\n    .navbar-nav > li > a {\n        padding-top: 15px;\n        padding-bottom: 15px;\n    }\n}\n.navbar-form {\n    padding: 10px 15px;\n    margin-top: 8px;\n    margin-right: -15px;\n    margin-bottom: 8px;\n    margin-left: -15px;\n    border-top: 1px solid transparent;\n    border-bottom: 1px solid transparent;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n}\n@media (min-width: 768px) {\n    .navbar-form .form-group {\n        display: inline-block;\n        margin-bottom: 0;\n        vertical-align: middle;\n    }\n    .navbar-form .form-control {\n        display: inline-block;\n        width: auto;\n        vertical-align: middle;\n    }\n    .navbar-form .form-control-static {\n        display: inline-block;\n    }\n    .navbar-form .input-group {\n        display: inline-table;\n        vertical-align: middle;\n    }\n    .navbar-form .input-group .input-group-addon,\n    .navbar-form .input-group .input-group-btn,\n    .navbar-form .input-group .form-control {\n        width: auto;\n    }\n    .navbar-form .input-group > .form-control {\n        width: 100%;\n    }\n    .navbar-form .control-label {\n        margin-bottom: 0;\n        vertical-align: middle;\n    }\n    .navbar-form .radio,\n    .navbar-form .checkbox {\n        display: inline-block;\n        margin-top: 0;\n        margin-bottom: 0;\n        vertical-align: middle;\n    }\n    .navbar-form .radio label,\n    .navbar-form .checkbox label {\n        padding-left: 0;\n    }\n    .navbar-form .radio input[type=\"radio\"],\n    .navbar-form .checkbox input[type=\"checkbox\"] {\n        position: relative;\n        margin-left: 0;\n    }\n    .navbar-form .has-feedback .form-control-feedback {\n        top: 0;\n    }\n}\n@media (max-width: 767px) {\n    .navbar-form .form-group {\n        margin-bottom: 5px;\n    }\n    .navbar-form .form-group:last-child {\n        margin-bottom: 0;\n    }\n}\n@media (min-width: 768px) {\n    .navbar-form {\n        width: auto;\n        padding-top: 0;\n        padding-bottom: 0;\n        margin-right: 0;\n        margin-left: 0;\n        border: 0;\n        box-shadow: none;\n    }\n}\n.navbar-nav > li > .dropdown-menu {\n    margin-top: 0;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n    margin-bottom: 0;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.navbar-btn {\n    margin-top: 8px;\n    margin-bottom: 8px;\n}\n.navbar-btn.btn-sm {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n.navbar-btn.btn-xs {\n    margin-top: 14px;\n    margin-bottom: 14px;\n}\n.navbar-text {\n    margin-top: 15px;\n    margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n    .navbar-text {\n        float: left;\n        margin-right: 15px;\n        margin-left: 15px;\n    }\n}\n@media (min-width: 768px) {\n    .navbar-left {\n        float: left !important;\n    }\n    .navbar-right {\n        float: right !important;\n        margin-right: -15px;\n    }\n    .navbar-right ~ .navbar-right {\n        margin-right: 0;\n    }\n}\n.navbar-default {\n    background-color: #f8f8f8;\n    border-color: #e7e7e7;\n}\n.navbar-default .navbar-brand {\n    color: #777;\n}\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n    color: #5e5e5e;\n    background-color: transparent;\n}\n.navbar-default .navbar-text {\n    color: #777;\n}\n.navbar-default .navbar-nav > li > a {\n    color: #777;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n    color: #333;\n    background-color: transparent;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n}\n.navbar-default .navbar-toggle {\n    border-color: #ddd;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n    background-color: #ddd;\n}\n.navbar-default .navbar-toggle .icon-bar {\n    background-color: #888;\n}\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n    border-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n}\n@media (max-width: 767px) {\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n        color: #777;\n    }\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #333;\n        background-color: transparent;\n    }\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n        color: #555;\n        background-color: #e7e7e7;\n    }\n    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n        color: #ccc;\n        background-color: transparent;\n    }\n}\n.navbar-default .navbar-link {\n    color: #777;\n}\n.navbar-default .navbar-link:hover {\n    color: #333;\n}\n.navbar-default .btn-link {\n    color: #777;\n}\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n    color: #333;\n}\n.navbar-default .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-default .btn-link:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:focus {\n    color: #ccc;\n}\n.navbar-inverse {\n    background-color: #222;\n    border-color: #080808;\n}\n.navbar-inverse .navbar-brand {\n    color: #9d9d9d;\n}\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n    color: #fff;\n    background-color: transparent;\n}\n.navbar-inverse .navbar-text {\n    color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a {\n    color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n}\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n    color: #fff;\n    background-color: #080808;\n}\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n}\n.navbar-inverse .navbar-toggle {\n    border-color: #333;\n}\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n    background-color: #333;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n    background-color: #fff;\n}\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n    border-color: #101010;\n}\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n    color: #fff;\n    background-color: #080808;\n}\n@media (max-width: 767px) {\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n        border-color: #080808;\n    }\n    .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n        background-color: #080808;\n    }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n        color: #9d9d9d;\n    }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #fff;\n        background-color: transparent;\n    }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n        color: #fff;\n        background-color: #080808;\n    }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n        color: #444;\n        background-color: transparent;\n    }\n}\n.navbar-inverse .navbar-link {\n    color: #9d9d9d;\n}\n.navbar-inverse .navbar-link:hover {\n    color: #fff;\n}\n.navbar-inverse .btn-link {\n    color: #9d9d9d;\n}\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n    color: #fff;\n}\n.navbar-inverse .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n    color: #444;\n}\n.breadcrumb {\n    padding: 8px 15px;\n    margin-bottom: 20px;\n    list-style: none;\n    background-color: #f5f5f5;\n    border-radius: 4px;\n}\n.breadcrumb > li {\n    display: inline-block;\n}\n.breadcrumb > li + li:before {\n    padding: 0 5px;\n    color: #ccc;\n    content: \"/\\A0\";\n}\n.breadcrumb > .active {\n    color: #777;\n}\n.pagination {\n    display: inline-block;\n    padding-left: 0;\n    margin: 20px 0;\n    border-radius: 4px;\n}\n.pagination > li {\n    display: inline;\n}\n.pagination > li > a,\n.pagination > li > span {\n    position: relative;\n    float: left;\n    padding: 6px 12px;\n    margin-left: -1px;\n    line-height: 1.42857143;\n    color: #337ab7;\n    text-decoration: none;\n    background-color: #fff;\n    border: 1px solid #ddd;\n}\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n    margin-left: 0;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n    color: #23527c;\n    background-color: #eee;\n    border-color: #ddd;\n}\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n    z-index: 2;\n    color: #fff;\n    cursor: default;\n    background-color: #337ab7;\n    border-color: #337ab7;\n}\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n    color: #777;\n    cursor: not-allowed;\n    background-color: #fff;\n    border-color: #ddd;\n}\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n    padding: 10px 16px;\n    font-size: 18px;\n}\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n    border-top-left-radius: 6px;\n    border-bottom-left-radius: 6px;\n}\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n    border-top-right-radius: 6px;\n    border-bottom-right-radius: 6px;\n}\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n    padding: 5px 10px;\n    font-size: 12px;\n}\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px;\n}\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px;\n}\n.pager {\n    padding-left: 0;\n    margin: 20px 0;\n    text-align: center;\n    list-style: none;\n}\n.pager li {\n    display: inline;\n}\n.pager li > a,\n.pager li > span {\n    display: inline-block;\n    padding: 5px 14px;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 15px;\n}\n.pager li > a:hover,\n.pager li > a:focus {\n    text-decoration: none;\n    background-color: #eee;\n}\n.pager .next > a,\n.pager .next > span {\n    float: right;\n}\n.pager .previous > a,\n.pager .previous > span {\n    float: left;\n}\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n    color: #777;\n    cursor: not-allowed;\n    background-color: #fff;\n}\n.label {\n    display: inline;\n    padding: .2em .6em .3em;\n    font-size: 75%;\n    font-weight: bold;\n    line-height: 1;\n    color: #fff;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: baseline;\n    border-radius: .25em;\n}\na.label:hover,\na.label:focus {\n    color: #fff;\n    text-decoration: none;\n    cursor: pointer;\n}\n.label:empty {\n    display: none;\n}\n.btn .label {\n    position: relative;\n    top: -1px;\n}\n.label-default {\n    background-color: #777;\n}\n.label-default[href]:hover,\n.label-default[href]:focus {\n    background-color: #5e5e5e;\n}\n.label-primary {\n    background-color: #337ab7;\n}\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n    background-color: #286090;\n}\n.label-success {\n    background-color: #5cb85c;\n}\n.label-success[href]:hover,\n.label-success[href]:focus {\n    background-color: #449d44;\n}\n.label-info {\n    background-color: #5bc0de;\n}\n.label-info[href]:hover,\n.label-info[href]:focus {\n    background-color: #31b0d5;\n}\n.label-warning {\n    background-color: #f0ad4e;\n}\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n    background-color: #ec971f;\n}\n.label-danger {\n    background-color: #d9534f;\n}\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n    background-color: #c9302c;\n}\n.badge {\n    display: inline-block;\n    min-width: 10px;\n    padding: 3px 7px;\n    font-size: 12px;\n    font-weight: bold;\n    line-height: 1;\n    color: #fff;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: baseline;\n    background-color: #777;\n    border-radius: 10px;\n}\n.badge:empty {\n    display: none;\n}\n.btn .badge {\n    position: relative;\n    top: -1px;\n}\n.btn-xs .badge,\n.btn-group-xs > .btn .badge {\n    top: 0;\n    padding: 1px 5px;\n}\na.badge:hover,\na.badge:focus {\n    color: #fff;\n    text-decoration: none;\n    cursor: pointer;\n}\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n    color: #337ab7;\n    background-color: #fff;\n}\n.list-group-item > .badge {\n    float: right;\n}\n.list-group-item > .badge + .badge {\n    margin-right: 5px;\n}\n.nav-pills > li > a > .badge {\n    margin-left: 3px;\n}\n.jumbotron {\n    padding: 30px 15px;\n    margin-bottom: 30px;\n    color: inherit;\n    background-color: #eee;\n}\n.jumbotron h1,\n.jumbotron .h1 {\n    color: inherit;\n}\n.jumbotron p {\n    margin-bottom: 15px;\n    font-size: 21px;\n    font-weight: 200;\n}\n.jumbotron > hr {\n    border-top-color: #d5d5d5;\n}\n.container .jumbotron,\n.container-fluid .jumbotron {\n    border-radius: 6px;\n}\n.jumbotron .container {\n    max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n    .jumbotron {\n        padding: 48px 0;\n    }\n    .container .jumbotron,\n    .container-fluid .jumbotron {\n        padding-right: 60px;\n        padding-left: 60px;\n    }\n    .jumbotron h1,\n    .jumbotron .h1 {\n        font-size: 63px;\n    }\n}\n.thumbnail {\n    display: block;\n    padding: 4px;\n    margin-bottom: 20px;\n    line-height: 1.42857143;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    -webkit-transition: border .2s ease-in-out;\n    transition: border .2s ease-in-out;\n}\n.thumbnail > img,\n.thumbnail a > img {\n    margin-right: auto;\n    margin-left: auto;\n}\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n    border-color: #337ab7;\n}\n.thumbnail .caption {\n    padding: 9px;\n    color: #333;\n}\n.alert {\n    padding: 15px;\n    margin-bottom: 20px;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}\n.alert h4 {\n    margin-top: 0;\n    color: inherit;\n}\n.alert .alert-link {\n    font-weight: bold;\n}\n.alert > p,\n.alert > ul {\n    margin-bottom: 0;\n}\n.alert > p + p {\n    margin-top: 5px;\n}\n.alert-dismissable,\n.alert-dismissible {\n    padding-right: 35px;\n}\n.alert-dismissable .close,\n.alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit;\n}\n.alert-success {\n    color: #3c763d;\n    background-color: #dff0d8;\n    border-color: #d6e9c6;\n}\n.alert-success hr {\n    border-top-color: #c9e2b3;\n}\n.alert-success .alert-link {\n    color: #2b542c;\n}\n.alert-info {\n    color: #31708f;\n    background-color: #d9edf7;\n    border-color: #bce8f1;\n}\n.alert-info hr {\n    border-top-color: #a6e1ec;\n}\n.alert-info .alert-link {\n    color: #245269;\n}\n.alert-warning {\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #faebcc;\n}\n.alert-warning hr {\n    border-top-color: #f7e1b5;\n}\n.alert-warning .alert-link {\n    color: #66512c;\n}\n.alert-danger {\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1;\n}\n.alert-danger hr {\n    border-top-color: #e4b9c0;\n}\n.alert-danger .alert-link {\n    color: #843534;\n}\n@-webkit-keyframes progress-bar-stripes {\n    from {\n        background-position: 40px 0;\n    }\n    to {\n        background-position: 0 0;\n    }\n}\n@keyframes progress-bar-stripes {\n    from {\n        background-position: 40px 0;\n    }\n    to {\n        background-position: 0 0;\n    }\n}\n.progress {\n    height: 20px;\n    margin-bottom: 20px;\n    overflow: hidden;\n    background-color: #f5f5f5;\n    border-radius: 4px;\n    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n}\n.progress-bar {\n    float: left;\n    width: 0;\n    height: 100%;\n    font-size: 12px;\n    line-height: 20px;\n    color: #fff;\n    text-align: center;\n    background-color: #337ab7;\n    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n    -webkit-transition: width .6s ease;\n    transition: width .6s ease;\n}\n.progress-striped .progress-bar,\n.progress-bar-striped {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-size: 40px 40px;\n}\n.progress.active .progress-bar,\n.progress-bar.active {\n    -webkit-animation: progress-bar-stripes 2s linear infinite;\n    animation: progress-bar-stripes 2s linear infinite;\n}\n.progress-bar-success {\n    background-color: #5cb85c;\n}\n.progress-striped .progress-bar-success {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-info {\n    background-color: #5bc0de;\n}\n.progress-striped .progress-bar-info {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-warning {\n    background-color: #f0ad4e;\n}\n.progress-striped .progress-bar-warning {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-danger {\n    background-color: #d9534f;\n}\n.progress-striped .progress-bar-danger {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.media {\n    margin-top: 15px;\n}\n.media:first-child {\n    margin-top: 0;\n}\n.media,\n.media-body {\n    overflow: hidden;\n    zoom: 1;\n}\n.media-body {\n    width: 10000px;\n}\n.media-object {\n    display: block;\n}\n.media-right,\n.media > .pull-right {\n    padding-left: 10px;\n}\n.media-left,\n.media > .pull-left {\n    padding-right: 10px;\n}\n.media-left,\n.media-right,\n.media-body {\n    display: table-cell;\n    vertical-align: top;\n}\n.media-middle {\n    vertical-align: middle;\n}\n.media-bottom {\n    vertical-align: bottom;\n}\n.media-heading {\n    margin-top: 0;\n    margin-bottom: 5px;\n}\n.media-list {\n    padding-left: 0;\n    list-style: none;\n}\n.list-group {\n    padding-left: 0;\n    margin-bottom: 20px;\n}\n.list-group-item {\n    position: relative;\n    display: block;\n    padding: 10px 15px;\n    margin-bottom: -1px;\n    background-color: #fff;\n    border: 1px solid #ddd;\n}\n.list-group-item:first-child {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n}\n.list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\na.list-group-item {\n    color: #555;\n}\na.list-group-item .list-group-item-heading {\n    color: #333;\n}\na.list-group-item:hover,\na.list-group-item:focus {\n    color: #555;\n    text-decoration: none;\n    background-color: #f5f5f5;\n}\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n    color: #777;\n    cursor: not-allowed;\n    background-color: #eee;\n}\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n    color: inherit;\n}\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n    color: #777;\n}\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n    z-index: 2;\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7;\n}\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n    color: inherit;\n}\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n    color: #c7ddef;\n}\n.list-group-item-success {\n    color: #3c763d;\n    background-color: #dff0d8;\n}\na.list-group-item-success {\n    color: #3c763d;\n}\na.list-group-item-success .list-group-item-heading {\n    color: inherit;\n}\na.list-group-item-success:hover,\na.list-group-item-success:focus {\n    color: #3c763d;\n    background-color: #d0e9c6;\n}\na.list-group-item-success.active,\na.list-group-item-success.active:hover,\na.list-group-item-success.active:focus {\n    color: #fff;\n    background-color: #3c763d;\n    border-color: #3c763d;\n}\n.list-group-item-info {\n    color: #31708f;\n    background-color: #d9edf7;\n}\na.list-group-item-info {\n    color: #31708f;\n}\na.list-group-item-info .list-group-item-heading {\n    color: inherit;\n}\na.list-group-item-info:hover,\na.list-group-item-info:focus {\n    color: #31708f;\n    background-color: #c4e3f3;\n}\na.list-group-item-info.active,\na.list-group-item-info.active:hover,\na.list-group-item-info.active:focus {\n    color: #fff;\n    background-color: #31708f;\n    border-color: #31708f;\n}\n.list-group-item-warning {\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n}\na.list-group-item-warning {\n    color: #8a6d3b;\n}\na.list-group-item-warning .list-group-item-heading {\n    color: inherit;\n}\na.list-group-item-warning:hover,\na.list-group-item-warning:focus {\n    color: #8a6d3b;\n    background-color: #faf2cc;\n}\na.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus {\n    color: #fff;\n    background-color: #8a6d3b;\n    border-color: #8a6d3b;\n}\n.list-group-item-danger {\n    color: #a94442;\n    background-color: #f2dede;\n}\na.list-group-item-danger {\n    color: #a94442;\n}\na.list-group-item-danger .list-group-item-heading {\n    color: inherit;\n}\na.list-group-item-danger:hover,\na.list-group-item-danger:focus {\n    color: #a94442;\n    background-color: #ebcccc;\n}\na.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus {\n    color: #fff;\n    background-color: #a94442;\n    border-color: #a94442;\n}\n.list-group-item-heading {\n    margin-top: 0;\n    margin-bottom: 5px;\n}\n.list-group-item-text {\n    margin-bottom: 0;\n    line-height: 1.3;\n}\n.panel {\n    margin-bottom: 20px;\n    background-color: #fff;\n    border: 1px solid transparent;\n    border-radius: 4px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n.panel-body {\n    padding: 15px;\n}\n.panel-heading {\n    padding: 10px 15px;\n    border-bottom: 1px solid transparent;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n}\n.panel-heading > .dropdown .dropdown-toggle {\n    color: inherit;\n}\n.panel-title {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 16px;\n    color: inherit;\n}\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n    color: inherit;\n}\n.panel-footer {\n    padding: 10px 15px;\n    background-color: #f5f5f5;\n    border-top: 1px solid #ddd;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px;\n}\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n    margin-bottom: 0;\n}\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n    border-width: 1px 0;\n    border-radius: 0;\n}\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n    border-top: 0;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n}\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n    border-bottom: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px;\n}\n.panel-heading + .list-group .list-group-item:first-child {\n    border-top-width: 0;\n}\n.list-group + .panel-footer {\n    border-top-width: 0;\n}\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n    margin-bottom: 0;\n}\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n    padding-right: 15px;\n    padding-left: 15px;\n}\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n    border-top-left-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n    border-top-right-radius: 3px;\n}\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n    border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n    border-bottom-right-radius: 3px;\n}\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n    border-top: 1px solid #ddd;\n}\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n    border-top: 0;\n}\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n    border: 0;\n}\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n}\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n}\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n    border-bottom: 0;\n}\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n    border-bottom: 0;\n}\n.panel > .table-responsive {\n    margin-bottom: 0;\n    border: 0;\n}\n.panel-group {\n    margin-bottom: 20px;\n}\n.panel-group .panel {\n    margin-bottom: 0;\n    border-radius: 4px;\n}\n.panel-group .panel + .panel {\n    margin-top: 5px;\n}\n.panel-group .panel-heading {\n    border-bottom: 0;\n}\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n    border-top: 1px solid #ddd;\n}\n.panel-group .panel-footer {\n    border-top: 0;\n}\n.panel-group .panel-footer + .panel-collapse .panel-body {\n    border-bottom: 1px solid #ddd;\n}\n.panel-default {\n    border-color: #ddd;\n}\n.panel-default > .panel-heading {\n    color: #333;\n    background-color: #f5f5f5;\n    border-color: #ddd;\n}\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n    border-top-color: #ddd;\n}\n.panel-default > .panel-heading .badge {\n    color: #f5f5f5;\n    background-color: #333;\n}\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ddd;\n}\n.panel-primary {\n    border-color: #337ab7;\n}\n.panel-primary > .panel-heading {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7;\n}\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n    border-top-color: #337ab7;\n}\n.panel-primary > .panel-heading .badge {\n    color: #337ab7;\n    background-color: #fff;\n}\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #337ab7;\n}\n.panel-success {\n    border-color: #d6e9c6;\n}\n.panel-success > .panel-heading {\n    color: #3c763d;\n    background-color: #dff0d8;\n    border-color: #d6e9c6;\n}\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n    border-top-color: #d6e9c6;\n}\n.panel-success > .panel-heading .badge {\n    color: #dff0d8;\n    background-color: #3c763d;\n}\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #d6e9c6;\n}\n.panel-info {\n    border-color: #bce8f1;\n}\n.panel-info > .panel-heading {\n    color: #31708f;\n    background-color: #d9edf7;\n    border-color: #bce8f1;\n}\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n    border-top-color: #bce8f1;\n}\n.panel-info > .panel-heading .badge {\n    color: #d9edf7;\n    background-color: #31708f;\n}\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #bce8f1;\n}\n.panel-warning {\n    border-color: #faebcc;\n}\n.panel-warning > .panel-heading {\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #faebcc;\n}\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n    border-top-color: #faebcc;\n}\n.panel-warning > .panel-heading .badge {\n    color: #fcf8e3;\n    background-color: #8a6d3b;\n}\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #faebcc;\n}\n.panel-danger {\n    border-color: #ebccd1;\n}\n.panel-danger > .panel-heading {\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1;\n}\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n    border-top-color: #ebccd1;\n}\n.panel-danger > .panel-heading .badge {\n    color: #f2dede;\n    background-color: #a94442;\n}\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ebccd1;\n}\n.embed-responsive {\n    position: relative;\n    display: block;\n    height: 0;\n    padding: 0;\n    overflow: hidden;\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0;\n}\n.embed-responsive-16by9 {\n    padding-bottom: 56.25%;\n}\n.embed-responsive-4by3 {\n    padding-bottom: 75%;\n}\n.well {\n    min-height: 20px;\n    padding: 19px;\n    margin-bottom: 20px;\n    background-color: #f5f5f5;\n    border: 1px solid #e3e3e3;\n    border-radius: 4px;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n}\n.well blockquote {\n    border-color: #ddd;\n    border-color: rgba(0, 0, 0, .15);\n}\n.well-lg {\n    padding: 24px;\n    border-radius: 6px;\n}\n.well-sm {\n    padding: 9px;\n    border-radius: 3px;\n}\n.close {\n    float: right;\n    font-size: 21px;\n    font-weight: bold;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    filter: alpha(opacity=20);\n    opacity: .2;\n}\n.close:hover,\n.close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    filter: alpha(opacity=50);\n    opacity: .5;\n}\nbutton.close {\n    -webkit-appearance: none;\n    padding: 0;\n    cursor: pointer;\n    background: transparent;\n    border: 0;\n}\n.modal-open {\n    overflow: hidden;\n}\n.modal {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1050;\n    display: none;\n    overflow: hidden;\n    -webkit-overflow-scrolling: touch;\n    outline: 0;\n}\n.modal.fade .modal-dialog {\n    -webkit-transition: -webkit-transform .3s ease-out;\n    transition:         transform .3s ease-out;\n    -webkit-transform: translate(0, -25%);\n    -ms-transform: translate(0, -25%);\n    transform: translate(0, -25%);\n}\n.modal.in .modal-dialog {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    transform: translate(0, 0);\n}\n.modal-open .modal {\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n.modal-dialog {\n    position: relative;\n    width: auto;\n    margin: 10px;\n}\n.modal-content {\n    position: relative;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #999;\n    border: 1px solid rgba(0, 0, 0, .2);\n    border-radius: 6px;\n    outline: 0;\n    box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n.modal-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1040;\n    background-color: #000;\n}\n.modal-backdrop.fade {\n    filter: alpha(opacity=0);\n    opacity: 0;\n}\n.modal-backdrop.in {\n    filter: alpha(opacity=50);\n    opacity: .5;\n}\n.modal-header {\n    min-height: 16.42857143px;\n    padding: 15px;\n    border-bottom: 1px solid #e5e5e5;\n}\n.modal-header .close {\n    margin-top: -2px;\n}\n.modal-title {\n    margin: 0;\n    line-height: 1.42857143;\n}\n.modal-body {\n    position: relative;\n    padding: 15px;\n}\n.modal-footer {\n    padding: 15px;\n    text-align: right;\n    border-top: 1px solid #e5e5e5;\n}\n.modal-footer .btn + .btn {\n    margin-bottom: 0;\n    margin-left: 5px;\n}\n.modal-footer .btn-group .btn + .btn {\n    margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n    margin-left: 0;\n}\n.modal-scrollbar-measure {\n    position: absolute;\n    top: -9999px;\n    width: 50px;\n    height: 50px;\n    overflow: scroll;\n}\n@media (min-width: 768px) {\n    .modal-dialog {\n        width: 600px;\n        margin: 30px auto;\n    }\n    .modal-content {\n        box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n    }\n    .modal-sm {\n        width: 300px;\n    }\n}\n@media (min-width: 992px) {\n    .modal-lg {\n        width: 900px;\n    }\n}\n.tooltip {\n    position: absolute;\n    z-index: 1070;\n    display: block;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 12px;\n    font-weight: normal;\n    line-height: 1.4;\n    filter: alpha(opacity=0);\n    opacity: 0;\n}\n.tooltip.in {\n    filter: alpha(opacity=90);\n    opacity: .9;\n}\n.tooltip.top {\n    padding: 5px 0;\n    margin-top: -3px;\n}\n.tooltip.right {\n    padding: 0 5px;\n    margin-left: 3px;\n}\n.tooltip.bottom {\n    padding: 5px 0;\n    margin-top: 3px;\n}\n.tooltip.left {\n    padding: 0 5px;\n    margin-left: -3px;\n}\n.tooltip-inner {\n    max-width: 200px;\n    padding: 3px 8px;\n    color: #fff;\n    text-align: center;\n    text-decoration: none;\n    background-color: #000;\n    border-radius: 4px;\n}\n.tooltip-arrow {\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-color: transparent;\n    border-style: solid;\n}\n.tooltip.top .tooltip-arrow {\n    bottom: 0;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px 5px 0;\n    border-top-color: #000;\n}\n.tooltip.top-left .tooltip-arrow {\n    right: 5px;\n    bottom: 0;\n    margin-bottom: -5px;\n    border-width: 5px 5px 0;\n    border-top-color: #000;\n}\n.tooltip.top-right .tooltip-arrow {\n    bottom: 0;\n    left: 5px;\n    margin-bottom: -5px;\n    border-width: 5px 5px 0;\n    border-top-color: #000;\n}\n.tooltip.right .tooltip-arrow {\n    top: 50%;\n    left: 0;\n    margin-top: -5px;\n    border-width: 5px 5px 5px 0;\n    border-right-color: #000;\n}\n.tooltip.left .tooltip-arrow {\n    top: 50%;\n    right: 0;\n    margin-top: -5px;\n    border-width: 5px 0 5px 5px;\n    border-left-color: #000;\n}\n.tooltip.bottom .tooltip-arrow {\n    top: 0;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 0 5px 5px;\n    border-bottom-color: #000;\n}\n.tooltip.bottom-left .tooltip-arrow {\n    top: 0;\n    right: 5px;\n    margin-top: -5px;\n    border-width: 0 5px 5px;\n    border-bottom-color: #000;\n}\n.tooltip.bottom-right .tooltip-arrow {\n    top: 0;\n    left: 5px;\n    margin-top: -5px;\n    border-width: 0 5px 5px;\n    border-bottom-color: #000;\n}\n.popover {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1060;\n    display: none;\n    max-width: 276px;\n    padding: 1px;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    font-weight: normal;\n    line-height: 1.42857143;\n    text-align: left;\n    white-space: normal;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ccc;\n    border: 1px solid rgba(0, 0, 0, .2);\n    border-radius: 6px;\n    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n}\n.popover.top {\n    margin-top: -10px;\n}\n.popover.right {\n    margin-left: 10px;\n}\n.popover.bottom {\n    margin-top: 10px;\n}\n.popover.left {\n    margin-left: -10px;\n}\n.popover-title {\n    padding: 8px 14px;\n    margin: 0;\n    font-size: 14px;\n    background-color: #f7f7f7;\n    border-bottom: 1px solid #ebebeb;\n    border-radius: 5px 5px 0 0;\n}\n.popover-content {\n    padding: 9px 14px;\n}\n.popover > .arrow,\n.popover > .arrow:after {\n    position: absolute;\n    display: block;\n    width: 0;\n    height: 0;\n    border-color: transparent;\n    border-style: solid;\n}\n.popover > .arrow {\n    border-width: 11px;\n}\n.popover > .arrow:after {\n    content: \"\";\n    border-width: 10px;\n}\n.popover.top > .arrow {\n    bottom: -11px;\n    left: 50%;\n    margin-left: -11px;\n    border-top-color: #999;\n    border-top-color: rgba(0, 0, 0, .25);\n    border-bottom-width: 0;\n}\n.popover.top > .arrow:after {\n    bottom: 1px;\n    margin-left: -10px;\n    content: \" \";\n    border-top-color: #fff;\n    border-bottom-width: 0;\n}\n.popover.right > .arrow {\n    top: 50%;\n    left: -11px;\n    margin-top: -11px;\n    border-right-color: #999;\n    border-right-color: rgba(0, 0, 0, .25);\n    border-left-width: 0;\n}\n.popover.right > .arrow:after {\n    bottom: -10px;\n    left: 1px;\n    content: \" \";\n    border-right-color: #fff;\n    border-left-width: 0;\n}\n.popover.bottom > .arrow {\n    top: -11px;\n    left: 50%;\n    margin-left: -11px;\n    border-top-width: 0;\n    border-bottom-color: #999;\n    border-bottom-color: rgba(0, 0, 0, .25);\n}\n.popover.bottom > .arrow:after {\n    top: 1px;\n    margin-left: -10px;\n    content: \" \";\n    border-top-width: 0;\n    border-bottom-color: #fff;\n}\n.popover.left > .arrow {\n    top: 50%;\n    right: -11px;\n    margin-top: -11px;\n    border-right-width: 0;\n    border-left-color: #999;\n    border-left-color: rgba(0, 0, 0, .25);\n}\n.popover.left > .arrow:after {\n    right: 1px;\n    bottom: -10px;\n    content: \" \";\n    border-right-width: 0;\n    border-left-color: #fff;\n}\n.carousel {\n    position: relative;\n}\n.carousel-inner {\n    position: relative;\n    width: 100%;\n    overflow: hidden;\n}\n.carousel-inner > .item {\n    position: relative;\n    display: none;\n    -webkit-transition: .6s ease-in-out left;\n    transition: .6s ease-in-out left;\n}\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n    line-height: 1;\n}\n@media all and (transform-3d), (-webkit-transform-3d) {\n    .carousel-inner > .item {\n        -webkit-transition: -webkit-transform .6s ease-in-out;\n        transition:         transform .6s ease-in-out;\n\n        -webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-perspective: 1000;\n        perspective: 1000;\n    }\n    .carousel-inner > .item.next,\n    .carousel-inner > .item.active.right {\n        left: 0;\n        -webkit-transform: translate3d(100%, 0, 0);\n        transform: translate3d(100%, 0, 0);\n    }\n    .carousel-inner > .item.prev,\n    .carousel-inner > .item.active.left {\n        left: 0;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n    }\n    .carousel-inner > .item.next.left,\n    .carousel-inner > .item.prev.right,\n    .carousel-inner > .item.active {\n        left: 0;\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n    }\n}\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n    display: block;\n}\n.carousel-inner > .active {\n    left: 0;\n}\n.carousel-inner > .next,\n.carousel-inner > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%;\n}\n.carousel-inner > .next {\n    left: 100%;\n}\n.carousel-inner > .prev {\n    left: -100%;\n}\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n    left: 0;\n}\n.carousel-inner > .active.left {\n    left: -100%;\n}\n.carousel-inner > .active.right {\n    left: 100%;\n}\n.carousel-control {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 15%;\n    font-size: 20px;\n    color: #fff;\n    text-align: center;\n    text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n    filter: alpha(opacity=50);\n    opacity: .5;\n}\n.carousel-control.left {\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n    background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, .0001)));\n    background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='rgba(128, 0, 0, 0)', endColorstr='rgba(0, 0, 0, 0)', GradientType=1);\n    background-repeat: repeat-x;\n}\n.carousel-control.right {\n    right: 0;\n    left: auto;\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n    background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .0001)), to(rgba(0, 0, 0, .5)));\n    background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='rgba(0, 0, 0, 0)', endColorstr='rgba(128, 0, 0, 0)', GradientType=1);\n    background-repeat: repeat-x;\n}\n.carousel-control:hover,\n.carousel-control:focus {\n    color: #fff;\n    text-decoration: none;\n    filter: alpha(opacity=90);\n    outline: 0;\n    opacity: .9;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n    position: absolute;\n    top: 50%;\n    z-index: 5;\n    display: inline-block;\n}\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n    left: 50%;\n    margin-left: -10px;\n}\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n    right: 50%;\n    margin-right: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n    width: 20px;\n    height: 20px;\n    margin-top: -10px;\n    font-family: serif;\n    line-height: 1;\n}\n.carousel-control .icon-prev:before {\n    content: '\\2039';\n}\n.carousel-control .icon-next:before {\n    content: '\\203A';\n}\n.carousel-indicators {\n    position: absolute;\n    bottom: 10px;\n    left: 50%;\n    z-index: 15;\n    width: 60%;\n    padding-left: 0;\n    margin-left: -30%;\n    text-align: center;\n    list-style: none;\n}\n.carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: #000 \\9;\n    background-color: rgba(0, 0, 0, 0);\n    border: 1px solid #fff;\n    border-radius: 10px;\n}\n.carousel-indicators .active {\n    width: 12px;\n    height: 12px;\n    margin: 0;\n    background-color: #fff;\n}\n.carousel-caption {\n    position: absolute;\n    right: 15%;\n    bottom: 20px;\n    left: 15%;\n    z-index: 10;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    color: #fff;\n    text-align: center;\n    text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n}\n.carousel-caption .btn {\n    text-shadow: none;\n}\n@media screen and (min-width: 768px) {\n    .carousel-control .glyphicon-chevron-left,\n    .carousel-control .glyphicon-chevron-right,\n    .carousel-control .icon-prev,\n    .carousel-control .icon-next {\n        width: 30px;\n        height: 30px;\n        margin-top: -15px;\n        font-size: 30px;\n    }\n    .carousel-control .glyphicon-chevron-left,\n    .carousel-control .icon-prev {\n        margin-left: -15px;\n    }\n    .carousel-control .glyphicon-chevron-right,\n    .carousel-control .icon-next {\n        margin-right: -15px;\n    }\n    .carousel-caption {\n        right: 20%;\n        left: 20%;\n        padding-bottom: 30px;\n    }\n    .carousel-indicators {\n        bottom: 20px;\n    }\n}\n.clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-footer:before,\n.modal-footer:after {\n    display: table;\n    content: \" \";\n}\n.clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-footer:after {\n    clear: both;\n}\n.center-block {\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n}\n.pull-right {\n    float: right !important;\n}\n.pull-left {\n    float: left !important;\n}\n.hide {\n    display: none !important;\n}\n.show {\n    display: block !important;\n}\n.invisible {\n    visibility: hidden;\n}\n.text-hide {\n    font: 0/0 a;\n    color: transparent;\n    text-shadow: none;\n    background-color: transparent;\n    border: 0;\n}\n.hidden {\n    display: none !important;\n}\n.affix {\n    position: fixed;\n}\n@-ms-viewport {\n    width: device-width;\n}\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n    display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n    display: none !important;\n}\n@media (max-width: 767px) {\n    .visible-xs {\n        display: block !important;\n    }\n    table.visible-xs {\n        display: table;\n    }\n    tr.visible-xs {\n        display: table-row !important;\n    }\n    th.visible-xs,\n    td.visible-xs {\n        display: table-cell !important;\n    }\n}\n@media (max-width: 767px) {\n    .visible-xs-block {\n        display: block !important;\n    }\n}\n@media (max-width: 767px) {\n    .visible-xs-inline {\n        display: inline !important;\n    }\n}\n@media (max-width: 767px) {\n    .visible-xs-inline-block {\n        display: inline-block !important;\n    }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n    .visible-sm {\n        display: block !important;\n    }\n    table.visible-sm {\n        display: table;\n    }\n    tr.visible-sm {\n        display: table-row !important;\n    }\n    th.visible-sm,\n    td.visible-sm {\n        display: table-cell !important;\n    }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n    .visible-sm-block {\n        display: block !important;\n    }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n    .visible-sm-inline {\n        display: inline !important;\n    }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n    .visible-sm-inline-block {\n        display: inline-block !important;\n    }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n    .visible-md {\n        display: block !important;\n    }\n    table.visible-md {\n        display: table;\n    }\n    tr.visible-md {\n        display: table-row !important;\n    }\n    th.visible-md,\n    td.visible-md {\n        display: table-cell !important;\n    }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n    .visible-md-block {\n        display: block !important;\n    }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n    .visible-md-inline {\n        display: inline !important;\n    }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n    .visible-md-inline-block {\n        display: inline-block !important;\n    }\n}\n@media (min-width: 1200px) {\n    .visible-lg {\n        display: block !important;\n    }\n    table.visible-lg {\n        display: table;\n    }\n    tr.visible-lg {\n        display: table-row !important;\n    }\n    th.visible-lg,\n    td.visible-lg {\n        display: table-cell !important;\n    }\n}\n@media (min-width: 1200px) {\n    .visible-lg-block {\n        display: block !important;\n    }\n}\n@media (min-width: 1200px) {\n    .visible-lg-inline {\n        display: inline !important;\n    }\n}\n@media (min-width: 1200px) {\n    .visible-lg-inline-block {\n        display: inline-block !important;\n    }\n}\n@media (max-width: 767px) {\n    .hidden-xs {\n        display: none !important;\n    }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n    .hidden-sm {\n        display: none !important;\n    }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n    .hidden-md {\n        display: none !important;\n    }\n}\n@media (min-width: 1200px) {\n    .hidden-lg {\n        display: none !important;\n    }\n}\n.visible-print {\n    display: none !important;\n}\n@media print {\n    .visible-print {\n        display: block !important;\n    }\n    table.visible-print {\n        display: table;\n    }\n    tr.visible-print {\n        display: table-row !important;\n    }\n    th.visible-print,\n    td.visible-print {\n        display: table-cell !important;\n    }\n}\n.visible-print-block {\n    display: none !important;\n}\n@media print {\n    .visible-print-block {\n        display: block !important;\n    }\n}\n.visible-print-inline {\n    display: none !important;\n}\n@media print {\n    .visible-print-inline {\n        display: inline !important;\n    }\n}\n.visible-print-inline-block {\n    display: none !important;\n}\n@media print {\n    .visible-print-inline-block {\n        display: inline-block !important;\n    }\n}\n@media print {\n    .hidden-print {\n        display: none !important;\n    }\n}\n/*# sourceMappingURL=bootstrap.css.map */\n", ""]);
  
  // exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  exports.push([module.id, "@import url(http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&lang=en);", ""]);
  
  // module
  exports.push([module.id, "/*\n *\n *   INSPINIA - Responsive Admin Theme\n *   version 2.2\n *\n*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-weight: 100;\n}\nh1 {\n    font-size: 30px;\n}\nh2 {\n    font-size: 24px;\n}\nh3 {\n    font-size: 16px;\n}\nh4 {\n    font-size: 14px;\n}\nh5 {\n    font-size: 12px;\n}\nh6 {\n    font-size: 10px;\n}\nh3,\nh4,\nh5 {\n    margin-top: 5px;\n    font-weight: 600;\n}\n.nav > li > a {\n    color: #a7b1c2;\n    font-weight: 600;\n    padding: 14px 20px 14px 25px;\n}\n.nav.navbar-right > li > a {\n    color: #999c9e;\n}\n.nav > li.active > a {\n    color: #ffffff;\n}\n.navbar-default .nav > li > a:hover,\n.navbar-default .nav > li > a:focus {\n    background-color: #293846;\n    color: white;\n}\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n    background: #fff;\n}\n.nav.navbar-top-links > li > a:hover,\n.nav.navbar-top-links > li > a:focus {\n    background-color: transparent;\n}\n.nav > li > a i {\n    margin-right: 6px;\n}\n.navbar {\n    border: 0;\n}\n.navbar-default {\n    background-color: transparent;\n    border-color: #2f4050;\n}\n.navbar-top-links li {\n    display: inline-block;\n}\n.navbar-top-links li:last-child {\n    margin-right: 40px;\n}\n.navbar-top-links li a {\n    padding: 20px 10px;\n    min-height: 50px;\n}\n.dropdown-menu {\n    border: medium none;\n    border-radius: 3px;\n    box-shadow: 0 0 3px rgba(86, 96, 117, 0.7);\n    display: none;\n    float: left;\n    font-size: 12px;\n    left: 0;\n    list-style: none outside none;\n    padding: 0;\n    position: absolute;\n    text-shadow: none;\n    top: 100%;\n    z-index: 1000;\n}\n.dropdown-menu > li > a {\n    border-radius: 3px;\n    color: inherit;\n    line-height: 25px;\n    margin: 4px;\n    text-align: left;\n    font-weight: normal;\n}\n.dropdown-menu > li > a.font-bold {\n    font-weight: 600;\n}\n.navbar-top-links .dropdown-menu li {\n    display: block;\n}\n.navbar-top-links .dropdown-menu li:last-child {\n    margin-right: 0;\n}\n.navbar-top-links .dropdown-menu li a {\n    padding: 3px 20px;\n    min-height: 0;\n}\n.navbar-top-links .dropdown-menu li a div {\n    white-space: normal;\n}\n.navbar-top-links .dropdown-messages,\n.navbar-top-links .dropdown-tasks,\n.navbar-top-links .dropdown-alerts {\n    width: 310px;\n    min-width: 0;\n}\n.navbar-top-links .dropdown-messages {\n    margin-left: 5px;\n}\n.navbar-top-links .dropdown-tasks {\n    margin-left: -59px;\n}\n.navbar-top-links .dropdown-alerts {\n    margin-left: -123px;\n}\n.navbar-top-links .dropdown-user {\n    right: 0;\n    left: auto;\n}\n.dropdown-messages,\n.dropdown-alerts {\n    padding: 10px 10px 10px 10px;\n}\n.dropdown-messages li a,\n.dropdown-alerts li a {\n    font-size: 12px;\n}\n.dropdown-messages li em,\n.dropdown-alerts li em {\n    font-size: 10px;\n}\n.nav.navbar-top-links .dropdown-alerts a {\n    font-size: 12px;\n}\n.nav-header {\n    padding: 33px 25px;\n    background: url(" + __webpack_require__(52) + ") no-repeat;\n}\n.pace-done .nav-header {\n    -webkit-transition: all 0.5s;\n            transition: all 0.5s;\n}\n.nav > li.active {\n    border-left: 4px solid #19aa8d;\n    background: #293846;\n}\n.nav.nav-second-level > li.active {\n    border: none;\n}\n.nav.nav-second-level.collapse[style] {\n    height: auto !important;\n}\n.nav-header a {\n    color: #DFE4ED;\n}\n.nav-header .text-muted {\n    color: #8095a8;\n}\n.minimalize-styl-2 {\n    padding: 4px 12px;\n    margin: 14px 5px 5px 20px;\n    font-size: 14px;\n    float: left;\n}\n.navbar-form-custom {\n    float: left;\n    height: 50px;\n    padding: 0;\n    width: 200px;\n    display: inline-table;\n}\n.navbar-form-custom .form-group {\n    margin-bottom: 0;\n}\n.nav.navbar-top-links a {\n    font-size: 14px;\n}\n.navbar-form-custom .form-control {\n    background: none repeat scroll 0 0 rgba(0, 0, 0, 0);\n    border: medium none;\n    font-size: 14px;\n    height: 60px;\n    margin: 0;\n    z-index: 2000;\n}\n.count-info .label {\n    line-height: 12px;\n    padding: 2px 5px;\n    position: absolute;\n    right: 6px;\n    top: 12px;\n}\n.arrow {\n    float: right;\n}\n.fa.arrow:before {\n    content: \"\\F104\";\n}\n.active > a > .fa.arrow:before {\n    content: \"\\F107\";\n}\n.nav-second-level li,\n.nav-third-level li {\n    border-bottom: none !important;\n}\n.nav-second-level li a {\n    padding: 7px 10px 7px 10px;\n    padding-left: 52px;\n}\n.nav-third-level li a {\n    padding-left: 62px;\n}\n.nav-second-level li:last-child {\n    margin-bottom: 10px;\n}\nbody:not(.fixed-sidebar):not(.canvas-menu).mini-navbar .nav li:hover > .nav-second-level,\n.mini-navbar .nav li:focus > .nav-second-level {\n    display: block;\n    border-radius: 0 2px 2px 0;\n    min-width: 140px;\n    height: auto;\n}\nbody.mini-navbar .navbar-default .nav > li > .nav-second-level li a {\n    font-size: 12px;\n    border-radius: 3px;\n}\n.fixed-nav .slimScrollDiv #side-menu {\n    padding-bottom: 60px;\n}\n.mini-navbar .nav-second-level li a {\n    padding: 10px 10px 10px 15px;\n}\n.mini-navbar .nav-second-level {\n    position: absolute;\n    left: 70px;\n    top: 0px;\n    background-color: #2f4050;\n    padding: 10px 10px 10px 10px;\n    font-size: 12px;\n}\n.canvas-menu.mini-navbar .nav-second-level {\n    background: #293846;\n}\n.mini-navbar li.active .nav-second-level {\n    left: 65px;\n}\n.navbar-default .special_link a {\n    background: #1ab394;\n    color: white;\n}\n.navbar-default .special_link a:hover {\n    background: #17987e !important;\n    color: white;\n}\n.navbar-default .special_link a span.label {\n    background: #fff;\n    color: #1ab394;\n}\n.navbar-default .landing_link a {\n    background: #1cc09f;\n    color: white;\n}\n.navbar-default .landing_link a:hover {\n    background: #1ab394 !important;\n    color: white;\n}\n.navbar-default .landing_link a span.label {\n    background: #fff;\n    color: #1cc09f;\n}\n.logo-element {\n    text-align: center;\n    font-size: 18px;\n    font-weight: 600;\n    color: white;\n    display: none;\n    padding: 18px 0;\n}\n.pace-done .navbar-static-side,\n.pace-done .nav-header,\n.pace-done li.active,\n.pace-done #page-wrapper,\n.pace-done .footer {\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n}\n.navbar-fixed-top {\n    background: #fff;\n    -webkit-transition-duration: 0.5s;\n            transition-duration: 0.5s;\n    border-bottom: 1px solid #e7eaec !important;\n    z-index: 2030;\n}\n.navbar-fixed-top,\n.navbar-static-top {\n    background: #f3f3f4;\n}\n.fixed-nav #wrapper {\n    margin-top: 0;\n}\nbody.fixed-nav #wrapper .navbar-static-side,\nbody.fixed-nav #wrapper #page-wrapper {\n    margin-top: 60px;\n}\n.fixed-nav .minimalize-styl-2 {\n    margin: 14px 5px 5px 15px;\n}\n.body-small .navbar-fixed-top {\n    margin-left: 0px;\n}\nbody.mini-navbar .navbar-static-side {\n    width: 70px;\n}\nbody.mini-navbar .profile-element,\nbody.mini-navbar .nav-label,\nbody.mini-navbar .navbar-default .nav li a span {\n    display: none;\n}\nbody.canvas-menu .profile-element {\n    display: block;\n}\nbody:not(.fixed-sidebar):not(.canvas-menu).mini-navbar .nav-second-level {\n    display: none;\n}\nbody.mini-navbar .navbar-default .nav > li > a {\n    font-size: 16px;\n}\nbody.mini-navbar .logo-element {\n    display: block;\n}\nbody.canvas-menu .logo-element {\n    display: none;\n}\nbody.mini-navbar .nav-header {\n    padding: 0;\n    background-color: #1ab394;\n}\nbody.canvas-menu .nav-header {\n    padding: 33px 25px;\n}\nbody.mini-navbar #page-wrapper {\n    margin: 0 0 0 70px;\n}\nbody.fixed-sidebar.mini-navbar .footer,\nbody.canvas-menu.mini-navbar .footer {\n    margin: 0 0 0 0 !important;\n}\nbody.canvas-menu.mini-navbar #page-wrapper,\nbody.canvas-menu.mini-navbar .footer {\n    margin: 0 0 0 0;\n}\nbody.fixed-sidebar .navbar-static-side,\nbody.canvas-menu .navbar-static-side {\n    position: fixed;\n    width: 220px;\n    z-index: 2001;\n    height: 100%;\n}\nbody.fixed-sidebar.mini-navbar .navbar-static-side {\n    width: 0px;\n}\nbody.fixed-sidebar.mini-navbar #page-wrapper {\n    margin: 0 0 0 0px;\n}\nbody.body-small.fixed-sidebar.mini-navbar #page-wrapper {\n    margin: 0 0 0 220px;\n}\nbody.body-small.fixed-sidebar.mini-navbar .navbar-static-side {\n    width: 220px;\n}\n.fixed-sidebar.mini-navbar .nav li:focus > .nav-second-level,\n.canvas-menu.mini-navbar .nav li:focus > .nav-second-level {\n    display: block;\n    height: auto;\n}\nbody.fixed-sidebar.mini-navbar .navbar-default .nav > li > .nav-second-level li a {\n    font-size: 12px;\n    border-radius: 3px;\n}\nbody.canvas-menu.mini-navbar .navbar-default .nav > li > .nav-second-level li a {\n    font-size: 13px;\n    border-radius: 3px;\n}\n.fixed-sidebar.mini-navbar .nav-second-level li a,\n.canvas-menu.mini-navbar .nav-second-level li a {\n    padding: 10px 10px 10px 15px;\n}\n.fixed-sidebar.mini-navbar .nav-second-level,\n.canvas-menu.mini-navbar .nav-second-level {\n    position: relative;\n    padding: 0;\n    font-size: 13px;\n}\n.fixed-sidebar.mini-navbar li.active .nav-second-level,\n.canvas-menu.mini-navbar li.active .nav-second-level {\n    left: 0px;\n}\nbody.fixed-sidebar.mini-navbar .navbar-default .nav > li > a,\nbody.canvas-menu.mini-navbar .navbar-default .nav > li > a {\n    font-size: 13px;\n}\nbody.fixed-sidebar.mini-navbar .nav-label,\nbody.fixed-sidebar.mini-navbar .navbar-default .nav li a span,\nbody.canvas-menu.mini-navbar .nav-label,\nbody.canvas-menu.mini-navbar .navbar-default .nav li a span {\n    display: inline;\n}\nbody.canvas-menu.mini-navbar .navbar-default .nav li .profile-element a span {\n    display: block;\n}\n.canvas-menu.mini-navbar .nav-second-level li a,\n.fixed-sidebar.mini-navbar .nav-second-level li a {\n    padding: 7px 10px 7px 52px;\n}\n.fixed-sidebar.mini-navbar .nav-second-level,\n.canvas-menu.mini-navbar .nav-second-level {\n    left: 0px;\n}\nbody.canvas-menu nav.navbar-static-side {\n    z-index: 2001;\n    background: #2f4050;\n    height: 100%;\n    position: fixed;\n    display: none;\n}\nbody.canvas-menu.mini-navbar nav.navbar-static-side {\n    display: block;\n    width: 220px;\n}\n.top-navigation #page-wrapper {\n    margin-left: 0;\n}\n.top-navigation .navbar-nav .dropdown-menu > .active > a {\n    background: white;\n    color: #1ab394;\n    font-weight: bold;\n}\n.white-bg .navbar-fixed-top,\n.white-bg .navbar-static-top {\n    background: #fff;\n}\n.top-navigation .navbar {\n    margin-bottom: 0;\n}\n.top-navigation .nav > li > a {\n    padding: 15px 20px;\n    color: #676a6c;\n}\n.top-navigation .nav > li a:hover,\n.top-navigation .nav > li a:focus {\n    background: #fff;\n    color: #1ab394;\n}\n.top-navigation .nav > li.active {\n    background: #fff;\n    border: none;\n}\n.top-navigation .nav > li.active > a {\n    color: #1ab394;\n}\n.top-navigation .navbar-right {\n    margin-right: 10px;\n}\n.top-navigation .navbar-nav .dropdown-menu {\n    box-shadow: none;\n    border: 1px solid #e7eaec;\n}\n.top-navigation .dropdown-menu > li > a {\n    margin: 0;\n    padding: 7px 20px;\n}\n.navbar .dropdown-menu {\n    margin-top: 0px;\n}\n.top-navigation .navbar-brand {\n    background: #1ab394;\n    color: #fff;\n    padding: 15px 25px;\n}\n.top-navigation .navbar-top-links li:last-child {\n    margin-right: 0;\n}\n.top-navigation.mini-navbar #page-wrapper,\n.top-navigation.body-small.fixed-sidebar.mini-navbar #page-wrapper,\n.mini-navbar .top-navigation #page-wrapper,\n.body-small.fixed-sidebar.mini-navbar .top-navigation #page-wrapper,\n.canvas-menu #page-wrapper {\n    margin: 0;\n}\n.top-navigation.fixed-nav #wrapper,\n.fixed-nav #wrapper.top-navigation {\n    margin-top: 50px;\n}\n.top-navigation .footer.fixed {\n    margin-left: 0 !important;\n}\n.top-navigation .wrapper.wrapper-content {\n    padding: 40px;\n}\n.top-navigation.body-small .wrapper.wrapper-content,\n.body-small .top-navigation .wrapper.wrapper-content {\n    padding: 40px 0px 40px 0px;\n}\n.navbar-toggle {\n    background-color: #1ab394;\n    color: #fff;\n    padding: 6px 12px;\n    font-size: 14px;\n}\n.top-navigation .navbar-nav .open .dropdown-menu > li > a,\n.top-navigation .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 10px 15px 10px 20px;\n}\n@media (max-width: 768px) {\n    .top-navigation .navbar-header {\n        display: block;\n        float: none;\n    }\n}\n.menu-visible-lg,\n.menu-visible-md {\n    display: none !important;\n}\n@media (min-width: 1200px) {\n    .menu-visible-lg {\n        display: block !important;\n    }\n}\n@media (min-width: 992px) {\n    .menu-visible-md {\n        display: block !important;\n    }\n}\n@media (max-width: 767px) {\n    .menu-visible-md {\n        display: block !important;\n    }\n    .menu-visible-lg {\n        display: block !important;\n    }\n}\n.btn {\n    border-radius: 3px;\n}\n.float-e-margins .btn {\n    margin-bottom: 5px;\n}\n.btn-w-m {\n    min-width: 120px;\n}\n.btn-primary.btn-outline {\n    color: #1ab394;\n}\n.btn-success.btn-outline {\n    color: #1c84c6;\n}\n.btn-info.btn-outline {\n    color: #23c6c8;\n}\n.btn-warning.btn-outline {\n    color: #f8ac59;\n}\n.btn-danger.btn-outline {\n    color: #ed5565;\n}\n.btn-primary.btn-outline:hover,\n.btn-success.btn-outline:hover,\n.btn-info.btn-outline:hover,\n.btn-warning.btn-outline:hover,\n.btn-danger.btn-outline:hover {\n    color: #fff;\n}\n.btn-primary {\n    background-color: #1ab394;\n    border-color: #1ab394;\n    color: #FFFFFF;\n}\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n    background-color: #18a689;\n    border-color: #18a689;\n    color: #FFFFFF;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n    background-image: none;\n}\n.btn-primary.disabled,\n.btn-primary.disabled:hover,\n.btn-primary.disabled:focus,\n.btn-primary.disabled:active,\n.btn-primary.disabled.active,\n.btn-primary[disabled],\n.btn-primary[disabled]:hover,\n.btn-primary[disabled]:focus,\n.btn-primary[disabled]:active,\n.btn-primary.active[disabled],\nfieldset[disabled] .btn-primary,\nfieldset[disabled] .btn-primary:hover,\nfieldset[disabled] .btn-primary:focus,\nfieldset[disabled] .btn-primary:active,\nfieldset[disabled] .btn-primary.active {\n    background-color: #1dc5a3;\n    border-color: #1dc5a3;\n}\n.btn-success {\n    background-color: #1c84c6;\n    border-color: #1c84c6;\n    color: #FFFFFF;\n}\n.btn-success:hover,\n.btn-success:focus,\n.btn-success:active,\n.btn-success.active,\n.open .dropdown-toggle.btn-success {\n    background-color: #1a7bb9;\n    border-color: #1a7bb9;\n    color: #FFFFFF;\n}\n.btn-success:active,\n.btn-success.active,\n.open .dropdown-toggle.btn-success {\n    background-image: none;\n}\n.btn-success.disabled,\n.btn-success.disabled:hover,\n.btn-success.disabled:focus,\n.btn-success.disabled:active,\n.btn-success.disabled.active,\n.btn-success[disabled],\n.btn-success[disabled]:hover,\n.btn-success[disabled]:focus,\n.btn-success[disabled]:active,\n.btn-success.active[disabled],\nfieldset[disabled] .btn-success,\nfieldset[disabled] .btn-success:hover,\nfieldset[disabled] .btn-success:focus,\nfieldset[disabled] .btn-success:active,\nfieldset[disabled] .btn-success.active {\n    background-color: #1f90d8;\n    border-color: #1f90d8;\n}\n.btn-info {\n    background-color: #23c6c8;\n    border-color: #23c6c8;\n    color: #FFFFFF;\n}\n.btn-info:hover,\n.btn-info:focus,\n.btn-info:active,\n.btn-info.active,\n.open .dropdown-toggle.btn-info {\n    background-color: #21b9bb;\n    border-color: #21b9bb;\n    color: #FFFFFF;\n}\n.btn-info:active,\n.btn-info.active,\n.open .dropdown-toggle.btn-info {\n    background-image: none;\n}\n.btn-info.disabled,\n.btn-info.disabled:hover,\n.btn-info.disabled:focus,\n.btn-info.disabled:active,\n.btn-info.disabled.active,\n.btn-info[disabled],\n.btn-info[disabled]:hover,\n.btn-info[disabled]:focus,\n.btn-info[disabled]:active,\n.btn-info.active[disabled],\nfieldset[disabled] .btn-info,\nfieldset[disabled] .btn-info:hover,\nfieldset[disabled] .btn-info:focus,\nfieldset[disabled] .btn-info:active,\nfieldset[disabled] .btn-info.active {\n    background-color: #26d7d9;\n    border-color: #26d7d9;\n}\n.btn-default {\n    background-color: #c2c2c2;\n    border-color: #c2c2c2;\n    color: #FFFFFF;\n}\n.btn-default:hover,\n.btn-default:focus,\n.btn-default:active,\n.btn-default.active,\n.open .dropdown-toggle.btn-default {\n    background-color: #bababa;\n    border-color: #bababa;\n    color: #FFFFFF;\n}\n.btn-default:active,\n.btn-default.active,\n.open .dropdown-toggle.btn-default {\n    background-image: none;\n}\n.btn-default.disabled,\n.btn-default.disabled:hover,\n.btn-default.disabled:focus,\n.btn-default.disabled:active,\n.btn-default.disabled.active,\n.btn-default[disabled],\n.btn-default[disabled]:hover,\n.btn-default[disabled]:focus,\n.btn-default[disabled]:active,\n.btn-default.active[disabled],\nfieldset[disabled] .btn-default,\nfieldset[disabled] .btn-default:hover,\nfieldset[disabled] .btn-default:focus,\nfieldset[disabled] .btn-default:active,\nfieldset[disabled] .btn-default.active {\n    background-color: #cccccc;\n    border-color: #cccccc;\n}\n.btn-warning {\n    background-color: #f8ac59;\n    border-color: #f8ac59;\n    color: #FFFFFF;\n}\n.btn-warning:hover,\n.btn-warning:focus,\n.btn-warning:active,\n.btn-warning.active,\n.open .dropdown-toggle.btn-warning {\n    background-color: #f7a54a;\n    border-color: #f7a54a;\n    color: #FFFFFF;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open .dropdown-toggle.btn-warning {\n    background-image: none;\n}\n.btn-warning.disabled,\n.btn-warning.disabled:hover,\n.btn-warning.disabled:focus,\n.btn-warning.disabled:active,\n.btn-warning.disabled.active,\n.btn-warning[disabled],\n.btn-warning[disabled]:hover,\n.btn-warning[disabled]:focus,\n.btn-warning[disabled]:active,\n.btn-warning.active[disabled],\nfieldset[disabled] .btn-warning,\nfieldset[disabled] .btn-warning:hover,\nfieldset[disabled] .btn-warning:focus,\nfieldset[disabled] .btn-warning:active,\nfieldset[disabled] .btn-warning.active {\n    background-color: #f9b66d;\n    border-color: #f9b66d;\n}\n.btn-danger {\n    background-color: #ed5565;\n    border-color: #ed5565;\n    color: #FFFFFF;\n}\n.btn-danger:hover,\n.btn-danger:focus,\n.btn-danger:active,\n.btn-danger.active,\n.open .dropdown-toggle.btn-danger {\n    background-color: #ec4758;\n    border-color: #ec4758;\n    color: #FFFFFF;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open .dropdown-toggle.btn-danger {\n    background-image: none;\n}\n.btn-danger.disabled,\n.btn-danger.disabled:hover,\n.btn-danger.disabled:focus,\n.btn-danger.disabled:active,\n.btn-danger.disabled.active,\n.btn-danger[disabled],\n.btn-danger[disabled]:hover,\n.btn-danger[disabled]:focus,\n.btn-danger[disabled]:active,\n.btn-danger.active[disabled],\nfieldset[disabled] .btn-danger,\nfieldset[disabled] .btn-danger:hover,\nfieldset[disabled] .btn-danger:focus,\nfieldset[disabled] .btn-danger:active,\nfieldset[disabled] .btn-danger.active {\n    background-color: #ef6776;\n    border-color: #ef6776;\n}\n.btn-link {\n    color: inherit;\n}\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active,\n.btn-link.active,\n.open .dropdown-toggle.btn-link {\n    color: #1ab394;\n    text-decoration: none;\n}\n.btn-link:active,\n.btn-link.active,\n.open .dropdown-toggle.btn-link {\n    background-image: none;\n}\n.btn-link.disabled,\n.btn-link.disabled:hover,\n.btn-link.disabled:focus,\n.btn-link.disabled:active,\n.btn-link.disabled.active,\n.btn-link[disabled],\n.btn-link[disabled]:hover,\n.btn-link[disabled]:focus,\n.btn-link[disabled]:active,\n.btn-link.active[disabled],\nfieldset[disabled] .btn-link,\nfieldset[disabled] .btn-link:hover,\nfieldset[disabled] .btn-link:focus,\nfieldset[disabled] .btn-link:active,\nfieldset[disabled] .btn-link.active {\n    color: #cacaca;\n}\n.btn-white {\n    color: inherit;\n    background: white;\n    border: 1px solid #e7eaec;\n}\n.btn-white:hover,\n.btn-white:focus,\n.btn-white:active,\n.btn-white.active,\n.open .dropdown-toggle.btn-white {\n    color: inherit;\n    border: 1px solid #d2d2d2;\n}\n.btn-white:active,\n.btn-white.active {\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15) inset;\n}\n.btn-white:active,\n.btn-white.active,\n.open .dropdown-toggle.btn-white {\n    background-image: none;\n}\n.btn-white.disabled,\n.btn-white.disabled:hover,\n.btn-white.disabled:focus,\n.btn-white.disabled:active,\n.btn-white.disabled.active,\n.btn-white[disabled],\n.btn-white[disabled]:hover,\n.btn-white[disabled]:focus,\n.btn-white[disabled]:active,\n.btn-white.active[disabled],\nfieldset[disabled] .btn-white,\nfieldset[disabled] .btn-white:hover,\nfieldset[disabled] .btn-white:focus,\nfieldset[disabled] .btn-white:active,\nfieldset[disabled] .btn-white.active {\n    color: #cacaca;\n}\n.form-control,\n.form-control:focus,\n.has-error .form-control:focus,\n.has-success .form-control:focus,\n.has-warning .form-control:focus,\n.navbar-collapse,\n.navbar-form,\n.navbar-form-custom .form-control:focus,\n.navbar-form-custom .form-control:hover,\n.open .btn.dropdown-toggle,\n.panel,\n.popover,\n.progress,\n.progress-bar {\n    box-shadow: none;\n}\n.btn-outline {\n    color: inherit;\n    background-color: transparent;\n    -webkit-transition: all .5s;\n            transition: all .5s;\n}\n.btn-rounded {\n    border-radius: 50px;\n}\n.btn-large-dim {\n    width: 90px;\n    height: 90px;\n    font-size: 42px;\n}\nbutton.dim {\n    display: inline-block;\n    color: #fff;\n    text-decoration: none;\n    text-transform: uppercase;\n    text-align: center;\n    padding-top: 6px;\n    margin-right: 10px;\n    position: relative;\n    cursor: pointer;\n    border-radius: 5px;\n    font-weight: 600;\n    margin-bottom: 20px !important;\n}\nbutton.dim:active {\n    top: 3px;\n}\nbutton.btn-primary.dim {\n    box-shadow: inset 0px 0px 0px #16987e, 0px 5px 0px 0px #16987e, 0px 10px 5px #999999;\n}\nbutton.btn-primary.dim:active {\n    box-shadow: inset 0px 0px 0px #16987e, 0px 2px 0px 0px #16987e, 0px 5px 3px #999999;\n}\nbutton.btn-default.dim {\n    box-shadow: inset 0px 0px 0px #b3b3b3, 0px 5px 0px 0px #b3b3b3, 0px 10px 5px #999999;\n}\nbutton.btn-default.dim:active {\n    box-shadow: inset 0px 0px 0px #b3b3b3, 0px 2px 0px 0px #b3b3b3, 0px 5px 3px #999999;\n}\nbutton.btn-warning.dim {\n    box-shadow: inset 0px 0px 0px #f79d3c, 0px 5px 0px 0px #f79d3c, 0px 10px 5px #999999;\n}\nbutton.btn-warning.dim:active {\n    box-shadow: inset 0px 0px 0px #f79d3c, 0px 2px 0px 0px #f79d3c, 0px 5px 3px #999999;\n}\nbutton.btn-info.dim {\n    box-shadow: inset 0px 0px 0px #1eacae, 0px 5px 0px 0px #1eacae, 0px 10px 5px #999999;\n}\nbutton.btn-info.dim:active {\n    box-shadow: inset 0px 0px 0px #1eacae, 0px 2px 0px 0px #1eacae, 0px 5px 3px #999999;\n}\nbutton.btn-success.dim {\n    box-shadow: inset 0px 0px 0px #1872ab, 0px 5px 0px 0px #1872ab, 0px 10px 5px #999999;\n}\nbutton.btn-success.dim:active {\n    box-shadow: inset 0px 0px 0px #1872ab, 0px 2px 0px 0px #1872ab, 0px 5px 3px #999999;\n}\nbutton.btn-danger.dim {\n    box-shadow: inset 0px 0px 0px #ea394c, 0px 5px 0px 0px #ea394c, 0px 10px 5px #999999;\n}\nbutton.btn-danger.dim:active {\n    box-shadow: inset 0px 0px 0px #ea394c, 0px 2px 0px 0px #ea394c, 0px 5px 3px #999999;\n}\nbutton.dim:before {\n    font-size: 50px;\n    line-height: 1em;\n    font-weight: normal;\n    color: #fff;\n    display: block;\n    padding-top: 10px;\n}\nbutton.dim:active:before {\n    top: 7px;\n    font-size: 50px;\n}\n.label {\n    background-color: #d1dade;\n    color: #5e5e5e;\n    font-family: 'Open Sans';\n    font-size: 10px;\n    font-weight: 600;\n    padding: 3px 8px;\n    text-shadow: none;\n}\n.badge {\n    background-color: #d1dade;\n    color: #5e5e5e;\n    font-family: 'Open Sans';\n    font-size: 11px;\n    font-weight: 600;\n    padding-bottom: 4px;\n    padding-left: 6px;\n    padding-right: 6px;\n    text-shadow: none;\n}\n.label-primary,\n.badge-primary {\n    background-color: #1ab394;\n    color: #FFFFFF;\n}\n.label-success,\n.badge-success {\n    background-color: #1c84c6;\n    color: #FFFFFF;\n}\n.label-warning,\n.badge-warning {\n    background-color: #f8ac59;\n    color: #FFFFFF;\n}\n.label-warning-light,\n.badge-warning-light {\n    background-color: #f8ac59;\n    color: #ffffff;\n}\n.label-danger,\n.badge-danger {\n    background-color: #ed5565;\n    color: #FFFFFF;\n}\n.label-info,\n.badge-info {\n    background-color: #23c6c8;\n    color: #FFFFFF;\n}\n.label-inverse,\n.badge-inverse {\n    background-color: #262626;\n    color: #FFFFFF;\n}\n.label-white,\n.badge-white {\n    background-color: #FFFFFF;\n    color: #5E5E5E;\n}\n.label-white,\n.badge-disable {\n    background-color: #2A2E36;\n    color: #8B91A0;\n}\n/* TOOGLE SWICH */\n.onoffswitch {\n    position: relative;\n    width: 64px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n.onoffswitch-checkbox {\n    display: none;\n}\n.onoffswitch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border: 2px solid #1ab394;\n    border-radius: 2px;\n}\n.onoffswitch-inner {\n    width: 200%;\n    margin-left: -100%;\n    -webkit-transition: margin 0.3s ease-in 0s;\n    transition: margin 0.3s ease-in 0s;\n}\n.onoffswitch-inner:before,\n.onoffswitch-inner:after {\n    float: left;\n    width: 50%;\n    height: 20px;\n    padding: 0;\n    line-height: 20px;\n    font-size: 12px;\n    color: white;\n    font-family: Trebuchet, Arial, sans-serif;\n    font-weight: bold;\n    box-sizing: border-box;\n}\n.onoffswitch-inner:before {\n    content: \"ON\";\n    padding-left: 10px;\n    background-color: #1ab394;\n    color: #FFFFFF;\n}\n.onoffswitch-inner:after {\n    content: \"OFF\";\n    padding-right: 10px;\n    background-color: #FFFFFF;\n    color: #999999;\n    text-align: right;\n}\n.onoffswitch-switch {\n    width: 20px;\n    margin: 0px;\n    background: #FFFFFF;\n    border: 2px solid #1ab394;\n    border-radius: 2px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 44px;\n    -webkit-transition: all 0.3s ease-in 0s;\n    transition: all 0.3s ease-in 0s;\n}\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\n    margin-left: 0;\n}\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\n    right: 0px;\n}\n/* CHOSEN PLUGIN */\n.chosen-container-single .chosen-single {\n    background: #ffffff;\n    box-shadow: none;\n    -moz-box-sizing: border-box;\n    background-color: #FFFFFF;\n    border: 1px solid #CBD5DD;\n    border-radius: 2px;\n    cursor: text;\n    height: auto !important;\n    margin: 0;\n    min-height: 30px;\n    overflow: hidden;\n    padding: 4px 12px;\n    position: relative;\n    width: 100%;\n}\n.chosen-container-multi .chosen-choices li.search-choice {\n    background: #f1f1f1;\n    border: 1px solid #ededed;\n    border-radius: 2px;\n    box-shadow: none;\n    color: #333333;\n    cursor: default;\n    line-height: 13px;\n    margin: 3px 0 3px 5px;\n    padding: 3px 20px 3px 5px;\n    position: relative;\n}\n/* PAGINATIN */\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n    background-color: #f4f4f4;\n    border-color: #DDDDDD;\n    color: inherit;\n    cursor: default;\n    z-index: 2;\n}\n.pagination > li > a,\n.pagination > li > span {\n    background-color: #FFFFFF;\n    border: 1px solid #DDDDDD;\n    color: inherit;\n    float: left;\n    line-height: 1.42857;\n    margin-left: -1px;\n    padding: 4px 10px;\n    position: relative;\n    text-decoration: none;\n}\n/* TOOLTIPS */\n.tooltip-inner {\n    background-color: #2F4050;\n}\n.tooltip.top .tooltip-arrow {\n    border-top-color: #2F4050;\n}\n.tooltip.right .tooltip-arrow {\n    border-right-color: #2F4050;\n}\n.tooltip.bottom .tooltip-arrow {\n    border-bottom-color: #2F4050;\n}\n.tooltip.left .tooltip-arrow {\n    border-left-color: #2F4050;\n}\n/* EASY PIE CHART*/\n.easypiechart {\n    position: relative;\n    text-align: center;\n}\n.easypiechart .h2 {\n    margin-left: 10px;\n    margin-top: 10px;\n    display: inline-block;\n}\n.easypiechart canvas {\n    top: 0;\n    left: 0;\n}\n.easypiechart .easypie-text {\n    line-height: 1;\n    position: absolute;\n    top: 33px;\n    width: 100%;\n    z-index: 1;\n}\n.easypiechart img {\n    margin-top: -4px;\n}\n.jqstooltip {\n    box-sizing: content-box;\n}\n/* FULLCALENDAR */\n.fc-state-default {\n    background-color: #ffffff;\n    background-image: none;\n    background-repeat: repeat-x;\n    box-shadow: none;\n    color: #333333;\n    text-shadow: none;\n}\n.fc-state-default {\n    border: 1px solid;\n}\n.fc-button {\n    color: inherit;\n    border: 1px solid #e7eaec;\n    cursor: pointer;\n    display: inline-block;\n    height: 1.9em;\n    line-height: 1.9em;\n    overflow: hidden;\n    padding: 0 0.6em;\n    position: relative;\n    white-space: nowrap;\n}\n.fc-state-active {\n    background-color: #1ab394;\n    border-color: #1ab394;\n    color: #ffffff;\n}\n.fc-header-title h2 {\n    font-size: 16px;\n    font-weight: 600;\n    color: inherit;\n}\n.fc-content .fc-widget-header,\n.fc-content .fc-widget-content {\n    border-color: #e7eaec;\n    font-weight: normal;\n}\n.fc-border-separate tbody {\n    background-color: #F8F8F8;\n}\n.fc-state-highlight {\n    background: none repeat scroll 0 0 #FCF8E3;\n}\n.external-event {\n    padding: 5px 10px;\n    border-radius: 2px;\n    cursor: pointer;\n    margin-bottom: 5px;\n}\n.fc-ltr .fc-event-hori.fc-event-end,\n.fc-rtl .fc-event-hori.fc-event-start {\n    border-radius: 2px;\n}\n.fc-event,\n.fc-agenda .fc-event-time,\n.fc-event a {\n    padding: 4px 6px;\n    background-color: #1ab394;\n    /* background color */\n    border-color: #1ab394;\n    /* border color */\n}\n.fc-event-time,\n.fc-event-title {\n    color: #717171;\n    padding: 0 1px;\n}\n.ui-calendar .fc-event-time,\n.ui-calendar .fc-event-title {\n    color: #fff;\n}\n/* Chat */\n.chat-activity-list .chat-element {\n    border-bottom: 1px solid #e7eaec;\n}\n.chat-element:first-child {\n    margin-top: 0;\n}\n.chat-element {\n    padding-bottom: 15px;\n}\n.chat-element,\n.chat-element .media {\n    margin-top: 15px;\n}\n.chat-element,\n.media-body {\n    overflow: hidden;\n}\n.media-body {\n    display: block;\n    width: auto;\n}\n.chat-element > .pull-left {\n    margin-right: 10px;\n}\n.chat-element img.img-circle,\n.dropdown-messages-box img.img-circle {\n    width: 38px;\n    height: 38px;\n}\n.chat-element .well {\n    border: 1px solid #e7eaec;\n    box-shadow: none;\n    margin-top: 10px;\n    margin-bottom: 5px;\n    padding: 10px 20px;\n    font-size: 11px;\n    line-height: 16px;\n}\n.chat-element .actions {\n    margin-top: 10px;\n}\n.chat-element .photos {\n    margin: 10px 0;\n}\n.right.chat-element > .pull-right {\n    margin-left: 10px;\n}\n.chat-photo {\n    max-height: 180px;\n    border-radius: 4px;\n    overflow: hidden;\n    margin-right: 10px;\n    margin-bottom: 10px;\n}\n.chat {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.chat li {\n    margin-bottom: 10px;\n    padding-bottom: 5px;\n    border-bottom: 1px dotted #B3A9A9;\n}\n.chat li.left .chat-body {\n    margin-left: 60px;\n}\n.chat li.right .chat-body {\n    margin-right: 60px;\n}\n.chat li .chat-body p {\n    margin: 0;\n    color: #777777;\n}\n.panel .slidedown .glyphicon,\n.chat .glyphicon {\n    margin-right: 5px;\n}\n.chat-panel .panel-body {\n    height: 350px;\n    overflow-y: scroll;\n}\n/* LIST GROUP */\na.list-group-item.active,\na.list-group-item.active:hover,\na.list-group-item.active:focus {\n    background-color: #1ab394;\n    border-color: #1ab394;\n    color: #FFFFFF;\n    z-index: 2;\n}\n.list-group-item-heading {\n    margin-top: 10px;\n}\n.list-group-item-text {\n    margin: 0 0 10px;\n    color: inherit;\n    font-size: 12px;\n    line-height: inherit;\n}\n.no-padding .list-group-item {\n    border-left: none;\n    border-right: none;\n    border-bottom: none;\n}\n.no-padding .list-group-item:first-child {\n    border-left: none;\n    border-right: none;\n    border-bottom: none;\n    border-top: none;\n}\n.no-padding .list-group {\n    margin-bottom: 0;\n}\n.list-group-item {\n    background-color: inherit;\n    border: 1px solid #e7eaec;\n    display: block;\n    margin-bottom: -1px;\n    padding: 10px 15px;\n    position: relative;\n}\n.elements-list .list-group-item {\n    border-left: none;\n    border-right: none;\n    /*border-top: none;*/\n    padding: 15px 25px;\n}\n.elements-list .list-group-item:first-child {\n    border-left: none;\n    border-right: none;\n    border-top: none !important;\n}\n.elements-list .list-group {\n    margin-bottom: 0;\n}\n.elements-list a {\n    color: inherit;\n}\n.elements-list .list-group-item.active,\n.elements-list .list-group-item:hover {\n    background: #f3f3f4;\n    color: inherit;\n    border-color: #e7eaec;\n    /*border-bottom: 1px solid #e7eaec;*/\n    /*border-top: 1px solid #e7eaec;*/\n    border-radius: 0;\n}\n.elements-list li.active {\n    -webkit-transition: none;\n            transition: none;\n}\n.element-detail-box {\n    padding: 25px;\n}\n/* FLOT CHART  */\n.flot-chart {\n    display: block;\n    height: 200px;\n}\n.widget .flot-chart.dashboard-chart {\n    display: block;\n    height: 120px;\n    margin-top: 40px;\n}\n.flot-chart.dashboard-chart {\n    display: block;\n    height: 180px;\n    margin-top: 40px;\n}\n.flot-chart-content {\n    width: 100%;\n    height: 100%;\n}\n.flot-chart-pie-content {\n    width: 200px;\n    height: 200px;\n    margin: auto;\n}\n.jqstooltip {\n    position: absolute;\n    display: block;\n    left: 0px;\n    top: 0px;\n    visibility: hidden;\n    background: #2b303a;\n    background-color: #2B303A;\n    background-color: rgba(43, 48, 58, 0.8);\n    color: white;\n    text-align: left;\n    white-space: nowrap;\n    z-index: 10000;\n    padding: 5px 5px 5px 5px;\n    min-height: 22px;\n    border-radius: 3px;\n}\n.jqsfield {\n    color: white;\n    text-align: left;\n}\n.h-200 {\n    min-height: 200px;\n}\n.legendLabel {\n    padding-left: 5px;\n}\n.stat-list li:first-child {\n    margin-top: 0;\n}\n.stat-list {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n.stat-percent {\n    float: right;\n}\n.stat-list li {\n    margin-top: 15px;\n    position: relative;\n}\n/* DATATABLES */\ntable.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc:after,\ntable.dataTable thead .sorting_desc,\ntable.dataTable thead .sorting_asc_disabled,\ntable.dataTable thead .sorting_desc_disabled {\n    background: transparent;\n}\ntable.dataTable thead .sorting_asc:after {\n    float: right;\n    font-family: fontawesome;\n}\ntable.dataTable thead .sorting_desc:after {\n    content: \"\\F0DD\";\n    float: right;\n    font-family: fontawesome;\n}\ntable.dataTable thead .sorting:after {\n    content: \"\\F0DC\";\n    float: right;\n    font-family: fontawesome;\n    color: #323232;\n    color: rgba(50, 50, 50, 0.5);\n}\n.dataTables_wrapper {\n    padding-bottom: 30px;\n}\n/* CIRCLE */\n.img-circle {\n    border-radius: 50%;\n}\n.btn-circle {\n    width: 30px;\n    height: 30px;\n    padding: 6px 0;\n    border-radius: 15px;\n    text-align: center;\n    font-size: 12px;\n    line-height: 1.428571429;\n}\n.btn-circle.btn-lg {\n    width: 50px;\n    height: 50px;\n    padding: 10px 16px;\n    border-radius: 25px;\n    font-size: 18px;\n    line-height: 1.33;\n}\n.btn-circle.btn-xl {\n    width: 70px;\n    height: 70px;\n    padding: 10px 16px;\n    border-radius: 35px;\n    font-size: 24px;\n    line-height: 1.33;\n}\n.show-grid [class^=\"col-\"] {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border: 1px solid #ddd;\n    background-color: #eee !important;\n}\n.show-grid {\n    margin: 15px 0;\n}\n/* ANIMATION */\n.css-animation-box h1 {\n    font-size: 44px;\n}\n.animation-efect-links a {\n    padding: 4px 6px;\n    font-size: 12px;\n}\n#animation_box {\n    background-color: #f9f8f8;\n    border-radius: 16px;\n    width: 80%;\n    margin: 0 auto;\n    padding-top: 80px;\n}\n.animation-text-box {\n    position: absolute;\n    margin-top: 40px;\n    left: 50%;\n    margin-left: -100px;\n    width: 200px;\n}\n.animation-text-info {\n    position: absolute;\n    margin-top: -60px;\n    left: 50%;\n    margin-left: -100px;\n    width: 200px;\n    font-size: 10px;\n}\n.animation-text-box h2 {\n    font-size: 54px;\n    font-weight: 600;\n    margin-bottom: 5px;\n}\n.animation-text-box p {\n    font-size: 12px;\n    text-transform: uppercase;\n}\n/* PEACE */\n.pace {\n    -webkit-pointer-events: none;\n    pointer-events: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n}\n.pace-inactive {\n    display: none;\n}\n.pace .pace-progress {\n    background: #1ab394;\n    position: fixed;\n    z-index: 2000;\n    top: 0;\n    right: 100%;\n    width: 100%;\n    height: 2px;\n}\n.pace-inactive {\n    display: none;\n}\n/* WIDGETS */\n.widget {\n    border-radius: 5px;\n    padding: 15px 20px;\n    margin-bottom: 10px;\n    margin-top: 10px;\n}\n.widget.style1 h2 {\n    font-size: 30px;\n}\n.widget h2,\n.widget h3 {\n    margin-top: 5px;\n    margin-bottom: 0;\n}\n.widget-text-box {\n    padding: 20px;\n    border: 1px solid #e7eaec;\n    background: #ffffff;\n}\n.widget-head-color-box {\n    border-radius: 5px 5px 0px 0px;\n    margin-top: 10px;\n}\n.widget .flot-chart {\n    height: 100px;\n}\n.vertical-align div {\n    display: inline-block;\n    vertical-align: middle;\n}\n.vertical-align h2,\n.vertical-align h3 {\n    margin: 0;\n}\n.todo-list {\n    list-style: none outside none;\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n}\n.todo-list.small-list {\n    font-size: 12px;\n}\n.todo-list.small-list > li {\n    background: #f3f3f4;\n    border-left: none;\n    border-right: none;\n    border-radius: 4px;\n    color: inherit;\n    margin-bottom: 2px;\n    padding: 6px 6px 6px 12px;\n}\n.todo-list.small-list .btn-xs,\n.todo-list.small-list .btn-group-xs > .btn {\n    border-radius: 5px;\n    font-size: 10px;\n    line-height: 1.5;\n    padding: 1px 2px 1px 5px;\n}\n.todo-list > li {\n    background: #f3f3f4;\n    border-left: 6px solid #e7eaec;\n    border-right: 6px solid #e7eaec;\n    border-radius: 4px;\n    color: inherit;\n    margin-bottom: 2px;\n    padding: 10px;\n}\n.todo-list .handle {\n    cursor: move;\n    display: inline-block;\n    font-size: 16px;\n    margin: 0 5px;\n}\n.todo-list > li .label {\n    font-size: 9px;\n    margin-left: 10px;\n}\n.check-link {\n    font-size: 16px;\n}\n.todo-completed {\n    text-decoration: line-through;\n}\n.geo-statistic h1 {\n    font-size: 36px;\n    margin-bottom: 0;\n}\n.glyphicon.fa {\n    font-family: \"FontAwesome\";\n}\n/* INPUTS */\n.inline {\n    display: inline-block !important;\n}\n.input-s-sm {\n    width: 120px;\n}\n.input-s {\n    width: 200px;\n}\n.input-s-lg {\n    width: 250px;\n}\n.i-checks {\n    padding-left: 0;\n}\n.form-control,\n.single-line {\n    background-color: #FFFFFF;\n    background-image: none;\n    border: 1px solid #e5e6e7;\n    border-radius: 1px;\n    color: inherit;\n    display: block;\n    padding: 6px 12px;\n    -webkit-transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n            transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n    width: 100%;\n    font-size: 14px;\n}\n.form-control:focus,\n.single-line:focus {\n    border-color: #1ab394 !important;\n}\n.has-success .form-control {\n    border-color: #1ab394;\n}\n.has-warning .form-control {\n    border-color: #f8ac59;\n}\n.has-error .form-control {\n    border-color: #ed5565;\n}\n.has-success .control-label {\n    color: #1ab394;\n}\n.has-warning .control-label {\n    color: #f8ac59;\n}\n.has-error .control-label {\n    color: #ed5565;\n}\n.input-group-addon {\n    background-color: #fff;\n    border: 1px solid #E5E6E7;\n    border-radius: 1px;\n    color: inherit;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1;\n    padding: 6px 12px;\n    text-align: center;\n}\n.spinner-buttons.input-group-btn .btn-xs {\n    line-height: 1.13;\n}\n.spinner-buttons.input-group-btn {\n    width: 20%;\n}\n.noUi-connect {\n    background: none repeat scroll 0 0 #1ab394;\n    box-shadow: none;\n}\n.slider_red .noUi-connect {\n    background: none repeat scroll 0 0 #ed5565;\n    box-shadow: none;\n}\n/* UI Sortable */\n.ui-sortable .ibox-title {\n    cursor: move;\n}\n.ui-sortable-placeholder {\n    border: 1px dashed #cecece !important;\n    visibility: visible !important;\n    background: #e7eaec;\n}\n.ibox.ui-sortable-placeholder {\n    margin: 0px 0px 23px !important;\n}\n/* SWITCHES */\n.onoffswitch {\n    position: relative;\n    width: 54px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n.onoffswitch-checkbox {\n    display: none;\n}\n.onoffswitch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border: 2px solid #1AB394;\n    border-radius: 3px;\n}\n.onoffswitch-inner {\n    display: block;\n    width: 200%;\n    margin-left: -100%;\n    -webkit-transition: margin 0.3s ease-in 0s;\n    transition: margin 0.3s ease-in 0s;\n}\n.onoffswitch-inner:before,\n.onoffswitch-inner:after {\n    display: block;\n    float: left;\n    width: 50%;\n    height: 16px;\n    padding: 0;\n    line-height: 16px;\n    font-size: 10px;\n    color: white;\n    font-family: Trebuchet, Arial, sans-serif;\n    font-weight: bold;\n    box-sizing: border-box;\n}\n.onoffswitch-inner:before {\n    content: \"ON\";\n    padding-left: 7px;\n    background-color: #1AB394;\n    color: #FFFFFF;\n}\n.onoffswitch-inner:after {\n    content: \"OFF\";\n    padding-right: 7px;\n    background-color: #FFFFFF;\n    color: #919191;\n    text-align: right;\n}\n.onoffswitch-switch {\n    display: block;\n    width: 18px;\n    margin: 0px;\n    background: #FFFFFF;\n    border: 2px solid #1AB394;\n    border-radius: 3px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 36px;\n    -webkit-transition: all 0.3s ease-in 0s;\n    transition: all 0.3s ease-in 0s;\n}\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\n    margin-left: 0;\n}\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\n    right: 0px;\n}\n/* jqGrid */\n.ui-jqgrid {\n    -moz-box-sizing: content-box;\n}\n.ui-jqgrid-btable {\n    border-collapse: separate;\n}\n.ui-jqgrid-htable {\n    border-collapse: separate;\n}\n.ui-jqgrid-titlebar {\n    height: 40px;\n    line-height: 15px;\n    color: #676a6c;\n    background-color: #F9F9F9;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n}\n.ui-jqgrid .ui-jqgrid-title {\n    float: left;\n    margin: 1.1em 1em 0.2em;\n}\n.ui-jqgrid .ui-jqgrid-titlebar {\n    position: relative;\n    border-left: 0px solid;\n    border-right: 0px solid;\n    border-top: 0px solid;\n}\n.ui-widget-header {\n    background: none;\n    background-image: none;\n    background-color: #f5f5f6;\n    text-transform: uppercase;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n.ui-jqgrid tr.ui-row-ltr td {\n    border-right-color: inherit;\n    border-right-style: solid;\n    border-right-width: 1px;\n    text-align: left;\n    border-color: #DDDDDD;\n    background-color: inherit;\n}\n.ui-search-toolbar input[type=\"text\"] {\n    font-size: 12px;\n    height: 15px;\n    border: 1px solid #CCCCCC;\n    border-radius: 0px;\n}\n.ui-state-default,\n.ui-widget-content .ui-state-default,\n.ui-widget-header .ui-state-default {\n    background: #F9F9F9;\n    border: 1px solid #DDDDDD;\n    line-height: 15px;\n    font-weight: bold;\n    color: #676a6c;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n}\n.ui-widget-content {\n    box-sizing: content-box;\n}\n.ui-icon-triangle-1-n {\n    background-position: 1px -16px;\n}\n.ui-jqgrid tr.ui-search-toolbar th {\n    border-top-width: 0px !important;\n    border-top-color: inherit !important;\n    border-top-style: ridge !important;\n}\n.ui-state-hover,\n.ui-widget-content .ui-state-hover,\n.ui-state-focus,\n.ui-widget-content .ui-state-focus,\n.ui-widget-header .ui-state-focus {\n    background: #f5f5f5;\n    border-collapse: separate;\n}\n.ui-state-highlight,\n.ui-widget-content .ui-state-highlight,\n.ui-widget-header .ui-state-highlight {\n    background: #f2fbff;\n}\n.ui-state-active,\n.ui-widget-content .ui-state-active,\n.ui-widget-header .ui-state-active {\n    border: 1px solid #dddddd;\n    background: #ffffff;\n    font-weight: normal;\n    color: #212121;\n}\n.ui-jqgrid .ui-pg-input {\n    font-size: inherit;\n    width: 50px;\n    border: 1px solid #CCCCCC;\n    height: 15px;\n}\n.ui-jqgrid .ui-pg-selbox {\n    display: block;\n    font-size: 1em;\n    height: 25px;\n    line-height: 18px;\n    margin: 0;\n    width: auto;\n}\n.ui-jqgrid .ui-pager-control {\n    position: relative;\n}\n.ui-jqgrid .ui-jqgrid-pager {\n    height: 32px;\n    position: relative;\n}\n.ui-pg-table .navtable .ui-corner-all {\n    border-radius: 0px;\n}\n.ui-jqgrid .ui-pg-button:hover {\n    padding: 1px;\n    border: 0px;\n}\n.ui-jqgrid .loading {\n    position: absolute;\n    top: 45%;\n    left: 45%;\n    width: auto;\n    height: auto;\n    z-index: 101;\n    padding: 6px;\n    margin: 5px;\n    text-align: center;\n    font-weight: bold;\n    display: none;\n    border-width: 2px !important;\n    font-size: 11px;\n}\n.ui-jqgrid .form-control {\n    height: 10px;\n    width: auto;\n    display: inline;\n    padding: 10px 12px;\n}\n.ui-jqgrid-pager {\n    height: 32px;\n}\n.ui-corner-all,\n.ui-corner-top,\n.ui-corner-left,\n.ui-corner-tl {\n    border-top-left-radius: 0;\n}\n.ui-corner-all,\n.ui-corner-top,\n.ui-corner-right,\n.ui-corner-tr {\n    border-top-right-radius: 0;\n}\n.ui-corner-all,\n.ui-corner-bottom,\n.ui-corner-left,\n.ui-corner-bl {\n    border-bottom-left-radius: 0;\n}\n.ui-corner-all,\n.ui-corner-bottom,\n.ui-corner-right,\n.ui-corner-br {\n    border-bottom-right-radius: 0;\n}\n.ui-widget-content {\n    border: 1px solid #ddd;\n}\n.ui-jqgrid .ui-jqgrid-titlebar {\n    padding: 0;\n}\n.ui-jqgrid .ui-jqgrid-titlebar {\n    border-bottom: 1px solid #ddd;\n}\n.ui-jqgrid tr.jqgrow td {\n    padding: 6px;\n}\n.ui-jqdialog .ui-jqdialog-titlebar {\n    padding: 10px 10px;\n}\n.ui-jqdialog .ui-jqdialog-title {\n    float: none !important;\n}\n.ui-jqdialog > .ui-resizable-se {\n    position: absolute;\n}\n/* Nestable list */\n.dd {\n    position: relative;\n    display: block;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    font-size: 13px;\n    line-height: 20px;\n}\n.dd-list {\n    display: block;\n    position: relative;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.dd-list .dd-list {\n    padding-left: 30px;\n}\n.dd-collapsed .dd-list {\n    display: none;\n}\n.dd-item,\n.dd-empty,\n.dd-placeholder {\n    display: block;\n    position: relative;\n    margin: 0;\n    padding: 0;\n    min-height: 20px;\n    font-size: 13px;\n    line-height: 20px;\n}\n.dd-handle {\n    display: block;\n    margin: 5px 0;\n    padding: 5px 10px;\n    color: #333;\n    text-decoration: none;\n    border: 1px solid #e7eaec;\n    background: #f5f5f5;\n    border-radius: 3px;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n}\n.dd-handle span {\n    font-weight: bold;\n}\n.dd-handle:hover {\n    background: #f0f0f0;\n    cursor: pointer;\n    font-weight: bold;\n}\n.dd-item > button {\n    display: block;\n    position: relative;\n    cursor: pointer;\n    float: left;\n    width: 25px;\n    height: 20px;\n    margin: 5px 0;\n    padding: 0;\n    text-indent: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    border: 0;\n    background: transparent;\n    font-size: 12px;\n    line-height: 1;\n    text-align: center;\n    font-weight: bold;\n}\n.dd-item > button:before {\n    content: '+';\n    display: block;\n    position: absolute;\n    width: 100%;\n    text-align: center;\n    text-indent: 0;\n}\n.dd-item > button[data-action=\"collapse\"]:before {\n    content: '-';\n}\n#nestable2 .dd-item > button {\n    font-family: FontAwesome;\n    height: 34px;\n    width: 33px;\n    color: #c1c1c1;\n}\n#nestable2 .dd-item > button:before {\n    content: \"\\F067\";\n}\n#nestable2 .dd-item > button[data-action=\"collapse\"]:before {\n    content: \"\\F068\";\n}\n.dd-placeholder,\n.dd-empty {\n    margin: 5px 0;\n    padding: 0;\n    min-height: 30px;\n    background: #f2fbff;\n    border: 1px dashed #b6bcbf;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n}\n.dd-empty {\n    border: 1px dashed #bbb;\n    min-height: 100px;\n    background-color: #e5e5e5;\n    background-image: -webkit-linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff), -webkit-linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff);\n    background-image: linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff), linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff);\n    background-size: 60px 60px;\n    background-position: 0 0, 30px 30px;\n}\n.dd-dragel {\n    position: absolute;\n    z-index: 9999;\n    pointer-events: none;\n}\n.dd-dragel > .dd-item .dd-handle {\n    margin-top: 0;\n}\n.dd-dragel .dd-handle {\n    box-shadow: 2px 4px 6px 0 rgba(0, 0, 0, 0.1);\n}\n/**\n* Nestable Extras\n*/\n.nestable-lists {\n    display: block;\n    clear: both;\n    padding: 30px 0;\n    width: 100%;\n    border: 0;\n    border-top: 2px solid #ddd;\n    border-bottom: 2px solid #ddd;\n}\n#nestable-menu {\n    padding: 0;\n    margin: 10px 0 20px 0;\n}\n#nestable-output,\n#nestable2-output {\n    width: 100%;\n    font-size: 0.75em;\n    line-height: 1.333333em;\n    font-family: open sans, lucida grande, lucida sans unicode, helvetica, arial, sans-serif;\n    padding: 5px;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n}\n#nestable2 .dd-handle {\n    color: inherit;\n    border: 1px dashed #e7eaec;\n    background: #f3f3f4;\n    padding: 10px;\n}\n#nestable2 .dd-handle:hover {\n    /*background: #bbb;*/\n}\n#nestable2 span.label {\n    margin-right: 10px;\n}\n#nestable-output,\n#nestable2-output {\n    font-size: 12px;\n    padding: 25px;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n}\n/* CodeMirror */\n.CodeMirror {\n    border: 1px solid #eee;\n    height: auto;\n}\n.CodeMirror-scroll {\n    overflow-y: hidden;\n    overflow-x: auto;\n}\n/* Google Maps */\n.google-map {\n    height: 300px;\n}\n/* Validation */\nlabel.error {\n    color: #cc5965;\n    display: inline-block;\n    margin-left: 5px;\n}\n.form-control.error {\n    border: 1px dotted #cc5965;\n}\n/* ngGrid */\n.gridStyle {\n    border: 1px solid #d4d4d4;\n    width: 100%;\n    height: 400px;\n}\n.gridStyle2 {\n    border: 1px solid #d4d4d4;\n    width: 500px;\n    height: 300px;\n}\n.ngH eaderCell {\n    border-right: none;\n    border-bottom: 1px solid #e7eaec;\n}\n.ngCell {\n    border-right: none;\n}\n.ngTopPanel {\n    background: #F5F5F6;\n}\n.ngRow.even {\n    background: #f9f9f9;\n}\n.ngRow.selected {\n    background: #EBF2F1;\n}\n.ngRow {\n    border-bottom: 1px solid #e7eaec;\n}\n.ngCell {\n    background-color: transparent;\n}\n.ngHeaderCell {\n    border-right: none;\n}\n/* Toastr custom style */\n#toast-container > .toast {\n    background-image: none !important;\n}\n#toast-container > .toast:before {\n    position: fixed;\n    font-family: FontAwesome;\n    font-size: 24px;\n    line-height: 24px;\n    float: left;\n    color: #FFF;\n    padding-right: 0.5em;\n    margin: auto 0.5em auto -1.5em;\n}\n#toast-container > .toast-warning:before {\n    content: \"\\F0E7\";\n}\n#toast-container > .toast-error:before {\n    content: \"\\F071\";\n}\n#toast-container > .toast-info:before {\n    content: \"\\F005\";\n}\n#toast-container > .toast-success:before {\n    content: \"\\F00C\";\n}\n#toast-container > div {\n    box-shadow: 0 0 3px #999;\n    opacity: .9;\n    -ms-filter: alpha(opacity=90);\n    filter: alpha(opacity=90);\n}\n#toast-container > :hover {\n    box-shadow: 0 0 4px #999;\n    opacity: 1;\n    -ms-filter: alpha(opacity=100);\n    filter: alpha(opacity=100);\n    cursor: pointer;\n}\n.toast {\n    background-color: #1ab394;\n}\n.toast-success {\n    background-color: #1ab394;\n}\n.toast-error {\n    background-color: #ed5565;\n}\n.toast-info {\n    background-color: #23c6c8;\n}\n.toast-warning {\n    background-color: #f8ac59;\n}\n.toast-top-full-width {\n    margin-top: 20px;\n}\n.toast-bottom-full-width {\n    margin-bottom: 20px;\n}\n/* Notifie */\n.cg-notify-message.inspinia-notify {\n    background: #fff;\n    padding: 0;\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2);\n    -webkit-box-shadow: 0 0 1 px rgba(0, 0, 0, 0.1), 0 2 px 4 px rgba(0, 0, 0, 0.2);\n    -moz-box-shadow: 0 0 1 px rgba(0, 0, 0, 0.1), 0 2 px 4 px rgba(0, 0, 0, 0.2);\n    border: none ;\n    margin-top: 30px;\n    color: inherit;\n}\n.inspinia-notify.alert-warning {\n    border-left: 6px solid #f8ac59;\n}\n.inspinia-notify.alert-success {\n    border-left: 6px solid #1c84c6;\n}\n.inspinia-notify.alert-danger {\n    border-left: 6px solid #ed5565;\n}\n.inspinia-notify.alert-info {\n    border-left: 6px solid #1ab394;\n}\n/* Image cropper style */\n.img-container,\n.img-preview {\n    overflow: hidden;\n    text-align: center;\n    width: 100%;\n}\n.img-preview-sm {\n    height: 130px;\n    width: 200px;\n}\n/* Forum styles  */\n.forum-post-container .media {\n    margin: 10px 10px 10px 10px;\n    padding: 20px 10px 20px 10px;\n    border-bottom: 1px solid #f1f1f1;\n}\n.forum-avatar {\n    float: left;\n    margin-right: 20px;\n    text-align: center;\n    width: 110px;\n}\n.forum-avatar .img-circle {\n    height: 48px;\n    width: 48px;\n}\n.author-info {\n    color: #676a6c;\n    font-size: 11px;\n    margin-top: 5px;\n    text-align: center;\n}\n.forum-post-info {\n    padding: 9px 12px 6px 12px;\n    background: #f9f9f9;\n    border: 1px solid #f1f1f1;\n}\n.media-body > .media {\n    background: #f9f9f9;\n    border-radius: 3px;\n    border: 1px solid #f1f1f1;\n}\n.forum-post-container .media-body .photos {\n    margin: 10px 0;\n}\n.forum-photo {\n    max-width: 140px;\n    border-radius: 3px;\n}\n.media-body > .media .forum-avatar {\n    width: 70px;\n    margin-right: 10px;\n}\n.media-body > .media .forum-avatar .img-circle {\n    height: 38px;\n    width: 38px;\n}\n.mid-icon {\n    font-size: 66px;\n}\n.forum-item {\n    margin: 10px 0;\n    padding: 10px 0 20px;\n    border-bottom: 1px solid #f1f1f1;\n}\n.views-number {\n    font-size: 24px;\n    line-height: 18px;\n    font-weight: 400;\n}\n.forum-container,\n.forum-post-container {\n    padding: 30px !important;\n}\n.forum-item small {\n    color: #999;\n}\n.forum-item .forum-sub-title {\n    color: #999;\n    margin-left: 50px;\n}\n.forum-title {\n    margin: 15px 0 15px 0;\n}\n.forum-info {\n    text-align: center;\n}\n.forum-desc {\n    color: #999;\n}\n.forum-icon {\n    float: left;\n    width: 30px;\n    margin-right: 20px;\n    text-align: center;\n}\na.forum-item-title {\n    color: inherit;\n    display: block;\n    font-size: 18px;\n    font-weight: 600;\n}\na.forum-item-title:hover {\n    color: inherit;\n}\n.forum-icon .fa {\n    font-size: 30px;\n    margin-top: 8px;\n    color: #9b9b9b;\n}\n.forum-item.active .fa {\n    color: #1ab394;\n}\n.forum-item.active a.forum-item-title {\n    color: #1ab394;\n}\n@media (max-width: 992px) {\n    .forum-info {\n        margin: 15px 0 10px 0px;\n        /* Comment this is you want to show forum info in small devices */\n        display: none;\n    }\n    .forum-desc {\n        float: none !important;\n    }\n}\n/* New Timeline style */\n.vertical-container {\n    /* this class is used to give a max-width to the element it is applied to, and center it horizontally when it reaches that max-width */\n    width: 90%;\n    max-width: 1170px;\n    margin: 0 auto;\n}\n.vertical-container:after {\n    /* clearfix */\n    content: '';\n    display: table;\n    clear: both;\n}\n#vertical-timeline {\n    position: relative;\n    padding: 0;\n    margin-top: 2em;\n    margin-bottom: 2em;\n}\n#vertical-timeline:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 18px;\n    height: 100%;\n    width: 4px;\n    background: #f1f1f1;\n}\n.vertical-timeline-content .btn {\n    float: right;\n}\n#vertical-timeline.light-timeline:before {\n    background: #e7eaec;\n}\n.dark-timeline .vertical-timeline-content:before {\n    border-color: transparent #f5f5f5 transparent transparent ;\n}\n.dark-timeline.center-orientation .vertical-timeline-content:before {\n    border-color: transparent  transparent transparent #f5f5f5;\n}\n.dark-timeline .vertical-timeline-block:nth-child(2n) .vertical-timeline-content:before,\n.dark-timeline.center-orientation .vertical-timeline-block:nth-child(2n) .vertical-timeline-content:before {\n    border-color: transparent #f5f5f5 transparent transparent;\n}\n.dark-timeline .vertical-timeline-content,\n.dark-timeline.center-orientation .vertical-timeline-content {\n    background: #f5f5f5;\n}\n@media only screen and (min-width: 1170px) {\n    #vertical-timeline.center-orientation {\n        margin-top: 3em;\n        margin-bottom: 3em;\n    }\n    #vertical-timeline.center-orientation:before {\n        left: 50%;\n        margin-left: -2px;\n    }\n}\n@media only screen and (max-width: 1170px) {\n    .center-orientation.dark-timeline .vertical-timeline-content:before {\n        border-color: transparent #f5f5f5 transparent transparent;\n    }\n}\n.vertical-timeline-block {\n    position: relative;\n    margin: 2em 0;\n}\n.vertical-timeline-block:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.vertical-timeline-block:first-child {\n    margin-top: 0;\n}\n.vertical-timeline-block:last-child {\n    margin-bottom: 0;\n}\n@media only screen and (min-width: 1170px) {\n    .center-orientation .vertical-timeline-block {\n        margin: 4em 0;\n    }\n    .center-orientation .vertical-timeline-block:first-child {\n        margin-top: 0;\n    }\n    .center-orientation .vertical-timeline-block:last-child {\n        margin-bottom: 0;\n    }\n}\n.vertical-timeline-icon {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    font-size: 16px;\n    border: 3px solid #f1f1f1;\n    text-align: center;\n}\n.vertical-timeline-icon i {\n    display: block;\n    width: 24px;\n    height: 24px;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    margin-left: -12px;\n    margin-top: -9px;\n}\n@media only screen and (min-width: 1170px) {\n    .center-orientation .vertical-timeline-icon {\n        width: 50px;\n        height: 50px;\n        left: 50%;\n        margin-left: -25px;\n        -webkit-transform: translateZ(0);\n        -webkit-backface-visibility: hidden;\n        font-size: 19px;\n    }\n    .center-orientation .vertical-timeline-icon i {\n        margin-left: -12px;\n        margin-top: -10px;\n    }\n    .center-orientation .cssanimations .vertical-timeline-icon.is-hidden {\n        visibility: hidden;\n    }\n}\n.vertical-timeline-content {\n    position: relative;\n    margin-left: 60px;\n    background: white;\n    border-radius: 0.25em;\n    padding: 1em;\n}\n.vertical-timeline-content:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.vertical-timeline-content h2 {\n    font-weight: 400;\n    margin-top: 4px;\n}\n.vertical-timeline-content p {\n    margin: 1em 0;\n    line-height: 1.6;\n}\n.vertical-timeline-content .vertical-date {\n    float: left;\n    font-weight: 500;\n}\n.vertical-date small {\n    color: #1ab394;\n    font-weight: 400;\n}\n.vertical-timeline-content:before {\n    content: '';\n    position: absolute;\n    top: 16px;\n    right: 100%;\n    height: 0;\n    width: 0;\n    border: 7px solid transparent;\n    border-right: 7px solid white;\n}\n@media only screen and (min-width: 768px) {\n    .vertical-timeline-content h2 {\n        font-size: 18px;\n    }\n    .vertical-timeline-content p {\n        font-size: 13px;\n    }\n}\n@media only screen and (min-width: 1170px) {\n    .center-orientation .vertical-timeline-content {\n        margin-left: 0;\n        padding: 1.6em;\n        width: 45%;\n    }\n    .center-orientation .vertical-timeline-content:before {\n        top: 24px;\n        left: 100%;\n        border-color: transparent;\n        border-left-color: white;\n    }\n    .center-orientation .vertical-timeline-content .btn {\n        float: left;\n    }\n    .center-orientation .vertical-timeline-content .vertical-date {\n        position: absolute;\n        width: 100%;\n        left: 122%;\n        top: 2px;\n        font-size: 14px;\n    }\n    .center-orientation .vertical-timeline-block:nth-child(even) .vertical-timeline-content {\n        float: right;\n    }\n    .center-orientation .vertical-timeline-block:nth-child(even) .vertical-timeline-content:before {\n        top: 24px;\n        left: auto;\n        right: 100%;\n        border-color: transparent;\n        border-right-color: white;\n    }\n    .center-orientation .vertical-timeline-block:nth-child(even) .vertical-timeline-content .btn {\n        float: right;\n    }\n    .center-orientation .vertical-timeline-block:nth-child(even) .vertical-timeline-content .vertical-date {\n        left: auto;\n        right: 122%;\n        text-align: right;\n    }\n    .center-orientation .cssanimations .vertical-timeline-content.is-hidden {\n        visibility: hidden;\n    }\n}\n/* Tabs */\n.tabs-container .panel-body {\n    background: #fff;\n    border: 1px solid #e7eaec;\n    border-radius: 2px;\n    padding: 20px;\n    position: relative;\n}\n.tabs-container .nav-tabs > li.active > a,\n.tabs-container .nav-tabs > li.active > a:hover,\n.tabs-container .nav-tabs > li.active > a:focus {\n    border: 1px solid #e7eaec;\n    border-bottom-color: transparent;\n    background-color: #fff;\n}\n.tabs-container .nav-tabs > li {\n    float: left;\n    margin-bottom: -1px;\n}\n.tabs-container .tab-pane .panel-body {\n    border-top: none;\n}\n.tabs-container .nav-tabs > li.active > a,\n.tabs-container .nav-tabs > li.active > a:hover,\n.tabs-container .nav-tabs > li.active > a:focus {\n    border: 1px solid #e7eaec;\n    border-bottom-color: transparent;\n}\n.tabs-container .nav-tabs {\n    border-bottom: 1px solid #e7eaec;\n}\n.tabs-container .tab-pane .panel-body {\n    border-top: none;\n}\n.tabs-container .tabs-left .tab-pane .panel-body,\n.tabs-container .tabs-right .tab-pane .panel-body {\n    border-top: 1px solid #e7eaec;\n}\n.tabs-container .nav-tabs > li a:hover {\n    background: transparent;\n    border-color: transparent;\n}\n.tabs-container .tabs-below > .nav-tabs,\n.tabs-container .tabs-right > .nav-tabs,\n.tabs-container .tabs-left > .nav-tabs {\n    border-bottom: 0;\n}\n.tabs-container .tabs-left .panel-body {\n    position: static;\n}\n.tabs-container .tabs-left > .nav-tabs,\n.tabs-container .tabs-right > .nav-tabs {\n    width: 20%;\n}\n.tabs-container .tabs-left .panel-body {\n    width: 80%;\n    margin-left: 20%;\n}\n.tabs-container .tabs-right .panel-body {\n    width: 80%;\n    margin-right: 20%;\n}\n.tabs-container .tab-content > .tab-pane,\n.tabs-container .pill-content > .pill-pane {\n    display: none;\n}\n.tabs-container .tab-content > .active,\n.tabs-container .pill-content > .active {\n    display: block;\n}\n.tabs-container .tabs-below > .nav-tabs {\n    border-top: 1px solid #e7eaec;\n}\n.tabs-container .tabs-below > .nav-tabs > li {\n    margin-top: -1px;\n    margin-bottom: 0;\n}\n.tabs-container .tabs-below > .nav-tabs > li > a {\n    border-radius: 0 0 4px 4px;\n}\n.tabs-container .tabs-below > .nav-tabs > li > a:hover,\n.tabs-container .tabs-below > .nav-tabs > li > a:focus {\n    border-top-color: #e7eaec;\n    border-bottom-color: transparent;\n}\n.tabs-container .tabs-left > .nav-tabs > li,\n.tabs-container .tabs-right > .nav-tabs > li {\n    float: none;\n}\n.tabs-container .tabs-left > .nav-tabs > li > a,\n.tabs-container .tabs-right > .nav-tabs > li > a {\n    min-width: 74px;\n    margin-right: 0;\n    margin-bottom: 3px;\n}\n.tabs-container .tabs-left > .nav-tabs {\n    float: left;\n    margin-right: 19px;\n}\n.tabs-container .tabs-left > .nav-tabs > li > a {\n    margin-right: -1px;\n    border-radius: 4px 0 0 4px;\n}\n.tabs-container .tabs-left > .nav-tabs .active > a,\n.tabs-container .tabs-left > .nav-tabs .active > a:hover,\n.tabs-container .tabs-left > .nav-tabs .active > a:focus {\n    border-color: #e7eaec transparent #e7eaec #e7eaec;\n    *border-right-color: #ffffff;\n}\n.tabs-container .tabs-right > .nav-tabs {\n    float: right;\n    margin-left: 19px;\n}\n.tabs-container .tabs-right > .nav-tabs > li > a {\n    margin-left: -1px;\n    border-radius: 0 4px 4px 0;\n}\n.tabs-container .tabs-right > .nav-tabs .active > a,\n.tabs-container .tabs-right > .nav-tabs .active > a:hover,\n.tabs-container .tabs-right > .nav-tabs .active > a:focus {\n    border-color: #e7eaec #e7eaec #e7eaec transparent;\n    *border-left-color: #ffffff;\n    z-index: 1;\n}\n/* jsvectormap */\n.jvectormap-container {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    overflow: hidden;\n}\n.jvectormap-tip {\n    position: absolute;\n    display: none;\n    border: solid 1px #CDCDCD;\n    border-radius: 3px;\n    background: #292929;\n    color: white;\n    font-family: sans-serif, Verdana;\n    font-size: smaller;\n    padding: 5px;\n}\n.jvectormap-zoomin,\n.jvectormap-zoomout,\n.jvectormap-goback {\n    position: absolute;\n    left: 10px;\n    border-radius: 3px;\n    background: #1ab394;\n    padding: 3px;\n    color: white;\n    cursor: pointer;\n    line-height: 10px;\n    text-align: center;\n    box-sizing: content-box;\n}\n.jvectormap-zoomin,\n.jvectormap-zoomout {\n    width: 10px;\n    height: 10px;\n}\n.jvectormap-zoomin {\n    top: 10px;\n}\n.jvectormap-zoomout {\n    top: 30px;\n}\n.jvectormap-goback {\n    bottom: 10px;\n    z-index: 1000;\n    padding: 6px;\n}\n.jvectormap-spinner {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background: center no-repeat url(data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA==);\n}\n.jvectormap-legend-title {\n    font-weight: bold;\n    font-size: 14px;\n    text-align: center;\n}\n.jvectormap-legend-cnt {\n    position: absolute;\n}\n.jvectormap-legend-cnt-h {\n    bottom: 0;\n    right: 0;\n}\n.jvectormap-legend-cnt-v {\n    top: 0;\n    right: 0;\n}\n.jvectormap-legend {\n    background: black;\n    color: white;\n    border-radius: 3px;\n}\n.jvectormap-legend-cnt-h .jvectormap-legend {\n    float: left;\n    margin: 0 10px 10px 0;\n    padding: 3px 3px 1px 3px;\n}\n.jvectormap-legend-cnt-h .jvectormap-legend .jvectormap-legend-tick {\n    float: left;\n}\n.jvectormap-legend-cnt-v .jvectormap-legend {\n    margin: 10px 10px 0 0;\n    padding: 3px;\n}\n.jvectormap-legend-cnt-h .jvectormap-legend-tick {\n    width: 40px;\n}\n.jvectormap-legend-cnt-h .jvectormap-legend-tick-sample {\n    height: 15px;\n}\n.jvectormap-legend-cnt-v .jvectormap-legend-tick-sample {\n    height: 20px;\n    width: 20px;\n    display: inline-block;\n    vertical-align: middle;\n}\n.jvectormap-legend-tick-text {\n    font-size: 12px;\n}\n.jvectormap-legend-cnt-h .jvectormap-legend-tick-text {\n    text-align: center;\n}\n.jvectormap-legend-cnt-v .jvectormap-legend-tick-text {\n    display: inline-block;\n    vertical-align: middle;\n    line-height: 20px;\n    padding-left: 3px;\n}\n.sidebard-panel {\n    width: 220px;\n    background: #ebebed;\n    padding: 10px 20px;\n    position: absolute;\n    right: 0;\n}\n.sidebard-panel .feed-element img.img-circle {\n    width: 32px;\n    height: 32px;\n}\n.sidebard-panel .feed-element,\n.media-body,\n.sidebard-panel p {\n    font-size: 12px;\n}\n.sidebard-panel .feed-element {\n    margin-top: 20px;\n    padding-bottom: 0;\n}\n.sidebard-panel .list-group {\n    margin-bottom: 10px;\n}\n.sidebard-panel .list-group .list-group-item {\n    padding: 5px 0;\n    font-size: 12px;\n    border: 0;\n}\n.sidebar-content .wrapper,\n.wrapper.sidebar-content {\n    padding-right: 230px !important;\n}\n.body-small .sidebar-content .wrapper,\n.body-small .wrapper.sidebar-content {\n    padding-right: 20px !important;\n}\n#right-sidebar {\n    background-color: #fff;\n    border-left: 1px solid #e7eaec;\n    border-top: 1px solid #e7eaec;\n    overflow: hidden;\n    position: fixed;\n    top: 60px;\n    width: 260px !important;\n    z-index: 1009;\n    bottom: 0;\n    right: -260px;\n}\n#right-sidebar.sidebar-open {\n    right: 0;\n}\n#right-sidebar.sidebar-open.sidebar-top {\n    top: 0;\n    border-top: none;\n}\n.sidebar-container ul.nav-tabs {\n    border: none;\n}\n.sidebar-container ul.nav-tabs.navs-4 li {\n    width: 25%;\n}\n.sidebar-container ul.nav-tabs.navs-3 li {\n    width: 33.3333%;\n}\n.sidebar-container ul.nav-tabs.navs-2 li {\n    width: 50%;\n}\n.sidebar-container ul.nav-tabs li {\n    border: none;\n}\n.sidebar-container ul.nav-tabs li a {\n    border: none;\n    padding: 12px 10px;\n    margin: 0;\n    border-radius: 0;\n    background: #2f4050;\n    color: #fff;\n    text-align: center;\n    border-right: 1px solid #334556;\n}\n.sidebar-container ul.nav-tabs li.active a {\n    border: none;\n    background: #f9f9f9;\n    color: #676a6c;\n    font-weight: bold;\n}\n.sidebar-container .nav-tabs > li.active > a:hover,\n.sidebar-container .nav-tabs > li.active > a:focus {\n    border: none;\n}\n.sidebar-container ul.sidebar-list {\n    margin: 0;\n    padding: 0;\n}\n.sidebar-container ul.sidebar-list li {\n    border-bottom: 1px solid #e7eaec;\n    padding: 15px 20px;\n    list-style: none;\n    font-size: 12px;\n}\n.sidebar-container .sidebar-message:nth-child(2n+2) {\n    background: #f9f9f9;\n}\n.sidebar-container ul.sidebar-list li a {\n    text-decoration: none;\n    color: inherit;\n}\n.sidebar-container .sidebar-content {\n    padding: 15px 20px ;\n    font-size: 12px;\n}\n.sidebar-container .sidebar-title {\n    background: #f9f9f9;\n    padding: 20px;\n    border-bottom: 1px solid #e7eaec;\n}\n.sidebar-container .sidebar-title h3 {\n    margin-bottom: 3px;\n    padding-left: 2px;\n}\n.sidebar-container .tab-content h4 {\n    margin-bottom: 5px;\n}\n.sidebar-container .sidebar-message > a > .pull-left {\n    margin-right: 10px;\n}\n.sidebar-container .sidebar-message > a {\n    text-decoration: none;\n    color: inherit;\n}\n.sidebar-container .sidebar-message {\n    padding: 15px 20px;\n}\n.sidebar-container .sidebar-message .message-avatar {\n    height: 38px;\n    width: 38px;\n    border-radius: 50%;\n}\n.sidebar-container .setings-item {\n    padding: 15px 20px;\n    border-bottom: 1px solid #e7eaec;\n}\nbody {\n    font-family: \"open sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    background-color: #ece0ca;\n    font-size: 13px;\n    color: #676a6c;\n    overflow-x: hidden;\n}\nhtml,\nbody {\n    height: 100%;\n}\nbody.full-height-layout #wrapper,\nbody.full-height-layout #page-wrapper {\n    height: 100%;\n}\n#page-wrapper {\n    min-height: auto;\n}\nbody.boxed-layout {\n    background: url(" + __webpack_require__(53) + ");\n}\nbody.boxed-layout #wrapper {\n    background-color: #2f4050;\n    max-width: 1200px;\n    margin: 0 auto;\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);\n}\n.top-navigation.boxed-layout #wrapper,\n.boxed-layout #wrapper.top-navigation {\n    max-width: 1300px !important;\n}\n.block {\n    display: block;\n}\n.clear {\n    display: block;\n    overflow: hidden;\n}\na {\n    cursor: pointer;\n}\na:hover,\na:focus {\n    text-decoration: none;\n}\n.border-bottom {\n    border-bottom: 1px solid #e7eaec !important;\n}\n.font-bold {\n    font-weight: 600;\n}\n.font-noraml {\n    font-weight: 400;\n}\n.text-uppercase {\n    text-transform: uppercase;\n}\n.b-r {\n    border-right: 1px solid #e7eaec;\n}\n.hr-line-dashed {\n    border-top: 1px dashed #e7eaec;\n    color: #ffffff;\n    background-color: #ffffff;\n    height: 1px;\n    margin: 20px 0;\n}\n.hr-line-solid {\n    border-bottom: 1px solid #e7eaec;\n    background-color: rgba(0, 0, 0, 0);\n    border-style: solid !important;\n    margin-top: 15px;\n    margin-bottom: 15px;\n}\nvideo {\n    width: 100%    !important;\n    height: auto   !important;\n}\n/* GALLERY */\n.gallery > .row > div {\n    margin-bottom: 15px;\n}\n.fancybox img {\n    margin-bottom: 5px;\n    /* Only for demo */\n    width: 24%;\n}\n/* Summernote text editor  */\n.note-editor {\n    height: auto;\n    min-height: 300px;\n}\n/* MODAL */\n.modal-content {\n    background-clip: padding-box;\n    background-color: #FFFFFF;\n    border: 1px solid rgba(0, 0, 0, 0);\n    border-radius: 4px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n    outline: 0 none;\n    position: relative;\n}\n.modal-dialog {\n    z-index: 2200;\n}\n.modal-body {\n    padding: 20px 30px 30px 30px;\n}\n.inmodal .modal-body {\n    background: #f8fafb;\n}\n.inmodal .modal-header {\n    padding: 30px 15px;\n    text-align: center;\n}\n.animated.modal.fade .modal-dialog {\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none;\n}\n.inmodal .modal-title {\n    font-size: 26px;\n}\n.inmodal .modal-icon {\n    font-size: 84px;\n    color: #e2e3e3;\n}\n.modal-footer {\n    margin-top: 0;\n}\n/* WRAPPERS */\n#wrapper {\n    width: 100%;\n    overflow-x: hidden;\n}\n.wrapper {\n    padding: 0 20px;\n}\n.wrapper-content {\n    padding: 20px 10px 40px;\n}\n#page-wrapper {\n    padding: 0 15px;\n    min-height: 568px;\n    position: relative !important;\n}\n@media (min-width: 768px) {\n    #page-wrapper {\n        position: inherit;\n        margin: 0 0 0 240px;\n        min-height: 1000px;\n    }\n}\n.title-action {\n    text-align: right;\n    padding-top: 30px;\n}\n.ibox-content h1,\n.ibox-content h2,\n.ibox-content h3,\n.ibox-content h4,\n.ibox-content h5,\n.ibox-title h1,\n.ibox-title h2,\n.ibox-title h3,\n.ibox-title h4,\n.ibox-title h5 {\n    margin-top: 5px;\n}\nul.unstyled,\nol.unstyled {\n    list-style: none outside none;\n    margin-left: 0;\n}\n.big-icon {\n    font-size: 160px;\n    color: #e5e6e7;\n}\n/* FOOTER */\n.footer {\n    background: none repeat scroll 0 0 white;\n    border-top: 1px solid #e7eaec;\n    bottom: 0;\n    left: 0;\n    padding: 10px 20px;\n    position: absolute;\n    right: 0;\n}\n.footer.fixed_full {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 1000;\n    padding: 10px 20px;\n    background: white;\n    border-top: 1px solid #e7eaec;\n}\n.footer.fixed {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 1000;\n    padding: 10px 20px;\n    background: white;\n    border-top: 1px solid #e7eaec;\n    margin-left: 220px;\n}\nbody.mini-navbar .footer.fixed,\nbody.body-small.mini-navbar .footer.fixed {\n    margin: 0 0 0 70px;\n}\nbody.mini-navbar.canvas-menu .footer.fixed,\nbody.canvas-menu .footer.fixed {\n    margin: 0 !important;\n}\nbody.fixed-sidebar.body-small.mini-navbar .footer.fixed {\n    margin: 0 0 0 220px;\n}\nbody.body-small .footer.fixed {\n    margin-left: 0px;\n}\n/* PANELS */\n.page-heading {\n    border-top: 0;\n    padding: 0px 10px 20px 10px;\n}\n.panel-heading h1,\n.panel-heading h2 {\n    margin-bottom: 5px;\n}\n/* TABLES */\n.table-bordered {\n    border: 1px solid #EBEBEB;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n    background-color: #F5F5F6;\n    border-bottom-width: 1px;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n    border: 1px solid #e7e7e7;\n}\n.table > thead > tr > th {\n    border-bottom: 1px solid #DDDDDD;\n    vertical-align: bottom;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n    border-top: 1px solid #e7eaec;\n    line-height: 1.42857;\n    padding: 8px;\n    vertical-align: top;\n}\n/* PANELS */\n.panel.blank-panel {\n    background: none;\n    margin: 0;\n}\n.blank-panel .panel-heading {\n    padding-bottom: 0;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n    -moz-border-bottom-colors: none;\n    -moz-border-left-colors: none;\n    -moz-border-right-colors: none;\n    -moz-border-top-colors: none;\n    background: none;\n    border-color: #dddddd #dddddd rgba(0, 0, 0, 0);\n    border-bottom: #f3f3f4;\n    -webkit-border-image: none;\n         -o-border-image: none;\n            border-image: none;\n    border-style: solid;\n    border-width: 1px;\n    color: #555555;\n    cursor: default;\n}\n.nav.nav-tabs li {\n    background: none;\n    border: none;\n}\n.nav-tabs > li > a {\n    color: #A7B1C2;\n    font-weight: 600;\n    padding: 10px 20px 10px 25px;\n}\n.nav-tabs > li > a:hover,\n.nav-tabs > li > a:focus {\n    background-color: #e6e6e6;\n    color: #676a6c;\n}\n.ui-tab .tab-content {\n    padding: 20px 0px;\n}\n/* GLOBAL  */\n.no-padding {\n    padding: 0 !important;\n}\n.no-borders {\n    border: none !important;\n}\n.no-margins {\n    margin: 0 !important;\n}\n.no-top-border {\n    border-top: 0 !important;\n}\n.ibox-content.text-box {\n    padding-bottom: 0px;\n    padding-top: 15px;\n}\n.border-left-right {\n    border-left: 1px solid #e7eaec;\n    border-right: 1px solid #e7eaec;\n    border-top: none;\n    border-bottom: none;\n}\n.border-left {\n    border-left: 1px solid #e7eaec;\n    border-right: none;\n    border-top: none;\n    border-bottom: none;\n}\n.border-right {\n    border-left: none;\n    border-right: 1px solid #e7eaec;\n    border-top: none;\n    border-bottom: none;\n}\n.full-width {\n    width: 100% !important;\n}\n.link-block {\n    font-size: 12px;\n    padding: 10px;\n}\n.nav.navbar-top-links .link-block a {\n    font-size: 12px;\n}\n.link-block a {\n    font-size: 10px;\n    color: inherit;\n}\nbody.mini-navbar .branding {\n    display: none;\n}\nimg.circle-border {\n    border: 6px solid #FFFFFF;\n    border-radius: 50%;\n}\n.branding {\n    float: left;\n    color: #FFFFFF;\n    font-size: 18px;\n    font-weight: 600;\n    padding: 17px 20px;\n    text-align: center;\n    background-color: #1ab394;\n}\n.login-panel {\n    margin-top: 25%;\n}\n.icons-box h3 {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n.icons-box .infont a i {\n    font-size: 25px;\n    display: block;\n    color: #676a6c;\n}\n.icons-box .infont a {\n    color: #a6a8a9;\n}\n.icons-box .infont a {\n    padding: 10px;\n    margin: 1px;\n    display: block;\n}\n.ui-draggable .ibox-title {\n    cursor: move;\n}\n.breadcrumb {\n    background-color: #ffffff;\n    padding: 0;\n    margin-bottom: 0;\n}\n.breadcrumb > li a {\n    color: inherit;\n}\n.breadcrumb > .active {\n    color: inherit;\n}\ncode {\n    background-color: #F9F2F4;\n    border-radius: 4px;\n    color: #ca4440;\n    font-size: 90%;\n    padding: 2px 4px;\n    white-space: nowrap;\n}\n.ibox {\n    clear: both;\n    margin-bottom: 25px;\n    margin-top: 0;\n    padding: 0;\n}\n.ibox.collapsed .ibox-content {\n    display: none;\n}\n.ibox.collapsed .fa.fa-chevron-up:before {\n    content: \"\\F078\";\n}\n.ibox.collapsed .fa.fa-chevron-down:before {\n    content: \"\\F077\";\n}\n.ibox:after,\n.ibox:before {\n    display: table;\n}\n.ibox-title {\n    -moz-border-bottom-colors: none;\n    -moz-border-left-colors: none;\n    -moz-border-right-colors: none;\n    -moz-border-top-colors: none;\n    background-color: #ffffff;\n    border-color: #e7eaec;\n    -webkit-border-image: none;\n         -o-border-image: none;\n            border-image: none;\n    border-style: solid solid none;\n    border-width: 4px 0px 0;\n    color: inherit;\n    margin-bottom: 0;\n    padding: 14px 15px 7px;\n    min-height: 48px;\n}\n.ibox-content {\n    background-color: #ffffff;\n    color: inherit;\n    padding: 15px 20px 20px 20px;\n    border-color: #e7eaec;\n    -webkit-border-image: none;\n         -o-border-image: none;\n            border-image: none;\n    border-style: solid solid none;\n    border-width: 1px 0px;\n}\n.ibox-footer {\n    color: inherit;\n    border-top: 1px solid #e7eaec;\n    font-size: 90%;\n    background: #ffffff;\n    padding: 10px 15px;\n}\ntable.table-mail tr td {\n    padding: 12px;\n}\n.table-mail .check-mail {\n    padding-left: 20px;\n}\n.table-mail .mail-date {\n    padding-right: 20px;\n}\n.star-mail,\n.check-mail {\n    width: 40px;\n}\n.unread td a,\n.unread td {\n    font-weight: 600;\n    color: inherit;\n}\n.read td a,\n.read td {\n    font-weight: normal;\n    color: inherit;\n}\n.unread td {\n    background-color: #f9f8f8;\n}\n.ibox-content {\n    clear: both;\n}\n.ibox-heading {\n    background-color: #f3f6fb;\n    border-bottom: none;\n}\n.ibox-heading h3 {\n    font-weight: 200;\n    font-size: 24px;\n}\n.ibox-title h5 {\n    display: inline-block;\n    font-size: 14px;\n    margin: 0 0 7px;\n    padding: 0;\n    text-overflow: ellipsis;\n    float: left;\n}\n.ibox-title .label {\n    float: left;\n    margin-left: 4px;\n}\n.ibox-tools {\n    display: inline-block;\n    float: right;\n    margin-top: 0;\n    position: relative;\n    padding: 0;\n}\n.ibox-tools a {\n    cursor: pointer;\n    margin-left: 5px;\n    color: #c4c4c4;\n}\n.ibox-tools a.btn-primary {\n    color: #fff;\n}\n.ibox-tools .dropdown-menu > li > a {\n    padding: 4px 10px;\n    font-size: 12px;\n}\n.ibox .open > .dropdown-menu {\n    left: auto;\n    right: 0;\n}\n/* BACKGROUNDS */\n.gray-bg {\n    background-color: #f3f3f4;\n}\n.white-bg {\n    background-color: #ffffff;\n}\n.navy-bg {\n    background-color: #1ab394;\n    color: #ffffff;\n}\n.blue-bg {\n    background-color: #1c84c6;\n    color: #ffffff;\n}\n.lazur-bg {\n    background-color: #23c6c8;\n    color: #ffffff;\n}\n.yellow-bg {\n    background-color: #f8ac59;\n    color: #ffffff;\n}\n.red-bg {\n    background-color: #ed5565;\n    color: #ffffff;\n}\n.black-bg {\n    background-color: #262626;\n}\n.panel-primary {\n    border-color: #1ab394;\n}\n.panel-primary > .panel-heading {\n    background-color: #1ab394;\n    border-color: #1ab394;\n}\n.panel-success {\n    border-color: #1c84c6;\n}\n.panel-success > .panel-heading {\n    background-color: #1c84c6;\n    border-color: #1c84c6;\n    color: #ffffff;\n}\n.panel-info {\n    border-color: #23c6c8;\n}\n.panel-info > .panel-heading {\n    background-color: #23c6c8;\n    border-color: #23c6c8;\n    color: #ffffff;\n}\n.panel-warning {\n    border-color: #f8ac59;\n}\n.panel-warning > .panel-heading {\n    background-color: #f8ac59;\n    border-color: #f8ac59;\n    color: #ffffff;\n}\n.panel-danger {\n    border-color: #ed5565;\n}\n.panel-danger > .panel-heading {\n    background-color: #ed5565;\n    border-color: #ed5565;\n    color: #ffffff;\n}\n.progress-bar {\n    background-color: #1ab394;\n}\n.progress-small,\n.progress-small .progress-bar {\n    height: 10px;\n}\n.progress-small,\n.progress-mini {\n    margin-top: 5px;\n}\n.progress-mini,\n.progress-mini .progress-bar {\n    height: 5px;\n    margin-bottom: 0px;\n}\n.progress-bar-navy-light {\n    background-color: #3dc7ab;\n}\n.progress-bar-success {\n    background-color: #1c84c6;\n}\n.progress-bar-info {\n    background-color: #23c6c8;\n}\n.progress-bar-warning {\n    background-color: #f8ac59;\n}\n.progress-bar-danger {\n    background-color: #ed5565;\n}\n.panel-title {\n    font-size: inherit;\n}\n.jumbotron {\n    border-radius: 6px;\n    padding: 40px;\n}\n.jumbotron h1 {\n    margin-top: 0;\n}\n/* COLORS */\n.text-navy {\n    color: #1ab394;\n}\n.text-primary {\n    color: inherit;\n}\n.text-success {\n    color: #1c84c6;\n}\n.text-info {\n    color: #23c6c8;\n}\n.text-warning {\n    color: #f8ac59;\n}\n.text-danger {\n    color: #ed5565;\n}\n.text-muted {\n    color: #888888;\n}\n.simple_tag {\n    background-color: #f3f3f4;\n    border: 1px solid #e7eaec;\n    border-radius: 2px;\n    color: inherit;\n    font-size: 10px;\n    margin-right: 5px;\n    margin-top: 5px;\n    padding: 5px 12px;\n    display: inline-block;\n}\n.img-shadow {\n    box-shadow: 0px 0px 3px 0px #919191;\n}\n/* For handle diferent bg color in AngularJS version */\n.dashboards\\.dashboard_2 nav.navbar,\n.dashboards\\.dashboard_3 nav.navbar,\n.mailbox\\.inbox nav.navbar,\n.mailbox\\.email_view nav.navbar,\n.mailbox\\.email_compose nav.navbar,\n.dashboards\\.dashboard_4_1 nav.navbar,\n.metrics nav.navbar {\n    background: #fff;\n}\n/* For handle diferent bg color in MVC version */\n.Dashboard_2 .navbar.navbar-static-top,\n.Dashboard_3 .navbar.navbar-static-top,\n.Dashboard_4_1 .navbar.navbar-static-top,\n.ComposeEmail .navbar.navbar-static-top,\n.EmailView .navbar.navbar-static-top,\n.Inbox .navbar.navbar-static-top,\n.Metrics .navbar.navbar-static-top {\n    background: #fff;\n}\na.close-canvas-menu {\n    position: absolute;\n    top: 10px;\n    right: 15px;\n    z-index: 1011;\n    color: #a7b1c2;\n}\na.close-canvas-menu:hover {\n    color: #fff;\n}\n/* FULL HEIGHT */\n.full-height {\n    height: 100%;\n}\n.fh-breadcrumb {\n    height: calc(100% - 196px);\n    margin: 0 -15px;\n    position: relative;\n}\n.fh-no-breadcrumb {\n    height: calc(100% - 99px);\n    margin: 0 -15px;\n    position: relative;\n}\n.fh-column {\n    background: #fff;\n    height: 100%;\n    width: 240px;\n    float: left;\n}\n.modal-backdrop {\n    z-index: 2040 !important;\n}\n.modal {\n    z-index: 2050 !important;\n}\n.spiner-example {\n    height: 200px;\n    padding-top: 70px;\n}\n/* MARGINS & PADDINGS */\n.p-xxs {\n    padding: 5px;\n}\n.p-xs {\n    padding: 10px;\n}\n.p-sm {\n    padding: 15px;\n}\n.p-m {\n    padding: 20px;\n}\n.p-md {\n    padding: 25px;\n}\n.p-lg {\n    padding: 30px;\n}\n.p-xl {\n    padding: 40px;\n}\n.m-xxs {\n    margin: 2px 4px;\n}\n.m-xs {\n    margin: 5px;\n}\n.m-sm {\n    margin: 10px;\n}\n.m {\n    margin: 15px;\n}\n.m-md {\n    margin: 20px;\n}\n.m-lg {\n    margin: 30px;\n}\n.m-xl {\n    margin: 50px;\n}\n.m-n {\n    margin: 0 !important;\n}\n.m-l-none {\n    margin-left: 0;\n}\n.m-l-xs {\n    margin-left: 5px;\n}\n.m-l-sm {\n    margin-left: 10px;\n}\n.m-l {\n    margin-left: 15px;\n}\n.m-l-md {\n    margin-left: 20px;\n}\n.m-l-lg {\n    margin-left: 30px;\n}\n.m-l-xl {\n    margin-left: 40px;\n}\n.m-l-n-xxs {\n    margin-left: -1px;\n}\n.m-l-n-xs {\n    margin-left: -5px;\n}\n.m-l-n-sm {\n    margin-left: -10px;\n}\n.m-l-n {\n    margin-left: -15px;\n}\n.m-l-n-md {\n    margin-left: -20px;\n}\n.m-l-n-lg {\n    margin-left: -30px;\n}\n.m-l-n-xl {\n    margin-left: -40px;\n}\n.m-t-none {\n    margin-top: 0;\n}\n.m-t-xxs {\n    margin-top: 1px;\n}\n.m-t-xs {\n    margin-top: 5px;\n}\n.m-t-sm {\n    margin-top: 10px;\n}\n.m-t {\n    margin-top: 15px;\n}\n.m-t-md {\n    margin-top: 20px;\n}\n.m-t-lg {\n    margin-top: 30px;\n}\n.m-t-xl {\n    margin-top: 40px;\n}\n.m-t-n-xxs {\n    margin-top: -1px;\n}\n.m-t-n-xs {\n    margin-top: -5px;\n}\n.m-t-n-sm {\n    margin-top: -10px;\n}\n.m-t-n {\n    margin-top: -15px;\n}\n.m-t-n-md {\n    margin-top: -20px;\n}\n.m-t-n-lg {\n    margin-top: -30px;\n}\n.m-t-n-xl {\n    margin-top: -40px;\n}\n.m-r-none {\n    margin-right: 0;\n}\n.m-r-xxs {\n    margin-right: 1px;\n}\n.m-r-xs {\n    margin-right: 5px;\n}\n.m-r-sm {\n    margin-right: 10px;\n}\n.m-r {\n    margin-right: 15px;\n}\n.m-r-md {\n    margin-right: 20px;\n}\n.m-r-lg {\n    margin-right: 30px;\n}\n.m-r-xl {\n    margin-right: 40px;\n}\n.m-r-n-xxs {\n    margin-right: -1px;\n}\n.m-r-n-xs {\n    margin-right: -5px;\n}\n.m-r-n-sm {\n    margin-right: -10px;\n}\n.m-r-n {\n    margin-right: -15px;\n}\n.m-r-n-md {\n    margin-right: -20px;\n}\n.m-r-n-lg {\n    margin-right: -30px;\n}\n.m-r-n-xl {\n    margin-right: -40px;\n}\n.m-b-none {\n    margin-bottom: 0;\n}\n.m-b-xxs {\n    margin-bottom: 1px;\n}\n.m-b-xs {\n    margin-bottom: 5px;\n}\n.m-b-sm {\n    margin-bottom: 10px;\n}\n.m-b {\n    margin-bottom: 15px;\n}\n.m-b-md {\n    margin-bottom: 20px;\n}\n.m-b-lg {\n    margin-bottom: 30px;\n}\n.m-b-xl {\n    margin-bottom: 40px;\n}\n.m-b-n-xxs {\n    margin-bottom: -1px;\n}\n.m-b-n-xs {\n    margin-bottom: -5px;\n}\n.m-b-n-sm {\n    margin-bottom: -10px;\n}\n.m-b-n {\n    margin-bottom: -15px;\n}\n.m-b-n-md {\n    margin-bottom: -20px;\n}\n.m-b-n-lg {\n    margin-bottom: -30px;\n}\n.m-b-n-xl {\n    margin-bottom: -40px;\n}\n.space-15 {\n    margin: 15px 0;\n}\n.space-20 {\n    margin: 20px 0;\n}\n.space-25 {\n    margin: 25px 0;\n}\n.space-30 {\n    margin: 30px 0;\n}\nbody.modal-open {\n    padding-right: inherit !important;\n}\n/* SEARCH PAGE */\n.search-form {\n    margin-top: 10px;\n}\n.search-result h3 {\n    margin-bottom: 0;\n    color: #1E0FBE;\n}\n.search-result .search-link {\n    color: #006621;\n}\n.search-result p {\n    font-size: 12px;\n    margin-top: 5px;\n}\n/* CONTACTS */\n.contact-box {\n    background-color: #ffffff;\n    border: 1px solid #e7eaec;\n    padding: 20px;\n    margin-bottom: 20px;\n}\n.contact-box a {\n    color: inherit;\n}\n/* INVOICE */\n.invoice-table tbody > tr > td:last-child,\n.invoice-table tbody > tr > td:nth-child(4),\n.invoice-table tbody > tr > td:nth-child(3),\n.invoice-table tbody > tr > td:nth-child(2) {\n    text-align: right;\n}\n.invoice-table thead > tr > th:last-child,\n.invoice-table thead > tr > th:nth-child(4),\n.invoice-table thead > tr > th:nth-child(3),\n.invoice-table thead > tr > th:nth-child(2) {\n    text-align: right;\n}\n.invoice-total > tbody > tr > td:first-child {\n    text-align: right;\n}\n.invoice-total > tbody > tr > td {\n    border: 0 none;\n}\n.invoice-total > tbody > tr > td:last-child {\n    border-bottom: 1px solid #DDDDDD;\n    text-align: right;\n    width: 15%;\n}\n/* ERROR & LOGIN & LOCKSCREEN*/\n.middle-box {\n    max-width: 400px;\n    z-index: 100;\n    margin: 0 auto;\n    padding-top: 40px;\n}\n.lockscreen.middle-box {\n    width: 200px;\n    padding-top: 110px;\n}\n.loginscreen.middle-box {\n    width: 300px;\n\n}\n\n.loginscreen {\n  background-color: #ece0ca;\n\n}\n.loginColumns {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 100px 20px 20px 20px;\n}\n.passwordBox {\n    max-width: 460px;\n    margin: 0 auto;\n    padding: 100px 20px 20px 20px;\n}\n.logo-name {\n    color: #e6e6e6;\n    font-size: 180px;\n    font-weight: 800;\n    letter-spacing: -10px;\n    margin-bottom: 0px;\n}\n.middle-box h1 {\n    font-size: 170px;\n}\n.wrapper .middle-box {\n    margin-top: 140px;\n}\n.lock-word {\n    z-index: 10;\n    position: absolute;\n    top: 110px;\n    left: 50%;\n    margin-left: -470px;\n}\n.lock-word span {\n    font-size: 100px;\n    font-weight: 600;\n    color: #e9e9e9;\n    display: inline-block;\n}\n.lock-word .first-word {\n    margin-right: 160px;\n}\n/* DASBOARD */\n.dashboard-header {\n    border-top: 0;\n    padding: 20px 20px 20px 20px;\n}\n.dashboard-header h2 {\n    margin-top: 10px;\n    font-size: 26px;\n}\n.fist-item {\n    border-top: none !important;\n}\n.statistic-box {\n    margin-top: 40px;\n}\n.dashboard-header .list-group-item span.label {\n    margin-right: 10px;\n}\n.list-group.clear-list .list-group-item {\n    border-top: 1px solid #e7eaec;\n    border-bottom: 0;\n    border-right: 0;\n    border-left: 0;\n    padding: 10px 0;\n}\nul.clear-list:first-child {\n    border-top: none !important;\n}\n/* Intimeline */\n.timeline-item .date i {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 5px;\n    width: 30px;\n    text-align: center;\n    border-top: 1px solid #e7eaec;\n    border-bottom: 1px solid #e7eaec;\n    border-left: 1px solid #e7eaec;\n    background: #f8f8f8;\n}\n.timeline-item .date {\n    text-align: right;\n    width: 110px;\n    position: relative;\n    padding-top: 30px;\n}\n.timeline-item .content {\n    border-left: 1px solid #e7eaec;\n    border-top: 1px solid #e7eaec;\n    padding-top: 10px;\n    min-height: 100px;\n}\n.timeline-item .content:hover {\n    background: #f6f6f6;\n}\n/* PIN BOARD */\nul.notes li,\nul.tag-list li {\n    list-style: none;\n}\nul.notes li h4 {\n    margin-top: 20px;\n    font-size: 16px;\n}\nul.notes li div {\n    text-decoration: none;\n    color: #000;\n    background: #ffc;\n    display: block;\n    height: 140px;\n    width: 140px;\n    padding: 1em;\n    position: relative;\n}\nul.notes li div small {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    font-size: 10px;\n}\nul.notes li div a {\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n    color: inherit;\n}\nul.notes li {\n    margin: 10px 40px 50px 0px;\n    float: left;\n}\nul.notes li div p {\n    font-size: 12px;\n}\nul.notes li div {\n    text-decoration: none;\n    color: #000;\n    background: #ffc;\n    display: block;\n    height: 140px;\n    width: 140px;\n    padding: 1em;\n    /* Firefox */\n    /* Safari+Chrome */\n    /* Opera */\n    box-shadow: 5px 5px 2px rgba(33, 33, 33, 0.7);\n}\nul.notes li div {\n    -webkit-transform: rotate(-6deg);\n    -o-transform: rotate(-6deg);\n    -moz-transform: rotate(-6deg);\n}\nul.notes li:nth-child(even) div {\n    -o-transform: rotate(4deg);\n    -webkit-transform: rotate(4deg);\n    -moz-transform: rotate(4deg);\n    position: relative;\n    top: 5px;\n}\nul.notes li:nth-child(3n) div {\n    -o-transform: rotate(-3deg);\n    -webkit-transform: rotate(-3deg);\n    -moz-transform: rotate(-3deg);\n    position: relative;\n    top: -5px;\n}\nul.notes li:nth-child(5n) div {\n    -o-transform: rotate(5deg);\n    -webkit-transform: rotate(5deg);\n    -moz-transform: rotate(5deg);\n    position: relative;\n    top: -10px;\n}\nul.notes li div:hover,\nul.notes li div:focus {\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -o-transform: scale(1.1);\n    position: relative;\n    z-index: 5;\n}\nul.notes li div {\n    text-decoration: none;\n    color: #000;\n    background: #ffc;\n    display: block;\n    height: 210px;\n    width: 210px;\n    padding: 1em;\n    box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);\n    -webkit-transition: -webkit-transform 0.15s linear;\n}\n/* FILE MANAGER */\n.file-box {\n    float: left;\n    width: 220px;\n}\n.file-manager h5 {\n    text-transform: uppercase;\n}\n.file-manager {\n    list-style: none outside none;\n    margin: 0;\n    padding: 0;\n}\n.folder-list li a {\n    color: #666666;\n    display: block;\n    padding: 5px 0;\n}\n.folder-list li {\n    border-bottom: 1px solid #e7eaec;\n    display: block;\n}\n.folder-list li i {\n    margin-right: 8px;\n    color: #3d4d5d;\n}\n.category-list li a {\n    color: #666666;\n    display: block;\n    padding: 5px 0;\n}\n.category-list li {\n    display: block;\n}\n.category-list li i {\n    margin-right: 8px;\n    color: #3d4d5d;\n}\n.category-list li a .text-navy {\n    color: #1ab394;\n}\n.category-list li a .text-primary {\n    color: #1c84c6;\n}\n.category-list li a .text-info {\n    color: #23c6c8;\n}\n.category-list li a .text-danger {\n    color: #EF5352;\n}\n.category-list li a .text-warning {\n    color: #F8AC59;\n}\n.file-manager h5.tag-title {\n    margin-top: 20px;\n}\n.tag-list li {\n    float: left;\n}\n.tag-list li a {\n    font-size: 10px;\n    background-color: #f3f3f4;\n    padding: 5px 12px;\n    color: inherit;\n    border-radius: 2px;\n    border: 1px solid #e7eaec;\n    margin-right: 5px;\n    margin-top: 5px;\n    display: block;\n}\n.file {\n    border: 1px solid #e7eaec;\n    padding: 0;\n    background-color: #ffffff;\n    position: relative;\n    margin-bottom: 20px;\n    margin-right: 20px;\n}\n.file-manager .hr-line-dashed {\n    margin: 15px 0;\n}\n.file .icon,\n.file .image {\n    height: 100px;\n    overflow: hidden;\n}\n.file .icon {\n    padding: 15px 10px;\n    text-align: center;\n}\n.file-control {\n    color: inherit;\n    font-size: 11px;\n    margin-right: 10px;\n}\n.file-control.active {\n    text-decoration: underline;\n}\n.file .icon i {\n    font-size: 70px;\n    color: #dadada;\n}\n.file .file-name {\n    padding: 10px;\n    background-color: #f8f8f8;\n    border-top: 1px solid #e7eaec;\n}\n.file-name small {\n    color: #676a6c;\n}\n.corner {\n    position: absolute;\n    display: inline-block;\n    width: 0;\n    height: 0;\n    line-height: 0;\n    border: 0.6em solid transparent;\n    border-right: 0.6em solid #f1f1f1;\n    border-bottom: 0.6em solid #f1f1f1;\n    right: 0em;\n    bottom: 0em;\n}\na.compose-mail {\n    padding: 8px 10px;\n}\n.mail-search {\n    max-width: 300px;\n}\n/* PROFILE */\n.profile-content {\n    border-top: none !important;\n}\n.feed-activity-list .feed-element {\n    border-bottom: 1px solid #e7eaec;\n}\n.feed-element:first-child {\n    margin-top: 0;\n}\n.feed-element {\n    padding-bottom: 15px;\n}\n.feed-element,\n.feed-element .media {\n    margin-top: 15px;\n}\n.feed-element,\n.media-body {\n    overflow: hidden;\n}\n.feed-element > .pull-left {\n    margin-right: 10px;\n}\n.feed-element img.img-circle,\n.dropdown-messages-box img.img-circle {\n    width: 38px;\n    height: 38px;\n}\n.feed-element .well {\n    border: 1px solid #e7eaec;\n    box-shadow: none;\n    margin-top: 10px;\n    margin-bottom: 5px;\n    padding: 10px 20px;\n    font-size: 11px;\n    line-height: 16px;\n}\n.feed-element .actions {\n    margin-top: 10px;\n}\n.feed-element .photos {\n    margin: 10px 0;\n}\n.feed-photo {\n    max-height: 180px;\n    border-radius: 4px;\n    overflow: hidden;\n    margin-right: 10px;\n    margin-bottom: 10px;\n}\n/* MAILBOX */\n.mail-box {\n    background-color: #ffffff;\n    border: 1px solid #e7eaec;\n    border-top: 0;\n    padding: 0px;\n    margin-bottom: 20px;\n}\n.mail-box-header {\n    background-color: #ffffff;\n    border: 1px solid #e7eaec;\n    border-bottom: 0;\n    padding: 30px 20px 20px 20px;\n}\n.mail-box-header h2 {\n    margin-top: 0px;\n}\n.mailbox-content .tag-list li a {\n    background: #ffffff;\n}\n.mail-body {\n    border-top: 1px solid #e7eaec;\n    padding: 20px;\n}\n.mail-text {\n    border-top: 1px solid #e7eaec;\n}\n.mail-text .note-toolbar {\n    padding: 10px 15px;\n}\n.mail-body .form-group {\n    margin-bottom: 5px;\n}\n.mail-text .note-editor .note-toolbar {\n    background-color: #F9F8F8;\n}\n.mail-attachment {\n    border-top: 1px solid #e7eaec;\n    padding: 20px;\n    font-size: 12px;\n}\n.mailbox-content {\n    background: none;\n    border: none;\n    padding: 10px;\n}\n.mail-ontact {\n    width: 23%;\n}\n/* PROJECTS */\n.project-people,\n.project-actions {\n    text-align: right;\n    vertical-align: middle;\n}\ndd.project-people {\n    text-align: left;\n    margin-top: 5px;\n}\n.project-people img {\n    width: 32px;\n    height: 32px;\n}\n.project-title a {\n    font-size: 14px;\n    color: #676a6c;\n    font-weight: 600;\n}\n.project-list table tr td {\n    border-top: none;\n    border-bottom: 1px solid #e7eaec;\n    padding: 15px 10px;\n    vertical-align: middle;\n}\n.project-manager .tag-list li a {\n    font-size: 10px;\n    background-color: white;\n    padding: 5px 12px;\n    color: inherit;\n    border-radius: 2px;\n    border: 1px solid #e7eaec;\n    margin-right: 5px;\n    margin-top: 5px;\n    display: block;\n}\n.project-files li a {\n    font-size: 11px;\n    color: #676a6c;\n    margin-left: 10px;\n    line-height: 22px;\n}\n/* FAQ */\n.faq-item {\n    padding: 20px;\n    margin-bottom: 2px;\n    background: #fff;\n}\n.faq-question {\n    font-size: 18px;\n    font-weight: 600;\n    color: #1ab394;\n    display: block;\n}\n.faq-question:hover {\n    color: #179d82;\n}\n.faq-answer {\n    margin-top: 10px;\n    background: #f3f3f4;\n    border: 1px solid #e7eaec;\n    border-radius: 3px;\n    padding: 15px;\n}\n.faq-item .tag-item {\n    background: #f3f3f4;\n    padding: 2px 6px;\n    font-size: 10px;\n    text-transform: uppercase;\n}\n/* Chat view */\n.message-input {\n    height: 90px !important;\n}\n.chat-avatar {\n    white: 36px;\n    height: 36px;\n    float: left;\n    margin-right: 10px;\n}\n.chat-user-name {\n    padding: 10px;\n}\n.chat-user {\n    padding: 8px 10px;\n    border-bottom: 1px solid #e7eaec;\n}\n.chat-user a {\n    color: inherit;\n}\n.chat-view {\n    z-index: 20012;\n}\n.chat-users,\n.chat-statistic {\n    margin-left: -30px;\n}\n@media (max-width: 992px) {\n    .chat-users,\n    .chat-statistic {\n        margin-left: 0px;\n    }\n}\n.chat-view .ibox-content {\n    padding: 0;\n}\n.chat-message {\n    padding: 10px 20px;\n}\n.message-avatar {\n    height: 48px;\n    width: 48px;\n    border: 1px solid #e7eaec;\n    border-radius: 4px;\n    margin-top: 1px;\n}\n.chat-discussion .chat-message.left .message-avatar {\n    float: left;\n    margin-right: 10px;\n}\n.chat-discussion .chat-message.right .message-avatar {\n    float: right;\n    margin-left: 10px;\n}\n.message {\n    background-color: #fff;\n    border: 1px solid #e7eaec;\n    text-align: left;\n    display: block;\n    padding: 10px 20px;\n    position: relative;\n    border-radius: 4px;\n}\n.chat-discussion .chat-message.left .message-date {\n    float: right;\n}\n.chat-discussion .chat-message.right .message-date {\n    float: left;\n}\n.chat-discussion .chat-message.left .message {\n    text-align: left;\n    margin-left: 55px;\n}\n.chat-discussion .chat-message.right .message {\n    text-align: right;\n    margin-right: 55px;\n}\n.message-date {\n    font-size: 10px;\n    color: #888888;\n}\n.message-content {\n    display: block;\n}\n.chat-discussion {\n    background: #eee;\n    padding: 15px;\n    height: 400px;\n    overflow-y: auto;\n}\n.chat-users {\n    overflow-y: auto;\n    height: 400px;\n}\n.chat-message-form .form-group {\n    margin-bottom: 0;\n}\n/* jsTree */\n.jstree-open > .jstree-anchor > .fa-folder:before {\n    content: \"\\F07C\";\n}\n.jstree-default .jstree-icon.none {\n    width: 0;\n}\n/* CLIENTS */\n.clients-list {\n    margin-top: 20px;\n}\n.clients-list .tab-pane {\n    position: relative;\n    height: 600px;\n}\n.client-detail {\n    position: relative;\n    height: 620px;\n}\n.clients-list table tr td {\n    height: 46px;\n    vertical-align: middle;\n    border: none ;\n}\n.client-link {\n    font-weight: 600;\n    color: inherit;\n}\n.client-link:hover {\n    color: inherit;\n}\n.client-avatar {\n    width: 42px;\n}\n.client-avatar img {\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n}\n.contact-type {\n    width: 20px;\n    color: #c1c3c4;\n}\n.client-status {\n    text-align: left;\n}\n.client-detail .vertical-timeline-content p {\n    margin: 0;\n}\n.client-detail .vertical-timeline-icon.gray-bg {\n    color: #a7aaab;\n}\n.clients-list .nav-tabs > li.active > a,\n.clients-list .nav-tabs > li.active > a:hover,\n.clients-list .nav-tabs > li.active > a:focus {\n    border-bottom: 1px solid #fff;\n}\n/* BLOG ARTICLE */\n.blog h2 {\n    font-weight: 700;\n}\n.blog h5 {\n    margin: 0 0 5px 0;\n}\n.blog .btn {\n    margin: 0 0 5px 0;\n}\n.article h1 {\n    font-size: 48px;\n    font-weight: 700;\n    color: #2F4050;\n}\n.article p {\n    font-size: 15px;\n    line-height: 26px;\n}\n.article-title {\n    text-align: center;\n    margin: 40px 0 100px 0;\n}\n.article .ibox-content {\n    padding: 40px;\n}\n/* ISSUE TRACKER */\n.issue-tracker .btn-link {\n    color: #1ab394;\n}\ntable.issue-tracker tbody tr td {\n    vertical-align: middle;\n    height: 50px;\n}\n.issue-info {\n    width: 50%;\n}\n.issue-info a {\n    font-weight: 600;\n    color: #676a6c;\n}\n.issue-info small {\n    display: block;\n}\n/* TEAMS */\n.team-members {\n    margin: 10px 0;\n}\n.team-members img.img-circle {\n    width: 42px;\n    height: 42px;\n    margin-bottom: 5px;\n}\n/* AGILE BOARD */\n.sortable-list {\n    padding: 10px 0;\n}\n.agile-list {\n    list-style: none;\n    margin: 0;\n}\n.agile-list li {\n    background: #FAFAFB;\n    border: 1px solid #e7eaec;\n    margin: 0px 0 10px 0;\n    padding: 10px;\n    border-radius: 2px;\n}\n.agile-list li:hover {\n    cursor: pointer;\n    background: #fff;\n}\n.agile-list li.warning-element {\n    border-left: 3px solid #f8ac59;\n}\n.agile-list li.danger-element {\n    border-left: 3px solid #ed5565;\n}\n.agile-list li.info-element {\n    border-left: 3px solid #1c84c6;\n}\n.agile-list li.success-element {\n    border-left: 3px solid #1ab394;\n}\n.agile-detail {\n    margin-top: 5px;\n    font-size: 12px;\n}\n/* DIFF */\nins {\n    background-color: #c6ffc6;\n    text-decoration: none;\n}\ndel {\n    background-color: #ffc6c6;\n}\n/* E-commerce */\n.product-box {\n    padding: 0;\n    border: 1px solid #e7eaec;\n}\n.product-box:hover,\n.product-box.active {\n    border: 1px solid transparent;\n    box-shadow: 0px 3px 7px 0px #a8a8a8;\n}\n.product-imitation {\n    text-align: center;\n    padding: 90px 0;\n    background-color: #f8f8f9;\n    color: #bebec3;\n    font-weight: 600;\n}\n.product-imitation.xl {\n    padding: 120px 0;\n}\n.product-desc {\n    padding: 20px;\n    position: relative;\n}\n.ecommerce .tag-list {\n    padding: 0;\n}\n.ecommerce .fa-star {\n    color: #d1dade;\n}\n.ecommerce .fa-star.active {\n    color: #f8ac59;\n}\n.ecommerce .note-editor {\n    border: 1px solid #e7eaec;\n}\n.product-name {\n    font-size: 16px;\n    font-weight: 600;\n    color: #676a6c;\n    display: block;\n    margin: 2px 0 5px 0;\n}\n.product-name:hover,\n.product-name:focus {\n    color: #1ab394;\n}\n.product-price {\n    font-size: 14px;\n    font-weight: 600;\n    color: #ffffff;\n    background-color: #1ab394;\n    padding: 6px 12px;\n    position: absolute;\n    top: -32px;\n    right: 0;\n}\n/* Social feed */\n.social-feed-separated .social-feed-box {\n    margin-left: 62px;\n}\n.social-feed-separated .social-avatar {\n    float: left;\n    padding: 0;\n}\n.social-feed-separated .social-avatar img {\n    width: 52px;\n    height: 52px;\n    border: 1px solid #e7eaec;\n}\n.social-feed-separated .social-feed-box .social-avatar {\n    padding: 15px 15px 0 15px;\n    float: none;\n}\n.social-feed-box {\n    /*padding: 15px;*/\n    border: 1px solid #e7eaec;\n    background: #fff;\n    margin-bottom: 15px;\n}\n.article .social-feed-box {\n    margin-bottom: 0;\n    border-bottom: none;\n}\n.article .social-feed-box:last-child {\n    margin-bottom: 0;\n    border-bottom: 1px solid #e7eaec;\n}\n.article .social-feed-box p {\n    font-size: 13px;\n    line-height: 18px;\n}\n.social-action {\n    margin: 15px;\n}\n.social-avatar {\n    padding: 15px 15px 0 15px;\n}\n.social-comment .social-comment {\n    margin-left: 45px;\n}\n.social-avatar img {\n    height: 40px;\n    width: 40px;\n    margin-right: 10px;\n}\n.social-avatar .media-body a {\n    font-size: 14px;\n    display: block;\n}\n.social-body {\n    padding: 15px;\n}\n.social-body img {\n    margin-bottom: 10px;\n}\n.social-footer {\n    border-top: 1px solid #e7eaec;\n    padding: 10px 15px;\n    background: #f9f9f9;\n}\n.social-footer .social-comment img {\n    width: 32px;\n    margin-right: 10px;\n}\n.social-comment:first-child {\n    margin-top: 0;\n}\n.social-comment {\n    margin-top: 15px;\n}\n.social-comment textarea {\n    font-size: 12px;\n}\n#small-chat {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    z-index: 100;\n}\n#small-chat .badge {\n    position: absolute;\n    top: -3px;\n    right: -4px;\n}\n.open-small-chat {\n    height: 38px;\n    width: 38px;\n    display: block;\n    background: #1ab394;\n    padding: 9px 8px;\n    text-align: center;\n    color: #fff;\n    border-radius: 50%;\n}\n.open-small-chat:hover {\n    color: white;\n    background: #1ab394;\n}\n.small-chat-box {\n    display: none;\n    position: fixed;\n    bottom: 20px;\n    right: 75px;\n    background: #fff;\n    border: 1px solid #e7eaec;\n    width: 230px;\n    height: 320px;\n    border-radius: 4px;\n}\n.small-chat-box.ng-small-chat {\n    display: block;\n}\n.body-small .small-chat-box {\n    bottom: 70px;\n    right: 20px;\n}\n.small-chat-box.active {\n    display: block;\n}\n.small-chat-box .heading {\n    background: #2f4050;\n    padding: 8px 15px;\n    font-weight: bold;\n    color: #fff;\n}\n.small-chat-box .chat-date {\n    opacity: 0.6;\n    font-size: 10px;\n    font-weight: normal;\n}\n.small-chat-box .content {\n    padding: 15px 15px;\n}\n.small-chat-box .content .author-name {\n    font-weight: bold;\n    margin-bottom: 3px;\n    font-size: 11px;\n}\n.small-chat-box .content > div {\n    padding-bottom: 20px;\n}\n.small-chat-box .content .chat-message {\n    padding: 5px 10px;\n    border-radius: 6px;\n    font-size: 11px;\n    line-height: 14px;\n    max-width: 80%;\n    background: #f3f3f4;\n    margin-bottom: 10px;\n}\n.small-chat-box .content .chat-message.active {\n    background: #1ab394;\n    color: #fff;\n}\n.small-chat-box .content .left {\n    text-align: left;\n    clear: both;\n}\n.small-chat-box .content .left .chat-message {\n    float: left;\n}\n.small-chat-box .content .right {\n    text-align: right;\n    clear: both;\n}\n.small-chat-box .content .right .chat-message {\n    float: right;\n}\n.small-chat-box .form-chat {\n    padding: 10px 10px;\n}\n/*\n * metismenu - v2.0.2\n * A jQuery menu plugin\n * https://github.com/onokumus/metisMenu\n *\n * Made by Osman Nuri Okumus\n * Under MIT License\n */\n.metismenu .plus-minus,\n.metismenu .plus-times {\n    float: right;\n}\n.metismenu .arrow {\n    float: right;\n    line-height: 1.42857;\n}\n.metismenu .glyphicon.arrow:before {\n    content: \"\\E079\";\n}\n.metismenu .active > a > .glyphicon.arrow:before {\n    content: \"\\E114\";\n}\n.metismenu .fa.arrow:before {\n    content: \"\\F104\";\n}\n.metismenu .active > a > .fa.arrow:before {\n    content: \"\\F107\";\n}\n.metismenu .ion.arrow:before {\n    content: \"\\F3D2\";\n}\n.metismenu .active > a > .ion.arrow:before {\n    content: \"\\F3D0\";\n}\n.metismenu .fa.plus-minus:before,\n.metismenu .fa.plus-times:before {\n    content: \"\\F067\";\n}\n.metismenu .active > a > .fa.plus-times {\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n.metismenu .active > a > .fa.plus-minus:before {\n    content: \"\\F068\";\n}\n.metismenu .collapse {\n    display: none;\n}\n.metismenu .collapse.in {\n    display: block;\n}\n.metismenu .collapsing {\n    position: relative;\n    height: 0;\n    overflow: hidden;\n    -webkit-transition-timing-function: ease;\n    transition-timing-function: ease;\n    -webkit-transition-duration: .35s;\n    transition-duration: .35s;\n    -webkit-transition-property: height, visibility;\n    transition-property: height, visibility;\n}\n/*\n *  Usage:\n *\n *    <div class=\"sk-spinner sk-spinner-rotating-plane\"></div>\n *\n */\n.sk-spinner-rotating-plane.sk-spinner {\n    width: 30px;\n    height: 30px;\n    background-color: #1ab394;\n    margin: 0 auto;\n    -webkit-animation: sk-rotatePlane 1.2s infinite ease-in-out;\n    animation: sk-rotatePlane 1.2s infinite ease-in-out;\n}\n@-webkit-keyframes sk-rotatePlane {\n    0% {\n        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n        transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    }\n    50% {\n        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    }\n    100% {\n        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    }\n}\n@keyframes sk-rotatePlane {\n    0% {\n        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n        transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    }\n    50% {\n        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    }\n    100% {\n        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    }\n}\n/*\n *  Usage:\n *\n *    <div class=\"sk-spinner sk-spinner-double-bounce\">\n *      <div class=\"sk-double-bounce1\"></div>\n *      <div class=\"sk-double-bounce2\"></div>\n *    </div>\n *\n */\n.sk-spinner-double-bounce.sk-spinner {\n    width: 40px;\n    height: 40px;\n    position: relative;\n    margin: 0 auto;\n}\n.sk-spinner-double-bounce .sk-double-bounce1,\n.sk-spinner-double-bounce .sk-double-bounce2 {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: #1ab394;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-animation: sk-doubleBounce 2s infinite ease-in-out;\n    animation: sk-doubleBounce 2s infinite ease-in-out;\n}\n.sk-spinner-double-bounce .sk-double-bounce2 {\n    -webkit-animation-delay: -1s;\n    animation-delay: -1s;\n}\n@-webkit-keyframes sk-doubleBounce {\n    0%,\n    100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    50% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n    }\n}\n@keyframes sk-doubleBounce {\n    0%,\n    100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    50% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n    }\n}\n/*\n *  Usage:\n *\n *    <div class=\"sk-spinner sk-spinner-wave\">\n *      <div class=\"sk-rect1\"></div>\n *      <div class=\"sk-rect2\"></div>\n *      <div class=\"sk-rect3\"></div>\n *      <div class=\"sk-rect4\"></div>\n *      <div class=\"sk-rect5\"></div>\n *    </div>\n *\n */\n.sk-spinner-wave.sk-spinner {\n    margin: 0 auto;\n    width: 50px;\n    height: 30px;\n    text-align: center;\n    font-size: 10px;\n}\n.sk-spinner-wave div {\n    background-color: #1ab394;\n    height: 100%;\n    width: 6px;\n    display: inline-block;\n    -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\n    animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\n}\n.sk-spinner-wave .sk-rect2 {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s;\n}\n.sk-spinner-wave .sk-rect3 {\n    -webkit-animation-delay: -1s;\n    animation-delay: -1s;\n}\n.sk-spinner-wave .sk-rect4 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s;\n}\n.sk-spinner-wave .sk-rect5 {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s;\n}\n@-webkit-keyframes sk-waveStretchDelay {\n    0%,\n    40%,\n    100% {\n        -webkit-transform: scaleY(0.4);\n        transform: scaleY(0.4);\n    }\n    20% {\n        -webkit-transform: scaleY(1);\n        transform: scaleY(1);\n    }\n}\n@keyframes sk-waveStretchDelay {\n    0%,\n    40%,\n    100% {\n        -webkit-transform: scaleY(0.4);\n        transform: scaleY(0.4);\n    }\n    20% {\n        -webkit-transform: scaleY(1);\n        transform: scaleY(1);\n    }\n}\n/*\n *  Usage:\n *\n *    <div class=\"sk-spinner sk-spinner-wandering-cubes\">\n *      <div class=\"sk-cube1\"></div>\n *      <div class=\"sk-cube2\"></div>\n *    </div>\n *\n */\n.sk-spinner-wandering-cubes.sk-spinner {\n    margin: 0 auto;\n    width: 32px;\n    height: 32px;\n    position: relative;\n}\n.sk-spinner-wandering-cubes .sk-cube1,\n.sk-spinner-wandering-cubes .sk-cube2 {\n    background-color: #1ab394;\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-animation: sk-wanderingCubeMove 1.8s infinite ease-in-out;\n    animation: sk-wanderingCubeMove 1.8s infinite ease-in-out;\n}\n.sk-spinner-wandering-cubes .sk-cube2 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s;\n}\n@-webkit-keyframes sk-wanderingCubeMove {\n    25% {\n        -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n        transform: translateX(42px) rotate(-90deg) scale(0.5);\n    }\n    50% {\n        /* Hack to make FF rotate in the right direction */\n        -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n        transform: translateX(42px) translateY(42px) rotate(-179deg);\n    }\n    50.1% {\n        -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n        transform: translateX(42px) translateY(42px) rotate(-180deg);\n    }\n    75% {\n        -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n        transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n    }\n    100% {\n        -webkit-transform: rotate(-360deg);\n        transform: rotate(-360deg);\n    }\n}\n@keyframes sk-wanderingCubeMove {\n    25% {\n        -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n        transform: translateX(42px) rotate(-90deg) scale(0.5);\n    }\n    50% {\n        /* Hack to make FF rotate in the right direction */\n        -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n        transform: translateX(42px) translateY(42px) rotate(-179deg);\n    }\n    50.1% {\n        -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n        transform: translateX(42px) translateY(42px) rotate(-180deg);\n    }\n    75% {\n        -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n        transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n    }\n    100% {\n        -webkit-transform: rotate(-360deg);\n        transform: rotate(-360deg);\n    }\n}\n/*\n *  Usage:\n *\n *    <div class=\"sk-spinner sk-spinner-pulse\"></div>\n *\n */\n.sk-spinner-pulse.sk-spinner {\n    width: 40px;\n    height: 40px;\n    margin: 0 auto;\n    background-color: #1ab394;\n    border-radius: 100%;\n    -webkit-animation: sk-pulseScaleOut 1s infinite ease-in-out;\n    animation: sk-pulseScaleOut 1s infinite ease-in-out;\n}\n@-webkit-keyframes sk-pulseScaleOut {\n    0% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    100% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n        opacity: 0;\n    }\n}\n@keyframes sk-pulseScaleOut {\n    0% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    100% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n        opacity: 0;\n    }\n}\n/*\n *  Usage:\n *\n *    <div class=\"sk-spinner sk-spinner-chasing-dots\">\n *      <div class=\"sk-dot1\"></div>\n *      <div class=\"sk-dot2\"></div>\n *    </div>\n *\n */\n.sk-spinner-chasing-dots.sk-spinner {\n    margin: 0 auto;\n    width: 40px;\n    height: 40px;\n    position: relative;\n    text-align: center;\n    -webkit-animation: sk-chasingDotsRotate 2s infinite linear;\n    animation: sk-chasingDotsRotate 2s infinite linear;\n}\n.sk-spinner-chasing-dots .sk-dot1,\n.sk-spinner-chasing-dots .sk-dot2 {\n    width: 60%;\n    height: 60%;\n    display: inline-block;\n    position: absolute;\n    top: 0;\n    background-color: #1ab394;\n    border-radius: 100%;\n    -webkit-animation: sk-chasingDotsBounce 2s infinite ease-in-out;\n    animation: sk-chasingDotsBounce 2s infinite ease-in-out;\n}\n.sk-spinner-chasing-dots .sk-dot2 {\n    top: auto;\n    bottom: 0px;\n    -webkit-animation-delay: -1s;\n    animation-delay: -1s;\n}\n@-webkit-keyframes sk-chasingDotsRotate {\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n}\n@keyframes sk-chasingDotsRotate {\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n}\n@-webkit-keyframes sk-chasingDotsBounce {\n    0%,\n    100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    50% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n    }\n}\n@keyframes sk-chasingDotsBounce {\n    0%,\n    100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    50% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n    }\n}\n/*\n *  Usage:\n *\n *    <div class=\"sk-spinner sk-spinner-three-bounce\">\n *      <div class=\"sk-bounce1\"></div>\n *      <div class=\"sk-bounce2\"></div>\n *      <div class=\"sk-bounce3\"></div>\n *    </div>\n *\n */\n.sk-spinner-three-bounce.sk-spinner {\n    margin: 0 auto;\n    width: 70px;\n    text-align: center;\n}\n.sk-spinner-three-bounce div {\n    width: 18px;\n    height: 18px;\n    background-color: #1ab394;\n    border-radius: 100%;\n    display: inline-block;\n    -webkit-animation: sk-threeBounceDelay 1.4s infinite ease-in-out;\n    animation: sk-threeBounceDelay 1.4s infinite ease-in-out;\n    /* Prevent first frame from flickering when animation starts */\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n.sk-spinner-three-bounce .sk-bounce1 {\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s;\n}\n.sk-spinner-three-bounce .sk-bounce2 {\n    -webkit-animation-delay: -0.16s;\n    animation-delay: -0.16s;\n}\n@-webkit-keyframes sk-threeBounceDelay {\n    0%,\n    80%,\n    100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    40% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n    }\n}\n@keyframes sk-threeBounceDelay {\n    0%,\n    80%,\n    100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    40% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n    }\n}\n/*\n *  Usage:\n *\n *    <div class=\"sk-spinner sk-spinner-circle\">\n *      <div class=\"sk-circle1 sk-circle\"></div>\n *      <div class=\"sk-circle2 sk-circle\"></div>\n *      <div class=\"sk-circle3 sk-circle\"></div>\n *      <div class=\"sk-circle4 sk-circle\"></div>\n *      <div class=\"sk-circle5 sk-circle\"></div>\n *      <div class=\"sk-circle6 sk-circle\"></div>\n *      <div class=\"sk-circle7 sk-circle\"></div>\n *      <div class=\"sk-circle8 sk-circle\"></div>\n *      <div class=\"sk-circle9 sk-circle\"></div>\n *      <div class=\"sk-circle10 sk-circle\"></div>\n *      <div class=\"sk-circle11 sk-circle\"></div>\n *      <div class=\"sk-circle12 sk-circle\"></div>\n *    </div>\n *\n */\n.sk-spinner-circle.sk-spinner {\n    margin: 0 auto;\n    width: 22px;\n    height: 22px;\n    position: relative;\n}\n.sk-spinner-circle .sk-circle {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n.sk-spinner-circle .sk-circle:before {\n    content: '';\n    display: block;\n    margin: 0 auto;\n    width: 20%;\n    height: 20%;\n    background-color: #1ab394;\n    border-radius: 100%;\n    -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out;\n    animation: sk-circleBounceDelay 1.2s infinite ease-in-out;\n    /* Prevent first frame from flickering when animation starts */\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n.sk-spinner-circle .sk-circle2 {\n    -webkit-transform: rotate(30deg);\n    -ms-transform: rotate(30deg);\n    transform: rotate(30deg);\n}\n.sk-spinner-circle .sk-circle3 {\n    -webkit-transform: rotate(60deg);\n    -ms-transform: rotate(60deg);\n    transform: rotate(60deg);\n}\n.sk-spinner-circle .sk-circle4 {\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg);\n}\n.sk-spinner-circle .sk-circle5 {\n    -webkit-transform: rotate(120deg);\n    -ms-transform: rotate(120deg);\n    transform: rotate(120deg);\n}\n.sk-spinner-circle .sk-circle6 {\n    -webkit-transform: rotate(150deg);\n    -ms-transform: rotate(150deg);\n    transform: rotate(150deg);\n}\n.sk-spinner-circle .sk-circle7 {\n    -webkit-transform: rotate(180deg);\n    -ms-transform: rotate(180deg);\n    transform: rotate(180deg);\n}\n.sk-spinner-circle .sk-circle8 {\n    -webkit-transform: rotate(210deg);\n    -ms-transform: rotate(210deg);\n    transform: rotate(210deg);\n}\n.sk-spinner-circle .sk-circle9 {\n    -webkit-transform: rotate(240deg);\n    -ms-transform: rotate(240deg);\n    transform: rotate(240deg);\n}\n.sk-spinner-circle .sk-circle10 {\n    -webkit-transform: rotate(270deg);\n    -ms-transform: rotate(270deg);\n    transform: rotate(270deg);\n}\n.sk-spinner-circle .sk-circle11 {\n    -webkit-transform: rotate(300deg);\n    -ms-transform: rotate(300deg);\n    transform: rotate(300deg);\n}\n.sk-spinner-circle .sk-circle12 {\n    -webkit-transform: rotate(330deg);\n    -ms-transform: rotate(330deg);\n    transform: rotate(330deg);\n}\n.sk-spinner-circle .sk-circle2:before {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s;\n}\n.sk-spinner-circle .sk-circle3:before {\n    -webkit-animation-delay: -1s;\n    animation-delay: -1s;\n}\n.sk-spinner-circle .sk-circle4:before {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s;\n}\n.sk-spinner-circle .sk-circle5:before {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s;\n}\n.sk-spinner-circle .sk-circle6:before {\n    -webkit-animation-delay: -0.7s;\n    animation-delay: -0.7s;\n}\n.sk-spinner-circle .sk-circle7:before {\n    -webkit-animation-delay: -0.6s;\n    animation-delay: -0.6s;\n}\n.sk-spinner-circle .sk-circle8:before {\n    -webkit-animation-delay: -0.5s;\n    animation-delay: -0.5s;\n}\n.sk-spinner-circle .sk-circle9:before {\n    -webkit-animation-delay: -0.4s;\n    animation-delay: -0.4s;\n}\n.sk-spinner-circle .sk-circle10:before {\n    -webkit-animation-delay: -0.3s;\n    animation-delay: -0.3s;\n}\n.sk-spinner-circle .sk-circle11:before {\n    -webkit-animation-delay: -0.2s;\n    animation-delay: -0.2s;\n}\n.sk-spinner-circle .sk-circle12:before {\n    -webkit-animation-delay: -0.1s;\n    animation-delay: -0.1s;\n}\n@-webkit-keyframes sk-circleBounceDelay {\n    0%,\n    80%,\n    100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    40% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n    }\n}\n@keyframes sk-circleBounceDelay {\n    0%,\n    80%,\n    100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    40% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n    }\n}\n/*\n *  Usage:\n *\n *    <div class=\"sk-spinner sk-spinner-cube-grid\">\n *      <div class=\"sk-cube\"></div>\n *      <div class=\"sk-cube\"></div>\n *      <div class=\"sk-cube\"></div>\n *      <div class=\"sk-cube\"></div>\n *      <div class=\"sk-cube\"></div>\n *      <div class=\"sk-cube\"></div>\n *      <div class=\"sk-cube\"></div>\n *      <div class=\"sk-cube\"></div>\n *      <div class=\"sk-cube\"></div>\n *    </div>\n *\n */\n.sk-spinner-cube-grid {\n    /*\n   * Spinner positions\n   * 1 2 3\n   * 4 5 6\n   * 7 8 9\n   */\n}\n.sk-spinner-cube-grid.sk-spinner {\n    width: 30px;\n    height: 30px;\n    margin: 0 auto;\n}\n.sk-spinner-cube-grid .sk-cube {\n    width: 33%;\n    height: 33%;\n    background-color: #1ab394;\n    float: left;\n    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n    animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n}\n.sk-spinner-cube-grid .sk-cube:nth-child(1) {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n.sk-spinner-cube-grid .sk-cube:nth-child(2) {\n    -webkit-animation-delay: 0.3s;\n    animation-delay: 0.3s;\n}\n.sk-spinner-cube-grid .sk-cube:nth-child(3) {\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s;\n}\n.sk-spinner-cube-grid .sk-cube:nth-child(4) {\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n}\n.sk-spinner-cube-grid .sk-cube:nth-child(5) {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n.sk-spinner-cube-grid .sk-cube:nth-child(6) {\n    -webkit-animation-delay: 0.3s;\n    animation-delay: 0.3s;\n}\n.sk-spinner-cube-grid .sk-cube:nth-child(7) {\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n}\n.sk-spinner-cube-grid .sk-cube:nth-child(8) {\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n}\n.sk-spinner-cube-grid .sk-cube:nth-child(9) {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n@-webkit-keyframes sk-cubeGridScaleDelay {\n    0%,\n    70%,\n    100% {\n        -webkit-transform: scale3D(1, 1, 1);\n        transform: scale3D(1, 1, 1);\n    }\n    35% {\n        -webkit-transform: scale3D(0, 0, 1);\n        transform: scale3D(0, 0, 1);\n    }\n}\n@keyframes sk-cubeGridScaleDelay {\n    0%,\n    70%,\n    100% {\n        -webkit-transform: scale3D(1, 1, 1);\n        transform: scale3D(1, 1, 1);\n    }\n    35% {\n        -webkit-transform: scale3D(0, 0, 1);\n        transform: scale3D(0, 0, 1);\n    }\n}\n/*\n *  Usage:\n *\n *    <div class=\"sk-spinner sk-spinner-wordpress\">\n *      <span class=\"sk-inner-circle\"></span>\n *    </div>\n *\n */\n.sk-spinner-wordpress.sk-spinner {\n    background-color: #1ab394;\n    width: 30px;\n    height: 30px;\n    border-radius: 30px;\n    position: relative;\n    margin: 0 auto;\n    -webkit-animation: sk-innerCircle 1s linear infinite;\n    animation: sk-innerCircle 1s linear infinite;\n}\n.sk-spinner-wordpress .sk-inner-circle {\n    display: block;\n    background-color: #fff;\n    width: 8px;\n    height: 8px;\n    position: absolute;\n    border-radius: 8px;\n    top: 5px;\n    left: 5px;\n}\n@-webkit-keyframes sk-innerCircle {\n    0% {\n        -webkit-transform: rotate(0);\n        transform: rotate(0);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n}\n@keyframes sk-innerCircle {\n    0% {\n        -webkit-transform: rotate(0);\n        transform: rotate(0);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n}\n/*\n *  Usage:\n *\n *    <div class=\"sk-spinner sk-spinner-fading-circle\">\n *      <div class=\"sk-circle1 sk-circle\"></div>\n *      <div class=\"sk-circle2 sk-circle\"></div>\n *      <div class=\"sk-circle3 sk-circle\"></div>\n *      <div class=\"sk-circle4 sk-circle\"></div>\n *      <div class=\"sk-circle5 sk-circle\"></div>\n *      <div class=\"sk-circle6 sk-circle\"></div>\n *      <div class=\"sk-circle7 sk-circle\"></div>\n *      <div class=\"sk-circle8 sk-circle\"></div>\n *      <div class=\"sk-circle9 sk-circle\"></div>\n *      <div class=\"sk-circle10 sk-circle\"></div>\n *      <div class=\"sk-circle11 sk-circle\"></div>\n *      <div class=\"sk-circle12 sk-circle\"></div>\n *    </div>\n *\n */\n.sk-spinner-fading-circle.sk-spinner {\n    margin: 0 auto;\n    width: 22px;\n    height: 22px;\n    position: relative;\n}\n.sk-spinner-fading-circle .sk-circle {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n.sk-spinner-fading-circle .sk-circle:before {\n    content: '';\n    display: block;\n    margin: 0 auto;\n    width: 18%;\n    height: 18%;\n    background-color: #1ab394;\n    border-radius: 100%;\n    -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out;\n    animation: sk-circleFadeDelay 1.2s infinite ease-in-out;\n    /* Prevent first frame from flickering when animation starts */\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n.sk-spinner-fading-circle .sk-circle2 {\n    -webkit-transform: rotate(30deg);\n    -ms-transform: rotate(30deg);\n    transform: rotate(30deg);\n}\n.sk-spinner-fading-circle .sk-circle3 {\n    -webkit-transform: rotate(60deg);\n    -ms-transform: rotate(60deg);\n    transform: rotate(60deg);\n}\n.sk-spinner-fading-circle .sk-circle4 {\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg);\n}\n.sk-spinner-fading-circle .sk-circle5 {\n    -webkit-transform: rotate(120deg);\n    -ms-transform: rotate(120deg);\n    transform: rotate(120deg);\n}\n.sk-spinner-fading-circle .sk-circle6 {\n    -webkit-transform: rotate(150deg);\n    -ms-transform: rotate(150deg);\n    transform: rotate(150deg);\n}\n.sk-spinner-fading-circle .sk-circle7 {\n    -webkit-transform: rotate(180deg);\n    -ms-transform: rotate(180deg);\n    transform: rotate(180deg);\n}\n.sk-spinner-fading-circle .sk-circle8 {\n    -webkit-transform: rotate(210deg);\n    -ms-transform: rotate(210deg);\n    transform: rotate(210deg);\n}\n.sk-spinner-fading-circle .sk-circle9 {\n    -webkit-transform: rotate(240deg);\n    -ms-transform: rotate(240deg);\n    transform: rotate(240deg);\n}\n.sk-spinner-fading-circle .sk-circle10 {\n    -webkit-transform: rotate(270deg);\n    -ms-transform: rotate(270deg);\n    transform: rotate(270deg);\n}\n.sk-spinner-fading-circle .sk-circle11 {\n    -webkit-transform: rotate(300deg);\n    -ms-transform: rotate(300deg);\n    transform: rotate(300deg);\n}\n.sk-spinner-fading-circle .sk-circle12 {\n    -webkit-transform: rotate(330deg);\n    -ms-transform: rotate(330deg);\n    transform: rotate(330deg);\n}\n.sk-spinner-fading-circle .sk-circle2:before {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s;\n}\n.sk-spinner-fading-circle .sk-circle3:before {\n    -webkit-animation-delay: -1s;\n    animation-delay: -1s;\n}\n.sk-spinner-fading-circle .sk-circle4:before {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s;\n}\n.sk-spinner-fading-circle .sk-circle5:before {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s;\n}\n.sk-spinner-fading-circle .sk-circle6:before {\n    -webkit-animation-delay: -0.7s;\n    animation-delay: -0.7s;\n}\n.sk-spinner-fading-circle .sk-circle7:before {\n    -webkit-animation-delay: -0.6s;\n    animation-delay: -0.6s;\n}\n.sk-spinner-fading-circle .sk-circle8:before {\n    -webkit-animation-delay: -0.5s;\n    animation-delay: -0.5s;\n}\n.sk-spinner-fading-circle .sk-circle9:before {\n    -webkit-animation-delay: -0.4s;\n    animation-delay: -0.4s;\n}\n.sk-spinner-fading-circle .sk-circle10:before {\n    -webkit-animation-delay: -0.3s;\n    animation-delay: -0.3s;\n}\n.sk-spinner-fading-circle .sk-circle11:before {\n    -webkit-animation-delay: -0.2s;\n    animation-delay: -0.2s;\n}\n.sk-spinner-fading-circle .sk-circle12:before {\n    -webkit-animation-delay: -0.1s;\n    animation-delay: -0.1s;\n}\n@-webkit-keyframes sk-circleFadeDelay {\n    0%,\n    39%,\n    100% {\n        opacity: 0;\n    }\n    40% {\n        opacity: 1;\n    }\n}\n@keyframes sk-circleFadeDelay {\n    0%,\n    39%,\n    100% {\n        opacity: 0;\n    }\n    40% {\n        opacity: 1;\n    }\n}\n/*\n *\n *   INSPINIA Landing Page - Responsive Admin Theme\n *   Copyright 2014 Webapplayers.com\n *\n*/\n/* GLOBAL STYLES\n-------------------------------------------------- */\n/* PACE PLUGIN\n-------------------------------------------------- */\n.landing-page.pace .pace-progress {\n    background: #fff;\n    position: fixed;\n    z-index: 2000;\n    top: 0;\n    left: 0;\n    height: 2px;\n    -webkit-transition: width 1s;\n    transition: width 1s;\n}\n.pace-inactive {\n    display: none;\n}\nbody.landing-page {\n    color: #676a6c;\n    font-family: 'Open Sans', helvetica, arial, sans-serif;\n    background-color: #fff;\n}\n.landing-page {\n    /* CUSTOMIZE THE NAVBAR\n  -------------------------------------------------- */\n    /* Flip around the padding for proper display in narrow viewports */\n    /* BACKGROUNDS SLIDER\n  -------------------------------------------------- */\n    /* CUSTOMIZE THE CAROUSEL\n  -------------------------------------------------- */\n    /* Carousel base class */\n    /* Since positioning the image, we need to help out the caption */\n    /* Declare heights because of positioning of img element */\n    /* Sections\n  ------------------------- */\n    /* Buttons - only primary custom button\n  ------------------------- */\n    /* RESPONSIVE CSS\n  -------------------------------------------------- */\n}\n.landing-page span.navy {\n    color: #1ab394;\n}\n.landing-page p.text-color {\n    color: #676a6c;\n}\n.landing-page a.navy-link {\n    color: #1ab394;\n    text-decoration: none;\n}\n.landing-page a.navy-link:hover {\n    color: #179d82;\n}\n.landing-page section p {\n    color: #aeaeae;\n    font-size: 13px;\n}\n.landing-page address {\n    font-size: 13px;\n}\n.landing-page h1 {\n    margin-top: 10px;\n    font-size: 30px;\n    font-weight: 200;\n}\n.landing-page .navy-line {\n    width: 60px;\n    height: 1px;\n    margin: 60px auto 0;\n    border-bottom: 2px solid #1ab394;\n}\n.landing-page .navbar-wrapper {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 200;\n}\n.landing-page .navbar-wrapper > .container {\n    padding-right: 0;\n    padding-left: 0;\n}\n.landing-page .navbar-wrapper .navbar {\n    padding-right: 15px;\n    padding-left: 15px;\n}\n.landing-page .navbar-default.navbar-scroll {\n    background-color: #fff;\n    border-color: #fff;\n    padding: 15px 0;\n}\n.landing-page .navbar-default {\n    background-color: transparent;\n    border-color: transparent;\n    -webkit-transition: all 0.3s ease-in-out 0s;\n            transition: all 0.3s ease-in-out 0s;\n}\n.landing-page .navbar-default .nav li a {\n    color: #fff;\n    font-family: 'Open Sans', helvetica, arial, sans-serif;\n    font-weight: 700;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    font-size: 14px;\n}\n.landing-page .navbar-nav > li > a {\n    padding-top: 25px;\n    border-top: 6px solid transparent;\n}\n.landing-page .navbar-default .navbar-nav > .active > a,\n.landing-page .navbar-default .navbar-nav > .active > a:hover {\n    background: transparent;\n    color: #fff;\n    border-top: 6px solid #1ab394;\n}\n.landing-page .navbar-default .navbar-nav > li > a:hover,\n.landing-page .navbar-default .navbar-nav > li > a:focus {\n    color: #1ab394;\n    background: inherit;\n}\n.landing-page .navbar-default .navbar-nav > .active > a:focus {\n    background: transparent;\n    color: #fff;\n}\n.landing-page .navbar-default .navbar-nav > .active > a:focus {\n    background: transparent;\n    color: #ffffff;\n}\n.landing-page .navbar-default.navbar-scroll .navbar-nav > .active > a:focus {\n    background: transparent;\n    color: inherit;\n}\n.landing-page .navbar-default .navbar-brand:hover,\n.landing-page .navbar-default .navbar-brand:focus {\n    background: #179d82;\n    color: #fff;\n}\n.landing-page .navbar-default .navbar-brand {\n    color: #fff;\n    height: auto;\n    display: block;\n    font-size: 14px;\n    background: #1ab394;\n    padding: 15px 20px 15px 20px;\n    border-radius: 0 0 5px 5px;\n    font-weight: 700;\n    -webkit-transition: all 0.3s ease-in-out 0s;\n            transition: all 0.3s ease-in-out 0s;\n}\n.landing-page .navbar-scroll.navbar-default .nav li a {\n    color: #676a6c;\n}\n.landing-page .navbar-scroll.navbar-default .nav li a:hover {\n    color: #1ab394;\n}\n.landing-page .navbar-wrapper .navbar.navbar-scroll {\n    padding-top: 0;\n    padding-bottom: 0px;\n    border-bottom: 1px solid #e7eaec;\n    border-radius: 0;\n}\n.landing-page .nav > li.active {\n    border: none;\n    background: inherit;\n}\n.landing-page .nav > li > a {\n    padding: 25px 10px 15px 10px;\n}\n.landing-page .navbar-scroll .navbar-nav > li > a {\n    padding: 20px 10px;\n}\n.landing-page .navbar-default .navbar-nav > .active > a,\n.landing-page .navbar-default .navbar-nav > .active > a:hover {\n    border-top: 6px solid #1ab394;\n}\n.landing-page .navbar-fixed-top {\n    border: none !important;\n}\n.landing-page .navbar-fixed-top.navbar-scroll {\n    border-bottom: 1px solid #e7eaec !important;\n}\n.landing-page .navbar.navbar-scroll .navbar-brand {\n    margin-top: 15px;\n    border-radius: 5px;\n    font-size: 12px;\n    padding: 10px;\n    height: auto;\n}\n.landing-page .header-back {\n    height: 470px;\n    width: 100%;\n}\n.landing-page .header-back.one {\n    background: url(" + __webpack_require__(58) + ") 50% 0 no-repeat;\n}\n.landing-page .header-back.two {\n    background: url(" + __webpack_require__(59) + ") 50% 0 no-repeat;\n}\n.landing-page .carousel {\n    height: 470px;\n}\n.landing-page .carousel-caption {\n    z-index: 10;\n}\n.landing-page .carousel .item {\n    height: 470px;\n    background-color: #777;\n}\n.landing-page .carousel-inner > .item > img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    min-width: 100%;\n    height: 470px;\n}\n.landing-page .carousel-fade .carousel-inner .item {\n    opacity: 0;\n    -webkit-transition-property: opacity;\n    transition-property: opacity;\n}\n.landing-page .carousel-fade .carousel-inner .active {\n    opacity: 1;\n}\n.landing-page .carousel-fade .carousel-inner .active.left,\n.landing-page .carousel-fade .carousel-inner .active.right {\n    left: 0;\n    opacity: 0;\n    z-index: 1;\n}\n.landing-page .carousel-fade .carousel-inner .next.left,\n.landing-page .carousel-fade .carousel-inner .prev.right {\n    opacity: 1;\n}\n.landing-page .carousel-fade .carousel-control {\n    z-index: 2;\n}\n.landing-page .carousel-control.left,\n.landing-page .carousel-control.right {\n    background: none;\n}\n.landing-page .carousel-control {\n    width: 6%;\n}\n.landing-page .carousel-inner .container {\n    position: relative;\n}\n.landing-page .carousel-inner {\n    overflow: visible;\n}\n.landing-page .carousel-caption {\n    position: absolute;\n    top: 100px;\n    left: 0;\n    bottom: auto;\n    right: auto;\n    text-align: left;\n}\n.landing-page .carousel-caption {\n    position: absolute;\n    top: 100px;\n    left: 0;\n    bottom: auto;\n    right: auto;\n    text-align: left;\n}\n.landing-page .carousel-caption.blank {\n    top: 140px;\n}\n.landing-page .carousel-image {\n    position: absolute;\n    right: 10px;\n    top: 150px;\n}\n.landing-page .carousel-indicators {\n    padding-right: 60px;\n}\n.landing-page .carousel-caption h1 {\n    font-weight: 700;\n    font-size: 38px;\n    text-transform: uppercase;\n    text-shadow: none;\n    letter-spacing: -1.5px;\n}\n.landing-page .carousel-caption p {\n    font-weight: 700;\n    text-transform: uppercase;\n    text-shadow: none;\n}\n.landing-page .caption-link {\n    color: #fff;\n    margin-left: 10px;\n    text-transform: capitalize;\n    font-weight: 400;\n}\n.landing-page .caption-link:hover {\n    text-decoration: none;\n    color: inherit;\n}\n.landing-page .services {\n    padding-top: 60px;\n}\n.landing-page .services h2 {\n    font-size: 20px;\n    letter-spacing: -1px;\n    font-weight: 600;\n    text-transform: uppercase;\n}\n.landing-page .features-block {\n    margin-top: 40px;\n}\n.landing-page .features-text {\n    margin-top: 40px;\n}\n.landing-page .features small {\n    color: #1ab394;\n}\n.landing-page .features h2 {\n    font-size: 18px;\n    margin-top: 5px;\n}\n.landing-page .features-text-alone {\n    margin: 40px 0;\n}\n.landing-page .features-text-alone h1 {\n    font-weight: 200;\n}\n.landing-page .features-icon {\n    color: #1ab394;\n    font-size: 40px;\n}\n.landing-page .navy-section {\n    margin-top: 60px;\n    background: #1ab394;\n    color: #fff;\n    padding: 20px 0;\n}\n.landing-page .gray-section {\n    background: #f4f4f4;\n    margin-top: 60px;\n}\n.landing-page .team-member {\n    text-align: center;\n}\n.landing-page .team-member img {\n    margin: auto;\n}\n.landing-page .social-icon a {\n    background: #1ab394;\n    color: #fff;\n    padding: 4px 8px;\n    height: 28px;\n    width: 28px;\n    display: block;\n    border-radius: 50px;\n}\n.landing-page .social-icon a:hover {\n    background: #179d82;\n}\n.landing-page .img-small {\n    height: 88px;\n    width: 88px;\n}\n.landing-page .pricing-plan {\n    margin: 20px 30px 0 30px;\n    border-radius: 4px;\n}\n.landing-page .pricing-plan.selected {\n    -webkit-transform: scale(1.1);\n        -ms-transform: scale(1.1);\n            transform: scale(1.1);\n    background: #f4f4f4 ;\n}\n.landing-page .pricing-plan li {\n    padding: 10px 16px;\n    border-top: 1px solid #e7eaec;\n    text-align: center;\n    color: #aeaeae;\n}\n.landing-page .pricing-plan .pricing-price span {\n    font-weight: 700;\n    color: #1ab394;\n}\n.landing-page li.pricing-desc {\n    font-size: 13px;\n    border-top: none;\n    padding: 20px 16px ;\n}\n.landing-page li.pricing-title {\n    background: #1ab394;\n    color: #fff;\n    padding: 10px;\n    border-radius: 4px 4px 0 0;\n    font-size: 22px;\n    font-weight: 600;\n}\n.landing-page .testimonials {\n    padding-top: 80px;\n    padding-bottom: 90px;\n    background-color: #1ab394;\n    background-image: url(" + __webpack_require__(57) + ");\n}\n.landing-page .big-icon {\n    font-size: 56px;\n}\n.landing-page .features .big-icon {\n    color: #1ab394;\n}\n.landing-page .contact {\n    background-image: url(" + __webpack_require__(60) + ");\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    margin-top: 60px;\n}\n.landing-page section.timeline {\n    padding-bottom: 30px;\n}\n.landing-page section.comments {\n    padding-bottom: 80px;\n}\n.landing-page .comments-avatar {\n    margin-top: 25px;\n    margin-left: 22px;\n}\n.landing-page .comments-avatar .commens-name {\n    font-weight: 600;\n    font-size: 14px;\n}\n.landing-page .comments-avatar img {\n    width: 42px;\n    height: 42px;\n    border-radius: 50%;\n    margin-right: 10px;\n}\n.landing-page .bubble {\n    position: relative;\n    height: 120px;\n    padding: 20px;\n    background: #FFFFFF;\n    border-radius: 10px;\n    font-style: italic;\n    font-size: 14px;\n}\n.landing-page .bubble:after {\n    content: '';\n    position: absolute;\n    border-style: solid;\n    border-width: 15px 14px 0;\n    border-color: #FFFFFF transparent;\n    display: block;\n    width: 0;\n    z-index: 1;\n    bottom: -15px;\n    left: 30px;\n}\n.landing-page .btn-primary.btn-outline:hover,\n.landing-page .btn-success.btn-outline:hover,\n.landing-page .btn-info.btn-outline:hover,\n.landing-page .btn-warning.btn-outline:hover,\n.landing-page .btn-danger.btn-outline:hover {\n    color: #fff;\n}\n.landing-page .btn-primary {\n    background-color: #1ab394;\n    border-color: #1ab394;\n    color: #FFFFFF;\n    font-size: 14px;\n    padding: 10px 20px;\n    font-weight: 600;\n}\n.landing-page .btn-primary:hover,\n.landing-page .btn-primary:focus,\n.landing-page .btn-primary:active,\n.landing-page .btn-primary.active,\n.landing-page .open .dropdown-toggle.btn-primary {\n    background-color: #179d82;\n    border-color: #179d82;\n    color: #FFFFFF;\n}\n.landing-page .btn-primary:active,\n.landing-page .btn-primary.active,\n.landing-page .open .dropdown-toggle.btn-primary {\n    background-image: none;\n}\n.landing-page .btn-primary.disabled,\n.landing-page .btn-primary.disabled:hover,\n.landing-page .btn-primary.disabled:focus,\n.landing-page .btn-primary.disabled:active,\n.landing-page .btn-primary.disabled.active,\n.landing-page .btn-primary[disabled],\n.landing-page .btn-primary[disabled]:hover,\n.landing-page .btn-primary[disabled]:focus,\n.landing-page .btn-primary[disabled]:active,\n.landing-page .btn-primary.active[disabled],\n.landing-page fieldset[disabled] .btn-primary,\n.landing-page fieldset[disabled] .btn-primary:hover,\n.landing-page fieldset[disabled] .btn-primary:focus,\n.landing-page fieldset[disabled] .btn-primary:active,\n.landing-page fieldset[disabled] .btn-primary.active {\n    background-color: #1dc5a3;\n    border-color: #1dc5a3;\n}\n@media (min-width: 768px) {\n    .landing-page {\n        /* Navbar positioning foo */\n        /* The navbar becomes detached from the top, so we round the corners */\n        /* Bump up size of carousel content */\n    }\n    .landing-page .navbar-wrapper {\n        margin-top: 20px;\n    }\n    .landing-page .navbar-wrapper .container {\n        padding-right: 15px;\n        padding-left: 15px;\n    }\n    .landing-page .navbar-wrapper .navbar {\n        padding-right: 0;\n        padding-left: 0;\n    }\n    .landing-page .navbar-wrapper .navbar {\n        border-radius: 4px;\n    }\n    .landing-page .carousel-caption p {\n        margin-bottom: 20px;\n        font-size: 14px;\n        line-height: 1.4;\n    }\n    .landing-page .featurette-heading {\n        font-size: 50px;\n    }\n}\n@media (max-width: 992px) {\n    .landing-page .carousel-image {\n        display: none;\n    }\n}\n@media (max-width: 768px) {\n    .landing-page .carousel-caption,\n    .landing-page .carousel-caption.blank {\n        left: 5%;\n        top: 80px;\n    }\n    .landing-page .carousel-caption h1 {\n        font-size: 28px;\n    }\n    .landing-page .navbar.navbar-scroll .navbar-brand {\n        margin-top: 6px;\n    }\n    .landing-page .navbar-default {\n        background-color: #fff;\n        border-color: #fff;\n        padding: 15px 0;\n    }\n    .landing-page .navbar-default .navbar-nav > .active > a:focus {\n        background: transparent;\n        color: inherit;\n    }\n    .landing-page .navbar-default .nav li a {\n        color: #676a6c;\n    }\n    .landing-page .navbar-default .nav li a:hover {\n        color: #1ab394;\n    }\n    .landing-page .navbar-wrapper .navbar {\n        padding-top: 0;\n        padding-bottom: 5px;\n        border-bottom: 1px solid #e7eaec;\n        border-radius: 0;\n    }\n    .landing-page .nav > li > a {\n        padding: 25px 10px 15px 10px;\n    }\n    .landing-page .navbar-nav > li > a {\n        padding: 20px 10px;\n    }\n    .landing-page .navbar .navbar-brand {\n        margin-top: 6px;\n        border-radius: 5px;\n        font-size: 12px;\n        padding: 10px;\n        height: auto;\n    }\n    .landing-page .navbar-wrapper .navbar {\n        padding-left: 15px;\n        padding-right: 5px;\n    }\n    .landing-page .navbar-default .navbar-nav > .active > a,\n    .landing-page .navbar-default .navbar-nav > .active > a:hover {\n        color: inherit;\n    }\n    .landing-page .carousel-control {\n        display: none;\n    }\n}\n@media (min-width: 992px) {\n    .landing-page .featurette-heading {\n        margin-top: 120px;\n    }\n}\nbody.rtls {\n    /* Theme config */\n}\nbody.rtls #page-wrapper {\n    margin: 0 220px 0 0;\n}\nbody.rtls .nav-second-level li a {\n    padding: 7px 35px 7px 10px;\n}\nbody.rtls .ibox-title h5 {\n    float: right;\n}\nbody.rtls .pull-right {\n    float: left !important;\n}\nbody.rtls .pull-left {\n    float: right !important;\n}\nbody.rtls .ibox-tools {\n    float: left;\n}\nbody.rtls .stat-percent {\n    float: left;\n}\nbody.rtls .navbar-right {\n    float: left !important;\n}\nbody.rtls .navbar-top-links li:last-child {\n    margin-left: 40px;\n    margin-right: 0;\n}\nbody.rtls .minimalize-styl-2 {\n    float: right;\n    margin: 14px 20px 5px 5px;\n}\nbody.rtls .feed-element > .pull-left {\n    margin-left: 10px;\n    margin-right: 0;\n}\nbody.rtls .timeline-item .date {\n    text-align: left;\n}\nbody.rtls .timeline-item .date i {\n    left: 0;\n    right: auto;\n}\nbody.rtls .timeline-item .content {\n    border-right: 1px solid #e7eaec;\n    border-left: none;\n}\nbody.rtls .theme-config {\n    left: 0;\n    right: auto;\n}\nbody.rtls .spin-icon {\n    border-radius: 0 20px 20px 0;\n}\nbody.rtls .toast-close-button {\n    float: left;\n}\nbody.rtls #toast-container > .toast:before {\n    margin: auto -1.5em auto 0.5em;\n}\nbody.rtls #toast-container > div {\n    padding: 15px 50px 15px 15px;\n}\nbody.rtls .center-orientation .vertical-timeline-icon i {\n    margin-left: 0;\n    margin-right: -12px;\n}\nbody.rtls .vertical-timeline-icon i {\n    right: 50%;\n    left: auto;\n    margin-left: auto;\n    margin-right: -12px;\n}\nbody.rtls .file-box {\n    float: right;\n}\nbody.rtls ul.notes li {\n    float: right;\n}\nbody.rtls .chat-users,\nbody.rtls .chat-statistic {\n    margin-right: -30px;\n    margin-left: auto;\n}\nbody.rtls .dropdown-menu > li > a {\n    text-align: right;\n}\nbody.rtls .b-r {\n    border-left: 1px solid #e7eaec;\n    border-right: none;\n}\nbody.rtls .dd-list .dd-list {\n    padding-right: 30px;\n    padding-left: 0;\n}\nbody.rtls .dd-item > button {\n    float: right;\n}\nbody.rtls .theme-config-box {\n    margin-left: -220px;\n    margin-right: 0;\n}\nbody.rtls .theme-config-box.show {\n    margin-left: 0;\n    margin-right: 0;\n}\nbody.rtls .spin-icon {\n    right: 0;\n    left: auto;\n}\nbody.rtls .skin-setttings {\n    margin-right: 40px;\n    margin-left: 0;\n}\nbody.rtls .skin-setttings {\n    direction: ltr;\n}\nbody.rtls .footer.fixed {\n    margin-right: 220px;\n    margin-left: 0;\n}\n@media (max-width: 992px) {\n    body.rtls .chat-users,\n    body.rtls .chat-statistic {\n        margin-right: 0px;\n    }\n}\nbody.rtls.mini-navbar .footer.fixed,\nbody.body-small.mini-navbar .footer.fixed {\n    margin: 0 70px 0 0;\n}\nbody.rtls.mini-navbar.fixed-sidebar .footer.fixed,\nbody.body-small.mini-navbar .footer.fixed {\n    margin: 0 0 0 0;\n}\nbody.rtls.top-navigation .navbar-toggle {\n    float: right;\n    margin-left: 15px;\n    margin-right: 15px;\n}\n.body-small.rtls.top-navigation .navbar-header {\n    float: none;\n}\nbody.rtls.top-navigation #page-wrapper {\n    margin: 0;\n}\nbody.rtls.mini-navbar #page-wrapper {\n    margin: 0 70px 0 0;\n}\nbody.rtls.mini-navbar.fixed-sidebar #page-wrapper {\n    margin: 0 0 0 0;\n}\nbody.rtls.body-small.fixed-sidebar.mini-navbar #page-wrapper {\n    margin: 0 220px 0 0;\n}\nbody.rtls.body-small.fixed-sidebar.mini-navbar .navbar-static-side {\n    width: 220px;\n}\n.body-small.rtls .navbar-fixed-top {\n    margin-right: 0px;\n}\n.body-small.rtls .navbar-header {\n    float: right;\n}\nbody.rtls .navbar-top-links li:last-child {\n    margin-left: 20px;\n}\nbody.rtls .top-navigation #page-wrapper,\nbody.rtls.mini-navbar .top-navigation #page-wrapper,\nbody.rtls.mini-navbar.top-navigation #page-wrapper {\n    margin: 0;\n}\nbody.rtls .top-navigation .footer.fixed,\nbody.rtls.top-navigation .footer.fixed {\n    margin: 0;\n}\n@media (max-width: 768px) {\n    body.rtls .navbar-top-links li:last-child {\n        margin-left: 20px;\n    }\n    .body-small.rtls #page-wrapper {\n        position: inherit;\n        margin: 0 0 0 0px;\n        min-height: 1000px;\n    }\n    .body-small.rtls .navbar-static-side {\n        display: none;\n        z-index: 2001;\n        position: absolute;\n        width: 70px;\n    }\n    .body-small.rtls.mini-navbar .navbar-static-side {\n        display: block;\n    }\n    .rtls.fixed-sidebar.body-small .navbar-static-side {\n        display: none;\n        z-index: 2001;\n        position: fixed;\n        width: 220px;\n    }\n    .rtls.fixed-sidebar.body-small.mini-navbar .navbar-static-side {\n        display: block;\n    }\n}\n.rtls .ltr-support {\n    direction: ltr;\n}\n/*\n *\n *   This is style for skin config\n *   Use only in demo theme\n *\n*/\n.theme-config {\n    position: absolute;\n    top: 90px;\n    right: 0px;\n    overflow: hidden;\n}\n.theme-config-box {\n    margin-right: -220px;\n    position: relative;\n    z-index: 2000;\n    -webkit-transition-duration: 0.8s;\n            transition-duration: 0.8s;\n}\n.theme-config-box.show {\n    margin-right: 0px;\n}\n.spin-icon {\n    background: #1ab394;\n    position: absolute;\n    padding: 7px 10px 7px 13px;\n    border-radius: 20px 0px 0px 20px;\n    font-size: 16px;\n    top: 0;\n    left: 0px;\n    width: 40px;\n    color: #fff;\n    cursor: pointer;\n}\n.skin-setttings {\n    width: 220px;\n    margin-left: 40px;\n    background: #f3f3f4;\n}\n.skin-setttings .title {\n    background: #efefef;\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: 600;\n    display: block;\n    padding: 10px 15px;\n    font-size: 12px;\n}\n.setings-item {\n    padding: 10px 30px;\n}\n.setings-item.skin {\n    text-align: center;\n}\n.setings-item .switch {\n    float: right;\n}\n.skin-name a {\n    text-transform: uppercase;\n}\n.setings-item a {\n    color: #fff;\n}\n.default-skin,\n.blue-skin,\n.ultra-skin,\n.yellow-skin {\n    text-align: center;\n}\n.default-skin {\n    font-weight: 600;\n    background: #1ab394;\n}\n.default-skin:hover {\n    background: #199d82;\n}\n.blue-skin {\n    font-weight: 600;\n    background: url(" + __webpack_require__(7) + ") repeat scroll 0 0;\n}\n.blue-skin:hover {\n    background: #0d8ddb;\n}\n.yellow-skin {\n    font-weight: 600;\n    background: url(" + __webpack_require__(9) + ") repeat scroll 0 100%;\n}\n.yellow-skin:hover {\n    background: #ce8735;\n}\n.ultra-skin {\n    font-weight: 600;\n    background: url(" + __webpack_require__(8) + ") repeat scroll 0 0;\n}\n.ultra-skin:hover {\n    background: #1a2d40;\n}\n/*\n *\n *   SKIN 1 - INSPINIA - Responsive Admin Theme\n *   NAME - Blue light\n *\n*/\n.skin-1 .minimalize-styl-2 {\n    margin: 14px 5px 5px 30px;\n}\n.skin-1 .navbar-top-links li:last-child {\n    margin-right: 30px;\n}\n.skin-1.fixed-nav .minimalize-styl-2 {\n    margin: 14px 5px 5px 15px;\n}\n.skin-1 .spin-icon {\n    background: #0e9aef !important;\n}\n.skin-1 .nav-header {\n    background: #0e9aef;\n    background: url(" + __webpack_require__(7) + ");\n}\n.skin-1.mini-navbar .nav-second-level {\n    background: #3e495f;\n}\n.skin-1 .breadcrumb {\n    background: transparent;\n}\n.skin-1 .page-heading {\n    border: none;\n}\n.skin-1 .nav > li.active {\n    background: #3a4459;\n}\n.skin-1 .nav > li > a {\n    color: #9ea6b9;\n}\n.skin-1 .nav > li.active > a {\n    color: #fff;\n}\n.skin-1 .navbar-minimalize {\n    background: #0e9aef;\n    border-color: #0e9aef;\n}\nbody.skin-1 {\n    background: #3e495f;\n}\n.skin-1 .navbar-static-top {\n    background: #ffffff;\n}\n.skin-1 .dashboard-header {\n    background: transparent;\n    border-bottom: none !important;\n    border-top: none;\n    padding: 20px 30px 10px 30px;\n}\n.fixed-nav.skin-1 .navbar-fixed-top {\n    background: #fff;\n}\n.skin-1 .wrapper-content {\n    padding: 30px 15px;\n}\n.skin-1 #page-wrapper {\n    background: #f4f6fa;\n}\n.skin-1 .ibox-title,\n.skin-1 .ibox-content {\n    border-width: 1px;\n}\n.skin-1 .ibox-content:last-child {\n    border-style: solid solid solid solid;\n}\n.skin-1 .nav > li.active {\n    border: none;\n}\n.skin-1 .nav-header {\n    padding: 35px 25px 25px 25px;\n}\n.skin-1 .nav-header a.dropdown-toggle {\n    color: #fff;\n    margin-top: 10px;\n}\n.skin-1 .nav-header a.dropdown-toggle .text-muted {\n    color: #fff;\n    opacity: 0.8;\n}\n.skin-1 .profile-element {\n    text-align: center;\n}\n.skin-1 .img-circle {\n    border-radius: 5px;\n}\n.skin-1 .navbar-default .nav > li > a:hover,\n.skin-1 .navbar-default .nav > li > a:focus {\n    background: #3a4459;\n    color: #fff;\n}\n.skin-1 .nav.nav-tabs > li.active > a {\n    color: #555;\n}\n.skin-1 .nav.nav-tabs > li.active {\n    background: transparent;\n}\n/*\n *\n *   SKIN 2 - INSPINIA - Responsive Admin Theme\n *   NAME - Inspinia Ultra\n *\n*/\nbody.skin-2 {\n    color: #565758 !important;\n}\n.skin-2 .minimalize-styl-2 {\n    margin: 14px 5px 5px 25px;\n}\n.skin-2 .navbar-top-links li:last-child {\n    margin-right: 25px;\n}\n.skin-2 .spin-icon {\n    background: #23c6c8 !important;\n}\n.skin-2 .nav-header {\n    background: #23c6c8;\n    background: url(" + __webpack_require__(8) + ");\n}\n.skin-2.mini-navbar .nav-second-level {\n    background: #ededed;\n}\n.skin-2 .breadcrumb {\n    background: transparent;\n}\n.skin-2.fixed-nav .minimalize-styl-2 {\n    margin: 14px 5px 5px 15px;\n}\n.skin-2 .page-heading {\n    border: none;\n    background: #FFFFFF;\n    background: rgba(255, 255, 255, 0.7);\n}\n.skin-2 .nav > li.active {\n    background: #e0e0e0;\n}\n.skin-2 .logo-element {\n    padding: 17px 0;\n}\n.skin-2 .nav > li > a,\n.skin-2 .welcome-message {\n    color: #edf6ff;\n}\n.skin-2 #top-search::-moz-placeholder {\n    color: #edf6ff;\n    opacity: 0.5;\n}\n.skin-2 #side-menu > li > a,\n.skin-2 .nav.nav-second-level > li > a {\n    color: #586b7d;\n}\n.skin-2 .nav > li.active > a {\n    color: #213a53;\n}\n.skin-2.mini-navbar .nav-header {\n    background: #213a53;\n}\n.skin-2 .navbar-minimalize {\n    background: #23c6c8;\n    border-color: #23c6c8;\n}\n.skin-2 .border-bottom {\n    border-bottom: none !important;\n}\n.skin-2 #top-search {\n    color: #fff;\n}\nbody.skin-2 #wrapper {\n    background-color: #ededed;\n}\n.skin-2 .navbar-static-top {\n    background: #213a53;\n}\n.fixed-nav.skin-2 .navbar-fixed-top {\n    background: #213a53;\n    border-bottom: none !important;\n}\n.skin-2 .nav-header {\n    padding: 30px 25px 30px 25px;\n}\n.skin-2 .dashboard-header {\n    background: #FFFFFF;\n    background: rgba(255, 255, 255, 0.4);\n    border-bottom: none !important;\n    border-top: none;\n    padding: 20px 30px 20px 30px;\n}\n.skin-2 .wrapper-content {\n    padding: 30px 15px;\n}\n.skin-2 .dashoard-1 .wrapper-content {\n    padding: 0px 30px 25px 30px;\n}\n.skin-2 .ibox-title {\n    background: #FFFFFF;\n    background: rgba(255, 255, 255, 0.7);\n    border: none;\n    margin-bottom: 1px;\n}\n.skin-2 .ibox-content {\n    background: #FFFFFF;\n    background: rgba(255, 255, 255, 0.4);\n    border: none !important;\n}\n.skin-2 #page-wrapper {\n    background: #f6f6f6;\n    background: -webkit-radial-gradient(center, ellipse cover, #f6f6f6 20%, #d5d5d5 100%);\n    background: -webkit-radial-gradient(center, ellipse, #f6f6f6 20%, #d5d5d5 100%);\n    background: radial-gradient(ellipse at center, #f6f6f6 20%, #d5d5d5 100%);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#f6f6f6, endColorstr=#d5d5d5)\";\n}\n.skin-2 .ibox-title,\n.skin-2 .ibox-content {\n    border-width: 1px;\n}\n.skin-2 .ibox-content:last-child {\n    border-style: solid solid solid solid;\n}\n.skin-2 .nav > li.active {\n    border: none;\n}\n.skin-2 .nav-header a.dropdown-toggle {\n    color: #edf6ff;\n    margin-top: 10px;\n}\n.skin-2 .nav-header a.dropdown-toggle .text-muted {\n    color: #edf6ff;\n    opacity: 0.8;\n}\n.skin-2 .img-circle {\n    border-radius: 10px;\n}\n.skin-2 .nav.navbar-top-links > li > a:hover,\n.skin-2 .nav.navbar-top-links > li > a:focus {\n    background: #1a2d41;\n}\n.skin-2 .navbar-default .nav > li > a:hover,\n.skin-2 .navbar-default .nav > li > a:focus {\n    background: #e0e0e0;\n    color: #213a53;\n}\n.skin-2 .nav.nav-tabs > li.active > a {\n    color: #555;\n}\n.skin-2 .nav.nav-tabs > li.active {\n    background: transparent;\n}\n/*\n *\n *   SKIN 3 - INSPINIA - Responsive Admin Theme\n *   NAME - Yellow/purple\n *\n*/\n.skin-3 .minimalize-styl-2 {\n    margin: 14px 5px 5px 30px;\n}\n.skin-3 .navbar-top-links li:last-child {\n    margin-right: 30px;\n}\n.skin-3.fixed-nav .minimalize-styl-2 {\n    margin: 14px 5px 5px 15px;\n}\n.skin-3 .spin-icon {\n    background: #ecba52 !important;\n}\nbody.boxed-layout.skin-3 #wrapper {\n    background: #3e2c42;\n}\n.skin-3 .nav-header {\n    background: #ecba52;\n    background: url(" + __webpack_require__(9) + ");\n}\n.skin-3.mini-navbar .nav-second-level {\n    background: #3e2c42;\n}\n.skin-3 .breadcrumb {\n    background: transparent;\n}\n.skin-3 .page-heading {\n    border: none;\n}\n.skin-3 .nav > li.active {\n    background: #38283c;\n}\n.fixed-nav.skin-3 .navbar-fixed-top {\n    background: #fff;\n}\n.skin-3 .nav > li > a {\n    color: #948b96;\n}\n.skin-3 .nav > li.active > a {\n    color: #fff;\n}\n.skin-3 .navbar-minimalize {\n    background: #ecba52;\n    border-color: #ecba52;\n}\nbody.skin-3 {\n    background: #3e2c42;\n}\n.skin-3 .navbar-static-top {\n    background: #ffffff;\n}\n.skin-3 .dashboard-header {\n    background: transparent;\n    border-bottom: none !important;\n    border-top: none;\n    padding: 20px 30px 10px 30px;\n}\n.skin-3 .wrapper-content {\n    padding: 30px 15px;\n}\n.skin-3 #page-wrapper {\n    background: #f4f6fa;\n}\n.skin-3 .ibox-title,\n.skin-3 .ibox-content {\n    border-width: 1px;\n}\n.skin-3 .ibox-content:last-child {\n    border-style: solid solid solid solid;\n}\n.skin-3 .nav > li.active {\n    border: none;\n}\n.skin-3 .nav-header {\n    padding: 35px 25px 25px 25px;\n}\n.skin-3 .nav-header a.dropdown-toggle {\n    color: #fff;\n    margin-top: 10px;\n}\n.skin-3 .nav-header a.dropdown-toggle .text-muted {\n    color: #fff;\n    opacity: 0.8;\n}\n.skin-3 .profile-element {\n    text-align: center;\n}\n.skin-3 .img-circle {\n    border-radius: 5px;\n}\n.skin-3 .navbar-default .nav > li > a:hover,\n.skin-3 .navbar-default .nav > li > a:focus {\n    background: #38283c;\n    color: #fff;\n}\n.skin-3 .nav.nav-tabs > li.active > a {\n    color: #555;\n}\n.skin-3 .nav.nav-tabs > li.active {\n    background: transparent;\n}\n@media (min-width: 768px) {\n    #page-wrapper {\n        position: inherit;\n        margin: 0 0 0 220px;\n        min-height: 1200px;\n    }\n    .navbar-static-side {\n        z-index: 2001;\n        position: absolute;\n        width: 220px;\n    }\n    .navbar-top-links .dropdown-messages,\n    .navbar-top-links .dropdown-tasks,\n    .navbar-top-links .dropdown-alerts {\n        margin-left: auto;\n    }\n}\n@media (max-width: 768px) {\n    #page-wrapper {\n        position: inherit;\n        margin: 0 0 0 0px;\n        min-height: 1000px;\n    }\n    .body-small .navbar-static-side {\n        display: none;\n        z-index: 2001;\n        position: absolute;\n        width: 70px;\n    }\n    .body-small.mini-navbar .navbar-static-side {\n        display: block;\n    }\n    .lock-word {\n        display: none;\n    }\n    .navbar-form-custom {\n        display: none;\n    }\n    .navbar-header {\n        display: inline;\n        float: left;\n    }\n    .sidebard-panel {\n        z-index: 2;\n        position: relative;\n        width: auto;\n        min-height: 100% !important;\n    }\n    .sidebar-content .wrapper {\n        padding-right: 0px;\n        z-index: 1;\n    }\n    .fixed-sidebar.body-small .navbar-static-side {\n        display: none;\n        z-index: 2001;\n        position: fixed;\n        width: 220px;\n    }\n    .fixed-sidebar.body-small.mini-navbar .navbar-static-side {\n        display: block;\n    }\n    .ibox-tools {\n        float: none;\n        text-align: right;\n        display: block;\n    }\n}\n@media (max-width: 350px) {\n    .timeline-item .date {\n        text-align: left;\n        width: 110px;\n        position: relative;\n        padding-top: 30px;\n    }\n    .timeline-item .date i {\n        position: absolute;\n        top: 0;\n        left: 15px;\n        padding: 5px;\n        width: 30px;\n        text-align: center;\n        border: 1px solid #e7eaec;\n        background: #f8f8f8;\n    }\n    .timeline-item .content {\n        border-left: none;\n        border-top: 1px solid #e7eaec;\n        padding-top: 10px;\n        min-height: 100px;\n    }\n    .nav.navbar-top-links li.dropdown {\n        display: none;\n    }\n    .ibox-tools {\n        float: none;\n        text-align: left;\n        display: inline-block;\n    }\n}\n/* Only demo */\n@media (max-width: 1000px) {\n    .welcome-message {\n        display: none;\n    }\n}\n", ""]);
  
  // exports


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "e49d52e74b7689a0727def99da31f3eb.ttf"

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  var isarray = __webpack_require__(50)
  
  /**
   * Expose `pathToRegexp`.
   */
  module.exports = pathToRegexp
  module.exports.parse = parse
  module.exports.compile = compile
  module.exports.tokensToFunction = tokensToFunction
  module.exports.tokensToRegExp = tokensToRegExp
  
  /**
   * The main path matching regexp utility.
   *
   * @type {RegExp}
   */
  var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    '(\\\\.)',
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
    // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
    // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
    '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
  ].join('|'), 'g')
  
  /**
   * Parse a string for the raw tokens.
   *
   * @param  {String} str
   * @return {Array}
   */
  function parse (str) {
    var tokens = []
    var key = 0
    var index = 0
    var path = ''
    var res
  
    while ((res = PATH_REGEXP.exec(str)) != null) {
      var m = res[0]
      var escaped = res[1]
      var offset = res.index
      path += str.slice(index, offset)
      index = offset + m.length
  
      // Ignore already escaped sequences.
      if (escaped) {
        path += escaped[1]
        continue
      }
  
      // Push the current path onto the tokens.
      if (path) {
        tokens.push(path)
        path = ''
      }
  
      var prefix = res[2]
      var name = res[3]
      var capture = res[4]
      var group = res[5]
      var suffix = res[6]
      var asterisk = res[7]
  
      var repeat = suffix === '+' || suffix === '*'
      var optional = suffix === '?' || suffix === '*'
      var delimiter = prefix || '/'
      var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')
  
      tokens.push({
        name: name || key++,
        prefix: prefix || '',
        delimiter: delimiter,
        optional: optional,
        repeat: repeat,
        pattern: escapeGroup(pattern)
      })
    }
  
    // Match any characters still remaining.
    if (index < str.length) {
      path += str.substr(index)
    }
  
    // If the path exists, push it onto the end.
    if (path) {
      tokens.push(path)
    }
  
    return tokens
  }
  
  /**
   * Compile a string to a template function for the path.
   *
   * @param  {String}   str
   * @return {Function}
   */
  function compile (str) {
    return tokensToFunction(parse(str))
  }
  
  /**
   * Expose a method for transforming tokens into the path function.
   */
  function tokensToFunction (tokens) {
    // Compile all the tokens into regexps.
    var matches = new Array(tokens.length)
  
    // Compile all the patterns before compilation.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] === 'object') {
        matches[i] = new RegExp('^' + tokens[i].pattern + '$')
      }
    }
  
    return function (obj) {
      var path = ''
      var data = obj || {}
  
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i]
  
        if (typeof token === 'string') {
          path += token
  
          continue
        }
  
        var value = data[token.name]
        var segment
  
        if (value == null) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to be defined')
          }
        }
  
        if (isarray(value)) {
          if (!token.repeat) {
            throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
          }
  
          if (value.length === 0) {
            if (token.optional) {
              continue
            } else {
              throw new TypeError('Expected "' + token.name + '" to not be empty')
            }
          }
  
          for (var j = 0; j < value.length; j++) {
            segment = encodeURIComponent(value[j])
  
            if (!matches[i].test(segment)) {
              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
            }
  
            path += (j === 0 ? token.prefix : token.delimiter) + segment
          }
  
          continue
        }
  
        segment = encodeURIComponent(value)
  
        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
        }
  
        path += token.prefix + segment
      }
  
      return path
    }
  }
  
  /**
   * Escape a regular expression string.
   *
   * @param  {String} str
   * @return {String}
   */
  function escapeString (str) {
    return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
  }
  
  /**
   * Escape the capturing group by escaping special characters and meaning.
   *
   * @param  {String} group
   * @return {String}
   */
  function escapeGroup (group) {
    return group.replace(/([=!:$\/()])/g, '\\$1')
  }
  
  /**
   * Attach the keys as a property of the regexp.
   *
   * @param  {RegExp} re
   * @param  {Array}  keys
   * @return {RegExp}
   */
  function attachKeys (re, keys) {
    re.keys = keys
    return re
  }
  
  /**
   * Get the flags for a regexp from the options.
   *
   * @param  {Object} options
   * @return {String}
   */
  function flags (options) {
    return options.sensitive ? '' : 'i'
  }
  
  /**
   * Pull out keys from a regexp.
   *
   * @param  {RegExp} path
   * @param  {Array}  keys
   * @return {RegExp}
   */
  function regexpToRegexp (path, keys) {
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g)
  
    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        keys.push({
          name: i,
          prefix: null,
          delimiter: null,
          optional: false,
          repeat: false,
          pattern: null
        })
      }
    }
  
    return attachKeys(path, keys)
  }
  
  /**
   * Transform an array into a regexp.
   *
   * @param  {Array}  path
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function arrayToRegexp (path, keys, options) {
    var parts = []
  
    for (var i = 0; i < path.length; i++) {
      parts.push(pathToRegexp(path[i], keys, options).source)
    }
  
    var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))
  
    return attachKeys(regexp, keys)
  }
  
  /**
   * Create a path regexp from string input.
   *
   * @param  {String} path
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function stringToRegexp (path, keys, options) {
    var tokens = parse(path)
    var re = tokensToRegExp(tokens, options)
  
    // Attach keys back to the regexp.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] !== 'string') {
        keys.push(tokens[i])
      }
    }
  
    return attachKeys(re, keys)
  }
  
  /**
   * Expose a function for taking tokens and returning a RegExp.
   *
   * @param  {Array}  tokens
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function tokensToRegExp (tokens, options) {
    options = options || {}
  
    var strict = options.strict
    var end = options.end !== false
    var route = ''
    var lastToken = tokens[tokens.length - 1]
    var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)
  
    // Iterate over the tokens and create our regexp string.
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]
  
      if (typeof token === 'string') {
        route += escapeString(token)
      } else {
        var prefix = escapeString(token.prefix)
        var capture = token.pattern
  
        if (token.repeat) {
          capture += '(?:' + prefix + capture + ')*'
        }
  
        if (token.optional) {
          if (prefix) {
            capture = '(?:' + prefix + '(' + capture + '))?'
          } else {
            capture = '(' + capture + ')?'
          }
        } else {
          capture = prefix + '(' + capture + ')'
        }
  
        route += capture
      }
    }
  
    // In non-strict mode we allow a slash at the end of match. If the path to
    // match already ends with a slash, we remove it for consistency. The slash
    // is valid at the end of a path match, not in the middle. This is important
    // in non-ending mode, where "/test/" shouldn't match "/test//route".
    if (!strict) {
      route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
    }
  
    if (end) {
      route += '$'
    } else {
      // In non-ending mode, we need the capturing groups to match as much as
      // possible by using a positive lookahead to the end or next path segment.
      route += strict && endsWithSlash ? '' : '(?=\\/|$)'
    }
  
    return new RegExp('^' + route, flags(options))
  }
  
  /**
   * Normalize the given path string, returning a regular expression.
   *
   * An empty array can be passed in for the keys, which will hold the
   * placeholder key descriptions. For example, using `/user/:id`, `keys` will
   * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
   *
   * @param  {(String|RegExp|Array)} path
   * @param  {Array}                 [keys]
   * @param  {Object}                [options]
   * @return {RegExp}
   */
  function pathToRegexp (path, keys, options) {
    keys = keys || []
  
    if (!isarray(keys)) {
      options = keys
      keys = []
    } else if (!options) {
      options = {}
    }
  
    if (path instanceof RegExp) {
      return regexpToRegexp(path, keys, options)
    }
  
    if (isarray(path)) {
      return arrayToRegexp(path, keys, options)
    }
  
    return stringToRegexp(path, keys, options)
  }


/***/ },
/* 50 */
/***/ function(module, exports) {

  module.exports = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "baed69aab6a3873e4e50be657ae0e756.png"

/***/ },
/* 52 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACcCAIAAACbYFK6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAADCBJREFUeNrsnVmy3CASRUlKe+lF9BJ6/7uxuP2hKj0JJOaZJGxH2K6nkuBwc4BE9J///k8s1QD3Rwp8l/x8Onl8AO3vwvq/m+BWgUgpe6BRdICjT1sPSiLL2JQYNJIkiBaXxqBOlpU7yMuAlu7EF0SKEElEJJvhqBQGUcfroG8lLtqSS09NIgJA5Yg87p+I6mskAAHRK4o+97VF9vjVCFoNYoMJd9yPiwYSxQbu1xtEdQ33oYodSyN8xi4ASu1Rr3/trRfsYnxSQkQlbNuFyEoy2T2LuQOdiR5VfyKignpJRDUibgDDjBF8BgUQRNsqLNZ5xt81S+eABsrvRKREtldPcZmWTSzrENlfiidXfHM+4KaLJ7dEV7JQVnJMFn2JvD/axiCmiuWlA4tkJUfGsUygw1yGeKU5w+3pYmqGsjCXT6yQlHkM91zSiPDOZCjzhO0ZspJ9r8QUj28YyhixtGYnkrKSk1rq6OfZtKtQ8hXfBvu8Jg3czc+9ErlXcmGv0Q0lctDtP2lgBdecHu3F0spNVFZypJWYsjL51AkbvHv/6kD9fVhzpDx2Qng+BkIAouxc+nVF6JaL2VZichvuL5Rq/3eMqe6nW/x2+24M7V/M/UTnhRMI1h4eL4obz6XPbo2gBe710o3R7tB2+DXipg039dHg/P7VP9Q0CQ7aYWTGFq5vhsu1zdWkTx+sx2L6027OsdNgBW4foMtvk9QMyWSnEkfx6nNbdrF0ZiUXsdTZiRSBKSF6vonf77sj9ie3qVqbbA5MXuEpoi85IFtWcmEzjUyDVS5PSb1o7Zun+9Sh5IzET5lkHAtoZGkoy2ttCrIvjJr23TTielZyxpWY4kRaZ2/PKzpRWvtOsFcfXeikJyN+00jOfufWyP6hjNJaPcUIu2NAZp71etl7ycTXlWQWE4l0dd30a98knlAVQquwvdP5oq5EBKUYxNJt2Q0Z9JDBef7LLeLG0Gv3PVhtDwsjuXN9+1Kpfd+PwWDLLYoRKYTYqJb3OoEsQClFQsrPTUqJxGLyiZJE2sw3MaOP0c+uIO6Z8yPsObNUTGQakQE+JRW946Esjtp3+flogdH3k0QQt40mxESGZyoy+5T09Gu+UVBK6Vv+zB1Pv60uWJzIPqNvCn9y6mQs8R72/Psnt03buiJ+y/p/f15j+QHlE+ljEZ7Q7S76PsXVlFuqPKKu3sS+B/zIZWc0RlDQhrc3TJ4ygktt5y9CB4UcgwNgP/zLRy4vx7vpaF7o7C1+NwtXUGxWDw9luttAQd4C7jPg3Y5D7fTZbPs+tVD9NO7303LQgs6+nKUVoAwC917GCd9NbEJAQYndVj52jYE01Xw69RPmJz1Ihet+6R3Bcod0xjVe0TGHJ3wfllLKvibuPMH18Ufue9dh2FO8u6eWfykuislbVfgwAm//3mrHoZSyl9s+Fn96j/Epn6gDViMcL0o5UV4xjce01IdSKm5U/Ek15HM+IoUQT9VP9P5rRYX0CJfOi+y7oyLCrOfUkpqhdHbCaNZ7kGHGwAIrjU4kRA4uVQSX6YNan87zKQp870ZEGQpMPLnE+ES6gnEhhFL75xPorOc62DuwRj7pK4rNgc3dxyUSMP0gG/3olh+EeEiqvw1w0deaPOZKW1tn/+i7g61qoQs16VOJbqFtVi6h9v1jP43Ncr5NaZ/Pk9FG3qoU34oUeDuPrf1Helog124qoM9RaiIBylwcb2ENvXxQzUdsGj9tsYPgY4kLvvvQ7dRSLSWwLPYAat/l5nrbwWHEm7wvpss3x8l8ttBUM7v0tm1U5zQLhOoltxPKBi9btaVDE0xyEyKts+y7COnsYebSUErRX6bxzW2ktEDpe4xuzUDNvTjOLcGn7IfUIC6QM7hx3t3T5bHv0Cp7uDmVcur+quvIvnyPe7Fn+XaYsLW2rjVHgrkM9SmnJzLoIN9iXGqVkNwMH0su+dTlubQn1f/9Yy4tXv8NyondSgB+RTtVuHyshFzbj1zOfL+7cc24PCohVyMP9vKg39qmDuV8YukKLJra8WWSl+QE9DJMk9fo+IW6hXfuUUJlz7wDs2z0jaiZXNeOr7nYYzXIctXZyFy2tOB2LuUTxDQFkcgJTnkuOak+vVIiPziFuVxhsYf8DJl8sfhji2Xa4DblknVySqUcQG+sXHKsI5nIBmJp+QZgX14vJRPZIZeLL0LKCHWd0pHsikvfyp7RY51QKIeLdNCsD0upvldlD5tvDm5qYg+l5tNLJEI5TGKoLJEtC4KhlMJUiz2UCOXahrvuQFn0cl9usWd4KGsNWNMKisUqeyQT2QuXtBiXocuMQ7iVE4rHUlxOuKKDVqdZNtXLmSoho5WyV7Gc2sNyHS84vXcp55pjUziXLi4nX4TUSmw5uBkiGAewD7tTHR4fkMMhOUZUUtp9nbiCwlMp+3ErO3OnmurljFzise6bDfdA2E/IZRiUrcWyVyKJuczsm5E3lMREdto3I1VCwhob4NuXJIeZQL1bWWqI/QSLPfgeJERj+JRc4OfFpdox/EN8WwCUTWJwLtH3HVIMUAkJuz2kcCjZcHfuXIq+jxe0OJQ/6aEBoBxQJKnx5cetOLvYYRn4g1Rx2g9quNvnzsbiEsZ7IGW/NzpxVFL42uj5OFZzZC/eZL9QcnCTgcthkurmu2UjoCxswWchkphLX900iJKddfZiglaey04mOUL+R3Y2b8Bc5r18X4s9gBHiiDxQForB2ZUs1PpdhAQevUHJYza9WDbnEoE3L7uZM2Auy+plZ5WQSKlmZCInYb55JaQ2yg8vJkyDMqNbuQaR1AmXnVRCoueXO7FGVuayl0rIlxAnFUoiTlmGUtNHj9VNqsOw3TDWFTtSSpbJVj5CB4s9Xb4Gb1Uiqfl2jfZcuoa+FZSskX1wWVga8JQDcN5hEpTRbiXb7U4a6iTVr18B97xpoJTsSna1raXmYo8zxMkEZaBYMpE1uAy8dsVKSPjcnKz5+Exkp3pZphIS5uj7jX9F881E9gx8uUrIv3GH513JirORW9dGvHglpDcBlaBkwz0E8xkrIfEc4rhviCjHWULuxBATOUgkLrJXQp5DD/gSKWUNpWQkx2rZF3s87eRBZDbzbRFLNtyDeZYluPRIT55EFvcpmchxmU+phLzuDNLOCXISWRZKJnJcz/Joe67FHuvDkdTdSFkOSQZtgomiVCyXfiGOlFKmH0bg5VaySHboWcZdHt/FcUQFrLC+rFxKSdVKbJnImYy4EEIpdSofgkb/XSXl5/MWH2eFkohVck7mf8lL/EiD3089JsyJ6PP52BQ08yMzkZOK5bHYQ96fFkK87b8gKe2UZDbfjOSsXB6Kc920YdfL354g0jRSWjXyaFsMc4Yc0s9wExGb70wMoCDwsdcGlFLktxCIh1jYbwVxS2LoyVNlLqeeKySUggDJzxU9Mmy3FuKQH5FINN90J5JBXKcppXCJx6+qCCGEoUo+RF6dARkFI9l3BvE5Bb17lpT406TORUgTzeNg/V/cTS/JyBNEAEg5iP8NRrx4mdymjMS/Pu8plt9Y+wEGKaVlq44w3gsRACVZ1fHNcDOXyZmM3j2i747g+2Lej7OXeOidxYDoO4Ut4iRRfplEtsvnuJJSuzyCnuvSCRlE2kOOO2NbWb+QiNPprW06ynKJC5e/QU/cPC7frLXvLbmYYyPeAcTmr6f/jMYSQqn9lMP0coYtBSDfbe5sxIeQW3KNEt7HF1D7LmVUgc3b1jUKUcf0b+U2HeN0hC9Z1EdG44gwLJnL/oP91PFGptdJJZj/wO9mLlehGwg4YTDjJt+42cBYjiqT4XwoY52milKyd8nQuiKpOC5l1DQAY8nNE2OES2aDQ1OZyhlkMPyUooJQZoj6WSzHhZbitwk/SGaWwrFc/jBH4sPIJOJtHN7QPHF8ETgZSrtgLhdsFHPape18qePtpelKmX2pkLkcw5skEfcxOAUug1Lyfh8mMu8dAFpZRRiUhUpwWCy7N9tJ0AWgmRJ9M5creZHwFFn4vYvEhqZSpxu6ebLMo7SS7bZmfVDKzP/tWu9iVrJYdkdkTb9VN+XSl1/mchWTHYMTZQ2OZQ9EMpc94ZhV+qIyibKvvmEuG9huKnnxmCZ5lJjIXGKb62qyt6CbxbKu1S4oeNFu5f8HALLoZbZGma/2AAAAAElFTkSuQmCC"

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "ea2316224d45899c59bc285ba09dd920.png"

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "ff423a4251cf2986555523dfe315c42b.svg"

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "fa2772327f55d8198301fdb8bcfc8158.woff"

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "448c34a56d699c29117adc64c43affeb.woff2"

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "c5a509acee8aab3a1f62e16ea1204ffc.png"

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "1faaad354c7843acb688e5c2b14e67ba.jpg"

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "f2f2de96e14a40255e93ab5fab29916b.jpg"

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "925633f6715929c667b2541eb7dad40e.png"

/***/ },
/* 61 */
/***/ function(module, exports) {

  module.exports = require("babel-core/polyfill");

/***/ },
/* 62 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 63 */
/***/ function(module, exports) {

  module.exports = require("eventemitter3");

/***/ },
/* 64 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/emptyFunction");

/***/ },
/* 65 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/invariant");

/***/ },
/* 66 */
/***/ function(module, exports) {

  module.exports = require("front-matter");

/***/ },
/* 67 */
/***/ function(module, exports) {

  module.exports = require("fs");

/***/ },
/* 68 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 69 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 70 */
/***/ function(module, exports) {

  module.exports = require("jade");

/***/ },
/* 71 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 72 */
/***/ function(module, exports) {

  module.exports = require("superagent");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map