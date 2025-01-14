import { ButtonProps } from "../constants/types";
import * as Icons from "../constants/icons";

const Button = ({ onClick, icon, label, iconFirst }: ButtonProps) => {
  // Find the icon specified in props
  const IconComponent = icon ? Icons[icon as keyof typeof Icons] : null;

  return iconFirst ? (
    <button onClick={onClick} className="buttonGithub">
      {/** Only render icon if it exists */}
      {IconComponent && <IconComponent />}
      {label}
    </button>
  ) : (
    <button onClick={onClick} className="buttonGithub">
      {label}
      {/** Only render icon if it exists */}
      {IconComponent && <IconComponent />}
    </button>
  );
};

export default Button;

//TODO:size
