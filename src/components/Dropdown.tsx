import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group"; // ES6
import "../scss/Dropdown.scss";

type DropdownProps = {
  onSelectItem: (item: string) => void;
  items: string[];
  name?: string;
};

export const Dropdown = ({ onSelectItem, items, name }: DropdownProps) => {
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
      </div>

      <CSSTransition
        mountOnEnter={true}
        unmountOnExit={true}
        in={isShowingItems}
        timeout={500}
        classNames="my-node"
        onEnter={onEnterTest}
      >
        <ul className="dropdown__list" onClick={(e) => selectItem(e)}>
          {items.map((item: string) => (
            <li className="dropdown__list-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </CSSTransition>
    </div>
  );
};
