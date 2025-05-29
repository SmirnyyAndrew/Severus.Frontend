import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const navigate = useNavigate();
  const redirectToArticleDetailsPage = (id: string) => {
    navigate(RoutePath.article_details + id);
  };

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ul>
        <li onClick={() => redirectToArticleDetailsPage("1")} key={"1"}>
          first
        </li>
        <li onClick={() => redirectToArticleDetailsPage("2")} key={"2"}>
          second
        </li>
        <li onClick={() => redirectToArticleDetailsPage("3")} key={"3"}>
          third
        </li>
      </ul>
    </div>
  );
};

export default ArticlesPage;
