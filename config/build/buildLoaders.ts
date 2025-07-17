import webpack from "webpack";
import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { buildCSSLoader } from "./loaders/buildCSSLoader";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const codeBabelLoadr = buildBabelLoader({ ...options, isTsx: true });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: false });

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
  const cssLoader = buildCSSLoader(isDev);

  //Если бы не использовали typescript - нужен был бы babel-loader - перегоняет новый js в старый,
  // чтобы все браузеры его поддерживали
  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: "ts-loader",
  //   exclude: /node_modules/,
  // };

  return [codeBabelLoadr, tsxCodeBabelLoader, cssLoader, svgLoader, fileLoader];
}
