# react-leaflet-d3

[![travis build](https://img.shields.io/travis/mhasbie/react-leaflet-d3.svg?style=plastic)](https://travis-ci.org/mhasbie/react-leaflet-d3)
[![version](https://img.shields.io/npm/v/react-leaflet-d3.svg?style=plastic)](http://npm.im/react-leaflet-d3)
[![MIT License](https://img.shields.io/npm/l/react-leaflet-d3.svg?style=plastic)](http://opensource.org/licenses/MIT)
[![dependencies](https://img.shields.io/david/mhasbie/react-leaflet-d3.svg?style=plastic)](https://david-dm.org/mhasbie/react-leaflet-d3)
[![peer dependencies](https://img.shields.io/david/peer/mhasbie/react-leaflet-d3.svg?style=plastic)](https://david-dm.org/mhasbie/react-leaflet-d3?type=peer)
[![react-leaflet compatibility](https://img.shields.io/npm/dependency-version/react-leaflet-d3/peer/react-leaflet.svg?style=plastic)](https://github.com/mhasbie/react-leaflet-d3)
[![downloads](https://img.shields.io/npm/dt/react-leaflet-d3.svg?style=plastic)](http://npm-stat.com/charts.html?package=react-leaflet-d3&from=2018-01-01)
[![issues](https://img.shields.io/github/issues/mhasbie/react-leaflet-d3.svg?style=plastic)](https://github.com/mhasbie/react-leaflet-d3/issues)


React wrapper of [@asymmetrik/leaflet-d3](https://github.com/Asymmetrik/leaflet-d3)
for [react-leaflet](https://github.com/PaulLeCam/react-leaflet).

Leaflet D3 Provides a collection of D3.js based visualization plugins for Leaflet.


#### Demo

| Visualization	| Demo react-leaflet v1									| Demo react-leaflet v2 								|
| ---			| ---													| ---													|
| Hexbins		| [`CodePen`](https://codepen.io/m_hasbie/pen/yGQgoV)	| [`CodePen`](https://codepen.io/m_hasbie/pen/wRQgpB)	|
| Pings			| [`CodePen`](https://codepen.io/m_hasbie/pen/oJQBpP)	| [`CodePen`](https://codepen.io/m_hasbie/pen/zyMNJR)	|

*Tested with Leaflet 1.3.4 and React-Leaflet 1.9.1, React-Leaflet 2.1.4*


## Installation

### Install via NPM

```bash
npm install --save react-leaflet-d3
```

`react-leaflet-d3` requires `d3` and `d3-hexbin` as [`peerDependency`](https://docs.npmjs.com/files/package.json#peerdependencies)

(React, PropTypes, Leaflet, react-leaflet also should be installed)
```bash
npm install --save d3 d3-hexbin
```

[Customize css](https://github.com/Asymmetrik/leaflet-d3#styling-1)


## Usage example

### HexbinLayer (with react-leaflet v1)

```javascript
import { Map, TileLayer } from 'react-leaflet';
import { HexbinLayer } from 'react-leaflet-d3';

const options = {
	colorScaleExtent: [ 1, undefined ],
	radiusScaleExtent: [ 1, undefined ],
	colorRange: [ '#f7fbff', '#ff0000' ],
	radiusRange: [ 5, 12 ],
};

<Map center={[2.935403, 101.448205]} zoom={10}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <HexbinLayer data={geoJsonData} {...options} />
</Map>
```

### HexbinLayer (with react-leaflet v2)

```javascript
import { Map, TileLayer, withLeaflet } from 'react-leaflet';
import { HexbinLayer } from 'react-leaflet-d3';
const WrappedHexbinLayer = withLeaflet(HexbinLayer);

const options = {
	colorScaleExtent: [ 1, undefined ],
	radiusScaleExtent: [ 1, undefined ],
	colorRange: [ '#f7fbff', '#ff0000' ],
	radiusRange: [ 5, 12 ],
};

<Map center={[2.935403, 101.448205]} zoom={10}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  {/* Use <WrappedHexbinLayer> where you would have used <HexbinLayer>. */}
  <WrappedHexbinLayer data={geoJsonData} {...options} />
</Map>
```

#### Options [Hexbin options](https://github.com/Asymmetrik/leaflet-d3#options)

Option          | Type      | Default | Description
--------------- | --------- | ------- | -------------
`data`          | `object`  | `{}`    | Required. A valid [GeoJSON FeatureCollection object](http://geojson.org/geojson-spec.html). Currently only supports `Point` geometry type.
`radius`        | `int`     | `12`    | Sets the radius on the hexbin layer.
`opacity`       | `float`   | `0.6`   | Sets the opacity on the hexbin layer.
`duration`      | `int`     | `200`   | Sets the transition duration for the hexbin layer.
`colorScaleExtent`   | `array`   | `[ 1, undefined ]`    | Sets the extent of the color scale for the hexbin layer.
`radiusScaleExtent`   | `array`   | `[ 1, undefined ]`    | This is the same exact configuration option as `colorScaleExtent`, only applied to the radius extent.
`colorRange`   | `array`   | `[ '#f7fbff', '#08306b' ]`    | Sets the range of the color scale used to fill the hexbins on the layer.
`radiusRange`   | `array`   | `[ 4, 12 ]`    | Sets the range of the radius scale used to size the hexbins on the layer.
`pointerEvents` |  `string`     | `all`    | This value is passed directly to an element-level css style for `pointer-events`. You should only modify this config option if you want to change the mouse event behavior on hexbins. This will modify when the events are propagated based on the visibility state and/or part of the hexbin being hovered.


### PingLayer (with react-leaflet v1)

```javascript
import { Map, TileLayer } from 'react-leaflet';
import { PingLayer } from 'react-leaflet-d3';

ping() {
	this.pingLayer.ping([101.448205, 2.935403], 'myCustomCssClass');
}

<Map center={[2.935403, 101.448205]} zoom={10}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <PingLayer ref={(ref) => { this.pingLayer = ref; }} radiusRange={[3, 50]} />
</Map>
```


### PingLayer (with react-leaflet v2)

```javascript
import { Map, TileLayer, withLeaflet } from 'react-leaflet';
import { PingLayer } from 'react-leaflet-d3';
const WrappedPingLayer = withLeaflet(PingLayer);

ping() {
	this.pingLayer.ping([101.448205, 2.935403], 'myCustomCssClass');
}

<Map center={[2.935403, 101.448205]} zoom={10}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  {/* Use <WrappedPingLayer> where you would have used <PingLayer>. */}
  <WrappedPingLayer ref={(ref) => { this.pingLayer = ref; }} radiusRange={[3, 50]} />
</Map>
```

#### Options [Ping options](https://github.com/Asymmetrik/leaflet-d3#options-1)

Option          | Type      | Default | Description
--------------- | --------- | ------- | -------------
`duration`      | `int`     | `800 `  | Sets the transition duration for the ping layer.
`fps`           | `int`     | `32`    | Sets the target framerate for the ping animation.
`opacityRange`  | `array`   | `[ 1, 0 ]`    | Sets the range of the opacity scale used to fade out the pings as they age.
`radiusRange`   | `array`   | `[ 3, 15 ]`    | Sets the range of the radius scale used to size the pings as they age.


#### API 

[Ping API](https://github.com/Asymmetrik/leaflet-d3#lpinglayer)

##### pingLayer.ping(coordinates, cssClassName) - [doc](https://github.com/Asymmetrik/leaflet-d3#pinglayerpingvalue-)

Submit a ping to the layer. The default data schema for the ping layer is:

`[ [ lng1, lat1 ], [ lng2, lat2 ], [ lng3, lat3 ]... [ lngN, latN ] ]`

Where the ping radius scale factor is fixed at 1.



# Credits
Credits goes to all the [contributors](https://github.com/Asymmetrik/leaflet-d3/graphs/contributors) for the original work.

# License

MIT License
