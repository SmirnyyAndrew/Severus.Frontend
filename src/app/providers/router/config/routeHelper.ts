import { AppRoutes, RoutePath } from "shared/const/router";

export const getRoutePathWithId = (
  route: AppRoutes,
  id: string | undefined
) => {
  if (id) return RoutePath[route].replace(":id", id);
  else return RoutePath.not_found;
};
