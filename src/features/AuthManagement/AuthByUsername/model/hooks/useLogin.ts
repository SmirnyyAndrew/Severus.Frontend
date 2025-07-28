import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { useGetLoginState } from "../selectors/getLoginState/getLoginState";
import { useLoginActions } from "../slice/loginSlice";
import { loginByUsernameThunk } from "../thunks/loginByUsernameThunk/loginByUsernameThunk";

export const useLogin = () => {
  const { username, password, isLoading, error } = useGetLoginState();
  const dispatch = useAppDispatch();
  const { setPassword: setPasswordDispatch, setUsername: setUsernameDispatch } =
    useLoginActions();

  const setUsername = useCallback((username: string) => {
    setUsernameDispatch(username);
  }, []);

  const setPassword = useCallback((password: string) => {
    setPasswordDispatch(password);
  }, []);

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
