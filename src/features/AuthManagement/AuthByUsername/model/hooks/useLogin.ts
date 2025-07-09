import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { getLoginState } from "../selectors/getLoginState/getLoginState";
import { loginActions } from "../slice/loginSlice";
import { loginByUsernameThunk } from "../thunks/loginByUsernameThunk/loginByUsernameThunk";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const setUsername = useCallback(
    (username: string) => {
      dispatch(loginActions.setUsername(username));
    },
    [dispatch]
  );

  const setPassword = useCallback(
    (password: string) => {
      dispatch(loginActions.setPassword(password));
    },
    [dispatch]
  );

  const loginByUsername = useCallback(async () => {
    return await dispatch(loginByUsernameThunk({ username, password }));
  }, [dispatch, username, password]);

  return {
    username,
    password,
    isLoading,
    error,
    setUsername,
    setPassword,
    loginByUsername,
  };
};
