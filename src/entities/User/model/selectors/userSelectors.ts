import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { buildSelector } from "shared/lib/srote/buildSelector";
import { UserRole } from "../types/UserRole";

export const [useGetUser, getUserSelector] = buildSelector(
  (state: StateSchema) => state.user
);

export const [useGetUserInited, getUserInitedSelector] = buildSelector(
  (state: StateSchema) => state.user?._inited ?? false
);

export const [useGetUserAuthData, getUserAuthDataSelector] = buildSelector(
  (state: StateSchema) => state.user?.authData
);

export const [useGetUserRoles, getUserRolesSelector] = buildSelector(
  (state: StateSchema) => state.user?.authData?.roles ?? []
);

export const isUserAdmin = createSelector(getUserRolesSelector, (roles) =>
  Boolean(roles?.includes(UserRole.ADMIN))
);
export const isUserManager = createSelector(getUserRolesSelector, (roles) =>
  Boolean(roles?.includes(UserRole.MANAGER))
);
