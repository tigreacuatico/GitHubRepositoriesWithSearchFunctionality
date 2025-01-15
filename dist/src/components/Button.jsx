const iconData = {
    IconStar: "bi bi-star",
    IconFollowers: "bi bi-people",
    IconEmail: "bi bi-envelope",
    IconOverview: "bi bi-book",
    IconRepositories: "bi bi-journal-bookmark",
    IconProjects: "bi bi-bookshelf",
    IconForks: "bi bi-git",
    IconGithub: "bi bi-github logo",
    IconClose: "bi bi-x",
    IconCheck: "bi bi-check2",
    IconArrowDown: "bi bi-caret-down-fill",
};
const Button = ({ onClick, icon, label, iconFirst }) => {
    const iconClassName = icon && iconData[icon] ? iconData[icon] : "";
    return iconFirst ? (<button onClick={onClick} className="buttonGithub">
      {iconClassName !== "" && <i className={iconClassName}></i>}
      {label}
    </button>) : (<button onClick={onClick} className="buttonGithub">
      {label}
      {iconClassName !== "" && <i className={iconClassName}></i>}
    </button>);
};
export default Button;
