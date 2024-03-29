const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'pug-loader',
                        options: {
                            pretty: true
                        }
                    }
                ]
            },
            {
                test: /\.njk$/,
                use: [
                    'html-loader',
                    {
                        loader: 'nunjucks-html-loader',
                        options: {
                            searchPaths: ['./src/templates'],
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/templates/preview.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'chat.html',
            template: './src/templates/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'profile-account-settings.html',
            template: './src/templates/profile-account-settings.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'profile-personal.html',
            template: './src/templates/profile-personal.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'sign-in.html',
            template: './src/templates/sign-in.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'sign-up.html',
            template: './src/templates/sign-up.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'sign-up-add-data.html',
            template: './src/templates/sign-up-add-data.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'reset-password.html',
            template: './src/templates/reset-password.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'password-recovery.html',
            template: './src/templates/password-recovery.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'sign-in-success.html',
            template: './src/templates/sign-in-success.pug'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: './assets',
                to: 'assets'
            }
        ])
    ]
};