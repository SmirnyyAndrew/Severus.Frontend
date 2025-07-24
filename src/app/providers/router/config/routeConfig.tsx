import { UserRole } from "entities/User";
import { AboutPage } from "pages/AboutPage";
import { AdminPanelPage } from "pages/AdminManagement/AdminPanelPage";
import { ArticleDetailsPage } from "pages/ArticleManagement/ArticleDetailsPage";
import { ArticlesPage } from "pages/ArticleManagement/ArticlesPage";
import { CreateArticlePage } from "pages/ArticleManagement/CreateArticlePage";
import { EditArticlePage } from "pages/ArticleManagement/EditArticlePage";
import { ForbiddenPage } from "pages/GeneralPages/ForbiddenPage";
import { NotFoundPage } from "pages/GeneralPages/NotFoundPage";
import { MainPage } from "pages/MainPage";
import { ProfilePage } from "pages/ProfilePage";
import { AppRoutes, RoutePath } from "shared/const/router";
import { AppRouteProps } from "shared/types/router/router";

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  //rest
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  [AppRoutes.FORBIDDEN]: {
    path: RoutePath.forbidden,
    element: <ForbiddenPage />,
  },

  //general
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
  [AppRoutes.ADMIN_PANEL]: {
    path: `${RoutePath.admin_panel}`,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
};
