import Image from "next/image";
import { ButtonProps } from "../constants/types";

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className=" buttonGithub">
      <Image src={props.icon} width={20} height={20} alt={props.label} />
      {props.label}
    </button>
  );
};

export default Button;
