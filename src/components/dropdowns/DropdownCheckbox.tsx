import { useCallback, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group"; // ES6
import { IItem, IItemCheckbox } from "../../interface/interface";
import { IDropdownProps } from "../../interface/Props";

export const DropdownCheckbox = <T extends IItemCheckbox>({
  children,
  onSelectItem,
  items,
  name,
}: IDropdownProps<T>) => {
  const ddcb = "dropdown-checkbox";
  const [defaultName, setDefaultName] = useState(name);
  const [selectedItem, setSelectedItem] = useState("Dropdown");
  const [allItems, setAllItems] = useState(items);
  const [isShowingItems, setIsShowingItems] = useState(false);

  const closeDropdown = (event: MouseEvent) => {
    //Very curious that you get here twice, If you click on the label you get
    //one response for the label and one for theonce for the label and once for the input.
    console.log("Event for close");
    console.log(event);
    const result = (event.target as any).closest(`.${ddcb}__list`);
    console.log(result);
    if (result !== null) return; //meaning you clicked inside the list
    console.log("shutting down dropdown...", isShowingItems);

    document.removeEventListener("click", closeDropdown, true);
    setIsShowingItems(false);
  };
  const toggleItems = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const isItemClicked =
      (e.target as any).closest(`.${ddcb}__list-item`) !== null;
    if (isItemClicked) return;

    document.addEventListener("click", closeDropdown, true);
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

  return (
    <div className={`${ddcb}`} onClick={toggleItems}>
      <div className={`${ddcb}__selected-item`}>
        <span className={`${ddcb}__selected-text`}>
          {defaultName ? defaultName : selectedItem}
        </span>
        <span className={`${ddcb}__caret oi`} data-glyph="caret-bottom"></span>
      </div>
      {isShowingItems && (
        <ul className={`${ddcb}__list`}>
          {allItems.map((item: T) => (
            <li className={`${ddcb}__list-item`} key={item.id}>
              <input
                type="checkbox"
                checked={item.isChecked}
                className={`${ddcb}__checkbox`}
                name={`${item.value}`}
                id={`${item.value}`}
                onChange={(e) => toggleItem(item, e)}
              />
              <label
                className={`${ddcb}__checkbox-label`}
                htmlFor={`${item.value}`}
              >
                {children ? children(item) : item.value}
              </label>
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
