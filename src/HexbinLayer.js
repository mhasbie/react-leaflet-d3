import { MapLayer } from 'react-leaflet';
import L from 'leaflet';
import '@asymmetrik/leaflet-d3';

export default class HexbinLayer extends MapLayer {
	createLeafletElement(props) {
		const { tooltip } = props;
		return L.hexbinLayer(props).hoverHandler(L.HexbinHoverHandler.tooltip(tooltip));
	}

	componentDidMount() {
		const { layerContainer } = this.context;
		const { data } = this.props;
		const points = data.features.filter((feat) => feat.geometry.type === 'Point');
		const coordinates = points.map(feat => feat.geometry.coordinates);
		this.leafletElement.addTo(layerContainer);
		if (coordinates.length) this.leafletElement.data(coordinates);
	}
}
