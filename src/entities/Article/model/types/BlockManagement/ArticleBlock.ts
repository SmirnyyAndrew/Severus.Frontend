import { ArticleCodeBlock } from "./ArticleBlocks/ArticleCodeBlock";
import { ArticleImageBlock } from "./ArticleBlocks/ArticleImageBlock";
import { ArticleTextBlock } from "./ArticleBlocks/ArticleTextBlock";

export type ArticleBlock =
  | ArticleTextBlock
  | ArticleImageBlock
  | ArticleCodeBlock;
