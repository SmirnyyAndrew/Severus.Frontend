import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  const typesscriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typesscriptLoader];
}
