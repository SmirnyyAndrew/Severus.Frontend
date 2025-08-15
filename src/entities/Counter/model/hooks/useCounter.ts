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
  }, [incrementDispatch]);

  const decrement = useCallback(() => {
    decrementDispatch();
  }, [decrementDispatch]);

  const addFive = useCallback(() => {
    addDispatch(5);
  }, [addDispatch]);

  return { value, increment, decrement, addFive };
};
