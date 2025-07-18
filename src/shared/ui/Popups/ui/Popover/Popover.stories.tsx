import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { errorArticleImg } from "shared/const/plugFiles";
import { Avatar, AvatarSize } from "shared/ui/Avatar";
import { Popover } from "./Popover";

const avatarNode = <Avatar isRound size={AvatarSize.S} img={errorArticleImg} />;

const meta: Meta<typeof Popover> = {
  title: "shared/Popups/Popover",
  component: Popover,
  args: {
    trigger: avatarNode,
    direction: "bottom left",
    children: (
      <>
        <a href="/analytics">Analytics</a>
        <a href="/engagement">Engagement</a>
        <a href="/security">Security</a>
        <a href="/integrations">Integrations</a>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
