const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env, argv) => {
    const IS_DEV = argv.mode === "development";
    const IS_PROD = argv.mode === "production";

    const entries = {
        theme: ['./js/theme.js', './css/theme.scss'],
        themehome: ['./js/home.js']
    };

    return {
        devtool: 'eval-cheap-source-map',
        entry: entries,
        output: {
            path: path.resolve(__dirname, '../assets/js'),
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: [path.join(__dirname, '')],
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.s[ac]ss$/,
                    use: [
                        {loader: MiniCssExtractPlugin.loader},
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: IS_DEV,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    sourceMap: IS_DEV,
                                    plugins: () => [autoprefixer]
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: IS_DEV
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|svg|webp)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '../img/[hash].[ext]'
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader',
                            options: {sourceMap: IS_DEV}
                        },
                        {
                            loader: 'css-loader',
                            options: {sourceMap: IS_DEV}
                        },
                        {
                            loader: 'postcss-loader',
                            options: {sourceMap: IS_DEV}
                        }
                    ]
                }
            ]
        },
        externals: {
            prestashop: 'prestashop',
            $: '$',
            jquery: 'jQuery'
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    parallel: true,
                    test: /\.js($|\?)/i,
                    terserOptions: {
                        sourceMap: IS_DEV,
                        compress: {
                            booleans: IS_PROD,
                            conditionals: IS_PROD,
                            drop_console: IS_PROD,
                            drop_debugger: IS_PROD,
                            if_return: IS_PROD,
                            join_vars: IS_PROD,
                            keep_classnames: IS_DEV,
                            keep_fnames: IS_DEV,
                            reduce_vars: IS_PROD,
                            sequences: IS_PROD,
                            warnings: IS_DEV,
                            ecma: 5
                        },
                        output: {
                            comments: IS_DEV
                        }
                    }
                }),
                new CssMinimizerPlugin(),
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "../css/[name].css",
                chunkFilename: "../css/[id].css"
            }),
            new webpack.ProvidePlugin({
                Popper: ['popper.js', 'default']
            })
        ],
        watchOptions: {
            ignored: /node_modules/
        }
    };
};
