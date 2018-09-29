const path = require('path');
const autoprefixer = require('autoprefixer');
const HTMLWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
        devtool: "cheap-module-eval-source-map",
        entry: {
            vendor: "./src/index.js"
        },
        mode: "development",
        module: {
            rules: []
        },
        plugins: [],
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname,"dist"),
            chunkFilename: '[id].js',
            publicPath: ''
        },
        resolve:{
            extensions: ['.js','jsx']
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: [
                        { loader: "style-loader" },
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1,
                                modules: true,
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                ident: 'postcss',
                                plugins: () => [
                                    autoprefixer({
                                        browsers: [
                                            ">1%",
                                            "last 2 versions"
                                        ]
                                    })
                                ]
                            }

                        }
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                    {
                        loader: 'url-loader',
                        options: {
                        limit: 8192
                        }
                    }
                    ]
                }
            ]
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: __dirname + '/src/index.html',
                filename: 'index.html', 
                inject: 'body'
            })
        ]
    };