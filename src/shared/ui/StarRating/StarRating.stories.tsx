import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { StarRating } from "./StarRating";

const meta: Meta<typeof StarRating> = {
  title: "shared/StarRating",
  component: StarRating,
  args: {
    starRate: 3,
    forbiddenChange: false,
    starsCount: 5,
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Light: Story = {
  args: {
    starRate: 5,
    forbiddenChange: false,
    starsCount: 10
  },
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
