import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group"; // ES6
import { IItem } from "../../interface/interface";

interface DropdownCustomProps<T> {
  children: (item: T) => JSX.Element;
  onSelectItem: (item: T) => void;
  items: T[];
  name: string;
}

export const DropdownCustom = <T extends IItem>({
  children,
  onSelectItem,
  items,
  name,
}: DropdownCustomProps<T>) => {
  const [defaultName, setDefaultName] = useState(name);
  const [selectedItem, setSelectedItem] = useState("Dropdown");
  const [isShowingItems, setIsShowingItems] = useState(false);

  const toggleItems = () => {
    setIsShowingItems(!isShowingItems);
  };

  const selectItem = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const { target } = e;
    const { innerText } = target as any;
    setDefaultName(null);
    setSelectedItem(innerText);
    onSelectItem(innerText);
  };

  const onEnterTest = (e: any) => {};

  return (
    <div className="dropdown" onClick={toggleItems}>
      <div className="dropdown__selected-item">
        <span className="dropdown__selected-text">
          {defaultName ? defaultName : selectedItem}
        </span>
        <span className="dropdown__caret oi" data-glyph="caret-bottom"></span>
      </div>

      {isShowingItems && (
        <ul className="dropdown__list" onClick={(e) => selectItem(e)}>
          {items.map((item: T) => (
            <li className="dropdown__list-item" key={item.id}>
              {children(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
