import { Test } from "../components/checkboxList/checkboxList";
import { ReactECharts } from "../components/echarts/ECharts";
import { EChartsDonut } from "../components/echarts/EChartsDonut";
import { EChartsTest } from "../components/echarts/EChartsTest";
import { Table } from "../components/tables/Table";
import { ITableColumn, SortDirection } from "../components/tables/TableColumns";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";
import { IEChartDonutSeriesItem } from "../interface/ECharts";
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

const fruitMap = new Map<
  string,
  { name: string; value: number; item: IFruitItem }
>(
  randomizeIds(fruitItems).map((value: IFruitItem) => [
    value.name,
    { name: value.name, value: value.quantity, item: value },
  ])
);

const fruitMap2 = new Map<string, IEChartDonutSeriesItem<IFruitItem>>(
  randomizeIds(fruitItems).map((value: IFruitItem) => [
    value.name,
    { name: value.name, value: value.quantity, item: value },
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
  {
    description: "ECharts",
    jsx: <EChartsTest />,
    title: "ECharts",
  },
  {
    description: "ECharts Donut",
    jsx: (
      <EChartsDonut
        data={fruitMap2}
        height={"500px"}
        width={"500px"}
        title="Fruits"
        // labelFormatter={(fruit: IFruitItem) => {
        //   return `${fruit.icon} (${fruit.quantity})`;
        // }}
      />
    ),
    title: "Donut",
  },
];
