import { MapLayer } from 'react-leaflet';
import L from 'leaflet';
import '@asymmetrik/leaflet-d3';

export default class PingLayer extends MapLayer {
	createLeafletElement(props) {
		return L.pingLayer(props);
	}

	componentDidMount() {
		const { layerContainer } = this.context;
		this.leafletElement.addTo(layerContainer);
	}

	ping(coordinates, customClass) {
		this.leafletElement.ping(coordinates, customClass);
	}
}
