import * as path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuidPaths, BuildEnv } from "./config/build/types/config";
import { BACKEND_URL } from "./src/shared/const/connectionStrings";

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
  const apiUrl = env.apiUrl || BACKEND_URL;

  logEnvValues(env);
  logCurrentValues(PORT, mode, apiUrl);

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

const logEnvValues = (env: BuildEnv) => {
  console.log("===========> env:start <=========");
  console.log("api url: " + env.apiUrl);
  console.log("port: " + env.port);
  console.log("mode: " + env.mode);
  console.log("===========> env:end <=========");
  console.log("");
};

const logCurrentValues = (port: number, mode: string, apiUrl: string) => {
  console.log("===========> current:start <=========");
  console.log("api url: " + apiUrl);
  console.log("port: " + port);
  console.log("mode: " + mode);
  console.log("===========> current:end <=========");
  console.log("");
};
