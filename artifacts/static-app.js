(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://5ed804fe1aacd5016f1a2d28--serene-swartz-b2538d.netlify.app/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });



/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);


var Event = function Event(catagory) {
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event({
    category: catagory,
    action: "Clicked"
  }); // console.log('GA - ', catagory)
};

/* harmony default export */ __webpack_exports__["a"] = (Event);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _components_helperFuncrtions_AnalyticsEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);



function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 6000;\n\n  &:focus {\n    outline: none;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background: ", ";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n    z-index: 5500;\n\n    :first-child {\n      transform: ", ";\n    }\n\n    :nth-child(2) {\n      opacity: ", ";\n      transform: ", ";\n    }\n\n    :nth-child(3) {\n      transform: ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  background: rgba(255,255,255, 0.8);\n  transform: ", ";\n  height: 100vh;\n  text-align: left;\n  padding: 2rem;\n  top: 0;\n  right: 0;\n  transition: transform 0.3s ease-in-out;\n  z-index: 5000;\n\n  @media (max-width: 576px) {\n    background: rgba(255,255,255, 0.95);\n    padding: 0;\n    width: 100%;\n    }\n\n  a {\n    &:first-child {\n        margin-top: 5rem;\n    }\n    \n    font-size: 2rem;\n    text-transform: uppercase;\n    padding: 1.5rem 0;\n    letter-spacing: 0.5rem;\n    color: ", ";\n    text-decoration: none;\n    transition: color 0.3s linear;\n\n    @media (max-width: 576px) {\n      font-size: 3rem;\n      text-align: center;\n    }\n\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var StyledMenu = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.nav(_templateObject(), function (_ref) {
  var open = _ref.open;
  return open ? 'translateX(0)' : 'translateX(100%)';
}, function (_ref2) {
  var darkGrey = _ref2.theme.darkGrey;
  return darkGrey;
});

var Menu = function Menu(_ref3) {
  var open = _ref3.open,
      setOpen = _ref3.setOpen,
      services = _ref3.services;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledMenu, {
    open: open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_4__[/* Link */ "a"], {
    to: "/",
    onClick: function onClick() {
      setOpen(!open);
      Object(_components_helperFuncrtions_AnalyticsEvents__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])("Top Menu - Home");
    }
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_4__[/* Link */ "a"], {
    to: "/pools",
    onClick: function onClick() {
      setOpen(!open);
      Object(_components_helperFuncrtions_AnalyticsEvents__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])("Top Menu - Pool Gallery");
      services();
    }
  }, "Pool Gallery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_4__[/* Link */ "a"], {
    to: "/pool-installs",
    onClick: function onClick() {
      setOpen(!open);
      Object(_components_helperFuncrtions_AnalyticsEvents__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])("Top Menu - Our Work");
    }
  }, "Our Work"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_4__[/* Link */ "a"], {
    to: "/about",
    onClick: function onClick() {
      Object(_components_helperFuncrtions_AnalyticsEvents__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])("Top Menu - Our Story");
    }
  }, "Our Story"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_4__[/* Link */ "a"], {
    to: "/contact",
    onClick: function onClick() {
      setOpen(!open);
      Object(_components_helperFuncrtions_AnalyticsEvents__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])("Top Menu - Contact Us");
    }
  }, "Contact Us"));
};

var StyledBurger = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button(_templateObject2(), function (_ref4) {
  var black = _ref4.black,
      open = _ref4.open;
  return black ? function (_ref5) {
    var darkGrey = _ref5.theme.darkGrey;
    return darkGrey;
  } : open ? function (_ref6) {
    var darkGrey = _ref6.theme.darkGrey;
    return darkGrey;
  } : function (_ref7) {
    var lightGrey = _ref7.theme.lightGrey;
    return lightGrey;
  };
}, function (_ref8) {
  var open = _ref8.open;
  return open ? 'rotate(45deg)' : 'rotate(0)';
}, function (_ref9) {
  var open = _ref9.open;
  return open ? '0' : '1';
}, function (_ref10) {
  var open = _ref10.open;
  return open ? 'translateX(20px)' : 'translateX(0)';
}, function (_ref11) {
  var open = _ref11.open;
  return open ? 'rotate(-45deg)' : 'rotate(0)';
});

var Burger = function Burger(_ref12) {
  var black = _ref12.black,
      open = _ref12.open,
      setOpen = _ref12.setOpen;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledBurger, {
    black: black,
    style: {
      color: 'black'
    },
    open: open,
    onClick: function onClick() {
      setOpen(!open);
      Object(_components_helperFuncrtions_AnalyticsEvents__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])("Top Menu - Home");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null));
}; // const useOnClickOutside = (ref, handler) => {
//     React.useEffect(() => {
//       const listener = event => {
//         if (!ref.current || ref.current.contains(event.target)) {
//           return;
//         }
//         handler(event);
//       };
//       document.addEventListener('mousedown', listener);
//       return () => {
//         document.removeEventListener('mousedown', listener);
//       };
//     },
//     [ref, handler],
//     );
//   };


var NavBar = function NavBar(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var node = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    ref: node,
    style: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Burger, {
    black: props.black,
    open: open,
    setOpen: setOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Menu, {
    services: props.services,
    style: {
      zIndex: "1000"
    },
    open: open,
    setOpen: setOpen
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (NavBar);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(30);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(72);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(74);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(36);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(37);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(75);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(31);

var _helpers = __webpack_require__(76);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(71)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/LargeLogoBlack.776ca16a.png";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/LargeLogo.25a80f2d.png";

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_helperFuncrtions_AnalyticsEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    position: relative;\n    width: 100%;\n    height: 20rem;\n    color: black;\n    z-index: 10;\n    font-weight: 700;\n    font-size: 2rem;\n    a { color: ", " }\n    text-decoration: underline;\n    ul {\n        padding-inline-start: 0;\n        padding: 3.2rem 0 5.2rem;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 100%;\n        list-style: none;\n        \n        li {\n            display: inline-block;\n        }\n        li {\n            padding-right: 5.2rem;\n        }\n        li:nth-child(3), li:nth-child(4) {\n            padding-right: 0;\n        }\n    }\n    .auana {\n        font-size: 1rem;\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        color: ", ";\n        transform: translateX(-50%);\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var FooterNavContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject(), function (_ref) {
  var light = _ref.light;
  return light ? function (_ref2) {
    var lightGrey = _ref2.theme.lightGrey;
    return lightGrey;
  } : function (_ref3) {
    var highlightSecondary = _ref3.theme.highlightSecondary;
    return highlightSecondary;
  };
}, function (_ref4) {
  var light = _ref4.light;
  return light ? function (_ref5) {
    var lightGrey = _ref5.theme.lightGrey;
    return lightGrey;
  } : function (_ref6) {
    var darkGrey = _ref6.theme.darkGrey;
    return darkGrey;
  };
});

var FooterNav = function FooterNav(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterNavContainer, {
    id: "footer",
    light: props.light
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    style: props.contact ? {
      display: "none"
    } : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
    to: "/contact",
    onClick: function onClick() {
      return Object(_components_helperFuncrtions_AnalyticsEvents__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])("Footer Menu - Contact");
    }
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    style: props.pools ? {
      display: "none"
    } : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
    to: "/pools",
    onClick: function onClick() {
      return Object(_components_helperFuncrtions_AnalyticsEvents__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])("Footer Menu - Pool Gallery");
    }
  }, "Pool Gallery")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    style: props.ourWork ? {
      display: "none"
    } : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
    to: "/pool-installs",
    onClick: function onClick() {
      return Object(_components_helperFuncrtions_AnalyticsEvents__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])("Footer Menu - Our Work");
    }
  }, "Our Work")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    style: props.ourStory ? {
      display: "none"
    } : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
    to: "/about",
    onClick: function onClick() {
      return Object(_components_helperFuncrtions_AnalyticsEvents__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])("Footer Menu - Our Story");
    }
  }, "Our Story"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://auana.ca",
    className: "auana"
  }, "Website by AUANA DIGITAL"));
};

/* harmony default export */ __webpack_exports__["a"] = (FooterNav);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(31);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(73)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Viewpager; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_es_clamp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var lodash_es_clamp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_es_clamp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28);
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_use_gesture__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);




function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n  position: relative;\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n  #project_description {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n  }\n  .main {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    will-change: transform;\n  }\n  .picture {\n    position: relative;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    width: 100%;\n    height: ", ";\n    /* height: ", "px; */\n    will-change: transform;\n  }\n  .split_page {\n    display: flex;\n    flex-flow: row nowrap;\n    width: 100%;\n    height: ", "px;\n    @media( max-width: 1140px ){\n      flex-flow: column-reverse nowrap;\n    }\n  }\n  .left{\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    width: 33%;\n    height: 100%;\n    h1 {text-align: center;}\n    p {\n      width: 80%;\n    }\n    @media( max-width: 1140px ){\n      width: 100%;\n      height: 100%;\n    }\n  }\n  .right{\n    width: 67%;\n    height: ", ";\n    /* height: 100%; */\n    background-size: cover;\n    background-position: center bottom;\n    @media( max-width: 1140px ){\n      width: 100%;\n    }\n  }\n  swipe-gesture {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var ids = __webpack_require__(32);

var swipe = __webpack_require__(44);

__webpack_require__(45);

var ViewPagerContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject(), function (_ref) {
  var height = _ref.height;

  if (height > 500) {
    return "".concat(height, "px");
  } else {
    return "100vh";
  }
}, function (_ref2) {
  var height = _ref2.height;
  return height;
}, function (_ref3) {
  var height = _ref3.height;
  return height;
}, function (_ref4) {
  var width = _ref4.width;
  return width > 1140 ? "100%" : "50%";
});
function Viewpager(props) {
  var index = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(0);

  var _useSprings = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSprings"])(props.projects.length, function (i) {
    return {
      x: i * window.innerWidth,
      sc: 1,
      display: 'block'
    };
  }),
      _useSprings2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useSprings, 2),
      properties = _useSprings2[0],
      set = _useSprings2[1];

  var bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_6__["useGesture"])(function (_ref5) {
    var down = _ref5.down,
        _ref5$delta = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref5.delta, 1),
        xDelta = _ref5$delta[0],
        _ref5$direction = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref5.direction, 1),
        xDir = _ref5$direction[0],
        distance = _ref5.distance,
        cancel = _ref5.cancel;

    if (down && distance > window.innerWidth / 4) cancel(index.current = lodash_es_clamp__WEBPACK_IMPORTED_MODULE_4___default()(index.current + (xDir > 0 ? -1 : 1), 0, props.projects.length - 1));
    set(function (i) {
      if (i < index.current - 1 || i > index.current + 1) return {
        display: 'none'
      };
      var x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
      var sc = down ? 1 - distance / window.innerWidth / 8 : 1;
      return {
        x: x,
        sc: sc,
        display: 'block'
      };
    });
  });
  var viewPagerItems = properties.map(function (_ref6, i) {
    var x = _ref6.x,
        display = _ref6.display,
        sc = _ref6.sc;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, bind(), {
      key: ids.generate(),
      style: {
        display: display,
        transform: x.interpolate(function (x) {
          return "translate3d(".concat(x, "px,0,0)");
        })
      },
      className: "main"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: props.projects[i].title ? "split_page" : ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      id: "project_description",
      className: props.projects[i].title ? "left" : "",
      style: {
        display: props.projects[i].title ? "flex" : "none"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", null, props.projects[i]['title']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, props.projects[i]['description']), props.windowWidth > 1140 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, props.projects[i]['descriptionExtended']) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
      style: {
        backgroundImage: "url(".concat(props.projects[i]['image'])
      },
      className: props.projects[i]['title'] ? "picture right" : "picture"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("swipe-gesture", {
      src: swipe
    }))));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ViewPagerContainer, {
    id: "view-pager",
    width: window.innerWidth,
    height: window.innerHeight
  }, viewPagerItems);
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("lodash-es/clamp");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-use-gesture");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(2);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(6);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(7);

// EXTERNAL MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/components/Router.js
var Router = __webpack_require__(3);

// CONCATENATED MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/containers/Dynamic.js

/* harmony default export */ var Dynamic = (function () {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
});
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);

// CONCATENATED MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/App.js


