import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

export const getPageScroll = (state: StateSchema) =>
  state.pageScroll.scroll ?? [];

export const getScrollPositionByPath = createSelector(
  getPageScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
