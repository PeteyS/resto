const path = require('path');

module.exports = {
  mode:'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules : [
      {
        test:/\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {

        test: /\.(woff|woff2|eot|ttf|otf)$/i,

        type: 'asset/resource',

      },
    ],
  },
};