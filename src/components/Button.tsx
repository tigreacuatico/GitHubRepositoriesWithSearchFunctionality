import { ButtonProps } from "../constants/types";
import * as Icons from "../constants/icons";

const Button = ({ onClick, icon, label, size }: ButtonProps) => {
  // Find the icon specified in props
  const IconComponent = icon ? Icons[icon as keyof typeof Icons] : null;

  return (
    <button onClick={onClick} className="buttonGithub">
      {/** Only render icon if it exists */}
      {IconComponent && <IconComponent />}
      {label}
    </button>
  );
};

export default Button;

//size
