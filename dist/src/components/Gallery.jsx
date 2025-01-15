import Repository from "./Repository";
const Gallery = ({ options }) => {
    return (<div className="flex flex-col my-4 md:ml-8 w-11/12">
      {options.map((repo, index) => (<div key={index} className="">
          <Repository title={repo.title} description={repo.description} language={repo.language} lastUpdate={repo.lastUpdate} nForks={repo.nForks}/>
          {/** Don't render line for last item in list */}
          {index === options.length - 1 ? null : (<hr className="h-px my-4 bg-gray-200 border-0"/>)}
        </div>))}
    </div>);
};
export default Gallery;
