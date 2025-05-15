import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCounterValue } from "../selectors/getCounterValue/getCounterValue";
import { counterActions } from "../slice/counterSlice";

export const useCounter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const increment = useCallback(() => {
    dispatch(counterActions.increment());
  }, [dispatch]);

  const decrement = useCallback(() => {
    dispatch(counterActions.decrement());
  }, [dispatch]);

  return { value, increment, decrement };
};
