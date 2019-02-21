const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './ex/index.js', //arquivo base
    output: {
      path: __dirname + '/public', //pasta de saída
      filename: './bundle.js' //arquivo de saída
    }, 
    devServer: {
      port: 8080, //porta de entrada
      contentBase: './public'
    },
    plugins: [
      new ExtractTextPlugin('app.css')
    ],
    module: {
      loaders: [{ //carregar os arquivos
        test :/.js?$/, //tipo de arquivos que vai carregar javascript
        loader: 'babel-loader', //qual loader irá carregar os arquivos
        exclude: /node_modules/, //não quero que leia node_modules
        query: {
          presets: ['es2015', 'react'], // o que quer que seja interpretado pelo loader
          plugins: ['transform-object-rest-spread'] //plugin do babel para o médoto de spread ...
        }
      },{
        test :/\.css$/, //tipo de arquivos que vai carregar javascript
        loader: ExtractTextPlugin.extract("style-loader", "css-loader") //qual loader irá carregar os arquivos
      }]
    }
}