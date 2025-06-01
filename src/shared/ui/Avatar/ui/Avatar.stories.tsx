import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { errorArticleImg } from "shared/const/plugFiles";
import { Avatar, AvatarSize } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "shared/Avatar",
  component: Avatar,
  args: {
    img: errorArticleImg,
    alt: "This is avatar",
    size: AvatarSize.L,
    isRound: false,
  },
  argTypes: {
    isRound: {
      control: "boolean",
    },
    size: {
      control: "radio",
      options: [AvatarSize.XS, AvatarSize.S, AvatarSize.L, AvatarSize.XL],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
