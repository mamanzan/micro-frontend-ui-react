import { TextField } from "../components/textfields/TextField";
import TextFieldSearchAhead from "../components/textfields/TextFieldSearchAhead";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";

export const TextFields: IComponentExampleConfiguration[] = [
  {
    description: "Basic text field input",
    jsx: <TextField placeholder="Enter Search Term" />,
    title: "Basic",
  },

  {
    description: "Search ahead input",
    jsx: (
      <TextFieldSearchAhead
        placeholder="Enter Search Term"
        items={["a", "aa", "aaa", "aaaaa", "b", "c"]}
      />
    ),
    title: "Search ahead",
  },
];
