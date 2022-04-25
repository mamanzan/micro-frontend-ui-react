import { useState } from "react";
import { IItem } from "../../interface/interface";
import { IToggleProps } from "../../interface/Props";

export const Toggle = <T extends IItem>({
  onSelectItem,
  children,
  items,
}: IToggleProps<T>) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const select = (option: T) => {
    setSelectedOption(option.value);
    onSelectItem(option);
  };

  return (
    <div className="toggles" role="group" aria-label="Basic example">
      {items.map((item: T) => (
        <button
          className={`toggles__option ${
            selectedOption === item.value ? "toggles__option--active" : ""
          }`}
          key={item.id}
          onClick={select.bind(this, item)}
          data-cy={item}
        >
          {children ? children(item) : item.value}
        </button>
      ))}
    </div>
  );
};
