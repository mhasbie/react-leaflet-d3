'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactLeaflet = require('react-leaflet');

var _leaflet = require('leaflet');

var _leaflet2 = _interopRequireDefault(_leaflet);

require('@asymmetrik/leaflet-d3');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PingLayer = function (_MapLayer) {
	_inherits(PingLayer, _MapLayer);

	function PingLayer() {
		_classCallCheck(this, PingLayer);

		return _possibleConstructorReturn(this, (PingLayer.__proto__ || Object.getPrototypeOf(PingLayer)).apply(this, arguments));
	}

	_createClass(PingLayer, [{
		key: 'createLeafletElement',
		value: function createLeafletElement(props) {
			return _leaflet2.default.pingLayer(props);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var layerContainer = this.context.layerContainer;

			this.leafletElement.addTo(layerContainer);
		}
	}, {
		key: 'ping',
		value: function ping(coordinates, customClass) {
			this.leafletElement.ping(coordinates, customClass);
		}
	}]);

	return PingLayer;
}(_reactLeaflet.MapLayer);

exports.default = PingLayer;