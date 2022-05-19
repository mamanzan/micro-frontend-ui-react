import { useState } from "react";
import {
  IEChartDonutSeries,
  IEChartDonutSeriesItem,
  IEChartsDonutProps,
} from "../../interface/ECharts";
import { EChartGrid, EChartTitle } from "../../utils/EChartsOptions";

import { ReactECharts } from "./ECharts";

export const EChartsDonut = <T extends any>({
  series,
  height = "100%",
  width = "100%",
  title,
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
            series: series.map((serie: IEChartDonutSeries<T>) => {
              return {
                type: "pie",
                radius: serie.radius,
                data: Array.from(serie.data.values()).map(
                  (value: IEChartDonutSeriesItem<T>) => ({
                    ...value,
                    itemStyle: { color: value.color },
                  })
                ),
                label: {
                  position: "inner",
                  formatter:
                    serie.labelFormatter &&
                    ((params) => {
                      const { item } = params.data as any;
                      console.log(item);
                      return serie.labelFormatter(item as T);
                    }),
                },
              };
            }),
          }}
        />
      </div>
    </>
  );
};
