import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { buildSelector } from "shared/lib/srote/buildSelector";

export const [useGetPageScroll, getPageScrollSelector] = buildSelector(
  (state: StateSchema) => state.pageScroll.scroll ?? []
);

export const getScrollPositionByPath = createSelector(
  getPageScrollSelector,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
