import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 

const initialState: [FTName]Schema = {
};

export const ScrollSaveSlice = createSlice({
  name: "[FTName].slice",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<>) => {
      state.scroll = action.payload;
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
