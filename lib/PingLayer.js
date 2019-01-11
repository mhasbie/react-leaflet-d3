import { MapLayer } from 'react-leaflet';
import L from 'leaflet';
import '@asymmetrik/leaflet-d3';
import './ping.css';

export default class PingLayer extends MapLayer {
	createLeafletElement(props) {
		return L.pingLayer(props);
	}

	componentDidMount() {
		super.componentDidMount();
	}

	ping(coordinates, customClass) {
		this.leafletElement.ping(coordinates, customClass);
	}
}