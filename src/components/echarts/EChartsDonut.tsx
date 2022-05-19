import { useState } from "react";
import {
  IEChartDonutSeries,
  IEChartDonutSeriesItem,
  IEChartsDonutProps,
} from "../../interface/ECharts";
import {
  EChartGrid,
  EChartsLegend,
  EChartTitle,
} from "../../utils/EChartsOptions";

import { ReactECharts } from "./ECharts";

export const EChartsDonut = <T extends any>({
  series,
  height = "100%",
  width = "100%",
  title,
}: IEChartsDonutProps<T>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <>
      <button onClick={() => setIsLoading(!isLoading)}>Load</button>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Theme
      </button>
      <div style={{ height, width }}>
        <ReactECharts
          theme={theme}
          loading={isLoading}
          option={{
            title: {
              ...EChartTitle(title),
              left: "center",
              top: "bottom",
              padding: [0, 0, 20, 0],
            },
            legend: { ...EChartsLegend() },
            series: series.map((serie: IEChartDonutSeries<T>) => {
              return {
                type: "pie",
                top: 20,
                bottom: 20,
                radius: serie.radius,
                data: Array.from(serie.data.values()).map(
                  (value: IEChartDonutSeriesItem<T>) => ({
                    ...value,
                    //itemStyle: { color: value.color },
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
