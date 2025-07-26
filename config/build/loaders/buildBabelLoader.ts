import babelRemovePropsPlugin from "../babel/babelRemovePropsPlugin";
import { BuildOptions } from "../types/config";

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx: boolean;
}

export const buildBabelLoader = (props: BuildBabelLoaderProps) => {
  const { isDev, isTsx } = props;
  const isProd = !isDev;

  return {
    test: isTsx ? /\.(?:tsx|jsx)$/ : /\.(?:ts|js)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
        targets: "defaults",
        presets: [["@babel/preset-env"]],
        plugins: [
          [
            "@babel/plugin-transform-typescript",
            {
              isTsx,
            },
          ],
          "@babel/plugin-transform-runtime",
          isTsx &&
            isProd && [
              babelRemovePropsPlugin,
              {
                props: ["data-testid"],
              },
            ],
          isDev && require.resolve("react-refresh/babel"),
        ].filter(Boolean),
      },
    },
  };
};
