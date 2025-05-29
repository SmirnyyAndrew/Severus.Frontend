import { getUserInited } from "entities/User";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData } from "../selectors/getUserAuthData/getUserAuthData";
import { userActions } from "../slice/userSlice";

export const useUserAuth = () => {
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const inited = useSelector(getUserInited);

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

  return { authData, inited, initAuthData, setAuthData, logout };
};
