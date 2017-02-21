/**
 * Created by Robin on 2017/1/30.
 */
var webpack = require("webpack"),
    path = require("path"),
    //提取文本插件， 为了从js中提取出单独的css文件
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin");

var PATHS = {
    src : path.join( __dirname, "src" ),
    dist : path.join( __dirname, "dist" )
};

module.exports = {
    /*devServer: {
        port: 8080,
        historyApiFallback: true,
        contentBase: PATHS.dist,
        publicPath: "/",
        watchContentBase: true,
        watchOptions: {
            poll: true,
            aggregateTimeout: 300,
        }
    },*/
    entry: {
        "about": PATHS.src + "/js/about/app.js",
        "home": PATHS.src + "/js/home/app.js"
    },
    output: {
        path: PATHS.dist,
        publicPath: "../",    //指js相对于html文件的路径
        filename: "js/[name].js"
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: ["css-loader", "postcss-loader", "less-loader"]
                    })
            },
            {
                test:   /\.(ttf|otf|eot|svg|woff2?)(\?.+)?$/,
                loader: "url-loader",
                options:  {
                    limit: 10000,
                    name: "icons/[name].[ext]"
                }
            }

        ]
    },
    plugins: [
        //将less文件单独编译打包到css文件夹下
        new ExtractTextPlugin({
            filename: "css/[name].css"
        }),
        //生成HTML文件
        new HtmlWebpackPlugin({
            filename: "html/about.html",
            template: PATHS.src + "/html/about.html",
            hash: true,
            chunks: ["about"]
        }),
        new HtmlWebpackPlugin({
            filename: "html/home.html",
            template: PATHS.src + "/html/home.html",
            hash: true,
            chunks: ["home"]
        })
    ]
};

/*todo:
* 1. js的压缩和混淆
* 2. dev环境
* 3. image-loader
* 4. commonChunks
* 5. hotModuleReplace
* 6. dev-server*/