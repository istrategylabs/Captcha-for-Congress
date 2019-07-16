const path = require("path");

module.exports = {
  entry: "./src/captcha.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "captcha.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  watch: true
};
