import { StoryFn } from "@storybook/react/*";
import "app/styles/index.scss";
import "app/styles/reset.scss";
import "app/styles/themes/dark.scss";
import "app/styles/themes/light.scss";

export const StyleDecorator = (Story: StoryFn) => <Story />;
