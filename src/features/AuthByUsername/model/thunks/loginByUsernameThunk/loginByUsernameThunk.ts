import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsernameThunk = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>("users/loginByUsername", async ({ username, password }, thunkApi) => {
  try {
    const response = await axios.post("http://localhost:28532/login", {
      username: username,
      password: password,
    });

    if (!response.data) throw new Error();

    thunkApi.dispatch(userActions.setAuthData(response.data));
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkApi.rejectWithValue("error");
  }
});
