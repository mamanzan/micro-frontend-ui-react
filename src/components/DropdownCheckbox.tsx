import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group"; // ES6
import "../scss/Dropdown.scss";

type DropdownProps = {
  onSelectItem: (item: string) => void;
  items: string[];
  name?: string;
};

export const DropdownCheckbox = ({
  onSelectItem,
  items,
  name,
}: DropdownProps) => {
  const [defaultName, setDefaultName] = useState(name);
  const [selectedItem, setSelectedItem] = useState("Dropdown");
  const [allItems, setAllItems] = useState(items);
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

  const toggleItem = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {};

  const onEnterTest = (e: any) => {};

  return (
    <div className="dropdown" onClick={toggleItems}>
      <div className="dropdown__selected-item">
        <span className="dropdown__selected-text">
          {defaultName ? defaultName : selectedItem}
        </span>
        <span className="dropdown__caret oi" data-glyph="caret-bottom"></span>
      </div>

      <CSSTransition
        mountOnEnter={true}
        unmountOnExit={true}
        in={isShowingItems}
        timeout={500}
        classNames="my-node"
        onEnter={onEnterTest}
      >
        <ul className="dropdown__list">
          {allItems.map((item: string) => (
            <li className="dropdown__list-item" key={item}>
              <input type="checkbox" />
              {item}
            </li>
          ))}
        </ul>
      </CSSTransition>
    </div>
  );
};
