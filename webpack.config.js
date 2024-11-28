const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/pages/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/rozklad.html',
            filename: 'rozklad.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/news.html',
            filename: 'news.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/photo.html',
            filename: 'photo.html',
        }),
        // Добавляем HtmlWebpackPlugin для about.html
        new HtmlWebpackPlugin({
            template: './src/pages/about.html',  // Путь к вашему about.html
            filename: 'about.html',  // Сохранится как about.html в папке dist
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets/images', to: 'assets/images' },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
        ],
    },
    devServer: {
        static: './dist',
        port: 8080,
        open: true,
    },
};
