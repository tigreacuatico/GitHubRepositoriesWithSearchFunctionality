import { RepositoryProps, SearchBarProfileProps } from "@/constants/types";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Button from "./Button";

const handleSearch = () => {};

// TODO: join searchbar classes. refactor
// TODO: add All in dropdown languages
const SearchBarProfile = ({
  repositories,
  languagesOptions,
}: SearchBarProfileProps) => {
  const allLanguagesOptions: string[] = ["All"].concat(languagesOptions);
  const allTypeOptions: string[] = [
    "All",
    "Sources",
    "Forks",
    "Archived",
    "Can be sponsored",
    "Mirrors",
    "Templates",
  ];
  const [repositoryNameQuery, setRepositoryNameQuery] = useState<string>("");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [filteredRepositories, setFilteredRepositories] =
    useState<RepositoryProps[]>(repositories);

  // Filter repositories based on new query
  useEffect(() => {
    const res = repositories.filter(
      (repo) =>
        repo.title.toLowerCase() === repositoryNameQuery.toLowerCase() &&
        (repo.language == null || repo.language in selectedLanguages)
    );
    setFilteredRepositories(res);
  }, [repositoryNameQuery, selectedLanguages]); // TODO: more efficient to filter only what has changed

  return (
    <div className="flex flex-row space-x-2">
      <input
        type="text"
        value={repositoryNameQuery}
        onChange={(e) => setRepositoryNameQuery(e.target.value)}
        placeholder="Find a repository..."
        onKeyDown={handleSearch}
      />
      <div className="flex flex-row text-[11px] buttonGithub">
        <p className="mr-1">Type:</p>
        <select name="Type" id="Type">
          {allTypeOptions.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-row text-[11px] buttonGithub">
        <p className="mr-1">Language:</p>
        <select
          name="Language"
          id="Language"
          value={selectedLanguages}
          onChange={(e) => setSelectedLanguages(e.target.value)}
        >
          {allLanguagesOptions.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchBarProfile;
/**{/** 
      <Dropdown
        name={"Type:"}
        selectedLanguages={[""]}
        options={[
          "All",
          "Sources",
          "Forks",
          "Archived",
          "Can be sponsored",
          "Mirrors",
          "Templates",
        ]}
      />

      <Dropdown
        name={"Language:"}
        options={allLanguagesOptions}
        selectedLanguages={selectedLanguages}
      />*/
