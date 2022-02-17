const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new CssMinimizerPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
});































































// const { merge } = require("webpack-merge");
// const common = require("./webpack.common.js");

// const TerserPlugin = require("terser-webpack-plugin");


// module.exports = merge(common, {
//   mode: "production",
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./src/index.html",
//     }),
//     new MiniCssExtractPlugin({
//       filename: "style.css",
//     }),
//     new CssMinimizerPlugin(),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: [MiniCssExtractPlugin.loader, "css-loader"],
//       },
//       {
//         test: /\.html$/i,
//         loader: "html-loader",
//       },
//     ]
//   },
//   optimization: {
//     minimize: true,
//     minimizer: [
//       new TerserPlugin(),
//       new CssMinimizerPlugin(),
//     ],
//   },
// });