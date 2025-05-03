import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  //Подключение scss
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Создаёт стили из js строк
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Переводит css в common js
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) =>
              Boolean(resourcePath.includes(".module.")),
            localIdentName: isDev ? "[path[name]__[local]" : "[hash:base64:8]",
          },
        },
      },
      // Преобразовывает sass в css
      "sass-loader",
    ],
  };

  //Если бы не использовали typescript - нужен был бы babel-loader - перегоняет новый js в старый,
  // чтобы все браузеры его поддерживали
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader, cssLoader, svgLoader, fileLoader];
}
