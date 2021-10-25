const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry : {
    main : './src/index.js'
  },
  resolve : {
    extensions : ['.js', '.jsx','.css']
  },
  devtool: 'eval-cheap-source-map',
  devServer : {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
  },
  output: {
    filename : 'bundle.js',
    path : path.resolve(__dirname, 'dist')
  },
  module : {
    rules : [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use : [
          { loader : 'style-loader'},
          { loader : 'css-loader'}
        ]
      },
      {
        test : /\.jfif$/,
        loader : 'file-loader',
        options : {
          name : `[name].[ext]`
        }
      }
    ]
  },
  plugins : [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}