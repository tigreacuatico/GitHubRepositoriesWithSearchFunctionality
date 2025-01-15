import { GalleryProps } from "../constants/types";
import Repository from "./Repository";

/**
 * @callback RepositoryType
 * @property {string} name The repository name
 * @property {string} description The repository description
 * @property {number} nForks The repository number of forks
 * @property {string} lastUpdate The repository last date update
 * @property {string} language The repository language
 * @returns {void}
 */

/**
 * A gallery of items
 *
 * @typedef {object} GalleryProps
 * @property {RepositoryType} options The items the gallery will display
 *
 * @param {GalleryProps} props
 * @returns {JSX.Element}
 */

const Gallery = ({ options }: GalleryProps) => {
  return (
    <div className="flex flex-col my-4 md:ml-8 w-11/12">
      {options.map((repo, index: number) => (
        <div key={index} className="">
          <Repository
            title={repo.title}
            description={repo.description}
            language={repo.language}
            lastUpdate={repo.lastUpdate}
            nForks={repo.nForks}
          />
          {/** Don't render line for last item in list */}
          {index === options.length - 1 ? null : (
            <hr className="h-px my-4 bg-gray-200 border-0" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
