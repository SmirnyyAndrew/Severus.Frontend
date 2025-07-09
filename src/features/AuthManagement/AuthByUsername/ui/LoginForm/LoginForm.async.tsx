import { FC, lazy } from "react";
import { LoginFormProps } from "./LoginForm";

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () =>
    new Promise((resolve) =>
      // @ts-ignore
      setTimeout(() => resolve(import("./LoginForm")), 100)
    )
);
// Чтобы работал resolve(import("./LoginForm"), нужно LoginForm.tsx делать export default
