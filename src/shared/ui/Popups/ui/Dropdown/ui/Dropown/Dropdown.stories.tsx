import { Meta, StoryObj } from "@storybook/react/*";
import { Theme } from "app/providers/ThemeProvider";
import { ReactNode } from "react";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { errorArticleImg } from "shared/const/plugFiles";
import { Avatar, AvatarSize } from "shared/ui/Avatar";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { Dropdown, DropdownProps } from "./Dropdown";

const avatarNode = (
  <Avatar isRound size={AvatarSize.XS} img={errorArticleImg} />
);

const buttonNode = (
  <Button buttonTheme={ButtonTheme.BACKGROUND_INVERTED}>Click me</Button>
);

const triggerMap: Record<string, ReactNode> = {
  avatar: avatarNode,
  button: buttonNode,
};

const meta: Meta<typeof Dropdown> = {
  title: "shared/Popups/Dropdown",
  component: Dropdown,
  args: {
    trigger: "avatar",
    direction: "bottom right",
    items: [
      {
        isDisabled: false,
        content: "Item 1",
        onClick: () => {
          console.log("Item 1");
        },
      },
      {
        isDisabled: false,
        content: "Item 2",
        onClick: () => {
          console.log("Item 2");
        },
      },
      {
        isDisabled: true,
        content: "Item disabled",
        onClick: () => {
          console.log("Item disabled");
        },
      },
    ],
  },
  argTypes: {
    trigger: {
      control: "radio",
      options: ["avatar", "button"],
    },
  },
  render: (args: DropdownProps) => (
    <Dropdown
      {...args}
      trigger={triggerMap[args.trigger as keyof typeof triggerMap]}
    />
  ),
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

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
