import { ArticleBlockBase } from "../ArticleBlockBase";
import { ArticleBlockType } from "../ArticleBlockType";

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title?: string;
}
