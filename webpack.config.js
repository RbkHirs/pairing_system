var path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/client/dist');
const flexPath = path.join(__dirname, './node_modules/flexboxgrid');
  let cssLoader;
      cssLoader = [
      {
        loader: 'style-loader',
        options: {
          includePaths: [flexPath]
        }
      },
      {
        loader: 'css-loader',
        options: {
          module: true,
          localIdentName: '[local]',
          includePaths: [flexPath]
        },
      },
      {
        loader: 'sass-loader',
        options: {
          outputStyle: 'expanded',
          sourceMap: false,
          includePaths: [SRC_DIR, flexPath],
        },
      },
    ];

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
       }
      },
        {
          test: /\.(html|svg|jpe?g|png|ttf|woff2?)$/,
          exclude: /node_modules/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'static/[name]-[hash:8].[ext]',
            },
          },
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: cssLoader,
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader','css-loader'],
          include: /flexboxgrid/
        }

    ]
  },

};