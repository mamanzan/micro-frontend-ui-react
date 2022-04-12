import { useCallback, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group"; // ES6
import { IItemCheckbox } from "../../../interface/interface";

type DropdownProps = {
  onSelectItem: (item: string) => void;
  items: IItemCheckbox[];
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
  const _this = this;

  const closeDropdown = useCallback(
    (event) => {
      console.log(this);
      console.log("Event for close");
      console.log(event);
      const result = event.target.closest(".dropdown__list");
      console.log(result);
      if (result !== null) return; //meaning you clicked inside the list
      console.log("shutting down dropdown...", isShowingItems);

      document.removeEventListener("click", closeDropdown, true);
      setIsShowingItems(false);
    },
    [isShowingItems]
  );

  const toggleItems = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const isItemClicked =
      (e.target as any).closest(".dropdown__list-item") !== null;
    if (isItemClicked) return;
    setIsShowingItems(!isShowingItems);
  };

  const toggleItem = (
    selectedItem: IItemCheckbox,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.stopPropagation();
    const updatedItems = [...allItems];
    const updatedItem = updatedItems.find(
      (item: IItemCheckbox) => item.id === selectedItem.id
    );
    updatedItem.isChecked = e.target.checked;
    setAllItems(updatedItems);
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
        <ul className="dropdown__list">
          {allItems.map((item: IItemCheckbox) => (
            <li className="dropdown__list-item" key={item.id}>
              <input
                type="checkbox"
                checked={item.isChecked}
                name={`${item.value}`}
                id={`${item.value}`}
                onChange={(e) => toggleItem(item, e)}
              />
              <label htmlFor={`${item.value}`}> {item.value}</label>
            </li>
          ))}
        </ul>
      )}

      {/* <CSSTransition
        mountOnEnter={true}
        unmountOnExit={true}
        in={isShowingItems}
        timeout={500}
        classNames="my-node"
        onEnter={onEnterTest}
      >
        <ul className="dropdown__list">
          {allItems.map((item: IItemCheckbox) => (
            <li className="dropdown__list-item" key={item.id}>
              <input
                type="checkbox"
                checked={item.isChecked}
                name={`${item.value}`}
                id={`${item.value}`}
                onChange={(e) => toggleItem(item, e)}
              />
              <label htmlFor={`${item.value}`}> {item.value}</label>
            </li>
          ))}
        </ul>
      </CSSTransition> */}
    </div>
  );
};
