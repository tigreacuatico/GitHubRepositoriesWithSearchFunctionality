import { DropdownProps } from "../constants/types";

const Dropdown = (props: DropdownProps) => {
  return (
    <select name={props.name} id={props.name}>
      {props.options.map((opt, index) => (
        <option key={index} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
