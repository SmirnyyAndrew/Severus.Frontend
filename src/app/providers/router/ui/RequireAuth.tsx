import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { authData } = useUserAuth();
  const location = useLocation();

  if (!authData) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
}
