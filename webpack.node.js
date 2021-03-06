var path = require('path');
var webpack = require('webpack');
module.exports = {
    devtool: 'source-map',
    entry: [
        path.resolve(__dirname, './entrys/insurance/modules/App.jsx')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        contentBase: "./build",
        colors: true,
        historyApiFallback: true,
        inline: true,
        port:3010,
        hot:true,
        proxy:{
            '/login':{
                target: 'http://localhost:3000/',
                secure: false
            },
            '/svr/request':{
                target: 'http://localhost:3000/',
                secure: false
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],module: {

        loaders: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'jsx-loader?harmony'
            },
            { test: /\.css$/, loader: "style!css" },
            {test:/\.json$/,loader:"json"},
            {
                test: /\.jsx?$/,
                loader:'babel',
                exclude:'/node_modules/',
                query: {
                    presets: ['es2015','react']
                }
            },
            {test: /\.png$/, loader: "url-loader?mimetype=image/png"},
            {test: /\.gif$/, loader: "url-loader?mimetype=image/gif"},
            {test: /\.jpg$/, loader: "url-loader?mimetype=image/jpeg"}
        ]
    }
};