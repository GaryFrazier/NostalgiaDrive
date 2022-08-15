var webpack  = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


var htmlOption = {
    inject: true,
    template: "./public/index.html",
    title: "The Virtual Plaza",
    favicon: "./src/images/favicon.ico"
}

module.exports = {
    resolve:{
        root:[path.join(__dirname,"src")]
    },
    entry:{
        'main':['./src/main.js']
    },
    output:{
        path:'./dist',
        publicPath:'./',
        filename:'[name].[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html"
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: "vue"
            },
            {
                test: /\.(png|jpg|ico)$/,
                exclude: /node_modules/,
                loader: 'file-loader?name=/img/[name].[ext]',
                options: {
                    publicPath: '/'
                }
            }
        ]
    },
    devtool: "cheap-module-source-map",
    plugins: [
        new HtmlWebpackPlugin(htmlOption)
    ]
}
