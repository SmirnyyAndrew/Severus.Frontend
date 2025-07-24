export enum AppRoutes {
  //rest
  NOT_FOUND = "not_found",
  FORBIDDEN = "forbidden",

  //general
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARTICLES = "articles",
  ARTICLE_DETAILS = "article_details",
  ARTICLE_EDIT = "article_edit",
  ARTICLE_CREATE = "article_create",
  ADMIN_PANEL = "admin_panel",
}

export const RoutePath: Record<AppRoutes, string> = {
  //rest
  [AppRoutes.NOT_FOUND]: "/*",
  [AppRoutes.FORBIDDEN]: "/forbidden",

  //general
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile/", // + :id
  [AppRoutes.ARTICLES]: "/articles",
  [AppRoutes.ARTICLE_DETAILS]: "/articles/", // + :id
  [AppRoutes.ARTICLE_EDIT]: "/articles/:id/edit", // + :id
  [AppRoutes.ARTICLE_CREATE]: "/articles/new", // + :id
  [AppRoutes.ADMIN_PANEL]: "/admin",
};