function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  @font-face {\n    font-family: 'Alegreya Sans SC';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Alegreya Sans SC Light'), local('AlegreyaSansSC-Light'),\n        url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n        url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n    }\n    /* alegreya-sans-sc-regular - latin */\n    @font-face {\n      font-family: 'Alegreya Sans SC';\n      font-style: normal;\n      font-weight: 400;\n      src: local('Alegreya Sans SC Regular'), local('AlegreyaSansSC-Regular'),\n          url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n          url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n    }\n    /* alegreya-sans-sc-700 - latin */\n    @font-face {\n      font-family: 'Alegreya Sans SC';\n      font-style: normal;\n      font-weight: 700;\n      src: local('Alegreya Sans SC Bold'), local('AlegreyaSansSC-Bold'),\n          \n          url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n          url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n    }\n    /* roboto-300 - latin */\n    @font-face {\n      font-family: 'Roboto';\n      font-style: normal;\n      font-weight: 300;\n      src: local('Roboto Light'), local('Roboto-Light'),\n          url('/fonts/roboto-v20-latin/roboto-v20-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n          url('/fonts/roboto-v20-latin/roboto-v20-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n    }\n    /* roboto-regular - latin */\n    @font-face {\n      font-family: 'Roboto';\n      font-style: normal;\n      font-weight: 400;\n      src: local('Roboto'), local('Roboto-Regular'),\n          url('/fonts/roboto-v20-latin/roboto-v20-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n          url('/fonts/roboto-v20-latin/roboto-v20-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n  } \n\n  * {\n    scroll-behavior: smooth;\n  }\n  html {\n    font-size: 62.5%;\n    /* @media(min-width: 534px) {\n      font-size: 70%;\n    }  */\n    @media(min-width: 1575px) {\n      font-size: 80%;\n    } \n  \n    body {\n      /* // font-family: 'Oswald', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; */\n      box-sizing: border-box;\n      font-family: 'Alegreya Sans SC', sans-serif;\n\n      font-weight: 300;\n      line-height: 2.6rem;\n      letter-spacing: .1rem;\n      font-size: 1.6rem;\n      margin: 0;\n      padding: 0;\n      color: black;\n      h1 {\n        font-weight: bold;\n        color: black;\n      }\n      p {\n        font-family: 'Roboto', sans-serif;\n        line-height: 2.6rem;\n\n      }\n      @media(min-width: 775px) {\n       /* p { font-size: 4rem; } */\n      } \n    }\n    \n  }\n  \n  a {\n    text-decoration: none;\n    color: white;\n  }\n\n  img {\n    max-width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);
var theme = {
  // Global
  fontSize: "1.25rem",
  headerPadding: "5.2rem 0 2rem",
  // Colours
  mainColour: "#1372B0",
  darkGrey: "#3b4145",
  lightGrey: "#f9f9fa",
  highlight: "#8AD30D",
  // highlightSecondary: "#C5893D",
  highlightSecondary: "#E6AD65",
  // Pool Page
  poolPageBackground: "#2C5E7E",
  lineHeight: "2.6rem"
};
var GlobalStyle = Object(external_styled_components_["createGlobalStyle"])(_templateObject());
var trackingId = "UA-153961441-2";
external_react_ga_default.a.initialize(trackingId);

function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Head"], null, /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:locale",
    content: "en_CA"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:title",
    content: "Your London & Area Pool Buider"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:site_name",
    content: "Countryside Landscape and Pools"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:description",
    content: "We install quality in-ground swimming pools, lap pools and water features in the London Ontario area"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:url",
    content: "https://countrysidelandscape.ca"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:image",
    content: "https://countrysidelandscape.ca/ogImage.jpg"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:image:secure_url",
    content: "https://countrysidelandscape.ca/ogImage.jpg"
  }), /*#__PURE__*/external_react_default.a.createElement("title", null, "Your London & Area Pool Builder")), /*#__PURE__*/external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
    theme: theme
  }, /*#__PURE__*/external_react_default.a.createElement(GlobalStyle, null), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("em", null, "Loading...")
  }, /*#__PURE__*/external_react_default.a.createElement(Router["b" /* Router */], null, /*#__PURE__*/external_react_default.a.createElement(Dynamic, {
    path: "dynamic"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  }))))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(30);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(18);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("short-id");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("/Users/rickheffren/WebDevelopment/CountrysideLandscape/node_modules/react-static/lib/browser");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _containers_navigation_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _containers_navigation_footerNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var _images_backgrounds_about_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54);
/* harmony import */ var _images_backgrounds_about_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_backgrounds_about_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_backgrounds_aboutLarge_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55);
/* harmony import */ var _images_backgrounds_aboutLarge_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_backgrounds_aboutLarge_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_logos_LargeLogoBlack_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13);
/* harmony import */ var _images_logos_LargeLogoBlack_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_logos_LargeLogoBlack_png__WEBPACK_IMPORTED_MODULE_10__);


function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  box-shadow: 0px 0px 75px 0px rgba(0,0,0,0.85);\n  border-radius: 15rem;\n  object-fit: cover;\n  width: 25rem;\n  margin: 4rem auto 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 95%;\n  margin: auto;\n  z-index: 2;\n  h1 {\n    color: ", ";\n    text-align: center;\n    padding: ", ";\n  }\n  b {\n    font-weight: 700;\n  }\n  &:first-child {\n    margin-top: 30rem;\n  }\n  &:last-child {\n    padding-bottom: 8rem;\n  }\n  @media(min-width: 775px){\n    width: 65%;\n\n  }\n  @media(min-width: 875px){\n    \n    width: 60rem;\n    h1 { \n      text-align: left;\n    }\n    \n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 25rem;\n  min-height: 9rem;\n  margin-top: 3rem;\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center center;\n  @media(min-width: 1081px) {\n    margin-top: 1rem;\n    position:absolute;\n    top: 0;\n    left: 49%;\n    transform: translateX(-50%);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  position: relative;\n  width: 100%;\n  height: 9rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media(min-width: 735px){\n    justify-content: flex-start;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  position: relative;\n  background-image: url(", ");\n  background-size: contain;\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-color: #FBFBFB;\n  /* background-color: ", "; */\n  color: ", ";\n  max-width: 100%;\n  overflow-x: hidden;\n  .headline { padding: 110vw 0 0; }\n  h1 { color: ", "; }\n  @media(min-width: 1081px) {\n    background-image: url(", ");\n    .headline { \n      padding: 30vw 0 9rem; \n      display: flex;\n      justify-content: center;\n      h1 { \n        width: 30rem;\n        font-size: 5.2rem; \n        border-radius: 10px; \n        padding: 1.5rem;\n        color: ", ";\n        background-color: rgba(19, 114, 176, .5);\n        }\n    }\n    .shadow {\n      position: absolute;\n      z-index: 1;\n      width: 79.4%;\n      left: 50%;\n      top: 10.05vw;\n      transform: translateX(calc(-50%));\n      height: 93%;\n      box-shadow: 0px 0px 75px 0px rgba(0,0,0,0.75);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







 // require('../components/lazyLoad.js')



 // Styles

var PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject(), _images_backgrounds_about_jpg__WEBPACK_IMPORTED_MODULE_8___default.a, function (_ref) {
  var lightGrey = _ref.theme.lightGrey;
  return lightGrey;
}, function (_ref2) {
  var darkGrey = _ref2.theme.darkGrey;
  return darkGrey;
}, function (_ref3) {
  var darkGrey = _ref3.theme.darkGrey;
  return darkGrey;
}, _images_backgrounds_aboutLarge_jpg__WEBPACK_IMPORTED_MODULE_9___default.a, function (_ref4) {
  var lightGrey = _ref4.theme.lightGrey;
  return lightGrey;
});
var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3(), _images_logos_LargeLogoBlack_png__WEBPACK_IMPORTED_MODULE_10___default.a);
var TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4(), function (_ref5) {
  var darkGrey = _ref5.theme.darkGrey;
  return darkGrey;
}, function (_ref6) {
  var headerPadding = _ref6.theme.headerPadding;
  return headerPadding;
});
var Photo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img(_templateObject5());
function About() {
  var ourStoryContent = Object(react_static__WEBPACK_IMPORTED_MODULE_4__["useRouteData"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_navigation_navbar__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    black: true,
    style: {
      zIndex: "1000"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Logo, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "shadow"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "headline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      textAlign: "center"
    }
  }, "Our Story")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: '100%',
      textAlign: 'center',
      paddingBottom: "3.2rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Photo, {
    src: "".concat(ourStoryContent[0].headShotPhoto.fields.file.url, "?w=300&fl=progressive")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, ourStoryContent[0].name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: ourStoryContent[0].bioText
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: '100%',
      textAlign: 'center',
      padding: "3.2rem 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Photo, {
    src: "".concat(ourStoryContent[1].headShotPhoto.fields.file.url, "?w=300&fl=progressive")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, ourStoryContent[1].name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: ourStoryContent[1].bioText
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Our Mission"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "At Countryside Landscape, we hire only the best employees and provide excellent service to our vast clientele. Whether your project scope is a small pocket garden in a downtown location or a sprawling country estate, we are committed to excellence in every stage of our project. We are confident that the design resolution will be unique to your property and incorporate your requirements in a seamless manner to allow you your own slice of paradise. Our mission then is to provide you an exciting & effortless experience throughout the planning & construction phases and get you outside enjoying your tailored garden.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Our Commitment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "It is imperative to provide safe working practices for our employees, and safe working environments for our clients. We endeavour to assemble a staff of sincere, hardworking individuals so that we may be accountable to each other and our clients. We know the importance of listening, understanding and the value of supporting each other through teamwork. We not only teach, but we learn from others \u2013 we build together.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Our Vision"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "To assemble a friendly, professional staff who will cater to our clients\u2019 needs by offering services and products that create beautiful outdoor living spaces.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_navigation_footerNav__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    ourStory: true
  }));
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _artibot_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84);
/* harmony import */ var _artibot_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_artibot_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _containers_navigation_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _components_helperFuncrtions_AnalyticsEvents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _images_logos_LargeLogoBlack_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
/* harmony import */ var _images_logos_LargeLogoBlack_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_logos_LargeLogoBlack_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_backgrounds_contact_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56);
/* harmony import */ var _images_backgrounds_contact_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_backgrounds_contact_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_backgrounds_contactLarge_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57);
/* harmony import */ var _images_backgrounds_contactLarge_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_backgrounds_contactLarge_jpg__WEBPACK_IMPORTED_MODULE_10__);



function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  position: relative;\n  left: 50%;\n  top: 3rem;\n  transform: translateX(-50%);\n  h2:first-of-type { padding-bottom: 3rem; }\n  h2, a { \n    color: ", "; \n    font-size: 1.75rem;\n  }\n  a { font-size: 2rem; }\n  width: 23rem;\n  @media(min-width: 635px){\n    /* left: 50%;\n    transform: translateX(-50%); */\n  }\n  @media(min-width: 1575px){\n   h2 { margin: 0 }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  background-color: rgba(255,255,255, .1);\n  color: ", ";\n  border: none;\n  border-radius: 4px;\n  margin-top: 1.5rem;\n  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.1);\n  font-size: 1.75rem;\n  z-index: 200;\n  width: 11rem;\n  height: 4rem;\n  &:hover {\n    transform: scale(1.2)\n  }\n  &:focus {\n    outline: none;\n  }\n  @media(min-width: 1575px){\n    background-color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  margin:  0 auto 5rem;\n  width: 25rem;\n  min-height: 9rem;\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center center;\n  @media(min-width: 1575px){\n    margin-bottom: 2rem;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  position: absolute;  \n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 95%;\n  text-align: center;\n  p {\n    margin-top: 0;\n    color: ", ";\n    font-weight: 400;\n    font-family: 'Alegreya Sans SC';\n    font-size: 4rem;\n  }\n  @media(min-width: 635px){\n    p { text-shadow: 2px 2px 1px  rgba(0,0,0, 0.5); }\n    top: 60%;\n  }\n  @media(min-width: 1575px){\n    top: 66%;\n    p { margin-bottom: 1rem; }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    background-image: url(", ");\n    background-size: cover;\n    @media(max-height: 575px ) {\n      height: 70rem;\n      background-repeat: no-repeat;\n  }\n    @media(min-width: 1150px) {\n      background-image: url(", ");\n\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  height: ", "px;\n  text-align: center;\n  @media(max-height: 575px ) {\n    height: 70rem;\n    position: relative;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









 // Style

var PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject(), function (props) {
  return props.vh;
});
var BackgroundContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2(), _images_backgrounds_contact_jpg__WEBPACK_IMPORTED_MODULE_9___default.a, _images_backgrounds_contactLarge_jpg__WEBPACK_IMPORTED_MODULE_10___default.a);
var TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3(), function (_ref) {
  var lightGrey = _ref.theme.lightGrey;
  return lightGrey;
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject4(), _images_logos_LargeLogoBlack_png__WEBPACK_IMPORTED_MODULE_8___default.a);
var ContactButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button(_templateObject5(), function (_ref2) {
  var lightGrey = _ref2.theme.lightGrey;
  return lightGrey;
}, function (_ref3) {
  var highlight = _ref3.theme.highlight;
  return highlight;
});
var FooterTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject6(), function (_ref4) {
  var lightGrey = _ref4.theme.lightGrey;
  return lightGrey;
});
function Contact() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      viewHeight = _useState2[0],
      setViewHeight = _useState2[1];

  var handleResize = function handleResize(ele) {
    setViewHeight(ele);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    handleResize(window.innerHeight);
    window.addEventListener('resize', handleResize(window.innerHeight));

    window.onorientationchange = function () {
      return setViewHeight(null);
    };

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.id = "artibot";
    script.setAttribute('crossorigin', 'SameSite=None');
    script.innerHTML = "!function(t,e){t.artibotApi={l:[],t:[],on:function(){this.l.push(arguments)},trigger:function(){this.t.push(arguments)}};var a=!1,i=e.createElement('script');i.async=!0,i.type='text/javascript',i.src='https://app.artibot.ai/loader.js',e.getElementsByTagName('head').item(0).appendChild(i),i.onreadystatechange=i.onload=function(){if(!(a||this.readyState&&'loaded'!=this.readyState&&'complete'!=this.readyState)){new window.ArtiBot({i:'10b60f1d-af20-48f5-8fe2-d77ec70d0158'});a=!0}}}(window,document);";
    document.body.appendChild(script);
    return function () {
      window.removeEventListener('resize', handleResize(window.innerHeight));
      window.onorientationchange = null;
    };
  }, [setViewHeight]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PageContainer, {
    vh: viewHeight
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_navigation_navbar__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    style: {
      zIndex: "1000"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackgroundContainer, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_4__[/* Link */ "a"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Logo, {
    vh: viewHeight
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "It's your space"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ContactButton, {
    className: "artibot-button-expand"
  }, "QUOTE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FooterTextContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    style: {
      fontSize: "2.5rem"
    }
  }, "505 Talbot St. E. Aylmer, ON"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    style: {
      textAlign: "left"
    }
  }, "VINCE", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: function onClick() {
      return Object(_components_helperFuncrtions_AnalyticsEvents__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])("Contact Phone - Vince");
    },
    href: "tel: 519-403-5699",
    style: {
      "float": "right"
    }
  }, "(519) 403-5699")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    style: {
      textAlign: "left"
    }
  }, "JOHN", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: function onClick() {
      return Object(_components_helperFuncrtions_AnalyticsEvents__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])("Contact Phone - John");
    },
    href: "tel: 519-619-9593",
    style: {
      "float": "right"
    }
  }, "(519) 619-9593")))));
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _containers_navigation_navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var _images_logos_LargeLogoBlack_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
/* harmony import */ var _images_logos_LargeLogoBlack_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_logos_LargeLogoBlack_png__WEBPACK_IMPORTED_MODULE_8__);


