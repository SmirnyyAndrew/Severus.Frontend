import {
  getUserAuthData,
  getUserInited,
  getUserRoles,
  isUserAdmin,
  isUserManager,
} from "entities/User";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../slice/userSlice";

export const useUserAuth = () => {
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const inited = useSelector(getUserInited);
  const roles = useSelector(getUserRoles);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const isAdminOrManager = isAdmin || isManager;

  const initAuthData = useCallback(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  const setAuthData = useCallback(() => {
    dispatch(
      userActions.setAuthData({
        id: authData?.id,
        username: authData?.username,
      })
    );
  }, [dispatch]);

  const logout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

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
