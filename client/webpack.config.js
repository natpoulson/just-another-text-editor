const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development', // Change in prod...?
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html", // Required to use the existing file, or else it builds its own
        favicon: "favicon.ico" // Making sure the favicon is included too
      }),
      new WebpackPwaManifest({
        short_name: "JATE",
        name: "Just Another Text Editor (JATE)",
        description: "A handy text editor that can be used both online and offline",
        display: "standalone",
        orientation: "portrait",
        start_url: "./",
        public_path: "./",
        icons: [
          {
            src: './src/images/logo.png',
            sizes: [96, 128, 192, 256, 384, 512],
            destination: 'assets/icons' // Referenced location in header markup
          }
        ],
        fingerprints: false // Stops adding HEX prints in file names, so icon paths work
      }),
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js'
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-proposal-object-rest-spread'
              ]
            }
          }
        }
      ],
    },
  };
};
