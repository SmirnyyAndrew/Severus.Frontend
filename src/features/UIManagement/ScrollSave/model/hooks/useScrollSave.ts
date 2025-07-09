import { StateSchema } from "app/providers/StoreProvider";

import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { getScrollPositionByPath, ScrollSaveActions } from "../..";

export const useScrollSave = () => {
  const dispatch = useAppDispatch();

  const getScrollPosition = useCallback(
    (path: string) => {
      const position = useSelector((state: StateSchema) =>
        getScrollPositionByPath(state, path)
      );
      return position;
    },
    [dispatch]
  );

  const setPageScrollPosition = useCallback(
    (path: string, position: number) => {
      dispatch(ScrollSaveActions.setPageScrollPosition({ path, position }));
    },
    [dispatch]
  );

  return { getScrollPosition, setPageScrollPosition };
};
