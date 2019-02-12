
var webpack = require('webpack');
var path = require('path');
//Thư mục sẽ chứa tập tin được biên dịch
var BUILD_DIR = path.resolve(__dirname, 'src');
//Thư mục chứa dự án - các component React
var APP_DIR = path.resolve(__dirname, 'public');

var config = {
  entry:  BUILD_DIR + '/app.js',
  output: {
    path: APP_DIR,
    filename: 'bundle.js'
  }
};
module.exports = config;