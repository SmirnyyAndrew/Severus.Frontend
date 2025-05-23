import * as path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuidPaths, BuildEnv } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuidPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const PORT = env.port || 3000;
  const mode = env.mode || "development";
  const isDev = env.mode === "development";
  const apiUrl = env.apiUrl || "http://localhost:28532";

  // Указали webpack.Configuration для intellisense
  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
  });

  return config;
};
