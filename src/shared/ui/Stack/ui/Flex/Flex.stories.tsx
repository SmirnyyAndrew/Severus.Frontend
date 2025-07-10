import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { Flex } from "./Flex";

const meta: Meta<typeof Flex> = {
  title: "shared/Stack/Flex",
  component: Flex,
  args: {
    alignItems: "center",
    justifyContents: "center",
    children: (
      <>
        <p>It's text 1</p>
        <p>It's text 2</p>
        <p>It's text 3</p>
        <p>It's text 4</p>
      </>
    ),
    maxHeight: true,
    maxWidth: true,
    gap: "12",
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
