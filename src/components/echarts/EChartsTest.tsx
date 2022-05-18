import { useState } from "react";
import {
  EChartGrid,
  EChartXAxisByCategory,
  EChartYAxisByValue,
} from "../../utils/EChartsOptions";

import { ReactECharts } from "./ECharts";

export const EChartsTest = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <button onClick={() => setIsLoading(!isLoading)}>Load</button>
      <div
        style={{ width: "500px", height: "400px", backgroundColor: "white" }}
      >
        <ReactECharts
          loading={isLoading}
          option={{
            grid: { ...EChartGrid([]), backgroundColor: "rgb(255,255,255)" },
            xAxis: {
              ...EChartXAxisByCategory([
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
              ]),
            },

            yAxis: { ...EChartYAxisByValue("#", 0, 300) },
            series: [
              {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: "line",
              },
            ],
          }}
        />
      </div>
    </>
  );
};