function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    background-color: ", ";\n    width: 65%;\n    margin: auto;\n    text-align: center;\n    padding-top: 4.5rem;\n    h2 {\n        text-align: center;\n    }\n    @media(max-width: 1068px) {\n        grid-template-columns: 1fr 1fr;\n    }\n    @media(max-width: 700px) {\n       width: 100%;\n    }\n    @media(max-width: 454px) {\n        display: block;\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    object-fit: cover;\n    height: 14rem;\n    max-width: 21rem;\n    @media(max-width: 454px) {\n        max-width:400px;\n        width: 95%;\n        height: 100%;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n p {\n     color: ", ";\n     text-align: center;\n     margin-top: 0;\n     margin-bottom: 45px;\n }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n   width: 25rem;\n    min-height: 9rem;\n    padding-top: 1rem;\n    padding-bottom: 2rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    h1, h2 {\n        text-align: center;\n    }\n    .instagram-container {\n        width: 65%;\n        margin: auto;\n    }\n    .auana {\n        position: absolute;\n        font-size: 1rem;\n        color: ", ";\n        left: 50%;\n        transform: translateX(-50%);\n        }\n    @media(max-width: 700px) {\n        .instagram-container {\n            width: 100%;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var ids = __webpack_require__(32);

var PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject(), function (_ref) {
  var darkGrey = _ref.theme.darkGrey;
  return darkGrey;
});
var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img.attrs({
  src: _images_logos_LargeLogoBlack_png__WEBPACK_IMPORTED_MODULE_8___default.a
})(_templateObject3());
var GridImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject4(), function (_ref2) {
  var darkGrey = _ref2.theme.darkGrey;
  return darkGrey;
});
var GridImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img(_templateObject5());
var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject6(), function (_ref3) {
  var lightGrey = _ref3.theme.lightGrey;
  return lightGrey;
});

var PoolGallery = function PoolGallery(props) {
  var pageImages = Object(react_static__WEBPACK_IMPORTED_MODULE_4__["useRouteData"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    react_ga__WEBPACK_IMPORTED_MODULE_6___default.a.set({
      page: window.location.pathname
    });
    react_ga__WEBPACK_IMPORTED_MODULE_6___default.a.pageview(window.location.pathname);
    var script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);
    console.log(props.match); // document.querySelector('iframe').setAttribute('style', 'height: 14rem !important; width: 100%; border: none;');
    // console.log('Data in: ', pageImages)
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageContainer, {
    className: "page-container",
    style: {
      position: "relative",
      overflowX: "hidden"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_navigation_navbar__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    black: true,
    style: {
      zIndex: "1000"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Logo, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Our Showcase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentContainer, null, pageImages[1][1].map(function (each, index) {
    var str = each.title;
    var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    str = str.replace(regex, '');
    var title = str.replace(/\s+/g, '-').toLowerCase();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
      key: ids.generate(),
      to: "/pools?id=".concat(index, "&job=").concat(title)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
      bottom: true,
      cascade: true,
      delay: index * 200
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GridImageContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GridImage, {
      src: "".concat(each.image[1].fields.file.url, "?w=400"),
      alt: each.title
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, each.title))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
    bottom: true,
    delay: 1500
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Check us out on Instagram!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "instagram-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "//lightwidget.com/widgets/7a72f762c64e5a61add84c71b1a0ef17.html",
    title: "Instagram Widget",
    scrolling: "no",
    allowtransparency: "true",
    className: "lightwidget-widget",
    style: {
      width: '100%',
      border: '0',
      overflow: 'hidden'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://auana.ca",
    className: "auana"
  }, "Website by AUANA DIGITAL")));
};

/* harmony default export */ __webpack_exports__["default"] = (PoolGallery);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _containers_navigation_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _containers_springs_ViewPagerServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_logos_LargeLogo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15);
/* harmony import */ var _images_logos_LargeLogo_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_logos_LargeLogo_png__WEBPACK_IMPORTED_MODULE_9__);



function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n    position: absolute;\n    width: 100vw;\n    height: 13rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow-x: hidden;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n    position: absolute;\n    left: 50%;\n    top: 2rem;\n    transform: translateX(-50%);\n    width: 25rem;\n    height: 9rem;\n    background-image: url(", ");\n    background-size: cover;\n    background-position: center center;\n    z-index: 100;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n    position: relative;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    display: flex;\n    flex-flow: column nowrap;\n    width: 100vw;\n    height: ", ";\n    .back-button {\n        position: absolute;\n        left: 1rem;\n        bottom: 1rem;\n        font-weight: 600;\n        background-color: ", ";\n        box-shadow: 0 2px 14px rgba(0,0,0,.35);\n        padding: .25rem .5rem;\n        z-index: 1000;\n    }\n    /* height: ", "px; */\n    max-height: 100vh;\n    h1, h3, a {color: ", "; }\n    .full_page {\n        display: none;\n        width: 100%;\n        height: ", "px;\n        border: 3px solid blue;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







 // import Fade from 'react-reveal/Fade';

 //Styles

var PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject(), function (_ref) {
  var height = _ref.height;

  if (height > 500) {
    return "".concat(height, "px");
  } else {
    return "100vh";
  }
}, function (_ref2) {
  var lightGrey = _ref2.theme.lightGrey;
  return lightGrey;
}, function (_ref3) {
  var height = _ref3.height;
  return height;
}, function (_ref4) {
  var darkGrey = _ref4.theme.darkGrey;
  return darkGrey;
}, function (_ref5) {
  var height = _ref5.height;
  return height;
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject2(), _images_logos_LargeLogo_png__WEBPACK_IMPORTED_MODULE_9___default.a);
var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject3());

var Services = function Services(props) {
  var pageImages = Object(react_static__WEBPACK_IMPORTED_MODULE_6__["useRouteData"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      images = _useState2[0],
      setImages = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      projects = _useState4[0],
      setProjects = _useState4[1];

  var handlePageChange = function handlePageChange() {
    window.location.href = "/pools";
  }; // const [loaded, setLoaded] = useState(false)


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    react_ga__WEBPACK_IMPORTED_MODULE_4___default.a.set({
      page: window.location.pathname
    });
    react_ga__WEBPACK_IMPORTED_MODULE_4___default.a.pageview(window.location.pathname);
    var imageArray = [];

    if (pageImages[0][1]) {
      pageImages[0][1].forEach(function (each) {
        var image = {
          title: each.shortTitle,
          description: each.shortDescriptionOfImage,
          image: "".concat(each.full1920x1280.fields.file.url, "?w=1920&q=40&fl=progressive")
        };
        imageArray.push(image);
      });
    }

    setImages(imageArray);
    var projectArray = [];
    var params = new URLSearchParams(window.location.search);
    var images = pageImages[1][1][params.get('id')];

    if (images) {
      for (var i = 0; i < images.image.length; i++) {
        var image = {};

        if (i === 0) {
          image.title = images.title;
          image.description = images.description;
          image.descriptionExtended = images.descriptionExtended;
          image.image = "".concat(images.image[i].fields.file.url, "?w=1920&q=40&fl=progressive");
        } else {
          image.title = null;
          image.image = "".concat(images.image[i].fields.file.url, "?w=1920&q=40&fl=progressive");
        }

        projectArray.push(image);
      }
    }

    setProjects(projectArray);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PageContainer, {
    height: window.innerHeight
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_6__["Head"], null, images ? images.map(function (each, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
      key: "".concat(i, "_link"),
      rel: "preload",
      as: "image",
      href: each.image
    });
  }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HeaderContainer, {
    id: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Logo, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_navigation_navbar__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    services: handlePageChange,
    style: {
      zIndex: "1000"
    }
  }), projects ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_springs_ViewPagerServices__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    id: "view_pager",
    images: pageImages[0],
    projects: projects
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    to: "/pool-gallery",
    className: "back-button"
  }, "Go Back"));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/swipe-left.5008926a.png";

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SwipeGesture = /*#__PURE__*/function (_HTMLElement) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(SwipeGesture, _HTMLElement);

  var _super = _createSuper(SwipeGesture);

  function SwipeGesture() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SwipeGesture);

    _this = _super.call(this);

    var _shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    _shadowRoot.innerHTML = "      \n      <style>\n        img {\n          animation: swipeGesture 2s ease-in-out infinite;\n          width: 3rem;\n        }\n        @keyframes swipeGesture {\n          0%      { transform: translateX(50px); }\n          50%     { transform: translateX(-50px); }\n          100%    { transform: translateX(50px); }\n        }\n      </style>      \n      <img alt=\"swipe gesture\"></img>   \n  ";
    _this.$imageSrc = _shadowRoot.querySelector('img');
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SwipeGesture, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldVal, newVal) {
      this[name] = newVal;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.$imageSrc.setAttribute('src', this.src);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['src'];
    }
  }]);

  return SwipeGesture;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default()(HTMLElement));

if (!customElements.get('swipe-gesture')) {
  window.customElements.define('swipe-gesture', SwipeGesture);
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _containers_navigation_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _containers_springs_ViewPagerServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_logos_LargeLogo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15);
/* harmony import */ var _images_logos_LargeLogo_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_logos_LargeLogo_png__WEBPACK_IMPORTED_MODULE_9__);



function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n    position: absolute;\n    width: 100vw;\n    height: 13rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow-x: hidden;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n    position: absolute;\n    left: 50%;\n    top: 2rem;\n    transform: translateX(-50%);\n    width: 25rem;\n    height: 9rem;\n    background-image: url(", ");\n    background-size: cover;\n    background-position: center center;\n    z-index: 100;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n    position: relative;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    display: flex;\n    flex-flow: column nowrap;\n    width: 100vw;\n    height: ", ";\n    \n    /* height: ", "px; */\n    max-height: 100vh;\n    h1 {color: ", "; }\n    h3 {\n        color: ", ";\n    }\n    .full_page {\n        display: none;\n        width: 100%;\n        height: ", "px;\n        border: 3px solid blue;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







 // import Fade from 'react-reveal/Fade';

 //Styles

var PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject(), function (_ref) {
  var height = _ref.height;

  if (height > 500) {
    return "".concat(height, "px");
  } else {
    return "100vh";
  }
}, function (_ref2) {
  var height = _ref2.height;
  return height;
}, function (_ref3) {
  var darkGrey = _ref3.theme.darkGrey;
  return darkGrey;
}, function (_ref4) {
  var darkGrey = _ref4.theme.darkGrey;
  return darkGrey;
}, function (_ref5) {
  var height = _ref5.height;
  return height;
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject2(), _images_logos_LargeLogo_png__WEBPACK_IMPORTED_MODULE_9___default.a);
var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject3());

