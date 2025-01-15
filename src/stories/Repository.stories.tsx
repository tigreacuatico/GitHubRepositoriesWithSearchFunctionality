import type { Meta, StoryObj } from "@storybook/react";
import Repository from "@/components/Repository";

const meta: Meta<typeof Repository> = {
  component: Repository,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const RepositoryCompleteData: Story = {
  args: {
    title: "react website portfolio",
    description: "this is the repo desc",
    nForks: 0,
    language: "JavaScript",
    lastUpdate: "23/07/24",
  },
};
