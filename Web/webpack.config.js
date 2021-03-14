const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          //  options: {
          //   plugins: ['babel-plugin-styled-components']
          // }
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new WebpackPwaManifestPlugin({
      filename: 'manifest.webmanifest',
      name: 'petgram',
      description:
        'Tu app preferida para encontrar esas mascotas que tanto te encantan',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      ios: {
        'apple-mobile-web-app-title': 'petgram',
        'apple-mobile-web-app-status-bar-style': 'withe',
      },
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve(__dirname, './public/icon/icon.png'),
          sizes: [96, 128, 180, 192, 196, 256, 384, 512],
          destination: path.join('Icons'),
          purpose: 'any maskable',
        },
        {
          src: path.resolve(__dirname, './public/icon/icon.png'),
          sizes: [180, 192],
          destination: path.join('Icons'),
          ios: true,
          purpose: 'any maskable',
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://(res.cloudinary.com|images.unsplash.com)'
          ),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
        {
          urlPattern: new RegExp('https://pets-gram.vercel.app'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          },
        },
      ],
    }),
  ],
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3005,
  },
};
