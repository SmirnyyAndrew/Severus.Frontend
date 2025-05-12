import type { Decorator } from "@storybook/react";
import { StoreProvider } from "app/providers/StoreProvider";

export const ReduxDecorator: Decorator = (Story) => (
  <StoreProvider>
    <Story />
  </StoreProvider>
);
