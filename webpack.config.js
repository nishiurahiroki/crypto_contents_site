const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const commitHash = require('child_process')
                    .execSync('git rev-parse --short HEAD')
                    .toString()

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `app.${commitHash}.js`,
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: [/\.ts$/, /\.tsx$/],
        use: [
          {
            loader: "ts-loader"
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "templates/index.html"),
    }),
    new CopyPlugin({
      patterns: [
        { from: "assets", to: "assets" },
      ],
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: '80'
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  }
};
