import { buildSelector } from "shared/lib/srote/buildSelector";

// export const getCounterValue = createSelector(
//   getCounter,
//   (counter: CounterSchema) => counter.value
// );

export const [useCounterValue, getCounterValue] = buildSelector(
  (state) => state.counter.value
);
