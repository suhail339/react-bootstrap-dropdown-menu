"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Css = _interopRequireDefault(require("./Css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MenuItem = /*#__PURE__*/function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  var _super = _createSuper(MenuItem);

  function MenuItem(props) {
    var _this;

    _classCallCheck(this, MenuItem);

    _this = _super.call(this, props);
    var linkStyle = _Css["default"].defaultLink;

    if (_this.props.disabled) {
      if (_this.props.disabled === "true") {
        linkStyle = _Css["default"].disabledItem;
      } else if (_this.props.disabled !== "false") {
        throw "The value for prop 'disabled' is not supported for MenuItem. Must be true or false.";
      }
    }

    _this.state = {
      linkStyle: linkStyle
    };
    return _this;
  }

  _createClass(MenuItem, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      if (this.props.linkStyle) {
        this.setState({
          linkStyle: this.props.linkStyle
        });
      }
    }
  }, {
    key: "getCss",
    value: function getCss() {
      var propsCss = _objectSpread({}, this.props.css);

      var css = _objectSpread({}, _Css["default"]);

      if (propsCss) {
        css['separator'] = _objectSpread(_objectSpread({}, _Css["default"]['separator']), propsCss['separator']);
      }

      return css;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.type) {
        if (this.props.type.toLowerCase() === 'separator') {
          var css = this.getCss();
          return /*#__PURE__*/_react["default"].createElement("hr", {
            style: css.separator
          });
        } else {
          throw "The value for prop 'type' is not supported for MenuItem. The only supported type is 'separator'.";
        }
      } else {
        var _iconClass = '';
        if(this.props.text){
          switch (this.props.text) {
            case 'Save':
              _iconClass = 'glyphicon glyphicon-save';
              break;
              case 'FBSettings':
                _iconClass = 'glyphicon glyphicon-wrench';
                break;
              case 'Preview':
                _iconClass = 'glyphicon glyphicon-eye-open ui-sortable-handle';
                break;
            case 'Validate':
              _iconClass = 'glyphicon glyphicon-flash';
              break;
            case 'Import':
              _iconClass = 'glyphicon glyphicon-import';
              break;
            case 'Export':
              _iconClass = 'glyphicon glyphicon-export';
              break;
            case 'Code':
              _iconClass = 'glyphicon glyphicon-align-center';
              break;
            case 'DataSource':
              _iconClass = 'glyphicon glyphicon-wrench ui-sortable-handle';
              break;
            case 'Virtual':
              _iconClass = 'glyphicon glyphicon-eye-close ui-sortable-handle';
              break;
            case 'XMPie':
              _iconClass = 'glyphicon glyphicon-bell ui-sortable-handle';
              break;
            case 'Email':
              _iconClass = 'glyphicon glyphicon-envelope ui-sortable-handle';
              break;
            default:
              break;
          }
        }
        return /*#__PURE__*/_react["default"].createElement("div", {style:{display: 'block', marginBottom:'5px'},className: _iconClass+" settingMain"}, /*#__PURE__*/_react["default"]
        .createElement("a", {
          href: this.props.location,
          onClick: this.props.onClick,
          style: this.state.linkStyle,
          className:'settingLink'
        }, this.props.text), /*#__PURE__*/_react["default"].createElement("br", null));
      }
    }
  }]);

  return MenuItem;
}(_react["default"].Component);

;
var _default = MenuItem;
exports["default"] = _default;
