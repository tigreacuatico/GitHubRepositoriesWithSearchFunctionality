const calcColorLanguage = (language: string) => {
  if (language === "Python" || language === "TypeScript") return "darkBlueIcon";
  else if (language === "JavaScript") return "yellowIcon";
  else if (language === "R") return "blueIcon";
  else if (language === "Vue" || language === "C#") return "blueIcon";
  else if (language === "HTML") return "redIcon";
  else if (language === "Java") return "orangeIcon";
  else return "";
};

export const IconStar = () => <i className="bi bi-star "></i>;
export const IconFollowers = () => <i className="bi bi-people"></i>;
export const IconEmail = () => <i className="bi bi-envelope"></i>;
export const IconOverview = () => <i className="bi bi-book"></i>;
export const IconRepositories = () => (
  <i className="bi bi-journal-bookmark"></i>
);
export const IconProjects = () => <i className="bi bi-bookshelf"></i>; //<i class="bi bi-file-bar-graph"></i>
export const IconForks = () => <i className="bi bi-git"></i>;
export const IconLanguage = (language: string) => (
  <i
    className={`bi bi-circle-fill languageIcon ${calcColorLanguage(language)}`}
  ></i>
);
export const IconGithub = () => <i className="bi bi-github logo"></i>;
export const IconClose = () => <i className="bi bi-x"></i>;
export const IconCheck = () => <i className="bi bi-check2"></i>;
export const IconArrowDown = () => <i className="bi bi-caret-down-fill"></i>;