var Services = function Services() {
  var pageImages = Object(react_static__WEBPACK_IMPORTED_MODULE_6__["useRouteData"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      images = _useState2[0],
      setImages = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      projects = _useState4[0],
      setProjects = _useState4[1];

  var handlePageChange = function handlePageChange() {
    window.location.href = "/pools";
  }; // const [loaded, setLoaded] = useState(false)


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    react_ga__WEBPACK_IMPORTED_MODULE_4___default.a.set({
      page: window.location.pathname
    });
    react_ga__WEBPACK_IMPORTED_MODULE_4___default.a.pageview(window.location.pathname);
    var imageArray = [];

    if (pageImages[0][1]) {
      pageImages[0][1].forEach(function (each) {
        var image = {
          title: each.shortTitle,
          description: each.shortDescriptionOfImage,
          image: "".concat(each.full1920x1280.fields.file.url, "?w=1920&q=40&fl=progressive")
        };
        imageArray.push(image);
      });
    }

    setImages(imageArray);
    var projectArray = [];

    if (pageImages[1][1]) {
      pageImages[1][1].forEach(function (each) {
        for (var i = 0; i < each.image.length; i++) {
          var image = {};

          if (i === 0) {
            image.title = each.title;
            image.description = each.description;
            image.descriptionExtended = each.descriptionExtended;
            image.image = "".concat(each.image[i].fields.file.url, "?w=1920&q=40&fl=progressive");
          } else {
            image.title = null;
            image.image = "".concat(each.image[i].fields.file.url, "?w=1920&q=40&fl=progressive");
          }

          projectArray.push(image);
        }
      });
    }

    setProjects(projectArray);
  }, []); // const imageLoaded = () => {
  //     setLoaded(true)
  // }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PageContainer, {
    height: window.innerHeight
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_6__["Head"], null, images ? images.map(function (each, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
      key: "".concat(i, "_link"),
      rel: "preload",
      as: "image",
      href: each.image
    });
  }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HeaderContainer, {
    id: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Logo, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_navigation_navbar__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    services: handlePageChange,
    style: {
      zIndex: "1000"
    }
  }), projects ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_springs_ViewPagerServices__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    id: "view_pager",
    images: pageImages[0],
    projects: projects
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _containers_navigation_navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var _containers_navigation_footerNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _images_logos_LargeLogoBlack_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var _images_logos_LargeLogoBlack_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_logos_LargeLogoBlack_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_CountrysideWarranty_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62);
/* harmony import */ var _images_CountrysideWarranty_md__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_CountrysideWarranty_md__WEBPACK_IMPORTED_MODULE_10__);



function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  width: 95%;\n  margin: auto;\n  z-index: 2;\n  h1 {\n    color: ", ";\n    text-align: center;\n    padding: ", ";\n  }\n  b {\n    font-weight: 700;\n  }\n\n  @media(min-width: 775px){\n    width: 65%;\n\n  }\n  @media(min-width: 875px){\n    \n    width: 60rem;\n    h1 { \n      text-align: left;\n    }\n    \n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  width: 25rem;\n  min-height: 9rem;\n  margin-top: 3rem;\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center center;\n  @media(min-width: 1081px) {\n    margin-top: 1rem;\n    position:absolute;\n    top: 0;\n    left: 49%;\n    transform: translateX(-50%);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  position: relative;\n  width: 100%;\n  height: 9rem;\n  display: flex;\n  margin-bottom: 8rem;\n  align-items: center;\n  justify-content: center;\n  @media(min-width: 735px){\n    justify-content: flex-start;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  position: relative;\n  background-color: ", ";\n  color: ", ";\n  max-width: 100%;\n  overflow-x: hidden;\n  .headline { padding: 110vw 0 0; }\n  h1 { color: ", "; }\n \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









 // Styles

var PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject(), function (_ref) {
  var lightGrey = _ref.theme.lightGrey;
  return lightGrey;
}, function (_ref2) {
  var darkGrey = _ref2.theme.darkGrey;
  return darkGrey;
}, function (_ref3) {
  var darkGrey = _ref3.theme.darkGrey;
  return darkGrey;
});
var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3(), _images_logos_LargeLogoBlack_png__WEBPACK_IMPORTED_MODULE_9___default.a);
var TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject4(), function (_ref4) {
  var darkGrey = _ref4.theme.darkGrey;
  return darkGrey;
}, function (_ref5) {
  var headerPadding = _ref5.theme.headerPadding;
  return headerPadding;
});
function About() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      terms = _useState2[0],
      setTerms = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    react_ga__WEBPACK_IMPORTED_MODULE_5___default.a.set({
      page: window.location.pathname
    });
    react_ga__WEBPACK_IMPORTED_MODULE_5___default.a.pageview(window.location.pathname);
    fetch(_images_CountrysideWarranty_md__WEBPACK_IMPORTED_MODULE_10___default.a).then(function (response) {
      return response.text().then(function (text) {
        setTerms(text);
      });
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PageContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HeaderContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_navigation_navbar__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    black: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_4__[/* Link */ "a"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Logo, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "markdown",
    escapeHtml: false
  }, terms)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_navigation_footerNav__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    ourStory: true
  }));
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(4);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(2);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(7);

// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(6);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);

// EXTERNAL MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/components/helperFuncrtions/AnalyticsEvents.js
var AnalyticsEvents = __webpack_require__(5);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(25);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "react-spring"
var external_react_spring_ = __webpack_require__(11);

// EXTERNAL MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/containers/springs/ken-burns/ken_burns.css
var ken_burns = __webpack_require__(85);

// CONCATENATED MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/containers/springs/ken-burns/kenBurns.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // Globals.injectFrame(
//     x => requestAnimationFrame(x),
//     x => cancelAnimationFrame(x)
//   );

var kenBurns_Image = function Image(_ref) {
  var url = _ref.url,
      duration = _ref.duration;
  var props = Object(external_react_spring_["useSpring"])({
    from: {
      transform: 'scale(1) translateX(0%)'
    },
    to: {
      transform: 'scale(1.5) translateX(0%)'
    },
    config: {
      duration: duration + 1
    }
  });
  return /*#__PURE__*/external_react_default.a.createElement(external_react_spring_["animated"].div, {
    className: "bg",
    style: _objectSpread(_objectSpread({}, props), {}, {
      backgroundImage: url,
      filter: "brightness(85%)"
    })
  });
};

function KenBurns(props) {
  var homePageSliderImages = props.images;
  var slides = [];
  homePageSliderImages.forEach(function (each, i) {
    slides.push({
      id: i,
      url: "".concat(each, "?w=1920&q=40&fl=progressive")
    });
  });
  var duration = 10000;

  var _useState = Object(external_react_["useState"])(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      index = _useState2[0],
      set = _useState2[1];

  var transitions = Object(external_react_spring_["useTransition"])(slides[index], function (item) {
    return item.id;
  }, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: external_react_spring_["config"].molasses
  }, []);
  Object(external_react_["useEffect"])(function () {
    var interval = setInterval(function () {
      return set(function (state) {
        return (state + 1) % homePageSliderImages.length;
      });
    }, duration);
    return function () {
      return clearInterval(interval);
    };
  }, [homePageSliderImages.length, homePageSliderImages]); // useEffect( () => {
  //     let toPreload = []
  //     homePageSliderImages.forEach( link => {
  //         toPreload.push([ `${link}?w=1920&q=40&fl=progressive` ])
  //     })
  //     // console.log(toPreload)
  //     var head = document.getElementsByTagName('head')[0];
  //     toPreload.forEach( each => {
  //         var link = document.createElement('link');
  //         link.rel = 'preload'
  //         link.as = 'image'
  //         link.href = each
  //         head.appendChild(link);
  //     })
  // }, [homePageSliderImages])

  return transitions.map(function (_ref2) {
    var item = _ref2.item,
        props = _ref2.props,
        key = _ref2.key;
    return /*#__PURE__*/external_react_default.a.createElement(external_react_spring_["animated"].div, {
      key: key,
      style: _objectSpread({}, props)
    }, /*#__PURE__*/external_react_default.a.createElement(kenBurns_Image, {
      url: "url(".concat(item.url),
      duration: duration
    }));
  });
}
// EXTERNAL MODULE: external "react-browser-detection"
var external_react_browser_detection_ = __webpack_require__(58);
var external_react_browser_detection_default = /*#__PURE__*/__webpack_require__.n(external_react_browser_detection_);

// EXTERNAL MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/components/Router.js
var Router = __webpack_require__(3);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/containers/home/BannerNav.js


function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    margin-bottom: -4rem;\n    padding: 0;\n    padding-top: ", ";\n    display: flex;\n    justify-content: center;\n    li {\n        a { \n            color: white; \n            text-shadow: 2px 2px 1px  rgba(0,0,0, 0.5);\n            font-weight: 700;\n        }\n        font-size: 1.3rem;\n        list-style-type:none;\n        display: inline-block;\n        padding: 0 .8rem;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var NavList = external_styled_components_default.a.ul(_templateObject(), function (props) {
  return props.secondary ? "0" : "1.2rem";
});
function BannerNav(props) {
  return /*#__PURE__*/external_react_default.a.createElement(NavList, {
    secondary: props.secondary
  }, /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/about",
    onClick: function onClick() {
      return Object(AnalyticsEvents["a" /* default */])("Home Center Nav - Our Story");
    }
  }, "OUR STORY")), /*#__PURE__*/external_react_default.a.createElement("li", {
    style: {
      fontSize: "2rem",
      marginTop: "-.1rem",
      fontWeight: "bold"
    }
  }, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/pool-installs",
    onClick: function onClick() {
      return Object(AnalyticsEvents["a" /* default */])("Home Center Nav - Our Work");
    },
    "ga-on": "click",
    "ga-event-category": "our-work",
    style: {
      color: "#93D40A"
    }
  }, "OUR WORK")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/contact",
    onClick: function onClick() {
      return Object(AnalyticsEvents["a" /* default */])("Home Center Nav - Contact");
    }
  }, "CONTACT")));
}
// CONCATENATED MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/containers/home/BannerText.js


function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    position: relative;\n    margin: 1rem auto 1rem;\n    right: 1rem;\n    width: 25rem;\n    min-height: 9rem;\n    background-image: url(", ");\n    background-size: cover;\n    background-position: center center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function BannerText_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    color: white;\n    z-index: 2;\n    width: 85%;\n\n    position: absolute;\n    top: ", ";\n    left: 50%;\n    transform: translate(-50%, -100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    h1 {\n        margin-bottom: 0;\n        width: 100%;\n        font-size: 3rem;\n        font-weight: 300 !important;\n        text-align: center;\n    }\n"]);

  BannerText_templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var logo = __webpack_require__(15); // styles


var TextContainer = external_styled_components_default.a.div(BannerText_templateObject(), function (props) {
  return props.secondary ? "0" : "50%";
});
var Logo = external_styled_components_default.a.div(_templateObject2(), logo);
function Banner(props) {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Logo, null), /*#__PURE__*/external_react_default.a.createElement(TextContainer, null, /*#__PURE__*/external_react_default.a.createElement("h1", null, "Your London & Area Pool Builder"), /*#__PURE__*/external_react_default.a.createElement(BannerNav, null)));
}
// EXTERNAL MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/containers/navigation/navbar.js
var navbar = __webpack_require__(10);

// CONCATENATED MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/components/spashScreen.js


