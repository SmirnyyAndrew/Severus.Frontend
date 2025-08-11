import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { JsonSettings } from "shared/types/JsonSettings";

interface SetJsonSettingsProps {
  userId?: string;
  newJsonSettings: JsonSettings;
}

export const setJsonSettingsThunk = createAsyncThunk<
  JsonSettings,
  SetJsonSettingsProps,
  ThunkConfig<string>
>("users/setThemeThunk", async ({ newJsonSettings, userId }, thunkApi) => {
  if (!userId) return thunkApi.rejectWithValue("error");

  if (__IS_STORYBOOK__) return newJsonSettings;

  try {
    const user = await thunkApi.extra.api.get(`/users/${userId}`);
    if (!user.data) return thunkApi.rejectWithValue("error");

    const updatedUser = { ...user.data, jsonSettings: newJsonSettings };

    await thunkApi.extra.api.put(`/users/${userId}`, updatedUser);

    return newJsonSettings;
  } catch (e) {
    console.log(e);
    return thunkApi.rejectWithValue("error");
  }
});
