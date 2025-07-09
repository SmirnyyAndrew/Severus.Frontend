import { Meta, StoryObj } from "@storybook/react/*";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { ArtcleDetailsRecommenations } from "./ArtcleDetailsRecommenations";

const meta: Meta<typeof ArtcleDetailsRecommenations> = {
  title: "entities/ArtcleDetailsRecommenations",
  component: ArtcleDetailsRecommenations,
};

export default meta;
type Story = StoryObj<typeof ArtcleDetailsRecommenations>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.CUTE)],
};
