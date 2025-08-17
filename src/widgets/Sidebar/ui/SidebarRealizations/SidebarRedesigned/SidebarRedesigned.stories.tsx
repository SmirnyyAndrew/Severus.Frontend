import { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { SidebarRedesigned } from "./SidebarRedesigned";

const meta: Meta<typeof SidebarRedesigned> = {
  title: "widgets/SidebarRedesigned",
  component: SidebarRedesigned,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Sidebar</h1>
          <p>
            Компонент боковой панели для отображения навигации, смены темы и
            языка
          </p>
          <p>Для переключения вида отображения языка нажмите ПКМ</p>
        </>
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof SidebarRedesigned>;

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
