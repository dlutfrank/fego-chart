'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BaseTooltip = require('../BaseTooltip');

var _BaseTooltip2 = _interopRequireDefault(_BaseTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BoolTooltip
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var BOLLTooltip = function (_Component) {
  _inherits(BOLLTooltip, _Component);

  function BOLLTooltip() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BOLLTooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BOLLTooltip.__proto__ || Object.getPrototypeOf(BOLLTooltip)).call.apply(_ref, [this].concat(args))), _this), _this.formatIndicators = function (indicators) {
      var indicatorArr = Array.isArray(indicators) ? indicators : [indicators];
      var valueKeys = [];
      indicatorArr.forEach(function (indicator) {
        var strokeArr = Object.keys(indicator.stroke);
        strokeArr.forEach(function (stroke) {
          if (stroke === 'MID') stroke = 'middle';
          valueKeys.push(stroke.toLowerCase());
        });
      });
      return valueKeys;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /**
   * 获取指标Key信息
   *
   * @memberof BOLLTooltip
   */


  _createClass(BOLLTooltip, [{
    key: 'render',


    /**
     * 渲染函数
     *
     * @returns
     * @memberof BOLLTooltip
     */
    value: function render() {
      var valueKeys = this.formatIndicators(this.props.indicators);
      return _react2.default.createElement(_BaseTooltip2.default, _extends({ title: 'BOLL', type: 'group', valueKeys: valueKeys }, this.props));
    }
  }]);

  return BOLLTooltip;
}(_react.Component);

exports.default = BOLLTooltip;