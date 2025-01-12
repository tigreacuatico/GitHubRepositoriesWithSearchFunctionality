import { GalleryProps } from "../constants/types";
import Repository from "./Repository";

const Gallery = ({ options }: GalleryProps) => {
  return (
    <div className="flex flex-col my-4 ml-8 w-11/12">
      {options.map((repo, index: number) => (
        <div key={index} className="">
          <Repository
            title={repo.title}
            description={repo.description}
            language={repo.language}
            lastUpdate={repo.lastUpdate}
            isStarred={repo.isStarred}
            nForks={repo.nForks}
          />
          <hr className="h-px my-4 bg-gray-200 border-0" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
