const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { SERVER_HOST, SERVER_PORT } = require('../constants')
const proxySetting = require('../../src/setProxy.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        host: SERVER_HOST,
        port: SERVER_PORT,
        client: {
            logging: 'none'
        },
        compress: true,
        open: true,
        hot: true,
        proxy: { ...proxySetting }
    },
})
