import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { Navigate } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { Loader } from "shared/ui/Loader/Loader";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { inited, authData } = useUserAuth();

  if (!inited) {
    return <Loader />;
  }

  if (!authData) {
    return <Navigate to={RoutePath.main} state={{ from: location }} />;
  }

  return children;
}
