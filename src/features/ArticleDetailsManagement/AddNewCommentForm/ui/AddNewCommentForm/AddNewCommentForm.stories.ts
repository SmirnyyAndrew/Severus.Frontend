import { Meta, StoryObj } from "@storybook/react/*";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import AddNewCommentForm from "./AddNewCommentForm";

const meta: Meta<typeof AddNewCommentForm> = {
  title: "features/ArticleDetailsManagement/AddNewCommentForm",
  component: AddNewCommentForm,
};

export default meta;
type Story = StoryObj<typeof AddNewCommentForm>;

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
