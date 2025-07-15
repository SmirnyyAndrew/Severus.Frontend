import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack, { RuleSetRule } from "webpack";
import { buildCSSLoader } from "../build/loaders/buildCSSLoader";

export default ({ config }: { config: webpack.Configuration }) => {
  config.resolve?.modules?.push(path.resolve(__dirname, "../../src"));
  config.resolve?.extensions?.push(".ts", ".tsx");

  config.plugins?.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(false),
      __API__: JSON.stringify("http://localhost:28532"),
      __IS_STORYBOOK__: JSON.stringify(true),
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
      chunkFilename: "styles/[id].[contenthash].css",
    })
  );

  config.module!.rules = config.module?.rules
    ?.filter(
      (rule): rule is RuleSetRule =>
        rule !== false && rule !== null && rule !== undefined
    )
    .map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  // config.resolve = {
  //   ...(config.resolve || {}),
  //   plugins: [
  //     ...(config.resolve?.plugins || []),
  //     new TsconfigPathsPlugin({
  //       configFile: path.resolve(__dirname, "../../tsconfig.json"),
  //     }),
  //   ],
  //   extensions: [".ts", ".tsx", ".js", ".jsx"],
  // };

  config.module?.rules?.push(buildCSSLoader(true));

  return config;
};
