// Указываем *, потому что эти пакеты предназначены для node js (не ts)
import HTMLWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import * as webpack from "webpack";

// Указали webpack.Configuration для intellisense
const config: webpack.Configuration = {
  mode: "development",
  //Путь к стартовоой точки нашего приложения
  //dirname - это текущая папка
  entry: path.resolve(__dirname, "src", "index.ts"),

  //Куда и как осуществлять сборку
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    //Очистить старые файлы
    clean: true,
  },

  //Подключаем плагины
  plugins: [
    new HTMLWebpackPlugin({
      //Шаблон. В него будут встраиваться скрипты
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new webpack.ProgressPlugin(),
  ],

  module: {
    //Конфигурариуем лоадеры для обработки данных, которые выходят за рамки js - png, css, ts и тд
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  //Указываем, что данные расширения не нужно указывать при import'e
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

export default config;
