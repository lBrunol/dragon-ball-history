/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

module.exports = withPlugins([
  [withImages],
  {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      })
      return config
    },
    webpackDevMiddleware: (config) => {
      return config
    }
  }
])
