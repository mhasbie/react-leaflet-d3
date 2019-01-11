import { MapLayer } from 'react-leaflet';
import L from 'leaflet';
import '@asymmetrik/leaflet-d3';
import './hexbin.css';

export default class HexbinLayer extends MapLayer {
	createLeafletElement(props) {
		const { tooltip } = props;
		return L.hexbinLayer(props).hoverHandler(L.HexbinHoverHandler.tooltip(tooltip));
	}

	componentDidMount() {
		const { layerContainer } = this.props.leaflet || this.context;
		const { data } = this.props;
		const points = data.features.filter((feat) => feat.hasOwnProperty('geometry') && feat.geometry && typeof feat.geometry === 'object' && feat.geometry.hasOwnProperty('type') && feat.geometry.type === 'Point');
		const coordinates = points.map(feat => feat.geometry.coordinates);
		this.leafletElement.addTo(layerContainer);
		if (coordinates.length) this.leafletElement.data(coordinates);
	}

	componentWillUnmount() {
		const { layerContainer, map } = this.props.leaflet || this.context;
		this.leafletElement.data(null);
		map.removeLayer(this.leafletElement);
		layerContainer.removeLayer(this.leafletElement);
	}
}
