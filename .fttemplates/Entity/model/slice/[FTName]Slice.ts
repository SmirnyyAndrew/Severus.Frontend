import { createSlice } from "@reduxjs/toolkit"; 
import { [FTName]Schema } from "../types/[FTName]Schema";

const initialState: [FTName]Schema = {
  value: 0,
};

export const [FTName]Slice = createSlice({
  name: "[FTName].slice",
  initialState,
  reducers: {
    action: (state) => {
      state.value += 1;
    }, 
  },
});

export const [FTName]Actions = [FTName]Slice.actions;
export const [FTName]Reducer = [FTName]Slice.reducer;
