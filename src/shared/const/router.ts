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

export const Routes = {
  General: {
    NotFound: () => "/*",
    Forbidden: () => "/forbidden",
  },
  Admin: {
    Panel: () => `/admin`,
  },
  Article: {
    Create: () => `/articles/new`,
    Edit: (id: string | undefined) =>
      id ? `/articles/${id}/edit` : Routes.General.NotFound(),
    Details: (id: string | undefined) =>
      id ? `/articles/${id}` : Routes.General.NotFound(),
    All: () => `/articles`,
  },
  Profile: {
    Info: (id: string | undefined) =>
      id ? `/profile/${id}` : Routes.General.NotFound(),
  },
  MainPages: {
    Main: () => "/",
    About: () => "/about",
  },
};
