import babelRemovePropsPlugin from "../babel/babelRemovePropsPlugin";
import { BuildOptions } from "../types/config";

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx: boolean;
}

export const buildBabelLoader = (props: BuildBabelLoaderProps) => {
  const { isDev, isTsx } = props;

  return {
    test: isTsx ? /\.(?:tsx|jsx)$/ : /\.(?:ts|js)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        targets: "defaults",
        presets: [["@babel/preset-env"]],
        plugins: [
          [
            "i18next-extract",
            // { nsSeparator: "~" },
            { locales: ["ru", "en"], keyAsDefaultValue: true },
          ],
          [
            "@babel/plugin-transform-typescript",
            {
              isTsx,
            },
          ],
          "@babel/plugin-transform-runtime",
          isTsx && [
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
