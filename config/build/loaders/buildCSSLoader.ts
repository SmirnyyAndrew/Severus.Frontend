import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCSSLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      // Создаёт стили из js строк
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Переводит css в common js
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) =>
              Boolean(resourcePath.includes(".module.")),
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
          },
        },
      },
      // Преобразовывает sass в css
      "sass-loader",
    ],
  };
}
