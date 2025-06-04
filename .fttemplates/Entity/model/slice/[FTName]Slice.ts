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
  extraReducers: (builder) => {
    builder
      .addCase([FTName]Thunk.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        [FTName]Thunk.fulfilled,
        (state, action: PayloadAction<[FTName]>) => {
          state.isLoading = false;
          state.error = undefined;
          state.data = action.payload;
        }
      )
      .addCase([FTName]Thunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const [FTName]Actions = [FTName]Slice.actions;
export const [FTName]Reducer = [FTName]Slice.reducer;
