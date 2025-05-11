import { Meta, StoryObj } from "@storybook/react/*";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Shared/Modal",
  component: Modal,
  args: {
    children: "Text",
    isOpen: true,
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
  args: { children: "Here's modal elems" },
};

export const Dark: Story = {
  args: { children: "Here's modal elems" },
  decorators: [ThemeDecorator(Theme.DARK)],
};
