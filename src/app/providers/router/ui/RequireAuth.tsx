import { UserRole } from "entities/User";
import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { Loader } from "shared/ui/Loader/Loader";

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export function RequireAuth(props: RequireAuthProps) {
  const { roles, children } = props;

  const {
    inited = false,
    authData = undefined,
    roles: userRoles,
  } = useUserAuth();

  const hasRequiredRoles: boolean = useMemo(() => {
    console.log("roles", roles);
    console.log("userRoles", userRoles);

    if (!roles) return true;
    if (!roles.length) return true;

    return roles.some((reqRole) => {
      const hasRole = userRoles.includes(reqRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  console.log("hasRequiredRoles", hasRequiredRoles);

  if (!inited) {
    return <Loader />;
  }

  if (!hasRequiredRoles) return <Navigate to={RoutePath.forbidden} replace />;

  // при replace нельзя вернуться назад нажатием кнопки назад в браузере
  if (!authData) {
    return <Navigate to={RoutePath.main} replace />;
  }

  return children;
}
