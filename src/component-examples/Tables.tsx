import { ITableColumn, SortDirection, Table } from "../components/Table";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";
import { fruitItems, IFruit, IFruitItem } from "../models/Fruits";
import { randomizeIds } from "../utils/RandomizeIds";

const defaultMessage = "Select a fruit";

let fruits = randomizeIds(fruitItems);

/*********************** STANDARD TABLE *****************************************/
let columns = Object.entries(fruits[0]).map(([key]) => {
  return {
    field: key,
    displayName: key.charAt(0).toUpperCase() + key.slice(1),
    sort: SortDirection.NONE,
    type: "string",
  };
}) as ITableColumn<IFruitItem>[];
let rows = new Map<number, IFruitItem>();
fruits.forEach((fruit: IFruitItem) => {
  rows.set(fruit.id as number, fruit);
});

const simpleTable: IComponentExampleConfiguration = {
  description: "Standard table",
  jsx: <Table columns={columns} rows={rows} />,
  title: "Standard",
};

/*************************** SMALL & EDITABLE  ********************************/
let smallAndEditableColumns: ITableColumn<IFruitItem>[] = [
  { field: "id", displayName: "ID", sort: SortDirection.NONE, type: "int" },
  {
    field: "name",
    displayName: "Name",
    sort: SortDirection.NONE,
    type: "string",
  },
  {
    field: "price",
    displayName: "Price",
    sort: SortDirection.NONE,
    type: "float",
  },
  {
    field: "icon",
    displayName: "Icon",
    sort: SortDirection.NONE,
    type: "string",
  },
];
let smallAndEditableRows = new Map<number, IFruitItem>();
randomizeIds(fruitItems)
  .slice(0, 3)
  .forEach((fruit: IFruitItem) => {
    smallAndEditableRows.set(fruit.id as number, fruit);
  });
const smallAndEditableTable: IComponentExampleConfiguration = {
  description: "Small table",
  jsx: (
    <Table
      canSelect={true}
      canDelete={true}
      canEdit={true}
      columns={smallAndEditableColumns}
      rows={smallAndEditableRows}
    />
  ),
  title: "Small",
};

/************************Custom Render ****************************************/

let customRenderColumns: ITableColumn<IFruitItem>[] = [
  {
    field: "name",
    displayName: "Name",
    sort: SortDirection.NONE,
    type: "string",
    customRender: (item: IFruitItem) => <i>{item.name}</i>,
  },
  {
    field: "price",
    displayName: "Price",
    sort: SortDirection.NONE,
    type: "float",
    customRender: (item: IFruitItem) => (
      <div style={{ color: item.price > 0.2 ? "red" : "green" }}>
        ${item.price}
      </div>
    ),
  },
  {
    field: "icon",
    displayName: "Icon",
    sort: SortDirection.NONE,
    type: "string",
    customRender: (item: IFruitItem) => (
      <div>
        {item.icon}
        {item.icon}
        {item.icon}
      </div>
    ),
  },
];
let customRenderRows = new Map<number, IFruitItem>();
randomizeIds(fruitItems)
  .slice(0, 5)
  .forEach((fruit: IFruitItem) => {
    customRenderRows.set(fruit.id as number, fruit);
  });
const customRenderTable: IComponentExampleConfiguration = {
  description: "Custom Render",
  jsx: <Table columns={customRenderColumns} rows={customRenderRows} />,
  title: "Custom",
};

export const Tables: IComponentExampleConfiguration[] = [
  simpleTable,
  smallAndEditableTable,
  customRenderTable,
];
