export type RepositoryProps = {
  title: string;
  description: string | null;
  language: string | null;
  lastUpdate: number;
  isStarred: boolean | null;
  nForks: number;
};

export type GalleryProps = {
  options: RepositoryProps[];
};

export type DropdownProps = {
  name: string;
  options: string[];
};

export type ButtonProps = {
  label: string;
  size: "sm" | "md" | "lg";
  onClick: () => void;
  icon: string;
};

export type ProfileProps = {
  img: string;
  name: string;
  username: string;
  description: string;
  email: string;
  nFollowers: number;
  nFollowings: number;
  nStars: number;
  imgOrganizations: string[];
};

export type RepositoryData = {
  name: string;
  description: string | null;
  language: string | null;
  updated_at: number;
  forks: number;
  isStarred: boolean | null;
};
