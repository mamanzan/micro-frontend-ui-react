import { IItemCheckbox, IItemCheckboxCustom } from "../../interface/interface";
import { Dropdown } from "../components/dropdowns/Dropdown";
import { DropdownCheckbox } from "../components/dropdowns/DropdownCheckbox";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";

const fruits: IItemCheckboxCustom[] = [
  {
    id: 1,
    value: "Bananas",
    isChecked: false,
    icon: "🍌",
  },
  {
    id: 2,
    value: "Strawberries",
    isChecked: false,
    icon: "🍓",
  },
  {
    id: 3,
    value: "Pineapples",
    isChecked: false,
    icon: "🍍",
  },
  {
    id: 4,
    value: "Grapes",
    isChecked: false,
    icon: "🍇",
  },
  {
    id: 5,
    value: "Watermelons",
    isChecked: false,
    icon: "🍉",
  },
  {
    id: 6,
    value: "Cherries",
    isChecked: false,
    icon: "🍒",
  },
  {
    id: 7,
    value: "Oranges",
    isChecked: false,
    icon: "🍊",
  },
  {
    id: 8,
    value: "Apples",
    isChecked: false,
    icon: "🍎",
  },
];

export const Dropdowns: IComponentExampleConfiguration[] = [
  {
    description: "Classic dropdown",
    jsx: (
      <Dropdown
        items={["a", "b", "c", "d"]}
        name={"Hello"}
        onSelectItem={() => {
          console.log("h");
        }}
      />
    ),
    title: "Basic Dropdown",
  },
  {
    description: "Description",
    jsx: (
      <DropdownCheckbox
        items={fruits}
        name={"Hello"}
        onSelectItem={() => {
          console.log("h");
        }}
      />
    ),
    title: "Checkbox Dropdown",
  },
];
