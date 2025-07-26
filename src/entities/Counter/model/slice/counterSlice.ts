import { PayloadAction } from "@reduxjs/toolkit";
import { CounterSchema } from "entities/Counter";
import { buildSlice } from "shared/lib/srote/buildSlice";

const initialState: CounterSchema = {
  value: 0,
};

export const counterSlice = buildSlice({
  name: "counter.slice",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    add: (state, { payload }: PayloadAction<number>) => {
      state.value += payload;
    },
  },
});

// export const counterActions = counterSlice.actions;
// export const counterReducer = counterSlice.reducer;

export const {
  useActions: useCounterActions,
  actions: counterActions,
  reducer: counterReducer,
} = counterSlice;
