import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import SvgIcon from "shared/assets/icons/theme/theme-empty.svg";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { Icon, IconSize } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "shared/Icon",
  component: Icon,
  args: {
    iconSize: IconSize.L,
    Svg: SvgIcon,
  },
  argTypes: {
    iconSize: {
      control: "radio",
      options: [IconSize.S, IconSize.L, IconSize.XL],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
