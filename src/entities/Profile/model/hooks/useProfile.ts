import { getProfileError, getValidationErrors } from "entities/Profile";
import { getProfileDataThunk } from "features/ProfileManagement/GetProfileData";
import { putProfileDataThunk } from "features/ProfileManagement/SetProfileData";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { getProfileData } from "../selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "../selectors/getProfileIsLoading/getProfileIsLoading";
import { profileActions } from "../slice/profileSlice";
import { Profile } from "../types/Profile";

export const useProfile = () => {
  const dispatch = useAppDispatch();
  const profileData = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const validationErrors = useSelector(getValidationErrors);

  const getProfileDataFromDB = useCallback(
    (profileId: string | undefined) => {
      dispatch(getProfileDataThunk(profileId));
    },
    [dispatch]
  );

  const setProfileData = useCallback(
    (profile: Profile) => {
      dispatch(profileActions.setProfileData(profile));
    },
    [dispatch]
  );

  const setProfileDataUndefined = useCallback(() => {
    dispatch(profileActions.setProfileDataUndefined());
  }, [dispatch]);

  const putProfileDataIntoDB = useCallback(
    (profile: Profile) => {
      dispatch(
        putProfileDataThunk({ profile: profile, profileId: profile.id })
      );
    },
    [dispatch]
  );
  const setUsername = useCallback(
    (username: string) => {
      dispatch(profileActions.setUsername(username));
    },
    [dispatch]
  );

  const setName = useCallback(
    (name: string) => {
      dispatch(profileActions.setName(name));
    },
    [dispatch]
  );

  const setLocation = useCallback(
    (location: string) => {
      dispatch(profileActions.setLocation(location));
    },
    [dispatch]
  );

  const setAge = useCallback(
    (age: string) => {
      dispatch(profileActions.setAge(age));
    },
    [dispatch]
  );

  const setGender = useCallback(
    (gender: string) => {
      dispatch(profileActions.setGender(gender));
    },
    [dispatch]
  );

  const setAvatar = useCallback(
    (avatar: string) => {
      dispatch(profileActions.setAvatar(avatar));
    },
    [dispatch]
  );

  return {
    profileData,
    isLoading,
    error,
    validationErrors,
    getProfileDataFromDB,
    putProfileDataIntoDB,
    setProfileData,
    setProfileDataUndefined,
    setName,
    setUsername,
    setLocation,
    setAge,
    setGender,
    setAvatar,
  };
};
