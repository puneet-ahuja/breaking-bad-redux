const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  devtool: 'inline-source-map', 
  module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'eslint-loader',
                    options: {
                        fix: true
                    }
                }
            }
        ]
    } 

})