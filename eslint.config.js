import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        document: "readonly",
        window: "readonly",
        HTMLImageElement: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": ts,
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      // Уже есть
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],

      // Строгие проверки типов
      //"@typescript-eslint/no-explicit-any": "warn", // Не использовать `any` без необходимости

      // Безопасные операции с объектами
      "@typescript-eslint/no-non-null-assertion": "warn", // Предупреждение при использовании !

      // React hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",

      // React
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // Общие JS
      eqeqeq: ["error", "always"], // Всегда использовать === и !==
      "no-eval": "error", // Запрет eval
      "no-implied-eval": "error", // Запрет косвенного eval
      "no-with": "error", // Запрет конструкции with
      "no-throw-literal": "error", // Бросать только Error объекты
      "no-unreachable": "error", // Код после return, throw и т.д.
      "no-unsafe-optional-chaining": "error", // Ошибки при optional chaining
      "no-useless-catch": "warn", // Лишние catch блоки

      "react/jsx-no-duplicate-props": "error", // Запрет дублирования props
      "react/jsx-no-useless-fragment": "warn", // Не использовать пустые фрагменты
      "react/jsx-key": "error", // Обязательные ключи в списках
      "react/no-danger": "error", // Запрет dangerouslySetInnerHTML
      "react/no-direct-mutation-state": "error", // Запрет прямой мутации state
      "react/no-unstable-nested-components": "warn", // Предотвращает лишние ререндеры
    },
    settings: {
      react: { version: "detect" },
    },
  },
];
