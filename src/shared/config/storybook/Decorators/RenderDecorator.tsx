import type { Decorator } from "@storybook/react";
import { Suspense } from "react";

export const RenderDecorator: Decorator = (Story) => (
  <Suspense fallback="">
    <Story />
  </Suspense>
);
