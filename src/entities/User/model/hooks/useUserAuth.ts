import {
  getUserByIdThunk,
  isUserAdmin,
  isUserManager,
  useGetUserAuthData,
  useGetUserInited,
  useGetUserRoles,
} from "entities/User";
import { setJsonSettingsThunk } from "features/ProfileManagement/SetJsonSettings";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localstorage";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { JsonSettings } from "shared/types/JsonSettings";
import { useUserActions } from "../slice/userSlice";

export const useUserAuth = () => {
  const authData = useGetUserAuthData();
  const inited = useGetUserInited();
  const roles = useGetUserRoles();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const isAdminOrManager = isAdmin || isManager;
  const dispatch = useAppDispatch();

  const { logout: logoutDispatch, setAuthData: setAuthDataDispatch } =
    useUserActions();

  const initAuthDataFromLocalStore = useCallback(() => {
    const userId = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
    if (userId) {
      dispatch(getUserByIdThunk(userId));
    }
  }, []);

  const setAuthData = useCallback(() => {
    setAuthDataDispatch({
      id: authData?.id,
      username: authData?.username,
    });
  }, []);

  const logout = useCallback(() => {
    logoutDispatch();
  }, []);

  const updateJsonSettings = useCallback(
    async (newJsonSettings: JsonSettings) => {
      await dispatch(
        setJsonSettingsThunk({
          userId: authData?.id,
          newJsonSettings,
        })
      );
    },
    [dispatch, authData?.id]
  );

  return {
    authData,
    roles,
    inited,
    isAdmin,
    isAdminOrManager,
    isManager,
    initAuthDataFromLocalStore,
    setAuthData,
    logout,
    updateJsonSettings,
  };
};
