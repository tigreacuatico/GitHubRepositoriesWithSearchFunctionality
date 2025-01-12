import Button from "../components/Button";
import type { StoryObj } from "@storybook/react";

const buttonStory: { component: typeof Button } = {
  component: Button,
};

export default buttonStory;

type Story = StoryObj<typeof Button>;

export const Green: Story = {
  args: {
    label: "Button",
    size: "md",
    icon: "../../public/new.webp",
  },
};

export const Grey: Story = {
  args: {
    label: "Button",
    size: "md",
    icon: "",
  },
};

export const Star: Story = {
  args: {
    label: "Button",
    size: "md",
    icon: "../../public/star.webp",
  },
};
