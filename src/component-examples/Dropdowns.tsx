import {
  IItem,
  IItemCheckbox,
  IItemCheckboxCustom,
} from "../interface/interface";
import { Dropdown } from "../components/dropdowns/Dropdown";
import { DropdownCheckbox } from "../components/dropdowns/DropdownCheckbox";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";
import {
  fruitItems,
  fruitItemCheckboxes,
  IFruitItem,
  IFruit,
  IFruitItemCheckbox,
} from "../models/Fruits";
import { Fruit } from "../template/Fruit";
import { FruitDetails } from "../template/FruitDetails";

//TODO: Fix warning about key not being unique
const randomizeIds = <T extends IItem>(items: T[]): T[] => {
  const result = items.map((item: T) => ({
    ...item,
    id: Math.floor(Math.random() * 1000000000),
  }));
  console.log(result);
  return [...result];
};

export const Dropdowns: IComponentExampleConfiguration[] = [
  {
    description: "Classic dropdown",
    jsx: (
      <Dropdown
        items={randomizeIds(fruitItems)}
        name={"Hello"}
        onSelectItem={() => {
          console.log("h");
        }}
      />
    ),
    title: "Basic",
  },
  {
    description: "Cutom template to render each item",
    jsx: (
      <Dropdown
        items={randomizeIds(fruitItems)}
        name={"Hello"}
        onSelectItem={(item: IFruitItem) => {
          console.log(item);
        }}
      >
        {(item: IFruitItem) => <Fruit icon={item.icon} value={item.value} />}
      </Dropdown>
    ),
    title: "Custom Items",
  },
  {
    description: "Select multiple items",
    jsx: (
      <DropdownCheckbox
        items={fruitItemCheckboxes}
        name={"Hello"}
        onSelectItem={() => {
          console.log("h");
        }}
      />
    ),
    title: "Checkboxes",
  },
  {
    description: "Select multiple items",
    jsx: (
      <DropdownCheckbox
        items={fruitItemCheckboxes}
        name={"Hello"}
        onSelectItem={() => {
          console.log("h");
        }}
      >
        {(item: IFruitItemCheckbox) => (
          <FruitDetails
            icon={item.icon}
            name={item.value.toString()}
            price={0}
            quantity={0}
          />
        )}
      </DropdownCheckbox>
    ),
    title: "Checkboxes w/Custom Render",
  },
];
