import { Theme } from "app/providers/ThemeProvider";
import { ArticleViewType } from "entities/Article";
import { Langs } from "./lang/Langs";

export type JsonSettings = {
  language?: Langs;
  theme?: Theme;
  articleViewType?: ArticleViewType;
};
