import { FC, lazy } from "react";
import { EditProfileDataFormProps } from "./EditProfileDataForm";

export const EditProfileDataFormAsync = lazy<FC<EditProfileDataFormProps>>(
  () =>
    new Promise((resolve) =>
      // @ts-ignore
      setTimeout(() => resolve(import("./EditProfileDataForm")), 150)
    )
);
