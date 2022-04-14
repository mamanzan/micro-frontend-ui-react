import {
  IItem,
  IItemCheckbox,
  IItemCheckboxCustom,
} from "../interface/interface";
import { Dropdown } from "../components/dropdowns/Dropdown";
import { DropdownCheckbox } from "../components/dropdowns/DropdownCheckbox";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";
import { DropdownCustom } from "../components/dropdowns/DropdownCustom";
import {
  fruitItems,
  fruitItemCheckboxes,
  IFruitItem,
  IFruit,
} from "../models/Fruits";
import { Fruit } from "../template/Fruit";

export const Dropdowns: IComponentExampleConfiguration[] = [
  {
    description: "Classic dropdown",
    jsx: (
      <Dropdown
        items={fruitItems}
        name={"Hello"}
        onSelectItem={() => {
          console.log("h");
        }}
      />
    ),
    title: "Basic Dropdown",
  },
  {
    description: "Custom Items",
    jsx: (
      <DropdownCustom
        items={fruitItems}
        name={"Hello"}
        onSelectItem={(item: IFruitItem) => {
          console.log(item);
        }}
      >
        {(item: IFruitItem) => <Fruit icon={item.icon} value={item.value} />}
      </DropdownCustom>
    ),
    title: "Basic Dropdown",
  },
  {
    description: "Description",
    jsx: (
      <DropdownCheckbox
        items={fruitItemCheckboxes}
        name={"Hello"}
        onSelectItem={() => {
          console.log("h");
        }}
      />
    ),
    title: "Checkbox Dropdown",
  },
];
