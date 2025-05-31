import { ArticleBlockBase } from "../ArticleBlockBase";
import { ArticleBlockType } from "../ArticleBlockType";

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}
