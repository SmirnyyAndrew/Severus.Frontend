import { DeepPartial } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/LoginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice", () => {
  test("set username", () => {
    const testUsername = "admin";
    const state: DeepPartial<LoginSchema> = {
      username: testUsername,
    };

    const action = loginReducer(
      state as LoginSchema,
      loginActions.setUsername(testUsername)
    );

    expect(action.username).toEqual(testUsername);
  });

  test("set password", () => {
    const testPassword = "password_qwerty123";
    const state: DeepPartial<LoginSchema> = {
      password: testPassword,
    };

    const action = loginReducer(
      state as LoginSchema,
      loginActions.setPassword(testPassword)
    );

    expect(action.password).toEqual(testPassword);
  });
});
