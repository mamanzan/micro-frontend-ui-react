import { EChartsDonut } from "../components/echarts/EChartsDonut";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";
import {
  IEChartDonutSeriesItem,
  IEChartsDonutProps,
} from "../interface/ECharts";

import { fruits, IFruit, IFruitItem } from "../models/Fruits";
import { EChartsColorSet } from "../utils/EChartsOptions";
import { HighchartsColorSet } from "../utils/HighChartsOptions";

const props1: IEChartsDonutProps<IFruitItem> = {
  data: new Map<string, IEChartDonutSeriesItem<IFruitItem>>(),
  title: "4 Fruits",
};
const props2: IEChartsDonutProps<IFruitItem> = {
  data: new Map<string, IEChartDonutSeriesItem<IFruitItem>>(),
  title: "3 Fruits",
};

fruits.slice(0, 4).forEach((fruit: IFruit, index: number) => {
  const y = Math.floor(Math.random() * 100);
  props1.data.set(fruit.name, {
    name: fruit.icon,
    item: { ...fruit, id: index, value: fruit.name },
    value: fruit.quantity,
    color: EChartsColorSet[index % EChartsColorSet.length],
  });
});

fruits.slice(2, 7).forEach((fruit: IFruit, index: number) => {
  props2.data.set(fruit.name, {
    name: fruit.icon,
    item: { ...fruit, id: index, value: fruit.name },
    value: fruit.price,
    color: EChartsColorSet[index % EChartsColorSet.length],
  });
});

const size: string = "400px";
export const ECharts: IComponentExampleConfiguration[] = [
  {
    description: "Donut1",
    jsx: <EChartsDonut {...props1} height={size} width={size} />,
    title: "Donut1",
  },
  {
    description: "Donut2",
    jsx: (
      <EChartsDonut
        {...props2}
        height={size}
        width={size}
        labelFormatter={(fruit: IFruitItem) => {
          return `${fruit.icon} $${fruit.price}`;
        }}
      />
    ),
    title: "Donut2",
  },
];
