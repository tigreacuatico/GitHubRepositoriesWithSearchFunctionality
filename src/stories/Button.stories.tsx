import Button from "../components/Button";
import type { StoryObj } from "@storybook/react";

const buttonStory: { component: typeof Button } = {
  component: Button,
};

export default buttonStory;

type Story = StoryObj<typeof Button>;

export const WithIconAfter: Story = {
  args: {
    label: "Button",
    icon: "IconStar",
    iconFirst: false,
  },
};

export const WithIconInFront: Story = {
  args: {
    label: "Button",
    icon: "IconStar",
    iconFirst: true,
  },
};

export const NoIcon: Story = {
  args: {
    label: "Button",
    icon: null,
    iconFirst: false,
  },
};
