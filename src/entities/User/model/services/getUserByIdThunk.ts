import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { CreateMockUser } from "../mocs/CreateMockUser";
import { User } from "../types/User";

export const getUserByIdThunk = createAsyncThunk<
  User,
  string | undefined,
  ThunkConfig<string>
>("user/getUserByIdThunk", async (userId, thunkApi) => {
  if (__IS_STORYBOOK__) return CreateMockUser();

  const { extra, rejectWithValue } = thunkApi;

  if (!userId) {
    return rejectWithValue("error");
  }

  try {
    const response = await extra.api.get<User>(`/users/${userId}`);
    const user = response?.data;
    if (!user) throw new Error();

    return user;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
