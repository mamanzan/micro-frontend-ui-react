import { EChartsDonut } from "../components/echarts/EChartsDonut";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";
import {
  IEChartDonutSeries,
  IEChartDonutSeriesItem,
  IEChartsDonutProps,
} from "../interface/ECharts";

import { fruits, IFruit, IFruitItem } from "../models/Fruits";
import { EChartsColorSet } from "../utils/EChartsOptions";

const series1: IEChartDonutSeries<IFruitItem> = {
  data: new Map<string, IEChartDonutSeriesItem<IFruitItem>>(),
  radius: ["50%", "80%"],
};
const series2: IEChartDonutSeries<IFruitItem> = {
  data: new Map<string, IEChartDonutSeriesItem<IFruitItem>>(),
  radius: ["10%", "40%"],
  labelFormatter: (item: IFruitItem) => `${item.icon} ${item.price}`,
};

fruits.slice(0, 4).forEach((fruit: IFruit, index: number) => {
  series1.data.set(fruit.name, {
    name: fruit.name,
    item: { ...fruit, id: index, value: fruit.name },
    value: fruit.quantity,
    color: EChartsColorSet[index % EChartsColorSet.length],
  });
});

fruits.slice(2, 7).forEach((fruit: IFruit, index: number) => {
  series2.data.set(fruit.name, {
    name: fruit.icon,
    item: { ...fruit, id: index, value: fruit.name },
    value: fruit.price,
    color: EChartsColorSet[index % EChartsColorSet.length],
  });
});

const size: string = "300px";
const props1: IEChartsDonutProps<IFruitItem> = {
  series: [series1],
  height: size,
  width: size,
  title: "1 Donut",
};

const props2: IEChartsDonutProps<IFruitItem> = {
  series: [series1, series2],
  height: size,
  width: size,
  title: "2 Donut",
};

export const ECharts: IComponentExampleConfiguration[] = [
  {
    description: "Donut1",
    jsx: <EChartsDonut {...props1} height={size} width={size} />,
    title: "Donut1",
  },
  {
    description: "Donut2",
    jsx: <EChartsDonut {...props2} height={size} width={size} />,
    title: "Donut2",
  },
];
