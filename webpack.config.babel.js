import { join, resolve } from 'path';

// Build output directory
const buildDirectory = './dist';

export default {
  entry: join(__dirname, 'src/main.jsx'),
  devServer: {
    hot: true,
    inline: true,
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['', '.js', 'jsx'],
  },
  output: {
    path: resolve(buildDirectory),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  externals: {
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
    ],
  },
  plugins: [],
};
