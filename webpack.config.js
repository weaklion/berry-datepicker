const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode : 'development',
  entry : {
    main : './src/index.js'
  },
  resolve : {
    extensions : ['.js', '.jsx','.css']
  },
  devtool: 'eval-cheap-source-map',
  devServer : {
    compress : true,
    hot : true,
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
          { loader : 'css-loader'},
          { loader: "postcss-loader"}
        ]
      },
      {
        test : /\.jfif$/,
        loader : 'file-loader',
        options : {
          name : `[name].[ext]`
        }
      },
      {
        test : /\.s[ac]ss$/i,
        use : [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ]
      }
    ]
  },
  plugins : [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename : 'css/style.css'}),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}