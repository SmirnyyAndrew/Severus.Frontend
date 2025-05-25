import { getProfileDataThunk } from "features/GetProfileData/model/thunks/getProfileDataThunk/getProfileDataThunk";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileData } from "../selectors/getProfileData/getProfileData";
import { getProfileError } from "../selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../selectors/getProfileIsLoading/getProfileIsLoading";

export const useProfile = () => {
  const dispatch = useDispatch();
  const profileData = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  const getProfileDataFromDB = useCallback(async () => {
    dispatch(getProfileDataThunk());
  }, [dispatch]);

  return {
    profileData,
    isLoading,
    error,
    getProfileDataFromDB,
  };
};
