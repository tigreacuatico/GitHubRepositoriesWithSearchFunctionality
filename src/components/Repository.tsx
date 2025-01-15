import Button from "./Button";
import { RepositoryProps } from "../constants/types";
import { IconForks, IconLanguage } from "@/constants/icons";

/**
 * A GitHub repository
 *
 * @typedef {object} RepositoryProps
 * @property {string} name The repository name
 * @property {string} description The repository description
 * @property {number} nForks The repository number of forks
 * @property {string} lastUpdate The repository last date update
 * @property {string} language The repository language
 *
 * @param {RepositoryProps} props
 * @returns {JSX.Element}
 */
const Repository = ({
  title,
  description,
  //isStarred,
  language,
  nForks,
  lastUpdate,
}: RepositoryProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between mb-2 md:mb-1">
        {/**TODO: on click go to x repository */}
        <p className="text-blue-700 font-bold hover:underline">{title}</p>{" "}
        <Button
          label="Star"
          icon="IconStar"
          onClick={() => console.log("Star still not implemented")}
          iconFirst={true}
        />
      </div>
      <p className="text-xs mb-2">{description}</p>
      <div className="flex flex-row space-x-4 text-[10px] text-slate-600">
        {language ? (
          <div className="flex flex-row">
            {IconLanguage(language)}
            <p>{language}</p>
          </div>
        ) : null}
        <div className="flex flex-row">
          <IconForks />
          <p>{nForks}</p>
        </div>
        <p>Updated {lastUpdate}</p>
      </div>
    </div>
  );
};

export default Repository;
