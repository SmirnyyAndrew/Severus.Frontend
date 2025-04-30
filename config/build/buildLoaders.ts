import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  //Подключение scss
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Создаёт стили из js строк
      "style-loader",
      // Переводит css в common js
      "css-loader",
      // Преобразовывает sass в css
      "sass-loader",
    ],
  };

  //Если бы не использовали typescript - нужен был бы babel-loader - перегоняет новый js в старый,
  // чтобы все браузеры его поддерживали
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader, cssLoader];
}
