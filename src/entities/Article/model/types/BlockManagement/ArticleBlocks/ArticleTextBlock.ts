import { ArticleBlockBase } from "../ArticleBlockBase";
import { ArticleBlockType } from "../ArticleBlockType";

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}
