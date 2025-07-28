import { PayloadAction } from "@reduxjs/toolkit";
import { buildSlice } from "shared/lib/srote/buildSlice";
import { ScrollSaveSchema } from "../types/ScrollSaveSchema";

const initialState: ScrollSaveSchema = {
  scroll: {},
};

export const ScrollSaveSlice = buildSlice({
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

export const {
  actions: ScrollSaveActions,
  reducer: ScrollSaveReducer,
  useActions: useScrollSaveActions,
} = ScrollSaveSlice;
