import * as path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuidPaths, BuildEnv } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuidPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const PORT = env.port || 3000;
  const mode = env.mode || "development";
  const isDev = mode === "development";

  // Указали webpack.Configuration для intellisense
  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
