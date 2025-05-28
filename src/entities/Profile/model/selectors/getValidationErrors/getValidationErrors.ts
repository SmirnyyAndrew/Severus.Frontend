import { createSelector } from "@reduxjs/toolkit";
import { ProfileSchema } from "entities/Profile";
import { getProfile } from "../getProfile/getProfile";

export const getValidationErrors = createSelector(
  getProfile,
  (schema: ProfileSchema | undefined) => schema?.validateErrors
);
