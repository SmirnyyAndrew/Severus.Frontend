import webpack from "webpack";
// Указываем *, потому что эти пакеты предназначены для node js (не ts)
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode,
    //Путь к стартовоой точки нашего приложения
    //dirname - это текущая папка
    entry: paths.entry,

    //Куда и как осуществлять сборку
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      //Очистить старые файлы
      clean: true,
      //При аргементе в url
      publicPath: "/",
    },

    //Подключаем плагины
    plugins: buildPlugins(options),

    module: {
      //Конфигурариуем лоадеры для обработки данных, которые выходят за рамки js - png, css, ts и тд
      rules: buildLoaders(options),
    },
    //Указываем, что данные расширения не нужно указывать при import'e
    resolve: buildResolvers(options),
    devtool: isDev ? "eval-cheap-module-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
