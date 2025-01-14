export type RepositoryProps = {
  title: string;
  description: string | null;
  language: string | null;
  lastUpdate: string;
  nForks: number;
};

export type GalleryProps = {
  options: RepositoryProps[];
};

export type SearchAreaProps = {
  repositories: RepositoryProps[];
  languageOptions: string[];
};

export type ButtonProps = {
  label: string;
  onClick: () => void | null;
  icon: string | null;
  iconFirst: boolean;
};

export type ProfileProps = {
  img: string;
  name: string;
  username: string;
  description: string;
  email: string;
  nFollowers: number;
  nFollowings: number;
  nStars: number; //TODO: calc
  //imgOrganizations: string[]; //TODO: calc
};

export type RepositoryData = {
  name: string;
  description: string | null;
  language: string | null;
  updated_at: number;
  forks: number;
  isStarred: boolean | null;
};

export type NavbarProps = {
  username: string | null;
};

export type SearchBarProfileProps = {
  repositories: RepositoryProps[];
  languagesOptions: string[];
};
