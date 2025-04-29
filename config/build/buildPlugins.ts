import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

// Возвращаем массив плагинов webpack'a
export function buildPlugins({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      //Шаблон. В него будут встраиваться скрипты
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
}
