import {
  getUserAuthData,
  getUserInited,
  getUserRoles,
  isUserAdmin,
  isUserManager,
} from "entities/User";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useUserActions } from "../slice/userSlice";

export const useUserAuth = () => {
  const authData = useSelector(getUserAuthData);
  const inited = useSelector(getUserInited);
  const roles = useSelector(getUserRoles);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const isAdminOrManager = isAdmin || isManager;

  const {
    initAuthData: initAuthDataDispatch,
    logout: logoutDispatch,
    setAuthData: setAuthDataDispatch,
  } = useUserActions();

  const initAuthData = useCallback(() => {
    initAuthDataDispatch();
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

  return {
    authData,
    roles,
    inited,
    isAdmin,
    isAdminOrManager,
    isManager,
    initAuthData,
    setAuthData,
    logout,
  };
};
