import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { CommentExample } from "entities/Comment/model/types/CommentExample";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { CommentCard } from "./CommentCard";

const meta: Meta<typeof CommentCard> = {
  title: "Entities/Comment/CommentCard",
  component: CommentCard,
  args: { comment: CommentExample, isLoading: false },
  argTypes: {
    isLoading: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
