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
import { AppRoutes, Routes } from "shared/const/router";
import { AppRouteProps } from "shared/types/router/router";

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  //rest
  [AppRoutes.NOT_FOUND]: {
    path: Routes.General.NotFound(),
    element: <NotFoundPage />,
  },
  [AppRoutes.FORBIDDEN]: {
    path: Routes.General.Forbidden(),
    element: <ForbiddenPage />,
  },

  //general
  [AppRoutes.MAIN]: {
    path: Routes.MainPages.Main(),
    element: <MainPage />,
  },

  [AppRoutes.ABOUT]: {
    path: Routes.MainPages.About(),
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: Routes.Profile.Info(":id"),
    element: <ProfilePage />,
    authOnly: true,
  },

  [AppRoutes.ARTICLES]: {
    path: Routes.Article.All(),
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    // path: `${RoutePath.article_details}:id`,
    path: Routes.Article.Details(":id"),
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: Routes.Article.Edit(":id"),
    element: <EditArticlePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: Routes.Article.Create(),
    element: <CreateArticlePage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: Routes.Admin.Panel(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
};
