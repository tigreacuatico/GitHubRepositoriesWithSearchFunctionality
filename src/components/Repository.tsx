import Button from "./Button";
import { RepositoryProps } from "../constants/types";

const Repository = ({
  title,
  description,
  isStarred,
  language,
  nForks,
  lastUpdate,
}: RepositoryProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <p className="text-blue-700 font-bold">{title}</p>
        <Button
          label="Star"
          icon={isStarred ? "/starred.webp" : "/notStarred.webp"} //TODO: calc based on current user watching page
          onClick={() => 0}
          size="sm"
        />
      </div>
      <p className="text-xs">{description}</p>
      <div className="flex flex-row space-x-4 text-[10px] text-slate-600">
        <p>{language}</p>
        <p>{nForks}</p>
        <p>Updated {lastUpdate}</p>
      </div>
    </div>
  );
};

export default Repository;
