import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { [FTName]Actions } from "../slice/[FTName]Slice";

export const use[FTName] = () => {
  const dispatch = useDispatch();
  // const value = useSelector(get[FTName]Value);

  const action = useCallback(() => {
    dispatch([FTName]Actions.action());
  }, [dispatch]);
 

  return { action };
};
