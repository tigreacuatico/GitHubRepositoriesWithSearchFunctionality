import { useState, useEffect } from "react";
import { SearchAreaProps, RepositoryProps } from "@/constants/types";
import { IconClose } from "../constants/icons";
import Button from "./Button";
import Gallery from "./Gallery";

const SearchArea = ({ repositories, languageOptions }: SearchAreaProps) => {
  const allLanguagesOptions: string[] = ["All"].concat(languageOptions);
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
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All");
  const [filteredRepositories, setFilteredRepositories] = useState<
    RepositoryProps[]
  >([]);
  const [dropdownLanguagesVisible, setDropdownLanguagesVisible] =
    useState<boolean>(false);

  useEffect(() => {
    // Filter repositories based on repository name and/or language
    // TODO: more efficient to filter only what has changed
    const handleSearch = () => {
      if (repositoryNameQuery.length === 0 && selectedLanguage === "All")
        setFilteredRepositories(repositories);
      else {
        let res: RepositoryProps[] = repositories;

        if (selectedLanguage !== "All")
          res = repositories.filter(
            (repo) => repo.language === selectedLanguage
          );

        if (repositoryNameQuery.length > 0)
          res = res.filter((repo) =>
            repo.title.toLowerCase().includes(repositoryNameQuery.toLowerCase())
          );
        setFilteredRepositories(res);
      }
    };
    handleSearch();
  }, [selectedLanguage, repositoryNameQuery, repositories]);

  return (
    <div className="flex flex-col w-full">
      <div className="ml-8">
        <div className="flex flex-row space-x-2">
          <input
            type="text"
            value={repositoryNameQuery}
            onChange={(e) => setRepositoryNameQuery(e.target.value)}
            placeholder="Find a repository..."
          />
          {/**Dropdown Type */}
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

          {/**Language filter with floating dropdown */}
          <div className="relative">
            <Button
              label={`Language: ${selectedLanguage}`}
              onClick={() =>
                setDropdownLanguagesVisible(!dropdownLanguagesVisible)
              }
              icon="IconArrowDown"
              iconFirst={false}
            />
          </div>
          {/**Floating dropdown */}
          <div
            className={
              dropdownLanguagesVisible
                ? "flex flex-col text-[11px] visible absolute right-8 top-32 bg-white shadow-lg p-4 rounded-lg border"
                : "hidden"
            }
          >
            <div
              className="absolute right-1 top-0"
              onClick={() => setDropdownLanguagesVisible(false)}
            >
              <IconClose />
            </div>

            <ul>
              {allLanguagesOptions.map((opt, index) => (
                <div key={index}>
                  <li
                    value={opt}
                    onClick={() => {
                      setSelectedLanguage(opt);
                      setDropdownLanguagesVisible(false);
                    }}
                    className="hover:bg-gray-200 text-[10px]"
                  >
                    {opt}
                  </li>
                  {/** Don't render line for last item in list */}
                  {index === allLanguagesOptions.length - 1 ? null : (
                    <hr className="h-px my-1 bg-gray-200 border-0" />
                  )}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Gallery options={filteredRepositories} />
    </div>
  );
};

export default SearchArea;
