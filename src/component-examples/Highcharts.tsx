import { HighchartsDonut } from "../components/highcharts/HighchartsDonut";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";
import {
  defaultHighchartsDonutProps,
  IHighchartsDonutProps,
} from "../interface/Highcharts";
import { fruits, IFruit } from "../models/Fruits";
import { HighchartsColorSet } from "../utils/HighChartsOptions";

const props1: IHighchartsDonutProps = {
  data: new Map<string, Highcharts.PointOptionsObject>(),
  title: "4 Fruits",
};
const props2: IHighchartsDonutProps = {
  data: new Map<string, Highcharts.PointOptionsObject>(),
  title: "3 Fruits",
};

fruits.slice(0, 4).forEach((fruit: IFruit, index: number) => {
  const y = Math.floor(Math.random() * 100);
  props1.data.set(fruit.name, {
    name: fruit.icon,
    color: HighchartsColorSet[index % HighchartsColorSet.length],
    y,
  });
});

fruits.slice(4, 7).forEach((fruit: IFruit, index: number) => {
  const y = Math.floor(Math.random() * 100);
  props2.data.set(fruit.name, {
    name: fruit.icon,
    color: HighchartsColorSet[index % HighchartsColorSet.length],
    y,
  });
});

export const Highcharts: IComponentExampleConfiguration[] = [
  {
    description: "Donut1",
    jsx: <HighchartsDonut {...props1} />,
    title: "Donut1",
  },
  {
    description: "Donut2",
    jsx: <HighchartsDonut {...props2} />,
    title: "Donut2",
  },
];
