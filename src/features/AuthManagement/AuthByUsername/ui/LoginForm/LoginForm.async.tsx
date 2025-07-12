import { FC, lazy } from "react";
import { LoginFormProps } from "./LoginForm";

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () => import("./LoginForm")
);
// Чтобы работал resolve(import("./LoginForm"), нужно LoginForm.tsx делать export default
