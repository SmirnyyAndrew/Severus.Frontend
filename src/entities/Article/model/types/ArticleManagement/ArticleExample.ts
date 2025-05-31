import { errorArticleImg } from "shared/const/plugFiles";
import { ArticleCodeBlock } from "../BlockManagement/ArticleBlocks/ArticleCodeBlock";
import { ArticleImageBlock } from "../BlockManagement/ArticleBlocks/ArticleImageBlock";
import { ArticleTextBlock } from "../BlockManagement/ArticleBlocks/ArticleTextBlock";
import { ArticleBlockType } from "../BlockManagement/ArticleBlockType";
import { Article } from "./Article";
import { ArticleType } from "./ArticleType";

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
  src: errorArticleImg,
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
  id: "article-1",
  title: "Getting Started with TypeScript",
  subtitle: "Why TypeScript is the future of JavaScript",
  img: errorArticleImg,
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
