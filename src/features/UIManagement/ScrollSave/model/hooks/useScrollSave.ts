import { StateSchema } from "app/providers/StoreProvider";

import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { getScrollPositionByPath, ScrollSaveActions } from "../..";

export const useScrollSave = (path: string) => {
  const dispatch = useAppDispatch();

  const position = useSelector((state: StateSchema) =>
    getScrollPositionByPath(state, path)
  );

  const setPageScrollPosition = useCallback(
    (path: string, position: number) => {
      dispatch(ScrollSaveActions.setPageScrollPosition({ path, position }));
    },
    [dispatch]
  );

  return { position, setPageScrollPosition };
};
