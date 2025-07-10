import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { Row } from "./Row";

const meta: Meta<typeof Row> = {
  title: "shared/Stack/Row",
  component: Row,
  args: {
    alignItems: "center",
    justifyContents: "center",
    children: (
      <>
        <p>It's text</p>
        <p>It's text</p>
        <p>It's text</p>
        <p>It's text</p>
      </>
    ),
    maxHeight: true,
    maxWidth: true,
    gap: "12",
  },
};

export default meta;
type Story = StoryObj<typeof Row>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
