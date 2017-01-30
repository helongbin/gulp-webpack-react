/**
 * Created by Robin on 2017/1/30.
 */
var webpack = require("webpack");
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
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel"
            }
        ]
    },
    plugins: [
        new webpack.OldWatchingPlugin()
    ]
};