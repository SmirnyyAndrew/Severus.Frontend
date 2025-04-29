export type BuildMode = "production" | "development";

export interface BuidPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuidPaths;
  isDev: boolean;
}
