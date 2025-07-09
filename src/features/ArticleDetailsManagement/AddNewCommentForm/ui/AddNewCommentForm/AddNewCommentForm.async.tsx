import { FC, lazy } from "react";
import { AddNewCommentFormProps } from "./AddNewCommentForm";

export const AddNewCommentFormAsync = lazy<FC<AddNewCommentFormProps>>(
  () =>
    new Promise((resolve) =>
      // @ts-ignore
      setTimeout(() => resolve(import("./AddNewCommentForm")), 100)
    )
);
