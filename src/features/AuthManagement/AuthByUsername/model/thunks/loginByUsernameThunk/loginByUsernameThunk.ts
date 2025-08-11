import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localstorage";
import { Routes } from "shared/const/router";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsernameThunk = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>("users/loginByUsername", async ({ username, password }, thunkApi) => {
  try {
    const response = await thunkApi.extra.api.post("/login", {
      username: username,
      password: password,
    });

    if (!response.data) throw new Error();

    thunkApi.dispatch(userActions.setAuthData(response.data));
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));

    thunkApi.extra.navigate?.(Routes.Profile.Info(response.data.id));
    return response.data;
  } catch (e) {
    console.log(e);
    return thunkApi.rejectWithValue("error");
  }
});
