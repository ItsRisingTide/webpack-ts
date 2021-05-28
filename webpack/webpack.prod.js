const webpack = require('webpack')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('DDD_Name_prod'),
    }),

    new BundleAnalyzerPlugin({
      analyzerHost: '172.22.98.164',
    }),
  ],
}
