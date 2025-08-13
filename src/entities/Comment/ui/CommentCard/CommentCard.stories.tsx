import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { CommentMock } from "entities/Comment/model/mocs/CommentMock";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { CommentCard } from "./CommentCard";

const meta: Meta<typeof CommentCard> = {
  title: "entities/Comment/CommentCard",
  component: CommentCard,
  args: { comment: CommentMock(), isLoading: false },
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
