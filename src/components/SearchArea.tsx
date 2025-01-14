import { useState, useEffect } from "react";
import { SearchAreaProps, RepositoryProps } from "@/constants/types";
import { IconArrowDown, IconCheck, IconClose } from "../constants/icons";
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

  const [dropdownTypeVisible, setDropdownTypeVisible] =
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
      <div className="md:ml-8">
        <div className="flex flex-col md:flex-row space-x-2">
          <input
            type="text"
            value={repositoryNameQuery}
            onChange={(e) => setRepositoryNameQuery(e.target.value)}
            placeholder="Find a repository..."
            className="h-fit mb-4 md:mb-0 text-[14px] md:text-xs "
          />

          <div className="flex flex-row space-x-2">
            {/**Dropdown Type */}
            <div
              className="flex flex-row text-[11px] buttonGithub h-fit w-28 hover:cursor-pointer"
              onClick={() => {
                setDropdownTypeVisible(!dropdownTypeVisible);
                setDropdownLanguagesVisible(false);
              }}
            >
              <p className="mr-1">Type:</p>
              <IconArrowDown />
            </div>

            {/**Floating dropdown type*/}
            <div
              className={
                dropdownTypeVisible
                  ? "flex flex-col text-[11px] visible absolute right-64 top-28 bg-white shadow-lg p-4 rounded-lg border w-40"
                  : "hidden"
              }
            >
              <div
                className="absolute right-0.5 top-0 text-[14px] hover:cursor-pointer"
                onClick={() => {
                  setDropdownTypeVisible(false);
                }}
              >
                <IconClose />
              </div>
              <ul>
                {allTypeOptions.map((opt, index) => (
                  <div key={index}>
                    <li value={opt} className="optionDropdown">
                      {opt}
                      {selectedLanguage === opt ? <IconCheck /> : null}
                    </li>
                    {/** Don't render line for last item in list */}
                    {index === allTypeOptions.length - 1 ? null : (
                      <hr className="h-px my-1 bg-gray-200 border-0" />
                    )}
                  </div>
                ))}
              </ul>
            </div>

            {/**Language filter with floating dropdown */}

            <div className="relative w-60 h-fit">
              <Button
                label={`Language: ${selectedLanguage}`}
                onClick={() => {
                  setDropdownLanguagesVisible(!dropdownLanguagesVisible);
                  setDropdownTypeVisible(false);
                }}
                icon="IconArrowDown"
                iconFirst={false}
              />
            </div>

            {/**Floating dropdown languages*/}
            <div
              className={
                dropdownLanguagesVisible
                  ? "flex flex-col text-[11px] visible absolute right-36 top-28 bg-white shadow-lg p-4 rounded-lg border w-40"
                  : "hidden"
              }
            >
              <div
                className="absolute right-0.5 top-0 text-[14px] hover:cursor-pointer"
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
                      className="optionDropdown"
                    >
                      {opt}
                      {selectedLanguage === opt ? <IconCheck /> : null}
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
      </div>
      <Gallery options={filteredRepositories} />
    </div>
  );
};

export default SearchArea;
