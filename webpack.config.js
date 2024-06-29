module.exports = {
  mode: 'development',
  entry: './src/js/script.js', // nisbiy yo'lni to'g'rilash
  output: {
    path: __dirname + '/dist/js',
    filename: 'bundle.js',
  },
  watch: true,
  devtool: 'source-map', // to'g'ri yozilishi
  module: {},
}
