import { createSelector } from "@reduxjs/toolkit";
import { getUser } from "entities/User";
import { UserSchema } from "../../types/UserSchema";

export const getUserAuthData = createSelector(
  getUser,
  (schema: UserSchema) => schema.authData
);
