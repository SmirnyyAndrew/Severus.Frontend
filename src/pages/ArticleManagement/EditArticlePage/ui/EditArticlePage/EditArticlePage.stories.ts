import { Meta, StoryObj } from "@storybook/react/*";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import EditArticlePage from "./EditArticlePage";

const meta: Meta<typeof EditArticlePage> = {
  title: "pages/ArticleManagement/EditArticlePage",
  component: EditArticlePage,
  args: {
    id: "85732",
  },
};

export default meta;
type Story = StoryObj<typeof EditArticlePage>;

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
