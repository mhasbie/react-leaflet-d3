'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactLeaflet = require('react-leaflet');

var _leaflet = require('leaflet');

var _leaflet2 = _interopRequireDefault(_leaflet);

require('@asymmetrik/leaflet-d3');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HexbinLayer = function (_MapLayer) {
	_inherits(HexbinLayer, _MapLayer);

	function HexbinLayer() {
		_classCallCheck(this, HexbinLayer);

		return _possibleConstructorReturn(this, (HexbinLayer.__proto__ || Object.getPrototypeOf(HexbinLayer)).apply(this, arguments));
	}

	_createClass(HexbinLayer, [{
		key: 'createLeafletElement',
		value: function createLeafletElement(props) {
			var tooltip = props.tooltip;

			return _leaflet2.default.hexbinLayer(props).hoverHandler(_leaflet2.default.HexbinHoverHandler.tooltip(tooltip));
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var layerContainer = this.context.layerContainer;
			var data = this.props.data;

			var points = data.features.filter(function (feat) {
				return feat.hasOwnProperty('geometry') && feat.geometry && _typeof(feat.geometry) === 'object' && feat.geometry.hasOwnProperty('type') && feat.geometry.type === 'Point';
			});
			var coordinates = points.map(function (feat) {
				return feat.geometry.coordinates;
			});
			this.leafletElement.addTo(layerContainer);
			if (coordinates.length) this.leafletElement.data(coordinates);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			var _context = this.context,
			    layerContainer = _context.layerContainer,
			    map = _context.map;

			this.leafletElement.data(null);
			map.removeLayer(this.leafletElement);
			layerContainer.removeLayer(this.leafletElement);
		}
	}]);

	return HexbinLayer;
}(_reactLeaflet.MapLayer);

exports.default = HexbinLayer;