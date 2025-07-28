import { useCallback } from "react";
import { useCounterValue } from "../selectors/getCounterValue/getCounterValue";
import { useCounterActions } from "../slice/counterSlice";

export const useCounter = () => {
  const value = useCounterValue();
  const {
    add: addDispatch,
    decrement: decrementDispatch,
    increment: incrementDispatch,
  } = useCounterActions();

  const increment = useCallback(() => {
    incrementDispatch();
  }, []);

  const decrement = useCallback(() => {
    decrementDispatch();
  }, []);

  const addFive = useCallback(() => {
    addDispatch(5);
  }, []);

  return { value, increment, decrement, addFive };
};
