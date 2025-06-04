import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { CommentExample } from "entities/Comment/model/types/CommentExample";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { CommentList } from "./CommentList";

const meta: Meta<typeof CommentList> = {
  title: "Entities/Comment/CommentList",
  component: CommentList,
  args: {
    comments: [CommentExample, CommentExample, CommentExample],
    isLoading: false,
  },
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
