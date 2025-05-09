import type { Preview } from "@storybook/react";
import { Theme } from "../../src/app/providers/ThemeProvider";
import { I18nextDecorator } from "../../src/shared/config/storybook/Decorators/I18nextDecorator";
import { RenderDecorator } from "../../src/shared/config/storybook/Decorators/RenderDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/Decorators/RouterDecorator";
import { StyleDecorator } from "../../src/shared/config/storybook/Decorators/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/Decorators/ThemeDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    I18nextDecorator,
    RenderDecorator,
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
  ],
};

export default preview;
