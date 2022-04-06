import { Toggle } from "../components/toggles/Toggle";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";

const onSelect = (value: string, e: any) => {
  console.log("Value from toggle", value);
};
export const Toggles: IComponentExampleConfiguration[] = [
  {
    description: "Basic text field input",
    jsx: <Toggle onSelect={onSelect} optionA={"A"} optionB={"B"} />,
    title: "Basic",
  },
];
