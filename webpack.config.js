var path    = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './js/main.js'
    },
    output: {
        path: './assets/js',
        publicPath: "/assets/js/",
        filename: 'bundle.js'
    },
    externals: {
        'rx': 'Rx',
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    resolve: {
        root: path.resolve('./js')
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'js')
                ],
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
