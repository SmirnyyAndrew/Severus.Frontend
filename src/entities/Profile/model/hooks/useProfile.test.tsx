import { act, renderHook } from "@testing-library/react";
import { ProfileExample } from "entities/Profile";
import { StoreProviderWrapper } from "shared/config/tests/storeProviderWrapper/StoreProviderWrapper";
import { WrapperReducerType } from "shared/config/tests/storeProviderWrapper/types/WrapperReducerType";
import { WrapperType } from "shared/config/tests/storeProviderWrapper/types/WrapperType";
import { profileReducer } from "../slice/profileSlice";
import { ProfileSchema } from "../types/ProfileSchema";
import { useProfile } from "./useProfile";

describe("useProfile", () => {
  let wrapper: WrapperType;

  beforeEach(() => {
    wrapper = ({ children }) =>
      StoreProviderWrapper({
        children,
        reducers: {
          profile: profileReducer as WrapperReducerType<ProfileSchema>,
        },
        preloadedState: {
          profile: {
            isLoading: false,
            error: undefined,
            profileData: ProfileExample,
          },
        },
      });
  });

  test("setProfileData", () => {
    const { result } = renderHook(() => useProfile(), { wrapper });
    const testProfile = ProfileExample;

    act(() => {
      result.current.setProfileData(testProfile);
    });

    expect(result.current.profileData).toEqual(testProfile);
    expect(result.current.error).toBe(undefined);
  });

  test("setName", () => {
    const { result } = renderHook(() => useProfile(), { wrapper });
    const testName = "name-ew090d";

    act(() => {
      result.current.setName(testName);
    });

    expect(result.current.profileData?.name).toEqual(testName);
    expect(result.current.error).toBe(undefined);
  });

  test("setUsername", () => {
    const { result } = renderHook(() => useProfile(), { wrapper });
    const testUsername = "username=salasl";

    act(() => {
      result.current.setUsername(testUsername);
    });

    expect(result.current.profileData?.username).toEqual(testUsername);
    expect(result.current.error).toBe(undefined);
  });

  test("setLocation", () => {
    const { result } = renderHook(() => useProfile(), { wrapper });
    const testLocation = "russia-aqwrdcq234";

    act(() => {
      result.current.setLocation(testLocation);
    });

    expect(result.current.profileData?.location).toEqual(testLocation);
    expect(result.current.error).toBe(undefined);
  });

  test("setAge", () => {
    const { result } = renderHook(() => useProfile(), { wrapper });
    const testAge = "23";

    act(() => {
      result.current.setAge(testAge);
    });

    expect(result.current.profileData?.age).toEqual(testAge);
    expect(result.current.error).toBe(undefined);
  });

  test("setGender", () => {
    const { result } = renderHook(() => useProfile(), { wrapper });
    const testGender = "male";

    act(() => {
      result.current.setGender(testGender);
    });

    expect(result.current.profileData?.gender).toEqual(testGender);
    expect(result.current.error).toBe(undefined);
  });

  test("setAvatar", () => {
    const { result } = renderHook(() => useProfile(), { wrapper });
    const testAvatar = "qwetrytuj";

    act(() => {
      result.current.setAvatar(testAvatar);
    });

    expect(result.current.profileData?.avatar).toEqual(testAvatar);
    expect(result.current.error).toBe(undefined);
  });
});
