var path = require('path');  
var HtmlwebpackPlugin = require('html-webpack-plugin');  
var merge = require('webpack-merge');
var webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {  
  app:   path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

// 共通設定
const common = {  
  entry: PATHS.app,

  resolve: {
    // import/requireをするときに拡張子を省略できるようにする
    extensions: ['', '.js', '.jsx']
  },
  
  output: {
    path: PATHS.build,
    filename: 'build.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: PATHS.app
      }
    ]
  },

  plugins: [
    new HtmlwebpackPlugin({
      title: 'Kanban'
    })
  ]

};

// npm startを実行した時の設定
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

// npm buildを実行した時の設定
if(TARGET === 'build') {  
  module.exports = merge(common, {
  });
}

