import { useState } from "react";
import {
  IEChartDonutSeriesItem,
  IEChartsDonutProps,
} from "../../interface/ECharts";
import { EChartGrid, EChartTitle } from "./EChartOptions";
import { ReactECharts } from "./ECharts";

export const EChartsDonut = <T extends any>({
  data,
  height = "100%",
  width = "100%",
  title,
  labelFormatter,
}: IEChartsDonutProps<T>) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <button onClick={() => setIsLoading(!isLoading)}>Load</button>
      <div style={{ height, width }}>
        <ReactECharts
          loading={isLoading}
          option={{
            grid: {
              ...EChartGrid([]),
            },
            title: {
              ...EChartTitle(() => title),
              left: "center",
              top: "bottom",
            },
            series: [
              {
                type: "pie",
                radius: ["50%", "80%"],
                data: Array.from(data.values()),
                label: {
                  position: "inner",
                  formatter:
                    labelFormatter &&
                    ((params) => {
                      const { item } = params.data as any;
                      console.log(item);
                      return labelFormatter(item as T);
                    }),
                },
              },
            ],
          }}
        />
      </div>
    </>
  );
};
