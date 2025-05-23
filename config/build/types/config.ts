export type BuildMode = "production" | "development";

export interface BuidPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  apiUrl: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuidPaths;
  isDev: boolean;
  port: number;
  apiUrl: string;
}
