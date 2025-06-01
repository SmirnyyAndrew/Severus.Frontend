import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { errorArticleImg } from "shared/const/plugFiles";
import { Image } from "./Image";

const meta: Meta<typeof Image> = {
  title: "shared/Image",
  component: Image,
  args: {
    src: errorArticleImg,
    title: "This is article title",
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
