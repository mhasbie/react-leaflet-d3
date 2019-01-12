/* global describe, expect, it, jest */

import React from 'react';
import { mount } from './enzyme';
import 'jest-enzyme';

import { Map, TileLayer, withLeaflet } from 'react-leaflet';
import { HexbinLayer } from '../dist/react-leaflet-d3.min.js';
const WrappedHexbinLayer = withLeaflet(HexbinLayer);

describe('HexbinLayer', () => {

	it('Should instantiate a hexbin layer when rendered inside a map', () => {
		
		const data = {"type":"FeatureCollection","crs":{"type":"name","properties":{"name":"EPSG:4326"}},"features":[{"type":"Feature","id":1,"geometry":{"type":"Point","coordinates":[101.42543266259499,3.0025787832936639]},"properties":{"OBJECTID":1}},{"type":"Feature","id":2,"geometry":{"type":"Point","coordinates":[101.46500992020044,2.9883127702352756]},"properties":{"OBJECTID":2}},{"type":"Feature","id":3,"geometry":{"type":"Point","coordinates":[101.48239755382531,2.9946743949262387]},"properties":{"OBJECTID":3}},{"type":"Feature","id":4,"geometry":{"type":"Point","coordinates":[101.4241176296071,3.1696731620275047]},"properties":{"OBJECTID":4}}]};

		const position = [101.42543266259499,3.0025787832936639];
		const wrapper = mount(
			<Map>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<WrappedHexbinLayer data={data} />
			</Map>
		);
		
		expect(wrapper).not.toBeEmptyRender();
	})
})