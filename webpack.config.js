var webpack = require('webpack');
var path= require('path');
var HtmlPlugin = require('webpack-html-plugin');

var webpackConfig = {
  entry: {
    app: [
      './src/app.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, "client"),
    //publicPath: ".",
    filename: "[name].bundle.js"
  },
  plugins: [
    //new webpack.optimize.CommonsChunkPlugin('react', 'react.js'),
    new HtmlPlugin({
        filename: 'app.html',
        hash: false,
        title: 'App',
        chunks: ['app']
    }),
    /*
    new HtmlPlugin({
        filename: 'Books.html',
        hash: true,
        title: 'Books',
        chunks: ['react','Books']
    }),
    */

    /*
    new webpack.optimize.CommonsChunkPlugin({
      name: "react",
      filename: "react.js",
      async: true,
      chunks: ["app", "Users","Books"],
    })
    */
  ],
  //devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react','stage-0'],
        plugins: ["syntax-class-properties"]
      }
    },{
       test: /\.css$/,
       loader: 'style-loader!css-loader'
    },{
        test: /\.(ttf|eot|svg|woff2|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};


module.exports = webpackConfig;
