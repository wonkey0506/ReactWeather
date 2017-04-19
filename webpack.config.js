var path = require('path');
var webpack = require('webpack');
process.noDeprecation = true;

module.exports = {
  entry: "./app/app.jsx",
  output: {
    path: __dirname,
    filename: "public/bundle.js"
  },
  watch:true,
  resolve: {
    alias:{
      root: __dirname,
      Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
      Weather: path.resolve(__dirname, 'app/components/Weather.jsx'),
      Owm: path.resolve(__dirname, 'app/api/openWeatherMap.jsx')
    },
    extensions: ['.js', '.jsx']
  },
  module:{
    loaders:[
      {
        loader: 'babel-loader',
        query:{
          presets: ['react', 'es2017', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
