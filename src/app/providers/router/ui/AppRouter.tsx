import { Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import {
  AppRouteProps,
  routeConfig,
} from "shared/config/routerConfig/routerConfig";
import { PageLoader } from "widgets/PageLoader";
import { RequireAuth } from "./RequireAuth";

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = <>{route.element}</>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
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
