import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { UserRole } from "../types/UserRole";

export const getUser = (state: StateSchema) => state.user;

export const getUserInited = (state: StateSchema) =>
  state.user?._inited ?? false;

export const getUserAuthData = (state: StateSchema) => state.user?.authData;

export const getUserRoles = (state: StateSchema) =>
  state.user?.authData?.roles ?? [];
export const isUserAdmin = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRole.ADMIN))
);
export const isUserManager = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRole.MANAGER))
);
