import { UserRole } from "entities/User";
import { RouteProps } from "react-router-dom";

// Расширяет RouterProps
export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
