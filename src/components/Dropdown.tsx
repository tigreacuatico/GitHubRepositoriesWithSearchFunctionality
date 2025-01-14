import { DropdownProps } from "../constants/types";

const Dropdown = ({ name, options, selectedItem }: DropdownProps) => {
  return (
    <div className="flex flex-row text-[11px] buttonGithub">
      <p className="mr-1">{name}</p>
      <select name={name} id={name}>
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
