import { lazy } from "react";

export const LoginFormAsync = lazy(() => import("./LoginForm"));
// Чтобы работал resolve(import("./LoginForm"), нужно LoginForm.tsx делать export default
