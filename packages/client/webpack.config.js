const { resolve, join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const merge = require('webpack-merge')

const ENV = process.argv.find(arg => arg.includes('production'))
  ? 'production'
  : 'development'
const OUT_PATH = resolve(__dirname, 'dist')
const SRC_PATH = resolve(__dirname, 'src')
const INDEX_TEMPLATE = resolve(SRC_PATH, 'index.html')

const commonConfig = merge([
  {
    entry: {
      index: resolve(SRC_PATH, 'index.ts'),
      another: resolve(SRC_PATH, 'components/another/Another.ts')
    },
    output: {
      path: OUT_PATH,
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: true,
                extends: join(__dirname + '/.babelrc'),
                cacheDirectory: true,
                envName: ENV
              }
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.(graphql|gql)$/,
          loader: 'graphql-tag/loader'
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.gql', '.graphql']
    }
  }
])

const developmentConfig = merge([
  {
    devtool: 'cheap-module-source-map',
    plugins: [
      new CopyWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: INDEX_TEMPLATE
      })
    ],
    devServer: {
      contentBase: OUT_PATH,
      compress: true,
      overlay: true,
      port: 3050,
      historyApiFallback: true,
      host: 'localhost'
    }
  }
])

const productionConfig = merge([
  {
    devtool: 'nosources-source-map',
    plugins: [
      new CleanWebpackPlugin({ verbose: true }),
      new HtmlWebpackPlugin({
        template: INDEX_TEMPLATE,
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          minifyCSS: true,
          minifyJS: true
        }
      })
    ]
  }
])

module.exports = mode => {
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, { mode })
  }

  return merge(commonConfig, developmentConfig, { mode })
}
