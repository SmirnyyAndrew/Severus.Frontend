import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData } from "../selectors/getUserAuthData/getUserAuthData";

export const useUserAuth = () => {
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);

  return { authData };
};
