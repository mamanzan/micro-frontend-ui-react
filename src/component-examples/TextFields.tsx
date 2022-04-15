import { TextField } from "../components/textfields/TextField";
import TextFieldSearchAhead from "../components/textfields/TextFieldSearchAhead";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";
import { fruitItems, IFruitItem } from "../models/Fruits";
import { FruitDetails } from "../template/FruitDetails";
import { randomizeIds } from "../utils/RandomizeIds";

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
        items={randomizeIds(fruitItems)}
        onSelectItem={(item: IFruitItem) => {
          console.log(item);
        }}
      />
    ),
    title: "Search ahead",
  },
  {
    description: "Cusom item render",
    jsx: (
      <TextFieldSearchAhead
        placeholder="Enter Search Term"
        items={randomizeIds(fruitItems)}
        onSelectItem={(item: IFruitItem) => {
          console.log(item);
        }}
      >
        {(item: IFruitItem) => <FruitDetails {...item} />}
      </TextFieldSearchAhead>
    ),
    title: "Search Custom Render",
  },
];
