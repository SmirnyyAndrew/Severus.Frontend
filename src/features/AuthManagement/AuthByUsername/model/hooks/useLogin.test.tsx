import { act, renderHook } from "@testing-library/react";
import { StoreProviderWrapper } from "shared/config/tests/storeProviderWrapper/StoreProviderWrapper";
import { WrapperReducerType } from "shared/config/tests/storeProviderWrapper/types/WrapperReducerType";
import { WrapperType } from "shared/config/tests/storeProviderWrapper/types/WrapperType";
import { loginReducer } from "../slice/loginSlice";
import { LoginSchema } from "../types/LoginSchema";
import { useLogin } from "./useLogin";

describe("useLogin", () => {
  let wrapper: WrapperType;

  beforeEach(() => {
    wrapper = ({ children }) =>
      StoreProviderWrapper({
        children,
        reducers: {
          login: loginReducer as WrapperReducerType<LoginSchema>,
        },
      });
  });

  test("setPassword", () => {
    const { result } = renderHook(() => useLogin(), { wrapper });
    const testPassword = "dificult_password_123#21!";
    act(() => {
      result.current.setPassword(testPassword);
    });

    expect(result.current.password).toEqual(testPassword);
    expect(result.current.error).toBe(undefined);
  });

  test("setUsername", () => {
    const { result } = renderHook(() => useLogin(), { wrapper });
    const testUsername = "Jhon Snow";
    act(() => {
      result.current.setUsername(testUsername);
    });

    expect(result.current.username).toEqual(testUsername);
    expect(result.current.error).toBe(undefined);
  });
});
