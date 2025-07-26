import { counterActions } from "entities/Counter";
import { CounterSchema } from "../types/CounterSchema";
import { counterReducer } from "./counterSlice";

describe("CounterSlice", () => {
  test("increment", () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });

  test("decrement", () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });

  test("should work with empty state", () => {
    expect(counterReducer(undefined, counterActions.decrement())).toEqual({
      value: -1,
    });
  });
});
