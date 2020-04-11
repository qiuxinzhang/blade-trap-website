const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
      alias: {
          'vue$': 'vue/dist/vue.esm.js'
      }
  },
  module: {
     rules: [
	   {
        test: /\.vue$/,
        loader: 'vue-loader'
       },
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
	   {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
       }
     ]
   },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin()
  ]
};
