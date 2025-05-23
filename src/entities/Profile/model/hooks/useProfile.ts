import { getProfileDataThunk } from "features/GetProfileData/model/thunks/getProfileDataThunk/getProfileDataThunk";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileData } from "../selectors/getProfileData/getProfileData";
import { profileActions } from "../slice/profileSlice";

export const useProfile = () => {
  const dispatch = useDispatch();
  const profileData = useSelector(getProfileData);

  const setProfileData = useCallback(() => {
    dispatch(profileActions.setProfileData);
  }, [dispatch]);

  const getProfileDataFromDB = useCallback(async () => {
    return await dispatch(getProfileDataThunk());
  }, [dispatch]);

  return { profileData, setProfileData, getProfileDataFromDB };
};