function _templateObject9() {
  var data = taggedTemplateLiteral_default()(["\n        display: block;\n        position: relative;\n        margin: 0px auto;\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = taggedTemplateLiteral_default()(["\n    margin-left: -35px;\n    position: absolute;\n    width: 70px;height: 60px;\n    border-radius:100%;\n    background-image: -webkit-linear-gradient(bottom,rgba(255,255,255,0) 30%,rgba(255,255,255,0.6) 100%);\n    left:50%;top:0px;\n    color:rgba(238,238,238,0);\n    text-shadow: -1px -1px 1px rgba(255,255,255,0.4);\n    font-weight:bold;\n    text-align: center;\n    margin-top: 10px;\n    line-height:80px;\n    font-size:20px;\n    font-family:\"tahoma\"; \n    &:after{\n        content:\"\";\n        position: absolute;\n        width: 200px;height: 30px;\n        margin: 80px 0px 0px -130px ;\n        background-image: radial-gradient(\n        center,rgba(0,0,0,1) 0%,rgba(0,0,0,0) 50%   \n        );\n        border-radius:100%;\n    }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n    width: 100px;\n    height: 100px;\n    border-radius:100%;\n    background-image: -webkit-linear-gradient(top,#0099cc 50%,#808080 50%);\n    background-size:40px 200px; \n    box-shadow: inset 0px 0px 30px 5px rgba(0,0,238,0.314);\n    margin: 50px auto;\n    overflow: hidden;\n    transform-origin:center center;  \n    animation: ", " 1.5s infinite;\n    animation-timing-function:linear;\n\n    &:after{\n        content:\"\";\n        width: 98px;\n        height: 20px;\n        border-radius:100%;\n        background-color:#0067b6;\n        position: absolute;  \n        top:90px; \n        margin: 5px 0px;\n        transform-origin:center center;  \n        animation: ", " 1.5s infinite;\n        animation-timing-function:linear;\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = taggedTemplateLiteral_default()([" \n    {\n        0%   { \n                background-position:0px 100px;\n            }\n\n        50%  { \n                background-position:0px 50px;\n            }\n        100% {\n                background-position:0px 0px;\n            } \n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = taggedTemplateLiteral_default()([" \n    {\n        0%  {transform: scale(0.45);\n            opacity:0.5; \n            transform-origin:center center;\n            top:80px; \n            }\n        50%{ transform: scale(1.01);\n            transform-origin:center center;\n            top:40px;\n            opacity:1; \n\n        }\n        100% {transform: scale(0.7);\n            transform-origin:center center;\n            top:-10px;\n            opacity:0;\n        } \n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    background-image: url(", ");\n    background-size: cover;\n    position: relative;\n    right: 1rem;\n    margin:  1rem auto;\n    width: 25rem;\n    height: 9rem;\n  \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function spashScreen_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    position: relative;\n    margin: 0;\n    width: 100%;\n    height: 100vh;\n    overflow: hidden;\n    background-color: #FFFFFA;\n    animation: ", " 1.5s linear;\n    animation-fill-mode: forwards;\n"]);

  spashScreen_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function spashScreen_templateObject() {
  var data = taggedTemplateLiteral_default()([" \n0%      { opacity: 1 }\n75%     { opacity: 1 }\n100%    { opacity: 0 } \n"]);

  spashScreen_templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var spashScreen_logo = __webpack_require__(15);

var fadeOut = Object(external_styled_components_["keyframes"])(spashScreen_templateObject());
var PageContainer = external_styled_components_default.a.div(spashScreen_templateObject2(), fadeOut);
var SplashContainer = external_styled_components_default.a.div(_templateObject3());
var spashScreen_Logo = external_styled_components_default.a.div(_templateObject4(), spashScreen_logo);
var fillAnim = Object(external_styled_components_["keyframes"])(_templateObject5());
var fillBc = Object(external_styled_components_["keyframes"])(_templateObject6());
var Bowl = external_styled_components_default.a.div(_templateObject7(), fillBc, fillAnim);
var SphereRef = external_styled_components_default.a.div(_templateObject8());
var Mana = external_styled_components_default.a.div(_templateObject9());

var spashScreen_SplashScreen = function SplashScreen() {
  return /*#__PURE__*/external_react_default.a.createElement(PageContainer, null, /*#__PURE__*/external_react_default.a.createElement(spashScreen_Logo, null), /*#__PURE__*/external_react_default.a.createElement(SplashContainer, null, /*#__PURE__*/external_react_default.a.createElement(Mana, null, /*#__PURE__*/external_react_default.a.createElement(Bowl, null), /*#__PURE__*/external_react_default.a.createElement(SphereRef, null))));
};

/* harmony default export */ var spashScreen = (spashScreen_SplashScreen);
// EXTERNAL MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/images/icons/instagram.png
var instagram = __webpack_require__(59);
var instagram_default = /*#__PURE__*/__webpack_require__.n(instagram);

// EXTERNAL MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/images/icons/facebook.png
var facebook = __webpack_require__(60);
var facebook_default = /*#__PURE__*/__webpack_require__.n(facebook);

// CONCATENATED MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/pages/index.js



function pages_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  width: 100vw;\n  height: ", "px;\n  overflow: hidden;\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center center;\n"]);

  pages_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function pages_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\nposition: absolute;\ntext-align: center;\nbottom: 0;\nwidth: 100%;\n"]);

  pages_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function pages_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  position: fixed;\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh;\n  height: ", ";\n  min-height: 550px;\n  h1 { color: white; }\n  animation: ", " 1.5s linear;\n"]);

  pages_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function pages_templateObject() {
  var data = taggedTemplateLiteral_default()(["\nfrom: { opacity: 0 }\nto:   { opacity: 1 }\n"]);

  pages_templateObject = function _templateObject() {
    return data;
  };

  return data;
}












 // Styles

var fadeIn = Object(external_styled_components_["keyframes"])(pages_templateObject());
var Container = external_styled_components_default.a.div(pages_templateObject2(), function (props) {
  if (props.vh > 500) {
    return "".concat(props.vh, "px");
  } else {
    return "100vh";
  }
}, fadeIn);
var SocialIcons = external_styled_components_default.a.div(pages_templateObject3());
var FireFoxHome = external_styled_components_default.a.div(pages_templateObject4(), function (props) {
  return props.vh;
}, function (_ref) {
  var image = _ref.image;
  return image;
});

function Home() {
  var homePageSliderImages = Object(external_react_static_["useRouteData"])();

  var _useState = Object(external_react_["useState"])(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      viewHeight = _useState2[0],
      setViewHeight = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(0),
      _useState4 = slicedToArray_default()(_useState3, 2),
      browser = _useState4[0],
      setBrowser = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(true),
      _useState6 = slicedToArray_default()(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(false),
      _useState8 = slicedToArray_default()(_useState7, 2),
      firefox = _useState8[0],
      setFirefox = _useState8[1];

  var browserHandler = {
    "default": function _default(browser) {
      if (browser === "firefox") {
        setFirefox(true);
        return null;
      } else {
        return null;
      }
    }
  };

  var handleHeight = function handleHeight(ele) {
    setViewHeight(ele);
  };

  Object(external_react_["useEffect"])(function () {
    external_react_ga_default.a.set({
      page: window.location.pathname
    });
    external_react_ga_default.a.pageview(window.location.pathname); // let toPreload = []
    // homePageSliderImages.items.forEach( link => {
    //     toPreload.push([ `${link}?w=1920&q=40&fl=progressive` ])
    // })
    // var head = document.getElementsByTagName('head')[0];
    // toPreload.forEach( each => {
    //     var link = document.createElement('link');
    //     link.rel = 'preload'
    //     link.as = 'image'
    //     link.href = each
    //     head.appendChild(link);
    // })

    handleHeight(window.innerHeight);
    window.addEventListener('resize', handleHeight(window.innerHeight));

    window.onorientationchange = function () {
      return handleHeight(null);
    };

    setBrowser( /*#__PURE__*/external_react_default.a.createElement(external_react_browser_detection_default.a, null, browserHandler));
    setTimeout(function () {
      setLoading(false);
    }, 1500);
    return function () {
      window.removeEventListener('resize', handleHeight(window.innerHeight));
      window.onorientationchange = null;
    };
  }, []);
  var page = /*#__PURE__*/external_react_default.a.createElement(Container, {
    vh: viewHeight,
    style: {
      position: "relative",
      overflowX: "hidden"
    }
  }, browser, /*#__PURE__*/external_react_default.a.createElement(navbar["a" /* default */], {
    style: {
      zIndex: "1000"
    }
  }), firefox ? /*#__PURE__*/external_react_default.a.createElement(FireFoxHome, {
    vh: viewHeight,
    image: homePageSliderImages.items[0]
  }) : /*#__PURE__*/external_react_default.a.createElement(KenBurns, {
    images: homePageSliderImages.items
  }), /*#__PURE__*/external_react_default.a.createElement(Banner, null), /*#__PURE__*/external_react_default.a.createElement(SocialIcons, null, /*#__PURE__*/external_react_default.a.createElement("a", {
    onClick: function onClick() {
      return Object(AnalyticsEvents["a" /* default */])("Home - Instagram Link");
    },
    href: "https://www.instagram.com/countrysidelandscapeaylmer/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: instagram_default.a,
    style: {
      width: "4rem",
      margin: "1rem"
    },
    alt: "Instagram icon"
  })), /*#__PURE__*/external_react_default.a.createElement("a", {
    onClick: function onClick() {
      return Object(AnalyticsEvents["a" /* default */])("Home - Facebook Link");
    },
    href: "https://www.facebook.com/pages/category/Landscape-Company/Countryside-Landscape-1484042294955435/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: facebook_default.a,
    style: {
      width: "4rem",
      margin: "1rem"
    },
    alt: "Facebook icon"
  }))));
  return loading ? /*#__PURE__*/external_react_default.a.createElement(spashScreen, null) : page;
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Pools; });

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(4);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(2);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/components/Router.js
var Router = __webpack_require__(3);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(7);

// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(6);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);

// EXTERNAL MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/containers/navigation/navbar.js
var navbar = __webpack_require__(10);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(19);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "lodash-es/clamp"
var clamp_ = __webpack_require__(27);
var clamp_default = /*#__PURE__*/__webpack_require__.n(clamp_);

// EXTERNAL MODULE: external "react-spring"
var external_react_spring_ = __webpack_require__(11);

// EXTERNAL MODULE: external "react-use-gesture"
var external_react_use_gesture_ = __webpack_require__(28);

// EXTERNAL MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/components/helperFuncrtions/AnalyticsEvents.js
var AnalyticsEvents = __webpack_require__(5);

// CONCATENATED MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/containers/springs/view-pager.js




function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  width: 100%;\n  height: 91%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 10px;\n  background-color: rgba(0,0,0,.25);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  & > div {\n    position: absolute;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    will-change: transform;\n    &  > a > p {\n      position: relative; \n      bottom: 1rem;\n      padding-bottom: 0;\n      text-align: center;\n    }\n  }\n  & > div > div {\n    border-radius: 10px;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    width: 100%;\n    height: 64%;\n    will-change: transform;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var swipe = __webpack_require__(44);

var poster = __webpack_require__(86);

var ids = __webpack_require__(32);

__webpack_require__(45);

var ViewPagerContainer = external_styled_components_default.a.div(_templateObject());
var VideoContainer = external_styled_components_default.a.video(_templateObject2());
function Viewpager(propsFrom) {
  var processContentfulImages = function processContentfulImages(images) {
    var pages = [];
    Object.keys(images).forEach(function (each) {
      pages.push([each, "".concat(images[each][0]['full1920x1280'].fields.file.url, "?fm=jpg&w=800&q=50&fl=progressive")]);
    });
    setPages(pages);
  };

  var processInstagramImages = function processInstagramImages(images) {
    var pages = [];
    Object.keys(images).forEach(function (each) {
      pages.push([images[each].caption, "".concat(images[each].media_url), images[each].media_type, images[each].permalink]);
    });
    setPages(pages);
  };

  var _useState = Object(external_react_["useState"])(propsFrom.slideType),
      _useState2 = slicedToArray_default()(_useState, 1),
      passedType = _useState2[0];

  var _useState3 = Object(external_react_["useState"])(propsFrom.slideImages),
      _useState4 = slicedToArray_default()(_useState3, 1),
      passedImages = _useState4[0];

  var _useState5 = Object(external_react_["useState"])([]),
      _useState6 = slicedToArray_default()(_useState5, 2),
      pages = _useState6[0],
      setPages = _useState6[1];

  Object(external_react_["useEffect"])(function () {
    var waitingForContent = true;

    if (waitingForContent) {
      if (passedType === "contentful") {
        if (passedImages && passedType === "contentful") {
          processContentfulImages(passedImages);
        }
      }

      if (passedType === "instagram") {
        if (passedImages) {
          processInstagramImages(passedImages.data.data);
        }
      }
    }

    return function () {
      return waitingForContent = false;
    };
  }, []);
  var divWidth = propsFrom.width + 5;
  var index = Object(external_react_["useRef"])(0);

  var _useSprings = Object(external_react_spring_["useSprings"])(pages.length, function (i) {
    return {
      x: i * divWidth,
      sc: 1,
      display: 'block'
    };
  }),
      _useSprings2 = slicedToArray_default()(_useSprings, 2),
      props = _useSprings2[0],
      set = _useSprings2[1];

  var bind = Object(external_react_use_gesture_["useGesture"])(function (_ref) {
    var down = _ref.down,
        _ref$delta = slicedToArray_default()(_ref.delta, 1),
        xDelta = _ref$delta[0],
        _ref$direction = slicedToArray_default()(_ref.direction, 1),
        xDir = _ref$direction[0],
        distance = _ref.distance,
        cancel = _ref.cancel;

    if (down && distance > divWidth / 4) cancel(index.current = clamp_default()(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1));
    set(function (i) {
      if (i < index.current - 1 || i > index.current + 1) return {
        display: 'none'
      };
      var x = (i - index.current) * divWidth + (down ? xDelta : 0);
      var sc = down ? 1 - distance / divWidth / 2 : 1;
      return {
        x: x,
        sc: sc,
        display: 'block'
      };
    });
  });
  var viewPagerItems = props.map(function (_ref2, i) {
    var x = _ref2.x,
        display = _ref2.display,
        sc = _ref2.sc;
    return /*#__PURE__*/external_react_default.a.createElement(external_react_spring_["animated"].div, extends_default()({}, bind(), {
      key: ids.generate(),
      style: {
        transform: x.interpolate(function (x) {
          return "translate3d(".concat(x, "px,0,0)");
        })
      }
    }), passedType === "contentful" ? /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
      key: "".concat(i, "_link"),
      to: passedType === "contentful" ? "/".concat(pages[i][0]) : "/pool-installs",
      onClick: function onClick() {
        Object(AnalyticsEvents["a" /* default */])("Our Work - ".concat(pages[i][0] ? pages[i][0] : "", " slider clicked"));
      }
    }, /*#__PURE__*/external_react_default.a.createElement("h2", {
      style: {
        textAlign: "center",
        textTransform: "capitalize",
        textDecoration: "underline"
      }
    }, pages[i][0])) : null, passedType === "instagram" ? /*#__PURE__*/external_react_default.a.createElement("h2", null, "Swipe through our Instagram Feed!") : null, /*#__PURE__*/external_react_default.a.createElement(external_react_spring_["animated"].div, {
      style: {
        transform: sc.interpolate(function (s) {
          return "scale(".concat(s, ")");
        }),
        backgroundImage: pages[i][2] !== "VIDEO" ? "url(".concat(pages[i][1], ")") : "unset"
      }
    }, pages[i][2] === "VIDEO" ? /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(VideoContainer, {
      controls: true,
      width: "250",
      type: "video/mp4",
      poster: poster,
      src: pages[i][1],
      preload: "metadata"
    })) : ""), passedType === "instagram" ? /*#__PURE__*/external_react_default.a.createElement("a", {
      key: "".concat(i, "_link"),
      target: "_blank",
      rel: "noopener noreferrer",
      href: "".concat(pages[i][3])
    }, /*#__PURE__*/external_react_default.a.createElement("p", null, pages[i][0].substring(0, 100), pages[i][0].length > 100 ? /*#__PURE__*/external_react_default.a.createElement("span", {
      style: {
        textTransform: 'underline'
      }
    }, " ...Read More") : "")) : null, passedType === "contentful" ? /*#__PURE__*/external_react_default.a.createElement("swipe-gesture", {
      src: swipe
    }) : null);
  });
  return /*#__PURE__*/external_react_default.a.createElement(ViewPagerContainer, {
    id: "view-pager"
  }, viewPagerItems);
}
// CONCATENATED MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/components/helperFuncrtions/getInstagram.js
var axios = __webpack_require__(87)["default"];

var GetInstagramFeed = function GetInstagramFeed() {
  return axios.get('https://graph.instagram.com/me/media?fields=id,caption,permalink,media_url,media_type&access_token=IGQVJYUlhGNF9CSzV5bkhBVXgxNHRwaGRjOXdWazVIaHc2WmFxQkRPRzAwb2tXbTd5TWdJdG4zQ1E3YW9mb3hBcnJmb1pvSmt5Qkozb3A2M3poMEdCazRyV05lYnlsc2V5VWtzbGlB').then(function (response) {
    return response;
  })["catch"](function (error) {
    console.log('error: ', error);
  });
};

/* harmony default export */ var getInstagram = (GetInstagramFeed);
// EXTERNAL MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/containers/navigation/footerNav.js
var footerNav = __webpack_require__(16);

// CONCATENATED MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/containers/pools/TextContainer.js


function TextContainer_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\nborder-radius: 2rem;\nmargin: auto;\nposition: relative;\nh1 { color: ", "}; \ncolor: ", ";\ntext-align: center;\nh2 { padding: ", "}\np, h2 { \n    text-align: left;\n    color: ", ";\n}\nimg { \n    width: 5rem;\n    animation: ", " 2s ease-in-out infinite;\n}\nli {\n    font-family: 'Roboto',sans-serif;\n    text-align: left;\n}\n\n&#one { \n    padding-top: 76vw; \n    a { \n        display: block;\n        margin: 5.2rem 0; \n        @media( max-width: 1295px ) {\n            margin-bottom: 2rem;\n        }\n    }\n}\n@media( min-width: 675px ) {\n    &#one { padding-top: 62vw; }\n    width: 48rem;\n}\n@media( min-width: 875px ) {\n    h1 { text-align: left }\n    width: 60rem;\n}\n@media( min-width: 950px ) {\n    &#one {\n        padding-top: 48vw;\n    }\n    width: 65%;\n}\n@media( min-width: 1295px ) {\n    padding: 0 1rem;\n    height: 20rem;\n    \n    background-color: rgba(0,0,0,.05);\n    h1 { text-align: center; }\n    h2 {\n        padding: 0;\n    }\n    margin-top: 0;\n    width: 95%;\n    &#one { \n        padding-top: 0;\n        grid-column: 1/6; \n        grid-row: 1;\n        background-color: unset;\n        a { margin: 0; }\n    }\n    &#two { \n        height: 40.75rem;\n        grid-column: 4/6;\n        grid-row: 2/4;\n        p { padding-bottom: 0; }\n        img { \n            position: relative; \n        }\n    }\n    &#three { \n        height: 40rem;\n        grid-column: 1/3;\n        grid-row: 4/6;\n    }\n    &#four { \n        grid-column: 1/4;\n        grid-row: 2;\n    }\n    &#five { \n        grid-column: 1/4;\n        grid-row: 3;\n    }\n    &#six { \n        height: 40rem;\n        grid-column: 3/6;\n        grid-row: 4/6;\n    }\n    &#seven { \n        grid-column: 1/6;\n        grid-row: 8;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 75.5vw;\n        @media(min-width: 2300px ){\n            width: 98%;\n        }\n    }\n}\n"]);

  TextContainer_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function TextContainer_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n0%      { transform: translateX(50px) }\n50%     { transform: translateX(-50px) }\n100%    { transform: translateX(50px) }\n"]);

  TextContainer_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var swipeGesture = Object(external_styled_components_["keyframes"])(TextContainer_templateObject());
var TextContainer = external_styled_components_default.a.div(TextContainer_templateObject2(), function (_ref) {
  var lightGrey = _ref.theme.lightGrey;
  return lightGrey;
}, function (_ref2) {
  var lightGrey = _ref2.theme.lightGrey;
  return lightGrey;
}, function (_ref3) {
  var headerPadding = _ref3.theme.headerPadding;
  return headerPadding;
}, function (_ref4) {
  var lightGrey = _ref4.theme.lightGrey;
  return lightGrey;
}, swipeGesture);
/* harmony default export */ var pools_TextContainer = (function (props) {
  return /*#__PURE__*/external_react_default.a.createElement(TextContainer, {
    id: props.id
  }, props.children);
});
// EXTERNAL MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/public/Leisure Pools Consumer Brochure 2019-0424.pdf
var Leisure_Pools_Consumer_Brochure_2019_0424 = __webpack_require__(63);
var Leisure_Pools_Consumer_Brochure_2019_0424_default = /*#__PURE__*/__webpack_require__.n(Leisure_Pools_Consumer_Brochure_2019_0424);

// EXTERNAL MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/images/backgrounds/poolPage.jpg
var poolPage = __webpack_require__(64);
var poolPage_default = /*#__PURE__*/__webpack_require__.n(poolPage);

// EXTERNAL MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/images/backgrounds/poolPage_2360.jpg
var poolPage_2360 = __webpack_require__(65);
var poolPage_2360_default = /*#__PURE__*/__webpack_require__.n(poolPage_2360);

// EXTERNAL MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/images/logos/LargeLogoBlack.png
var LargeLogoBlack = __webpack_require__(13);
var LargeLogoBlack_default = /*#__PURE__*/__webpack_require__.n(LargeLogoBlack);

// CONCATENATED MODULE: /Users/rickheffren/WebDevelopment/CountrysideLandscape/src/pages/pools.js



function _templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n    position: relative;\n    width: 100%;\n    height: 95vw;\n    margin: 0 auto;\n    overflow: hidden;\n    border-radius: 7px;\n    h2 { padding: 0; }\n    @media( min-width: 675px ){\n        height: 49rem;\n    }\n    @media( min-width: 875px ){\n        height: 62rem;\n    }\n    @media( min-width: 950px ){\n        height: 53vw;\n    }\n    @media( min-width: 1295px ){\n        height: 28vw;\n    }\n    @media( min-width: 1920px ){\n        height: 42rem;\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n    width: 95%;\n    margin: auto;\n    max-width: 1846px;\n    .contact {\n        width: 100%;\n        height: 20rem;\n        display: flex;\n        text-align: center;\n        align-items: center;\n        justify-content: center;\n        a { \n            color: ", ";\n            font-size: 3.2rem;\n            font-weight: 700;\n        }\n    }\n    @media( min-width: 675px ) {\n        position: relative;\n        width: 90vw;\n        box-shadow: 0px 0px 75px 0px rgba(0,0,0,0.75);\n    }\n    @media( min-width: 950px ) {\n        top: 9.7vw;\n        width: 80.1vw;\n    }\n    @media( min-width: 1295px ) {\n        .grid {\n            padding: 0 2rem;\n            padding-top: 34vw;\n            display: grid;\n            grid-template-columns: repeat(5, 1fr);\n            grid-gap: 10px;\n        }\n       \n    }\n    @media( min-width: 2300px ) {\n        top: 17.5rem;\n        .grid {\n            padding-top: 70rem;\n        }\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    position: absolute;\n    top: 48vw;\n    left: calc(50% - 1rem);\n    transform: translateX(-50%);\n    width: 25rem;\n    min-height: 9rem;\n    background-image: url(", ");\n    background-size: cover;\n    background-position: center center;\n    z-index: 50;\n    @media( min-width: 673px ) {\n        top: 44vw;\n    }\n    @media( min-width: 950px ) {\n        top: 45vw;\n    }\n    @media( min-width: 1295px ) {\n        top: 1rem;\n        left: 50%;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\nwidth: 100vw;\nmax-width: 2300px;\nbackground-image: url(", ");\nbackground-repeat: no-repeat;\nbackground-size: contain;\nbackground-position: top center;\n@media( min-width: 950px ) {\n    background-image: url(", ");\n    #footer { padding-top: 12%; }\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function pools_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    background-color: ", ";\n    height: auto;\n    max-width: 2300px;\n    position: relative;\n    margin: auto;\n    #catalogue {\n        font-size: 2rem;\n        font-weight: 700;\n        animation: ", " 2s ease-in-out infinite;\n    }\n"]);

  pools_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function pools_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n0%      { color: #8AD30D; }\n50%    { color: #E6AD65; }\n100%    { color: #8AD30D; }\n"]);

  pools_templateObject = function _templateObject() {
    return data;
  };

  return data;
}
















var animateCatalogue = Object(external_styled_components_["keyframes"])(pools_templateObject());
var PageContainer = external_styled_components_default.a.div(pools_templateObject2(), function (_ref) {
  var poolPageBackground = _ref.theme.poolPageBackground;
  return poolPageBackground;
}, animateCatalogue);
var BackgroundContainer = external_styled_components_default.a.div(_templateObject3(), poolPage_default.a, poolPage_2360_default.a);
var Logo = external_styled_components_default.a.div(_templateObject4(), LargeLogoBlack_default.a);
var ContentContainer = external_styled_components_default.a.div(_templateObject5(), function (_ref2) {
  var highlightSecondary = _ref2.theme.highlightSecondary;
  return highlightSecondary;
});
var ViewStackContainer = external_styled_components_default.a.div(_templateObject6());
function Pools() {
  var pageImages = Object(external_react_static_["useRouteData"])();

  var _useState = Object(external_react_["useState"])(null),
      _useState2 = slicedToArray_default()(_useState, 2),
      divWidth = _useState2[0],
      setDivWidth = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(null),
      _useState4 = slicedToArray_default()(_useState3, 2),
      instagramFeed = _useState4[0],
      setInstagramFeed = _useState4[1];

  var getWidth = function getWidth(ele) {
    setDivWidth(ele);
  };

  Object(external_react_["useEffect"])(function () {
    external_react_ga_default.a.set({
      page: window.location.pathname
    });
    external_react_ga_default.a.pageview(window.location.pathname);
    var element = document.getElementById("view-pager-container").offsetWidth;
    getWidth(element);
    window.addEventListener('resize', getWidth(element));

    window.onorientationchange = function () {
      return getWidth(null);
    };

    return function () {
      window.removeEventListener('resize', getWidth(element));
      window.onorientationchange = null;
    };
  }, [divWidth]);
  Object(external_react_["useEffect"])(function () {
    var waitingForInstagram = true;
    getInstagram().then(function (result) {
      return waitingForInstagram ? setInstagramFeed(result) : null;
    })["catch"](function (error) {
      return waitingForInstagram ? console.log("There was an error retrieveing the instagram feed: ", error) : null;
    });
    return function () {
      return waitingForInstagram = false;
    };
  }, [divWidth]);
  return /*#__PURE__*/external_react_default.a.createElement(PageContainer, {
    style: {
      position: "relative",
      overflowX: "hidden"
    }
  }, /*#__PURE__*/external_react_default.a.createElement(BackgroundContainer, null, /*#__PURE__*/external_react_default.a.createElement(navbar["a" /* default */], {
    style: {
      zIndex: "1000"
    }
  }), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/"
  }, /*#__PURE__*/external_react_default.a.createElement(Logo, null)), /*#__PURE__*/external_react_default.a.createElement(ContentContainer, null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "grid"
  }, /*#__PURE__*/external_react_default.a.createElement(pools_TextContainer, {
    id: "one"
  }, /*#__PURE__*/external_react_default.a.createElement("h1", null, "Your London & Area Pool Builder"), /*#__PURE__*/external_react_default.a.createElement("p", null, "We install quality fiberglass in ground swimming pools, fiberglass plunge pools, fiberglass lap pools and water features in and around London Ontario. We are a trusted landscape company with the experience, knowledge and staff to create your landscape dream safely, efficiently and affordably."), /*#__PURE__*/external_react_default.a.createElement("a", {
    onClick: function onClick() {
      return Object(AnalyticsEvents["a" /* default */])("Our Work - Download Catalogue");
    },
    id: "catalogue",
    href: Leisure_Pools_Consumer_Brochure_2019_0424_default.a,
    download: true
  }, "Download Pool Catalogue")), /*#__PURE__*/external_react_default.a.createElement(pools_TextContainer, {
    id: "two"
  }, /*#__PURE__*/external_react_default.a.createElement(ViewStackContainer, {
    id: "view-pager-container"
  }, divWidth ? /*#__PURE__*/external_react_default.a.createElement(Viewpager, {
    width: divWidth,
    slideType: "contentful",
    slideImages: pageImages
  }) : "")), /*#__PURE__*/external_react_default.a.createElement(pools_TextContainer, {
    id: "three"
  }, /*#__PURE__*/external_react_default.a.createElement(ViewStackContainer, {
    instagram: true,
    id: "view-pager-container-2"
  }, divWidth ? instagramFeed ? /*#__PURE__*/external_react_default.a.createElement(Viewpager, {
    width: divWidth,
    slideType: "instagram",
    slideImages: instagramFeed
  }) : /*#__PURE__*/external_react_default.a.createElement("h2", null, "Loading...") : "")), /*#__PURE__*/external_react_default.a.createElement(pools_TextContainer, {
    id: "four"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, "We bring your vision to life with our expertise."), /*#__PURE__*/external_react_default.a.createElement("p", null, "Countryside Landscape is a one-stop shop for custom landscapes. Our objective is to create unique spaces that are tailored to your site specific challenges. Whether your project scope is a small pocket garden in a downtown location or a sprawling country estate, we are committed to excellence in every stage of our project.")), /*#__PURE__*/external_react_default.a.createElement(pools_TextContainer, {
    id: "five"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, "Our Services"), /*#__PURE__*/external_react_default.a.createElement("p", null, "We are a mid-sized landscape company located in Aylmer, Ontario which is central to and services the towns, cities and surrounding country communities of Tillsonburg, St. Thomas, London and Ingersoll.")), /*#__PURE__*/external_react_default.a.createElement(pools_TextContainer, {
    id: "six"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, "We offer a variety of quality services for your home and commercial properties."), /*#__PURE__*/external_react_default.a.createElement("p", {
    style: {
      paddingBottom: "0"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("b", null, "Among our services are:")), /*#__PURE__*/external_react_default.a.createElement("ul", null, /*#__PURE__*/external_react_default.a.createElement("li", null, "Skid steer and mini excavating services, such as:  excavations, prep work, demolitions and clean-ups, excavate hydro ,water trenches, and excavate pools, and excavate and install driveway and parking lots."), /*#__PURE__*/external_react_default.a.createElement("li", null, "Stamped concrete and regular concrete, interlocking stone, driveways, walkways, patios, pool decks and outdoor living spaces."), /*#__PURE__*/external_react_default.a.createElement("li", null, "Manufactured and natural stone, retaining walls and steps. "), /*#__PURE__*/external_react_default.a.createElement("li", null, "Commercial and residential snow plowing and salting in Aylmer and surrounding communities."))), /*#__PURE__*/external_react_default.a.createElement(pools_TextContainer, {
    id: "seven"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", {
    style: {
      textAlign: 'center'
    }
  }, "We conform to WSIB standards and are Commercial Liability insured."))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "contact"
  }, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/contact"
  }, "Get in touch with us!"))), /*#__PURE__*/external_react_default.a.createElement(footerNav["a" /* default */], {
    ourWork: true,
    light: true
  })));
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(7);

var _router = __webpack_require__(14);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_8__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var scrollPositions = {};

var ManageScrollImpl = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ManageScrollImpl, _React$Component);

  var _super = _createSuper(ManageScrollImpl);

  function ManageScrollImpl() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ManageScrollImpl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "listener", function () {
      scrollPositions[_this.props.location.key] = window.scrollY;

      try {
        sessionStorage.setItem("scrollPositions", JSON.stringify(scrollPositions));
      } catch (e) {}
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ManageScrollImpl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var storage = JSON.parse(sessionStorage.getItem("scrollPositions"));

        if (storage) {
          scrollPositions = JSON.parse(storage) || {};
          var key = this.props.location.key;

          if (scrollPositions[key]) {
            window.scrollTo(0, scrollPositions[key]);
          }
        }
      } catch (e) {}

      window.addEventListener("scroll", this.listener);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.listener);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var key = this.props.location.key;

      if (!scrollPositions[key]) {
        // never seen this location before
        window.scrollTo(0, 0);
      } else {
        // seen it
        window.scrollTo(0, scrollPositions[key]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ManageScrollImpl;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_8__["Location"], null, function (_ref) {
    var location = _ref.location;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ManageScrollImpl, {
      location: location
    });
  });
});

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/about.da1791be.jpg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/aboutLarge.36b21421.jpg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/contact.3f344337.jpg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/contactLarge.34b3ad59.jpg";

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("react-browser-detection");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/instagram.9ad8f8e7.png";

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/wrapNativeSuper");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "data:text/markdown;base64,77u/KipDb25zdHJ1Y3Rpb24gV2FycmFudHkqKgoKMS4gIEEgb25lLXllYXIgKDEpIG9uZS10aW1lIHJlcGxhY2VtZW50IHdhcnJhbnR5IGV4aXN0cyBmb3IgYWxsIHBsYW50IG1hdGVyaWFsIHN1cHBsaWVkIGFuZCBpbnN0YWxsZWQgYnkgQ291bnRyeXNpZGUgTGFuZHNjYXBlLiBJdCBpcyB0aGUgb3duZXJzL2NsaWVudHPigJkgc29sZSByZXNwb25zaWJpbGl0eSB0byBlbnN1cmUgYWRlcXVhdGUgd2F0ZXJpbmcgYW5kIG1haW50ZW5hbmNlIG9mIGFsbCBwbGFudCBtYXRlcmlhbCBhZnRlciBpbnN0YWxsYXRpb24sIGFuZCBkdXJpbmcgdGhlIHdhcnJhbnR5IHBlcmlvZC4gV2hpbGUgZXZlcnkgZWZmb3J0IGlzIG1hZGUgdG8gbG9jYXRlIHN1cHBsaWVycyBmb3IgdGhlIHBsYW50cyBsaXN0ZWQgYWJvdmUsIGl0IHNob3VsZCBiZSBub3RlZCB0aGF0IHNwZWNpZmljIHBsYW50IHNlbGVjdGlvbnMsIG51bWJlcnMsIGFuZCBzaXplcyBtZW50aW9uZWQgYWJvdmUgYXJlIHN1YmplY3QgdG8gc3Vic3RpdHV0aW9uIHdpdGhvdXQgbm90aWNlIHNob3VsZCBzdG9jayBiZWNvbWUgdW5hdmFpbGFibGUsIGluIHdoaWNoIGNhc2UgdGhlIG1vc3Qgc3VpdGFibGUgc3Vic3RpdHV0aW9uIHdpbGwgYmUgbWFkZSBieSBhIENvdW50cnlzaWRlIExhbmRzY2FwZSByZXByZXNlbnRhdGl2ZS4KMi4gIEEgdGhyZWUgKDMpIHllYXIgd2FycmFudHkgZXhpc3RzIG9uIGFsbCB3b3JrbWFuc2hpcCBwZXJmb3JtZWQgYnkgQ291bnRyeXNpZGUgTGFuZHNjYXBlIHByb3ZpZGVkIHRoYXQgcHJvcGVyIG1haW50ZW5hbmNlIHByb2NlZHVyZXMgYXJlIHByYWN0aWNlZC4KMy4gIENvdW50cnlzaWRlIExhbmRzY2FwZSBpcyBub3QgcmVzcG9uc2libGUgZm9yIGFueSBkYW1hZ2VzIGZyb20gbmF0dXJhbCBtYXRlcmlhbCBjaGFuZ2VzIHN1Y2ggYXMgc3RhaW5pbmcgZGlzY29sb3VyaW5nLCBlZmZsb3Jlc2NlbmNlLCBjcmFja2luZywgY2hpcHBpbmcsIGNoYW5nZXMgaW4gc2hhcGUgdGhhdCBtYXkgb2NjdXIgb24gd29vZCwgcG91cmVkLWluLXBsYWNlIGNvbmNyZXRlLCBwcmVjYXN0IGNvbmNyZXRlLCBhc3BoYWx0LCBuYXR1cmFsIHN0b25lLCBjb25jcmV0ZSBwYXZlcnMgb3IgYnJpY2sgYWZ0ZXIgaW5zdGFsbGF0aW9uLiBDb3VudHJ5c2lkZSBMYW5kc2NhcGUgaXMgYWxzbyBub3QgcmVzcG9uc2libGUgZm9yIGRhbWFnZXMgY2F1c2VkIGJ5IGRlLWljaW5nIHNhbHRzIG9yIGFueSBvdGhlciBwcm9kdWN0cyBhcHBsaWVkIHRvIG5hdHVyYWwgc3RvbmUgb3IgY29uY3JldGUgcHJvZHVjdHMuCjQuICBPd25lci9jbGllbnQgYWdyZWVzIHRvIGFsbG93IENvdW50cnlzaWRlIExhbmRzY2FwZSB0byBwaG90b2dyYXBoIHRoZSBwcm9qZWN0IHNpdGUgYXQgdGltZXMsIGJlZm9yZSwgZHVyaW5nLCBhbmQgYWZ0ZXIgdGhlIGNvbXBsZXRpb24gb2YgdGhlIHByb2plY3QgZm9yIHB1cnBvc2VzIG9mIGRvY3VtZW50YXRpb24gYW5kIHByb21vdGlvbi4gUHJpb3Igbm90aWZpY2F0aW9uIHdpbGwgYmUgZ2l2ZW4uCjUuICBBbHRob3VnaCBDb3VudHJ5c2lkZSBMYW5kc2NhcGUgd2lsbCB1bmRlcnRha2UgdG8gYXZvaWQgYWxsIHVubmVjZXNzYXJ5IGRlbGF5cyB3aXRoIHJlc3BlY3QgdG8gbGFuZHNjYXBlIGNvbnN0cnVjdGlvbiwgdGhlIG93bmVyL2NsaWVudCBoZXJlYnkgYWNrbm93bGVkZ2VzIHRoYXQgQ291bnRyeXNpZGUgTGFuZHNjYXBlIGlzIG5vdCByZXNwb25zaWJsZSBmb3IgY2lyY3Vtc3RhbmNlcyBiZXlvbmQgb3VyIGNvbnRyb2wgaW5jbHVkaW5nIGFkdmVyc2Ugd2VhdGhlciwgYXZhaWxhYmlsaXR5IG9yIGxhdGUgZGVsaXZlcnkgb2YgbWF0ZXJpYWxzLCBzdHJpa2VzLCBvciBmYWlsdXJlIG9mIG90aGVyIHN1YiBjb250cmFjdG9ycyBvZiB0aGUgb3duZXIvY2xpZW50IHRvIGNvbXBsZXRlIG90aGVyIG5lY2Vzc2FyeSBwcmVyZXF1aXNpdGUgd29yayBwcmlvciB0byBwcm9qZWN0IHN0YXJ0Lgo2LiAgQ291bnRyeXNpZGUgTGFuZHNjYXBlIGlzIG5vdCByZXNwb25zaWJsZSBmb3IgYW55IGFuZCBhbGwgdW5mb3Jlc2VlbiBjb3N0cyB0aGF0IG1heSBvY2N1ciBkdXJpbmcgdGhlIGxhbmRzY2FwZSBjb25zdHJ1Y3Rpb24gcHJvY2Vzcy4gVGhpcyBpbmNsdWRlcyBleGNhdmF0aW9uIG9mIGhpZGRlbiByb2NrcywgdHJlZSB0cnVua3MsIGZvdW5kYXRpb25zLCB3ZWxscywgc2VwdGljIHRhbmtzIGFuZCBmaWVsZHMgb3IgdmFuZGFsaXNtLiBUaGVzZSBpdGVtcyB3aWxsIGJlIGNvbnNpZGVyZWQgZXh0cmFzIHRvIHRoZSBjb250cmFjdCBhbmQgd2lsbCBiZSBicm91Z2h0IHRvIHRoZSBvd25lcnMvY2xpZW50cyBhdHRlbnRpb24gaW1tZWRpYXRlbHkuCjcuICBDb3VudHJ5c2lkZSBMYW5kc2NhcGUgaXMgcmVzcG9uc2libGUgZm9yIGNvbnRhY3RpbmcgYWxsIGxvY2FsIHB1YmxpYyB1dGlsaXR5IGNvbXBhbmllcyB3aXRoIHJlc3BlY3QgdG8gKFRlbGVwaG9uZSwgQ2FibGUsIEdhcywgSHlkcm8sIEV0Yy4pIEFueSBwcm9wZXJ0eSBsaW5lIGRlbWFyY2F0aW9uICh0aHJvdWdoIHJlZ2lzdGVyZWQgc3VydmV5IHBsYW4gb3IgY29tcGFuaWVzKSBhbmQgcHJpdmF0ZSB1dGlsaXRpZXMgaW5jbHVkaW5nIHNlcHRpYyBhbmQgd2VsbCBzeXN0ZW1zIHNoYWxsIGJlIHRoZSBzb2xlIHJlc3BvbnNpYmlsaXR5IG9mIHRoZSBvd25lci9jbGllbnQgdG8gaWRlbnRpZnkuIENvdW50cnlzaWRlIExhbmRzY2FwZSBpcyBub3QgcmVzcG9uc2libGUgZm9yIGFueSBjbGFpbXMgZm9yIGRhbWFnZXMgY2F1c2VkIHRvIHByaXZhdGUgdXRpbGl0aWVzIGFuZCB3b3JrIHJlbGF0aW5nIHRvIHByb3BlcnR5IGxpbmUgbG9jYXRpb25zLgo4LiAgVGhlIG93bmVyL2NsaWVudCBhY2tub3dsZWRnZXMgdGhhdCB0aGVyZSBtYXkgYmUgYSBzbGlnaHQgdmFyaWF0aW9uIGluIGNvbG9yIGJldHdlZW4gdGhlIGNvbG9yIHNhbXBsZXMgc2hvd24gYW5kIHRoZSBhY3R1YWwgY29sb3Igb2YgdGhlIG1hdGVyaWFsIGluc3RhbGxlZCBkdWUgdG8gbWFudWZhY3R1cmluZyB0aW1lcyBvciBuYXR1cmFsIHByb2Nlc3Nlcy4gSWYgdGhlIGNvbnRyYWN0ZWQgbWF0ZXJpYWwgcGF0dGVybiwgY29sb3IsIG9yIHNpemluZyBjaGFuZ2VzIGF0IHRoZSByZXF1ZXN0IG9mIGNsaWVudCBhbmQgcmVxdWlyZXMgcmUtb3JkZXJpbmcgb3IgcmV0dXJuIG9mIG1hdGVyaWFsLCB0aGVyZSB3aWxsIGJlIGEgcmVzdG9ja2luZyBjaGFyZ2UgZXF1YWwgdG8gMzAlIG9mIHRoZSBtYXRlcmlhbCB2YWx1ZS4KOS4gIENvdW50cnlzaWRlIExhbmRzY2FwZSBpcyBub3QgcmVzcG9uc2libGUgZm9yIGRhbWFnZSB0byBleGlzdGluZyBhdXRvbWF0aWMgaXJyaWdhdGlvbiBzeXN0ZW1zIG9yIGxpZ2h0aW5nIHN5c3RlbXMuIEFueSBhbHRlcmF0aW9ucyBvciB1cGdyYWRlcyByZXF1aXJlZCB0byBhY2NvbW1vZGF0ZSBuZXcgbGFuZHNjYXBlIGluc3RhbGxhdGlvbiBpcyB0aGUgcmVzcG9uc2liaWxpdHkgb2YgdGhlIG93bmVyL2NsaWVudCB1bmxlc3MgY29udHJhY3RlZCBpbiBzY29wZSBvZiB3b3JrIHRocm91Z2ggQ291bnRyeXNpZGUgTGFuZHNjYXBlIGZvciBjb21wbGV0aW9uLgoxMC4gIENvdW50cnlzaWRlIExhbmRzY2FwZSBjYXJyaWVzIGluc3VyYW5jZSBmb3IgcHVibGljIGxpYWJpbGl0eSBhbmQgcHJvcGVydHkgZGFtYWdlIGFsb25nIHdpdGggY292ZXJhZ2UgZm9yIGFsbCBlbXBsb3llZXMgdGhyb3VnaCB0aGUgV29ya2VycyBDb21wZW5zYXRpb24gSW5zdXJhbmNlIEJvYXJkLgoxMS4gIENvdW50cnlzaWRlIExhbmRzY2FwZSBzaGFsbCBiZSBlbnRpdGxlZCB0byBjb21wZW5zYXRpb24gZm9yIHNlcnZpY2VzIHBlcmZvcm1lZCBhbmQgbWF0ZXJpYWwgcHVyY2hhc2VkIHVwIHRvIHBvaW50IG9mIG5vdGlmaWNhdGlvbiBpZiBvd25lci9jbGllbnQgY2hvb3NlcyB0byB0ZXJtaW5hdGUgY29udHJhY3Qgb3IgYWJhbmRvbiBwcm9qZWN0IGF0IGFueSBzdGF0ZSBvZiBjb21wbGV0aW9uIG92ZXIgdGhlIGR1cmF0aW9uIG9mIGNvbnRyYWN0ZWQgd29yay4KMTIuICBJdCBpcyB0aGUgb3duZXIvY2xpZW50IHNvbGUgcmVzcG9uc2liaWxpdHkgdG8gb2J0YWluIGFsbCBuZWNlc3Nhcnkgd29yayBwZXJtaXRzIHdpdGggcHJvcGVyIGRvY3VtZW50YXRpb24gcmVxdWlyZWQgd2l0aCByZXNwZWN0IHRvIGxhbmRzY2FwZSBjb25zdHJ1Y3Rpb24gYXQgdGhlaXIgb3duIGV4cGVuc2UgcHJpb3IgdG8gdGhlIGNvbW1lbmNlbWVudCBvZiBhbnkgd29yay4gSWYgQ291bnRyeXNpZGUgTGFuZHNjYXBlIGlzIGNvbnRyYWN0ZWQgdG8gcHJvdmlkZSB3b3JraW5nIGRyYXdpbmdzIG9yIGNvbnN1bHQgZm9yIGFueSByZXF1aXJlZCBwZXJtaXQgZG9jdW1lbnRhdGlvbiB0aGVuIHRoZSB0aW1lIHdpbGwgYmUgYmlsbGVkIGF0IGFuIGhvdXJseSByYXRlIG9mICQ4NS4wMCBwZXIgaG91ciBwbHVzIHRoZSBhY3R1YWwgcGVybWl0IGZlZS4gUHJvcGVydHkgb3duZXIgaXMgcmVzcG9uc2libGUgdG8gbWFyayBwcm9wZXJ0eSBsaW5lcyBwcmlvciB0byBjb25zdHJ1Y3Rpb24uIFBvb2wgZW5jbG9zdXJlIHBlcm1pdCBkcmF3aW5ncyBhcmUgaW5jbHVkZWQgaW4gdGhlIGNvc3Qgb2YgdGhlIHBvb2wsIHdpdGggdGhlIHVuZGVyc3RhbmRpbmcgdGhhdCB0aGUgY2xpZW50IGlzIHJlc3BvbnNpYmxlIHRvIHBheSBmb3IgYW5kIHN1Ym1pdCB0aGUgcGVybWl0LgoxMy4gIEFueSBtaW5vciBjcmFja2luZyBmcm9tIHNoaWZ0aW5nIG9yIHNldHRsZW1lbnQgZm9yIHBvdXJlZC1pbi1wbGFjZSBwbGFpbiwgcGF0dGVybmVkLCBvciBleHBvc2VkIGFnZ3JlZ2F0ZSByZWluZm9yY2VkIGNvbmNyZXRlIGlzIG5vdCB3YXJyYW50aWVkLiBBIGRpZmZlcmVudGlhbCBzaGlmdGluZyBvZiBwbHVzIG9yIG1pbnVzIG9uZSBpbmNoIGluIG9uZSBkaXJlY3Rpb24gZnJvbSB0aGUgdHJ1ZSBsaW5lIGlzIGNvbW1vbi4gQW55IHRvdWNoLXVwcyBvciByZXBhaXJzIGFyZSBjb25zaWRlcmVkIGEgc2VydmljZSBpdGVtIGFuZCBiaWxsYWJsZS4gUGF0dGVybmVkIGFuZCBleHBvc2VkIGFnZ3JlZ2F0ZSBjb25jcmV0ZSByZXF1aXJlIHJlc2VhbGluZyB3aXRoaW4gYSB0d28teWVhciBwZXJpb2QsIHdoaWNoIGlzIG5vdCB3YXJyYW50aWVkIGJ1dCByZWNvbW1lbmRlZCBhbmQgaXMgY29uc2lkZXJlZCBub3JtYWwgbWFpbnRlbmFuY2UgdG8gcHJvdGVjdCB0aGUgaW50ZWdyaXR5IG9mIHN1cmZhY2UgdHJlYXRtZW50LgoxNC4gIFdhcnJhbnR5IHdvcmsgd2lsbCBub3QgYmUgY29tcGxldGVkIHVudGlsIGFsbCBjb250cmFjdCBwYXltZW50cyBhcmUgcGFpZCBpbiBmdWxsLgoxNS4gIEFueSBkZXZpYXRpb24gZnJvbSB0aGUgcGF5bWVudCBwbGFuIGNvdWxkIHJlc3VsdCBpbiBDb3VudHJ5c2lkZSBMYW5kc2NhcGUgaGFsdGluZyB0aGUgd29yayB0aWxsIHBheW1lbnRzIGFyZSB1cCB0byBkYXRlLgoxNi4gIENsaWVudCBpcyByZXNwb25zaWJsZSBmb3IgbWFpbnRhaW5pbmcgYSB3YXRlcmluZyBzY2hlZHVsZSBmb3IgbmV3bHkgaW5zdGFsbGVkIHNvZC4gQ291bnRyeXNpZGUgTGFuZHNjYXBlIGRvZXMgbm90IHJlcGxhY2Ugb3Igd2FycmFudHkgc29kIGFmdGVyIGl0cyBpbnN0YWxsYXRpb24gYW5kIGZpcnN0IGhlYXZ5IHdhdGVyaW5nIGFmdGVyIGluc3RhbGwgKHBlcmZvcm1lZCBieSBDb3VudHJ5c2lkZSBMYW5kc2NhcGUpLgoKCgo="

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Leisure Pools Consumer Brochure 2019-0424.f4fc207e.pdf";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/poolPage.e54a9c8f.jpg";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/poolPage_2360.3679fa69.jpg";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(67);
__webpack_require__(69);
module.exports = __webpack_require__(77);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(68)["default"];

