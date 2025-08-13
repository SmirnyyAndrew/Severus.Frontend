import { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { AppLink, AppLinkTheme } from "./AppLink";

const meta: Meta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
  args: {},
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Light: Story = {
  args: {
    linkTheme: AppLinkTheme.PRIMARY,
    children: "Text",
  },
  argTypes: {
    linkTheme: {
      control: "radio",
      options: [AppLinkTheme.PRIMARY, AppLinkTheme.SECONDARY],
    },
  },
};

export const Dark: Story = {
  args: {
    linkTheme: AppLinkTheme.PRIMARY,
    children: "Text",
  },
  argTypes: {
    linkTheme: {
      control: "radio",
      options: [AppLinkTheme.PRIMARY, AppLinkTheme.SECONDARY],
    },
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  args: {
    linkTheme: AppLinkTheme.PRIMARY,
    children: "Text",
  },
  argTypes: {
    linkTheme: {
      control: "radio",
      options: [AppLinkTheme.PRIMARY, AppLinkTheme.SECONDARY],
    },
  },
  decorators: [ThemeDecorator(Theme.CUTE)],
};
