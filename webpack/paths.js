const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const sourceRoot = path.join(projectRoot, 'src');

module.exports = {
  entry: path.join(sourceRoot, 'index.jsx'),
  output: {
    path: path.join(projectRoot, 'dist'),
    filename: path.join('js', '[name].js'),
  },
  template: path.join(sourceRoot, 'index.html'),
  css: 'styles.css',
  images: path.join('images', '[name].[ext]'),
  fonts: path.join('fonts', '[name].[ext]'),
};
