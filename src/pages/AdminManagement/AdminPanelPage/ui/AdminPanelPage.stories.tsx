import { Meta, StoryObj } from "@storybook/react/*";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import AdminPanelPage from "./AdminPanelPage";

const meta: Meta<typeof AdminPanelPage> = {
  title: "Pages/AdminManagement/AdminPanel",
  component: AdminPanelPage,
};

export default meta;
type Story = StoryObj<typeof AdminPanelPage>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
