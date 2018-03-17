const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[hash].js'
    },
    module: {
        rules: [
            { test: /\.css$/, loader: '!css-loader'},
            { test: /\.ts$/, use: 'ts-loader'},
            { test: /\.html$/, use: 'html-loader'},
            { 
                test: /\.js$/, 
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
                options: {
                    presets: ["es2015"]
                },
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin(
            {
                template: './src/index.html',
                filename: 'index-[hash].html',
                inject: 'body'
            }
        )
    ]
}
module.exports = config;