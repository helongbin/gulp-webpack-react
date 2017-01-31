/**
 * Created by Robin on 2017/1/30.
 */
var webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        "about": "./src/js/about/app.js",
        "home": "./src/js/home/app.js"
    },
    output: {
        path: "./dist/js",
        filename: "[name].js"
    },
    module: {
        /*preLoaders: [
            {
                test: /\.(js|jsx)$/,
                loader: "eslint",
                exclude: /node_modules/
            }
        ],*/
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style", ["css", "less"])
            }
        ]
    },
    plugins: [
        new webpack.OldWatchingPlugin(),
        //将less文件单独编译打包到css文件夹下
        new ExtractTextPlugin("../css/[name].css")
    ],
    esLint: {
        configFile: "./.eslintrc",
        failOnWarning: true,
        failOnError: true,
        cache: true
    }
};