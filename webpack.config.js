const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: path.join(__dirname, 'src/index.js'),
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),   // 热加载
        new HtmlWebpackPlugin({
            template: path.resolve('./src/index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                // 全局样式
                include: path.resolve(__dirname, 'src/styles'),
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.css$/,
                // 组件样式使用CSS Modules
                exclude: [
                    path.resolve(__dirname, 'src/styles'),
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]'
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(|eot|svg|ttf|woff|woff2)$/,
                use: 'url-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        hash: 'sha512',
                         //publicPath: '/',
                        name: 'assets/images/[hash].[ext]'
                    }
                }
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    resolve: {
        // 省略引入文件名后缀
        extensions: ['.js', '.jsx', '.json', '.css']
    },
    devServer: {
        contentBase: './',
        historyApiFallback: true,
        inline: true,
        hot: true,
        port: 6611,
        noInfo: false
    }
};

module.exports = config;