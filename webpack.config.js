var path = require('path');
var webpack = require('webpack');
// ������Զ��������
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// ����htmlģ��
var HtmlWebpackPlugin = require("html-webpack-plugin");
// ������ʽ�ļ�
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
    devServer:{
        historyApiFallback:true,
        port:3333,
        inline:true
    },
    entry: {
        index: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            path.resolve(__dirname, 'app/index.js')
        ],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js",
        publicPath: '/'
    },
    resolve: {
        extension: ['', '.jsx', '.js', '.json'],
        // ���webpack�������ٶ�
        alias: { }
    },
    devtool: 'source-map',
    'display-error-details': true,
    // ʹ��externals���Խ�react���룬Ȼ����<script>������react����
    externals: [],
    module: {
        // ʹ��module.noParse��Ե�����react.min.js����û��������ģ�飬�ٶȻ����
        noParse: [
            path.resolve(node_modules, 'react/dist/react.min.js'),
            path.resolve(node_modules, 'react-dom/dist/react-dom..min.js')
        ],
        loaders: [
            {
                test: /\.js[x]?$/,
                loaders: ['react-hot', 'babel'],
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192'
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new HtmlWebpackPlugin({
            title: 'your app title',
            template: './app/index.html',
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:3333' }),
        new ExtractTextPlugin("main.css", {
            allChunks: true,
            disable: false
        }),
    ]
};
