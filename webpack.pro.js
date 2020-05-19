const path = require('path');

module.exports = {
    target: 'node',
    mode: 'production',
    entry: './src/main.ts',
    output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'main.js'
  },
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }
    ]
  }
};