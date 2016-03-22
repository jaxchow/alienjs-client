var webpack = require('webpack');
var path= require('path');
var HtmlPlugin = require('webpack-html-plugin');

var webpackConfig = {
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:8080',//资源服务器地址
      './src/app.js'
    ],
    Users:[
      './src/app_modules/Users/Users.container.js'
    ],
    Books:[
      './src/app_modules/Books/Books.container.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: path.resolve(__dirname,"/asserts"),
    filename: "[name].bundle.js"
  },
  devServer: {
    hot: true,
    noInfo: false,
    inline: true,
    publicPath: path.resolve(__dirname,"/asserts"),
    stats: {
      cached: false,
      colors: true
    },
    proxy : [{
      path: "/*",
      target: "http://192.168.222.63:4000/mock/"
    }]
  },
  plugins: [
    //new webpack.optimize.CommonsChunkPlugin('react', 'react.js'),
    new HtmlPlugin({
        filename: 'app.html',
        hash: true,
        title: 'App',
        chunks: ['app']
    }),
    new HtmlPlugin({
        filename: 'Books.html',
        hash: true,
        title: 'Books',
        chunks: ['react','Books']
    }),

    /*
    new webpack.optimize.CommonsChunkPlugin({
      name: "react",
      filename: "react.js",
      async: true,
      chunks: ["app", "Users","Books"],
    })
    */
  ],
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot'
    },{
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
