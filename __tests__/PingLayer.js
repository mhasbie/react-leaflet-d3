/* global describe, expect, it, jest */
import React, { createRef, Component } from 'react';
import { mount } from './enzyme';
import 'jest-enzyme';

import { Map, TileLayer, withLeaflet } from 'react-leaflet';
import { PingLayer } from '../dist/react-leaflet-d3.min.js';
const WrappedPingLayer = withLeaflet(PingLayer);

describe('PingLayer', () => {

	it('Should instantiate a ping layer when rendered inside a map', () => {
		const pingRef = createRef();
		const wrapper = mount(
			<Map>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<WrappedPingLayer ref={pingRef} />
			</Map>
		);
		
		expect(wrapper).not.toBeEmptyRender();
	});
	
	it('Should ping the coordinate when ping() is called', () => {
		class MapContainer extends Component {
			constructor() {
				super();
				this.ping = this.ping.bind(this);
			}
			
			ping(coordinates) {
				this.pingLayer.ping(coordinates);
			}

			render() {
				const options = {
					center: [0, 0],
					zoom: 1,
					minZoom: 1,
					maxZoom: 22,
				};
				return (
					<Map {...options}>
						<WrappedPingLayer ref={(ref) => { this.pingLayer = ref; }} />
					</Map>
				);
			}
		}
		
		const wrapper = mount(<MapContainer />);
		const spyPing = jest.spyOn(wrapper.instance().pingLayer, 'ping');
		
		wrapper.instance().ping([0, 0]);
		
		expect(wrapper).not.toBeEmptyRender();
		expect(spyPing).toHaveBeenCalled();
	});
});