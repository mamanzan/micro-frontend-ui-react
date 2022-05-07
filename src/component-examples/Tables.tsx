import { Dropdown } from "../components/dropdowns/Dropdown";
import { DropdownCheckbox } from "../components/dropdowns/DropdownCheckbox";
import { ITableColumn, SortDirection, Table } from "../components/Table";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";
import {
  fruitItems,
  fruitItemCheckboxes,
  IFruitItem,
  IFruitItemCheckbox,
} from "../models/Fruits";
import { Fruit } from "../template/Fruit";
import { FruitDetails } from "../template/FruitDetails";
import { randomizeIds } from "../utils/RandomizeIds";

const defaultMessage = "Select a fruit";

let fruits = randomizeIds(fruitItems);
let columns = Object.entries(fruits[0]).map(([key]) => {
  return {
    name: key,
    displayName: key.charAt(0).toUpperCase() + key.slice(1),
    sort: SortDirection.NONE,
    type: "string",
  };
}) as ITableColumn[];

//type columns = keyof IFruitItem;
//let columns = ["A", "B", "C"];
let rows = new Map<number, IFruitItem>();
fruits.forEach((fruit: IFruitItem) => {
  rows.set(fruit.id as number, fruit);
});

//Order of this object determines on screen
let fruitsSmall = randomizeIds(fruitItems).map((fruit: IFruitItem) => {
  return {
    id: fruit.id,
    name: fruit.name,
    price: fruit.price,
    icon: fruit.icon,
  };
});

// let fruitsSmallColumn = Object.entries(fruits[0]).map(([key]) => {
//   return { name: key, sort: SortDirection.ASCENDING, type: "string" };
// }) as ITableColumn[];
let fruitsSmallColumn: ITableColumn[] = [
  { name: "id", displayName: "ID", sort: SortDirection.NONE, type: "int" },
  {
    name: "name",
    displayName: "Name",
    sort: SortDirection.NONE,
    type: "string",
  },
  {
    name: "price",
    displayName: "Price",
    sort: SortDirection.NONE,
    type: "float",
  },
  {
    name: "icon",
    displayName: "Icon",
    sort: SortDirection.NONE,
    type: "string",
  },
];
let fruitsSmallRows = new Map<number, any>();
fruitsSmall.forEach((fruit) => {
  fruitsSmallRows.set(fruit.id as number, {
    id: fruit.id,
    name: fruit.name,
    price: fruit.price,
    icon: fruit.icon,
  });
});

export const Tables: IComponentExampleConfiguration[] = [
  {
    description: "Simple table",
    jsx: <Table canEdit={true} columns={columns} rows={rows} />,
    title: "Basic",
  },
  {
    description: "Small table",
    jsx: (
      <Table
        canSelect={true}
        columns={fruitsSmallColumn}
        rows={fruitsSmallRows}
      />
    ),
    title: "Small",
  },
];
