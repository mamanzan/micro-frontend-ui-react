import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useRef } from "react";
import { IHighchartsDonutProps } from "../interface/Highcharts";
import {
  HighchartsGeneral,
  HighchartsLegend,
  HighchartsTitle,
} from "../utils/HighChartsOptions";

export const HighchartsDonut = ({
  height,
  width,
  title = "<Title>",
  data,
}: IHighchartsDonutProps) => {
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  const options: Highcharts.Options = {
    exporting: { enabled: false },
    chart: {
      ...HighchartsGeneral(),
      margin: [40, 0, 40, 0],
      height,
      width,
    },
    title: { ...HighchartsTitle(title), verticalAlign: "bottom" },
    legend: { ...HighchartsLegend() },
    credits: { enabled: false },
    plotOptions: {
      pie: {
        showInLegend: true,
        dataLabels: {
          enabled: true,
          distance: "-20%",
        },
      },
    },
    series: [
      {
        type: "pie",
        innerSize: "60%",
        data: Array.from(data.values()),
      },
    ],
  };

  return (
    <div className="highcharts-donut">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartRef}
      ></HighchartsReact>
    </div>
  );
};
