import { useScrollSave } from "./model/hooks/useScrollSave";
import {
  getPageScroll,
  getScrollPositionByPath,
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
  getPageScroll,
  getScrollPositionByPath,
  ScrollSaveActions,
  ScrollSaveReducer,
  useScrollSave,
};

export type { PageScrollPositionSchema, ScrollSaveSchema };
