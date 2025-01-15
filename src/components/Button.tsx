import { ButtonProps } from "../constants/types";

type IconData = {
  [key: string]: string;
};

const iconData: IconData = {
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

/**
 * A button component with optional icon
 *
 * @typedef {object} ButtonProps
 * @property {string} label The label of the button
 * @property {()=>void} onClick The function the button executes on click
 * @property {string} [icon] The icon of the button (optional)
 * @property {boolean} iconFirst If icon goes first or label goes first
 *
 * @param {ButtonProps} props
 * @returns {JSX.Element}
 */

const Button = ({ onClick, icon, label, iconFirst }: ButtonProps) => {
  const iconClassName: string = icon && iconData[icon] ? iconData[icon] : "";

  return iconFirst ? (
    <button onClick={onClick} className="buttonGithub">
      {iconClassName !== "" && <i className={iconClassName}></i>}
      {label}
    </button>
  ) : (
    <button onClick={onClick} className="buttonGithub">
      {label}
      {iconClassName !== "" && <i className={iconClassName}></i>}
    </button>
  );
};

export default Button;
