import { AboutPage } from "pages/AboutPage";
import { ArticleDetailsPage } from "pages/ArticleManagement/ArticleDetailsPage";
import ArticlesPage from "pages/ArticleManagement/ArticlesPage/ui/ArticlesPage/ArticlesPage";
import { CreateArticlePage } from "pages/ArticleManagement/CreateArticlePage";
import { EditArticlePage } from "pages/ArticleManagement/EditArticlePage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";

// Расширяет RouterProps
export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  NOT_FOUND = "not_found",
  ARTICLES = "articles",
  ARTICLE_DETAILS = "article_details",
  ARTICLE_EDIT = "article_edit",
  ARTICLE_CREATE = "article_create",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile/", // + :id
  [AppRoutes.ARTICLES]: "/articles",
  [AppRoutes.ARTICLE_DETAILS]: "/articles/", // + :id
  [AppRoutes.ARTICLE_EDIT]: "/articles/:id/edit", // + :id
  [AppRoutes.ARTICLE_CREATE]: "/articles/new", // + :id

  //rest
  [AppRoutes.NOT_FOUND]: "/*",
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },

  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },

  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${RoutePath.article_edit}`,
    element: <EditArticlePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: `${RoutePath.article_create}`,
    element: <CreateArticlePage />,
    authOnly: true,
  },

  //rest
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};

export const getRoutePathWithId = (
  route: AppRoutes,
  id: string | undefined
) => {
  if (id) return RoutePath[route].replace(":id", id);
  else return RoutePath.not_found;
};
