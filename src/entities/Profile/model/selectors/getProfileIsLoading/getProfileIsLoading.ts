import { createSelector } from "@reduxjs/toolkit";
import { ProfileSchema } from "../../types/ProfileSchema";
import { getProfile } from "../getProfile/getProfile";

export const getProfileIsLoading = createSelector(
  getProfile,
  (schema: ProfileSchema) => schema.isLoading
);
