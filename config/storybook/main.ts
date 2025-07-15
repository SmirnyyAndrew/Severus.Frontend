import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(ts|tsx)"],
  staticDirs: ["../../public"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, "../../src"),
        "node_modules",
      ];

      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        app: path.resolve(__dirname, "../../src/app"),
        shared: path.resolve(__dirname, "../../src/shared"),
        entities: path.resolve(__dirname, "../../src/entities"),
        features: path.resolve(__dirname, "../../src/features"),
        widgets: path.resolve(__dirname, "../../src/widgets"),
        pages: path.resolve(__dirname, "../../src/pages"),
        src: path.resolve(__dirname, "../../src"),
      };
    }

    return config;
  },
};
export default config;
