/* eslint-disable */
module.exports = {
	entry: './dist/react-leaflet-d3.min.js',
	output: {
		library: {
			root: 'ReactLeafletD3',
			amd: 'react-leaflet-d3',
			commonjs: 'react-leaflet-d3'
		},
		libraryExport: '',
		libraryTarget: 'umd'
	},
	externals: {
		debug: 'debug',
		leaflet: {
			commonjs: 'leaflet',
			commonjs2: 'leaflet',
			root: 'L'
		},
		'react-leaflet': {
			commonjs: 'react-leaflet',
			commonjs2: 'react-leaflet',
			root: 'ReactLeaflet'
		},
		react: {
			commonjs: 'react',
			commonjs2: 'react',
			root: 'React'
		}
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react'],
                    plugins: ['transform-class-properties']
                }
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]
			}
		]
	}
};
