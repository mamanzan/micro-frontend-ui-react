import { Test } from "../components/checkboxList/checkboxList";
import { Table } from "../components/tables/Table";
import { ITableColumn, SortDirection } from "../components/tables/TableColumns";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";
import { IItem } from "../interface/interface";
import { fruitItems, IFruitItem } from "../models/Fruits";
import { randomizeIds } from "../utils/RandomizeIds";

interface IFruit extends IItem {
  icon: string;
  name: string;
}

randomizeIds(fruitItems);
const fruitRows = new Map<number, IFruitItem>(
  randomizeIds(fruitItems).map((value: IFruitItem) => [
    value.id as number,
    value,
  ])
);

const fruitColumns: ITableColumn<IFruit>[] = [
  {
    field: "name",
    type: "string",
    displayName: "Name",
    sort: SortDirection.NONE,
  },

  {
    field: "icon",
    type: "string",
    displayName: "Icon",
    sort: SortDirection.NONE,
  },
  {
    field: "quantity",
    type: "int",
    displayName: "Quantity",
    sort: SortDirection.NONE,
  },
  {
    field: "price",
    type: "float",
    displayName: "Price",
    sort: SortDirection.NONE,
  },
];
// const fruitRows = new Map<number, IFruit>();
// fruitRows.set(1, { id: 1, value: "kiwi", icon: "🥝", name: "Kiwi" });
// fruitRows.set(2, {
//   id: 2,
//   value: "strawberry",
//   icon: "🍓",
//   name: "Strawberry",
// });

export const CheckboxList: IComponentExampleConfiguration[] = [
  {
    description: "CheckboxList Test",
    jsx: <Test />,
    title: "Checkboxes",
  },
  {
    description: "Checkbox Table",
    jsx: <Table columns={fruitColumns} rows={fruitRows} canSelect={true} />,
    title: "Checkbox Table",
  },
];
