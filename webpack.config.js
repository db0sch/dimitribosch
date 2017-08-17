const ExtractTextPlugin = require("extract-text-webpack-plugin")

// const extractSass = new ExtractTextPlugin({
//     filename: "[name].[contenthash].css",
//     disable: process.env.NODE_ENV === "development"
// });

module.exports = {

  entry: {
    main: './assets/javascript/main.js',
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'assets/javascript/[name].bundle.js',
  },

  plugins: [
    new ExtractTextPlugin("source/stylesheets/[name].bundle.css"),
  ],

  module: {
    rules: [{
        test: /\.(scss|sass)$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
    }]
  }

}
