import { DropdownProps } from "../constants/types";

const Dropdown = ({ name, options }: DropdownProps) => {
  return (
    <select name={name} id={name} className="text-[11px]">
      {options.map((opt, index) => (
        <option key={index} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
