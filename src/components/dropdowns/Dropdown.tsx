import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group"; // ES6
import { IItem } from "../../interface/interface";
import { IDropdownProps } from "../../interface/Props";

export const Dropdown = <T extends IItem>({
  children,
  onSelectItem,
  items,
  name,
}: IDropdownProps<T>) => {
  const dd: string = "dropdown";

  const [defaultName, setDefaultName] = useState(name);
  const [selectedItem, setSelectedItem] = useState("Dropdown");
  const [isShowingItems, setIsShowingItems] = useState(false);

  const closeDropdown = (event: MouseEvent) => {
    const result = (event.target as any).closest(`.${dd}__list`);
    if (result !== null) return; //meaning you clicked inside the list
    document.removeEventListener("click", closeDropdown, true);
    setIsShowingItems(false);
  };

  const toggleItems = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // setIsShowingItems(!isShowingItems);
    const isItemClicked =
      (e.target as any).closest(`.${dd}__list-item`) !== null;
    if (isItemClicked) return;

    document.addEventListener("click", closeDropdown, true);
    setIsShowingItems(!isShowingItems);
  };

  const selectItem = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const { target } = e;
    const { innerText } = target as any;
    setDefaultName(null);
    setSelectedItem(innerText);
    onSelectItem(innerText);
  };

  return (
    <div className={dd} onClick={toggleItems}>
      <div className={`${dd}__selected-item`}>
        <span className={`${dd}__selected-text`}>
          {defaultName ? defaultName : selectedItem}
        </span>
        <span className={`${dd}__caret oi`} data-glyph="caret-bottom"></span>
      </div>

      {isShowingItems && (
        <ul className={`${dd}__list`} onClick={(e) => selectItem(e)}>
          {items.map((item: T) => (
            <li className={`${dd}__list-item`} key={`${item.id}-${item.value}`}>
              {children ? children(item) : item.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
