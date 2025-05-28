export const buildBabelLoader = (isDev: boolean) => {
  return {
    test: /\.(?:js|mjs|cjs|tsx|jsx)$/,
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
          isDev && require.resolve("react-refresh/babel"),
        ].filter(Boolean),
      },
    },
  };
};
