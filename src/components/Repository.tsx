import Button from "./Button";
import { RepositoryProps } from "../constants/types";
import { IconForks } from "@/constants/icons";
import { IconLanguage } from "@/constants/icons";

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
      <div className="flex flex-row justify-between">
        {/**TODO: on click go to x repository */}
        <p className="text-blue-700 font-bold hover:underline">{title}</p>{" "}
        <Button
          label="Star"
          icon="IconStar" //{isStarred ? "/starred.webp" : "/notStarred.webp"} //TODO: calc based on current user watching page
          onClick={() => 0}
          size="sm"
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
