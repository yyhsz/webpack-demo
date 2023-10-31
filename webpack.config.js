// webpack.config.js

const path = require('path');

module.exports = {
  // 入口文件
  entry: './src/index.js',

  // 输出文件配置
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出文件夹
    filename: 'bundle.js', // 输出文件名
  },

  // 模块配置
  module: {
    rules: [
      //  {
      //    test: /\.js$/,
      //    exclude: /node_modules/,
      //    use: {
      //      loader: 'babel-loader', // 使用Babel加载器处理JavaScript文件
      //      options: {
      //        presets: ['@babel/preset-env'], // Babel环境预设
      //      },
      //    },
      //  },
      {
        test: /\.css$/,
        use: [
          'style-loader', // 使用style-loader处理CSS文件
          'css-loader', // 使用css-loader处理CSS文件
        ],
      },
    ],
  },
  mode: 'development'

  // 插件配置
  //  plugins: [
  //    new CleanWebpackPlugin(), // 清理构建目录
  //  ],
};