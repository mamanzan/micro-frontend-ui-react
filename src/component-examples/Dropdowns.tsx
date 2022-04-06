import { Dropdown } from "../components/Dropdown";
import { DropdownCheckbox } from "../components/DropdownCheckbox";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";

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
        items={["a", "b", "c", "d"]}
        name={"Hello"}
        onSelectItem={() => {
          console.log("h");
        }}
      />
    ),
    title: "Checkbox Dropdown",
  },
];
