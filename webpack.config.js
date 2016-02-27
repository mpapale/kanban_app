const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

// Load *package.json* so we can use `dependencies` from there
const pkg = require('./package.json');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
  // Entry accepts a path or an object of entries.
  // The build chapter contains an example of the latter.
  entry: {
    app: PATHS.app
  },

  // Add resolve.extensions.
  // '' is needed to allow imports without an extension
  // Note the .'s before extensions as it will fail to match without!!
  resolve: {
  	extensions: ['', '.js', '.jsx']
  },

  output: {
    path: PATHS.build,
    filename: '[name].js'
  },

  module: {
  	loaders: [
  		{
  			// Test expects a RegExp! Note the slashes!
  			test: /\.css$/,
  			loaders: ['style', 'css'],
  			// Include accepts either a path or an array of paths.
  			include: PATHS.app
  		},

  		// Set up jsx. This accepts js too thanks to RegExp
  		{
  			test: /\.jsx?$/,
  			// Enable caching for improved performance during development
  			// It uses default OS directory by default. If you need something
  			// more custom, pass a path to it. I.e. bable?cacheDirectory=<path>
  			loaders: ['babel?cacheDirectory'],
  			include: PATHS.app
  		}
  	]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'Kanban app',
      appMountId: 'app',
      inject: false
    })
  ]
};

if (TARGET === 'start' || !TARGET) {
	module.exports = merge(common, {
		devtool: 'eval-source-map',

		devServer: {
			// Enable history API fallback so HTML5 History API based
			// routing works. This is a good default that will come
			// in handy in more complicated setups.
			// mpapale: What?
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,

			// Display only errors to reduce the amount of output
			stats: 'errors-only',

			// Parse host and port from env so this is easy to customize.
			host: process.env.HOST,
			port: process.env.PORT
		},

		plugins: [
			new webpack.HotModuleReplacementPlugin(),
      new NyanProgressPlugin({
        nyanCatSays: function(progress, messages) {
          return (progress === 1 && 'YOU ARE A NERD') || '...';
        }
      }),
      new NpmInstallPlugin({
        save: true
      })
		]
	});
}

if (TARGET === 'build') {
	module.exports = merge(common, {

    // Define vendor entry point needed for splitting
    entry: {
      vendor: Object.keys(pkg.dependencies).filter(function(v) {
        // Exclude alt-utils as it won't work with this setup
        // due to the way the package has been designed
        // (no package.json main).
        return v !== 'alt-utils';
      })
    },

    output: {
      path: PATHS.build,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },

    plugins: [
      new CleanPlugin([PATHS.build]),
      // Extract vendor manifest files
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),

      // Setting DefinePlugin affects React library size!
      // DefinePlugin replaces content "as is" so we need some extra quotes
      // for the generated code to make sense
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
        // You can set this to JSON.stringify('development') for your
        // development target to force NODE_ENV to development mode
        // no matter what
      }),

      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}