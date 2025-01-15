import type { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const StarButton: Story = {
  args: {
    label: "Star",
    onClick: () => console.log("star click"),
    icon: "IconStar",
    iconFirst: true,
  },
};

export const FollowButton: Story = {
  args: {
    label: "Follow",
    onClick: () => console.log("follow click"),
    icon: null,
    iconFirst: true,
  },
};
