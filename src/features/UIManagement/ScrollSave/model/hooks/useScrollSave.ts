import { StateSchema } from "app/providers/StoreProvider";

import { useCallback } from "react";
import { useSelector } from "react-redux";
import { getScrollPositionByPath } from "../..";
import { useScrollSaveActions } from "../slices/ScrollSaveSlice";

export const useScrollSave = (path: string) => {
  const { setPageScrollPosition: setPageScrollPositionDispatch } =
    useScrollSaveActions();

  const position = useSelector((state: StateSchema) =>
    getScrollPositionByPath(state, path)
  );

  const setPageScrollPosition = useCallback(
    (path: string, position: number) => {
      setPageScrollPositionDispatch({ path, position });
    },
    []
  );

  return { position, setPageScrollPosition };
};
