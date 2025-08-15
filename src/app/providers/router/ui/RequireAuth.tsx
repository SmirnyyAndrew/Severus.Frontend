import { UserRole } from "entities/User";
import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { Routes } from "shared/const/router";

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export function RequireAuth(props: RequireAuthProps) {
  const { roles, children } = props;

  const { authData = undefined, roles: userRoles } = useUserAuth();

  const hasRequiredRoles: boolean = useMemo(() => {
    if (!roles) return true;
    if (!userRoles) return false;

    return roles.some((reqRole) => {
      const hasRole = userRoles.includes(reqRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  if (!hasRequiredRoles)
    return <Navigate to={Routes.General.Forbidden()} replace />;

  // при replace нельзя вернуться назад нажатием кнопки назад в браузере
  if (!authData) {
    return <Navigate to={Routes.MainPages.Main()} replace />;
  }

  return children;
}
