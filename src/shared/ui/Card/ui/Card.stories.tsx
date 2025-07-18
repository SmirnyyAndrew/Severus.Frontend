import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { ARTICLE_IMAGE_ERROR } from "shared/const/plugFiles";
import { Avatar, AvatarSize } from "shared/ui/Avatar";
import { Text } from "shared/ui/Text";
import { Card, CardTheme } from "./Card";

const meta: Meta<typeof Card> = {
  title: "shared/Card",
  component: Card,
  args: {
    theme: CardTheme.NORMAL,
    children: (
      <>
        <Text text="Test" />
        <Avatar size={AvatarSize.L} img={ARTICLE_IMAGE_ERROR} />
      </>
    ),
  },
  argTypes: {
    theme: {
      control: "radio",
      options: [CardTheme.NORMAL, CardTheme.OUTLINED],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
