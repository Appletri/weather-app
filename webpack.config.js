const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Weather App',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|jpe?g|webp|git|svg|)$/i,
        use: [
          {
            loader: 'img-optimize-loader',
            options: {
              compress: {
                // This will take more time and get smaller images.
                webp: true,
                disableOnDevelopment: true,
              },
            },
          },
        ],
      },
    ],
  },
};