var _require = __webpack_require__(35),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(35),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(70),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);




















Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 38))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(38);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/about */).then(__webpack_require__.bind(null, 39))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(39);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/about";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/about.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/contact.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/contact */).then(__webpack_require__.bind(null, 40))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/contact.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(40);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/contact";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/contact.js';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index */).then(__webpack_require__.bind(null, 48))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(48);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/index.js';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/pool-gallery.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/pool-gallery */).then(__webpack_require__.bind(null, 42))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/pool-gallery.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(42);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/pool-gallery";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/pages/pool-gallery.js';
var t_5 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/servicesPools.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/servicesPools */).then(__webpack_require__.bind(null, 43))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/servicesPools.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(43);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/servicesPools";
  }
}), universalOptions);
t_5.template = '__react_static_root__/src/pages/servicesPools.js';
var t_6 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/services.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/services */).then(__webpack_require__.bind(null, 46))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/services.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(46);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/services";
  }
}), universalOptions);
t_6.template = '__react_static_root__/src/pages/services.js';
var t_7 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/warranty.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/warranty */).then(__webpack_require__.bind(null, 47))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/warranty.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(47);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/warranty";
  }
}), universalOptions);
t_7.template = '__react_static_root__/src/pages/warranty.js';
var t_8 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/pools.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/pools */).then(__webpack_require__.bind(null, 49))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/pools.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(49);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/pools";
  }
}), universalOptions);
t_8.template = '__react_static_root__/src/pages/pools.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/about.js': t_1,
  '__react_static_root__/src/pages/contact.js': t_2,
  '__react_static_root__/src/pages/index.js': t_3,
  '__react_static_root__/src/pages/pool-gallery.js': t_4,
  '__react_static_root__/src/pages/servicesPools.js': t_5,
  '__react_static_root__/src/pages/services.js': t_6,
  '__react_static_root__/src/pages/warranty.js': t_7,
  '__react_static_root__/src/pages/pools.js': t_8
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(31);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 18,
	"./": 18,
	"./index": 18,
	"./index.js": 18
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 73;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(30);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(36);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(37);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(12);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(78);

var _interopRequireDefault = __webpack_require__(79);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(19));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(80));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(81);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(82)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("/Users/rickheffren/WebDevelopment/CountrysideLandscape/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_navigation_ManageScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);



 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_navigation_ManageScroll__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null))), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(83)(module)))

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(41)(false);
// Module
exports.push([module.i, "/* button.artibot-launcher--1dqxp.artibot-launcher-top-right--fH7j0 {\n    position: absolute !important;\n    left: 50% !important;\n    transform: translateX(-50%) !important;\n    top: 30rem !important;\n}\n\n.artibot-wrapper--19YJW.artibot-launcher--1dqxp.artibot-launcher-top-right--fH7j0 {\n    top: 30rem !important;\n\n} */", ""]);



/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(41)(false);
// Module
exports.push([module.i, ".bg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-size: cover;\n    background-position: center;\n    will-change: opacity;\n  }\n  ", ""]);



/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/instagram_video_poster.4f90e125.jpg";

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);
});