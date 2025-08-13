import { ARTICLE_IMAGE_ERROR } from "shared/const/plugFiles";
import { Article } from "../types/ArticleManagement/Article";
import { ArticleType } from "../types/ArticleManagement/ArticleType";
import { ArticleCodeBlock } from "../types/BlockManagement/ArticleBlocks/ArticleCodeBlock";
import { ArticleImageBlock } from "../types/BlockManagement/ArticleBlocks/ArticleImageBlock";
import { ArticleTextBlock } from "../types/BlockManagement/ArticleBlocks/ArticleTextBlock";
import { ArticleBlockType } from "../types/BlockManagement/ArticleBlockType";

export const ArticleTextBlockExample: ArticleTextBlock = {
  id: "1",
  type: ArticleBlockType.TEXT,
  title: "Understanding TypeScript",
  paragraphs: [
    "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    "It offers optional static typing, classes, and interfaces.",
  ],
};

export const ArticleImageBlockExample: ArticleImageBlock = {
  id: "2",
  type: ArticleBlockType.IMAGE,
  src: ARTICLE_IMAGE_ERROR,
  title: "TypeScript Logo",
};

export const ArticleCodeBlockExample: ArticleCodeBlock = {
  id: "3",
  type: ArticleBlockType.CODE,
  code: `
function greet(name: string): string {
  return 'Hello, ' + name;
}
`,
};

export const ArticleExample: Article = {
  id: "1",
  title: "Getting Started with TypeScript",
  subtitle: "Why TypeScript is the future of JavaScript",
  img: ARTICLE_IMAGE_ERROR,
  views: 1234,
  createdAt: "2025-05-31",
  type: [
    ArticleType.IT,
    ArticleType.EDUCATION,
    ArticleType.SCIENCE,
    ArticleType.ENTERTAINMENT,
  ],
  blocks: [
    ArticleTextBlockExample,
    ArticleImageBlockExample,
    ArticleCodeBlockExample,
  ],
};
