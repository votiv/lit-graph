const { join } = require('path')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const common = require('./webpack.common')

module.exports = merge(common, {
  devtool: 'source-map',
  entry: [join(__dirname, 'src/server.ts')],
  externals: [nodeExternals({})],
  mode: 'production',
  plugins: [new CleanWebpackPlugin()]
})
