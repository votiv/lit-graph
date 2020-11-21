const { join } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const common = require('./webpack.common')

module.exports = merge.smart(common, {
  devtool: 'inline-source-map',
  entry: ['webpack/hot/poll?1000', join(__dirname, 'src/server.ts')],
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000']
    })
  ],
  mode: 'development',
  watch: true,
  plugins: [new CleanWebpackPlugin(), new webpack.HotModuleReplacementPlugin()]
})
