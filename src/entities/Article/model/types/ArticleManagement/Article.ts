import { User } from "entities/User";
import { ArticleBlock } from "../BlockManagement/ArticleBlock";
import { ArticleType } from "./ArticleType";

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  user?: User;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
