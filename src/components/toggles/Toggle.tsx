import { useState } from "react";
import { IItem } from "../../interface/interface";
import { IToggleProps } from "../../interface/Props";

export const Toggle = <T extends IItem>({
  onSelect,
  children,
  options,
}: IToggleProps<T>) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const select = (option: T) => {
    setSelectedOption(option.value);
    onSelect(option);
  };

  return (
    <div className="toggles" role="group" aria-label="Basic example">
      {options.map((option: T) => (
        <button
          className={`toggles__option ${
            selectedOption === option.value ? "toggles__option--active" : ""
          }`}
          key={option.id}
          onClick={select.bind(this, option)}
          data-cy={option}
        >
          {children ? children(option) : option.value}
        </button>
      ))}
    </div>
  );
};
