import { useScrollSave } from "./model/hooks/useScrollSave";
import {
  getPageScrollSelector,
  getScrollPositionByPath,
  useGetPageScroll,
} from "./model/selectors/scrollSaveSelectors";
import {
  ScrollSaveActions,
  ScrollSaveReducer,
} from "./model/slices/ScrollSaveSlice";
import {
  PageScrollPositionSchema,
  ScrollSaveSchema,
} from "./model/types/ScrollSaveSchema";

export {
  getPageScrollSelector,
  getScrollPositionByPath,
  ScrollSaveActions,
  ScrollSaveReducer,
  useGetPageScroll,
  useScrollSave,
};

export type { PageScrollPositionSchema, ScrollSaveSchema };
