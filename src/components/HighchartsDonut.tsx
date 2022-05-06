import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useRef } from "react";
import {
  defaultHighchartsDonutValues,
  IHighchartsDonutValues,
} from "../interface/Highcharts";
import { fruits, IFruit } from "../models/Fruits";
import {
  HighchartsColorSet,
  HighchartsGeneral,
  HighchartsLegend,
  HighchartsTitle,
} from "../utils/HighChartsOptions";

const data: IHighchartsDonutValues = {
  values: new Map<string, Highcharts.PointOptionsObject>(),
};

fruits.forEach((fruit: IFruit, index: number) => {
  const y = Math.floor(Math.random() * 100);
  data.values.set(fruit.name, {
    name: fruit.icon,
    color: HighchartsColorSet[index % HighchartsColorSet.length],
    value: 10,
    y,
  });
});

const options: Highcharts.Options = {
  exporting: { enabled: false },
  chart: {
    ...HighchartsGeneral(),
    margin: [20, 0, 40, 0],
    height: 400,
  },
  title: { ...HighchartsTitle("Zano"), verticalAlign: "bottom" },
  legend: { ...HighchartsLegend() },
  credits: { enabled: false },
  plotOptions: {
    pie: {
      showInLegend: true,
      dataLabels: {
        enabled: true,
        distance: "-20%",
        style: {
          fontWeight: "bold",
          color: "white",
        },
      },
    },
  },
  series: [
    {
      type: "pie",
      innerSize: "60%",
      data: Array.from(data.values.values()),
    },
  ],
};

export const HighchartsDonut = (props: HighchartsReact.Props) => {
  const chartRef = useRef<HighchartsReact.RefObject>(null);
  return (
    <div className="highcharts-donut">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartRef}
        {...props}
      ></HighchartsReact>
    </div>
  );
};
