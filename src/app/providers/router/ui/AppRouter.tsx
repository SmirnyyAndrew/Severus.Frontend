import { Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRouteProps } from "shared/types/router/router";
import { PageLoader } from "widgets/PageLoader";
import { routeConfig } from "../config/routeConfig";
import { RequireAuth } from "./RequireAuth";

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    const element = <>{route.element}</>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly || route.roles ? (
            <RequireAuth roles={route.roles} key={route.path}>
              {element}
            </RequireAuth>
          ) : (
            element
          )
        }
      />
    );
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};
