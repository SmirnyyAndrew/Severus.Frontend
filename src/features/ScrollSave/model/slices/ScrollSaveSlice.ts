import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScrollSaveSchema } from "../types/ScrollSaveSchema";

const initialState: ScrollSaveSchema = {
  scroll: {},
};

export const ScrollSaveSlice = createSlice({
  name: "scroll.save.slice",
  initialState,
  reducers: {
    setPageScrollPosition: (
      state,
      { payload }: PayloadAction<{ path: string; position: number }>
    ) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const ScrollSaveActions = ScrollSaveSlice.actions;
export const ScrollSaveReducer = ScrollSaveSlice.reducer;
