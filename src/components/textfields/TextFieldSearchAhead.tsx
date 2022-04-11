import { useState, useCallback, useRef } from "react";

interface TextFieldSearchAheadProps {
  items: string[];
  placeholder: string;
}

const TextFieldSearchAhead = ({
  items,
  placeholder,
}: TextFieldSearchAheadProps) => {
  const tfsa = "text-field-search-ahead";
  const isCheckingForEvents = useRef(false);
  const [filteredItems, setFilteredItems] = useState(items);
  const [value, setValue] = useState("");
  const [showList, setShowList] = useState(false);

  const eventCleanup = useCallback(
    (val) => {
      //document.removeEventListener("click", hide, true);
      //document.removeEventListener("keydown", navigation, true);
      isCheckingForEvents.current = false;

      setFilteredItems(items);
      setShowList(false);
      setValue(val ? val : "");
    },
    [items]
  );

  const hide = useCallback(
    (event) => {
      const result = event.target.closest(`.${tfsa}__show-list`);
      if (result != null) return;
      eventCleanup(null);
    },
    [eventCleanup]
  );

  const navigation = useCallback(
    ({ target, key }) => {
      switch (key) {
        case "ArrowUp":
          if (target.previousSibling) target.previousSibling.focus();
          break;
        case "ArrowDown":
          console.log(target);
          console.log(target.classList);

          if (target.classList.contains(`${tfsa}__input`)) {
            const item = target.parentElement.querySelector(
              `.${tfsa}__list-item`
            );
            item.focus();
            return;
          }

          //   if (target.classList.contains(`${tfsa}__input`)) {
          //     const findIt = target.parentElement.find(`.${tfsa}__list-item`);
          //     findIt.focus();
          //     console.log("found it");
          //     return;
          //   }

          if (target.nextSibling) target.nextSibling.focus();

          break;
        case "Escape":
          eventCleanup(null);
          break;
        case "Tab":
          if (target.nextSibling === null) eventCleanup(null);
          break;
        default:
          break;
      }
    },
    [eventCleanup]
  );

  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm.length > 0) {
      const updatedItems = items.filter(
        (item) => item.toLowerCase().indexOf(searchTerm) >= 0
      );

      if (isCheckingForEvents.current === false) {
        document.addEventListener("click", hide, true);
        document.addEventListener("keydown", navigation, true);
        isCheckingForEvents.current = true;
      }

      setFilteredItems(updatedItems);
      setShowList(searchTerm !== "");
      setValue(searchTerm);
    } else {
      eventCleanup(null);
    }
  };

  const select = (item: string) => {
    eventCleanup(item);
  };

  const showListClass = showList
    ? `${tfsa}__list--show`
    : `${tfsa}__list--hide`;
  return (
    <div className={tfsa}>
      <input
        type="text"
        className={`${tfsa}__input`}
        value={value}
        onChange={search.bind(this)}
        placeholder={placeholder}
      ></input>
      <div className={`${tfsa}__list ${showListClass}`}>
        {filteredItems.map((item) => {
          return (
            <button
              key={item}
              className={`${tfsa}__list-item`}
              onClick={select.bind(this, item)}
            >
              {item}
            </button>
          );
        })}
        {filteredItems.length === 0 ? (
          <button className={`${tfsa}__list-item`}>
            No Results!
            <span role="img" aria-label="No Results!">
              😓
            </span>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default TextFieldSearchAhead;
