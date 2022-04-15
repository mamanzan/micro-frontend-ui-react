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
import { randomizeIds } from "../utils/RandomizeIds";

const defaultMessage = "Select a fruit";
export const Dropdowns: IComponentExampleConfiguration[] = [
  {
    description: "Classic dropdown",
    jsx: (
      <Dropdown
        items={randomizeIds(fruitItems)}
        name={defaultMessage}
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
        name={defaultMessage}
        onSelectItem={(item: IFruitItem) => {
          console.log(item);
        }}
      >
        {(item: IFruitItem) => <Fruit {...item} />}
      </Dropdown>
    ),
    title: "Custom Items",
  },
  {
    description: "Select multiple items",
    jsx: (
      <DropdownCheckbox
        items={fruitItemCheckboxes}
        name={defaultMessage}
        onSelectItem={(item: IFruitItemCheckbox) => {
          console.log(item);
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
        name={defaultMessage}
        onSelectItem={(item: IFruitItemCheckbox) => {
          console.log(item);
        }}
      >
        {(item: IFruitItemCheckbox) => <FruitDetails {...item} />}
      </DropdownCheckbox>
    ),
    title: "Checkboxes w/Custom Render",
  },
];
