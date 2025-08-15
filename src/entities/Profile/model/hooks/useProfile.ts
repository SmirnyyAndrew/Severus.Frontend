import { getProfileError, getValidationErrors } from "entities/Profile";
import { getProfileDataThunk } from "features/ProfileManagement/GetProfileData";
import { putProfileDataThunk } from "features/ProfileManagement/SetProfileData";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { getProfileData } from "../selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "../selectors/getProfileIsLoading/getProfileIsLoading";
import { useProfileActions } from "../slice/profileSlice";
import { Profile } from "../types/Profile";

export const useProfile = () => {
  const dispatch = useAppDispatch();
  const profileData = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const validationErrors = useSelector(getValidationErrors);

  const {
    setAge: setAgeDispatch,
    setAvatar: setAvatarDispatch,
    setGender: setGenderDispatch,
    setLocation: setLocationDispatch,
    setName: setNameDispatch,
    setUsername: setUsernameDispatch,
    setProfileData: setProfileDataDispatch,
    setProfileDataUndefined: setProfileDataUndefinedDispatch,
  } = useProfileActions();

  const getProfileDataFromDB = useCallback(
    (profileId: string | undefined) => {
      dispatch(getProfileDataThunk(profileId));
    },
    [dispatch]
  );

  const setProfileData = useCallback(
    (profile: Profile) => {
      setProfileDataDispatch(profile);
    },
    [setProfileDataDispatch]
  );

  const setProfileDataUndefined = useCallback(() => {
    setProfileDataUndefinedDispatch();
  }, [setProfileDataUndefinedDispatch]);

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
      setUsernameDispatch(username);
    },
    [setUsernameDispatch]
  );

  const setName = useCallback(
    (name: string) => {
      setNameDispatch(name);
    },
    [setNameDispatch]
  );

  const setLocation = useCallback(
    (location: string) => {
      setLocationDispatch(location);
    },
    [setLocationDispatch]
  );

  const setAge = useCallback(
    (age: string) => {
      setAgeDispatch(age);
    },
    [setAgeDispatch]
  );

  const setGender = useCallback(
    (gender: string) => {
      setGenderDispatch(gender);
    },
    [setGenderDispatch]
  );

  const setAvatar = useCallback(
    (avatar: string) => {
      setAvatarDispatch(avatar);
    },
    [setAvatarDispatch]
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
