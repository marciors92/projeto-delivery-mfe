const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: { presets: ['@babel/preset-react'] },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                cardapio: 'cardapio@http://localhost:3001/remoteEntry.js',
                pedido: 'pedido@http://localhost:3002/remoteEntry.js',
            },
            shared: {
                react: { singleton: true, requiredVersion: '^18.2.0' },
                'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
            },
        }),
        new HtmlWebpackPlugin({ template: './public/index.html' }),
    ],
};