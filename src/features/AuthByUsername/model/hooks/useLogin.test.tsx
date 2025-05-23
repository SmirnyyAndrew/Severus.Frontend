import { act, renderHook } from "@testing-library/react-hooks";
import { ReactNode } from "react";
import { StoreProviderWrapper } from "shared/config/tests/storeProviderWrapper/StoreProviderWrapper";
import { loginReducer } from "../slice/loginSlice";
import { useLogin } from "./useLogin";

describe("useLogin", () => {
  let wrapper: (children: ReactNode) => JSX.Element;

  beforeEach(() => {
    wrapper = StoreProviderWrapper({
      reducers: {
        login: loginReducer,
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
