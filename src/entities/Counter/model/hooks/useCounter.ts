import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useCounterValue } from "../selectors/getCounterValue/getCounterValue";
import { useCounterActions } from "../slice/counterSlice";

export const useCounter = () => {
  const dispatch = useDispatch();
  const value = useCounterValue();
  const {
    add: counterAdd,
    decrement: counterDecrement,
    increment: counterIncrement,
  } = useCounterActions();

  const increment = useCallback(() => {
    counterIncrement();
  }, [dispatch]);

  const decrement = useCallback(() => {
    counterDecrement();
  }, [dispatch]);

  const addFive = useCallback(() => {
    counterAdd(5);
  }, [dispatch]);

  return { value, increment, decrement, addFive };
};
