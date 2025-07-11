import { TextSize } from "shared/ui/Text/model/types/TextSize";
import { HeaderTags } from "./HeaderTags";

export const MapSizeToHeaderTag: Record<TextSize, HeaderTags> = {
  [TextSize.S]: "h4",
  [TextSize.XS]: "h3",
  [TextSize.L]: "h2",
  [TextSize.XL]: "h1",
};
