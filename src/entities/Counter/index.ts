import { useCounter } from "./model/hooks/useCounter";
import { getCounter } from "./model/selectors/getCounter/getCounter";
import { getCounterValue } from "./model/selectors/getCounterValue/getCounterValue";
import {
  counterActions,
  counterReducer,
  counterSlice,
} from "./model/slice/counterSlice";
import type { CounterSchema } from "./model/types/CounterSchema";
import { Counter } from "./ui/Counter/Counter";

export {
  Counter,
  counterActions,
  counterReducer,
  CounterSchema,
  counterSlice,
  getCounter,
  getCounterValue,
  useCounter,
};
