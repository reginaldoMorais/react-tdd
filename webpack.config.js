module.exports = {
  entry: './source/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /.js[x]?$/, use: 'babel-loader' }
    ]
  }
};