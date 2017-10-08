// webpack.config.js

module.exports = {
  entry: {
    site: './source/javascripts/index.js'
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/[name].js',
  },
};
