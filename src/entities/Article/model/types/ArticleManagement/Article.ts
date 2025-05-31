import { ArticleBlock } from "../BlockManagement/ArticleBlock";
import { ArticleType } from "./ArticleType";

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
