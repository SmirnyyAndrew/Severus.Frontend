import { createSelector } from "@reduxjs/toolkit";
import { UserSchema } from "../../types/UserSchema";
import { getUser } from "../getUser/getUser";

export const getUserInited = createSelector(
  getUser,
  (schema: UserSchema) => schema._inited
);
