import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoginState } from "../selectors/getLoginState/getLoginState";
import { loginActions } from "../slice/loginSlice";
import { loginByUsernameThunk } from "../thunks/loginByUsernameThunk/loginByUsernameThunk";

export const useLogin = () => {
  const dispatch = useDispatch();
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

  const loginByUsername = useCallback(() => {
    dispatch(loginByUsernameThunk({ username, password }));
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
