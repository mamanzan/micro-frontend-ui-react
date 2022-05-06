import { PointerEventObject } from "highcharts";

//import { DarkModeService } from '../services/dark-mode.service';
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
import {
  HighchartsToolType,
  IHighchartsSelectionRange,
} from "../interface/Highcharts";
HC_exporting(Highcharts);

export const isHighchartsDarkMode = (): boolean => {
  const mode = window.localStorage.getItem(`smart-edge.dark-mode`);
  return mode === "yes";
};

export const HighchartsGeneral = (
  onSelection?: (range: IHighchartsSelectionRange) => void,
  chart?: Highcharts.Chart,
  toolType?: HighchartsToolType
): Highcharts.ChartOptions => {
  return {
    zoomType: "xy",
    //style: { fontFamily: "Intel One Text" },
    backgroundColor: isHighchartsDarkMode() ? "#1b1f22" : "#ffffff",
    events: {
      selection: (e: Highcharts.ChartSelectionContextObject) => {
        if ((e as any).resetSelection) return true;
        if (toolType !== HighchartsToolType.Selection) return true;

        const { max: xMax, min: xMin } = e.xAxis[0];
        const { max: yMax, min: yMin } = e.yAxis[0];

        chart!.series.forEach((series) => {
          series.points.forEach((point) => {
            if (
              point &&
              point.x >= xMin &&
              point.x <= xMax &&
              point.y! >= yMin &&
              point.y! <= yMax
            ) {
              point.select(true, true);
            }
          });
        });

        if (onSelection) onSelection({ xMax, xMin, yMax, yMin });

        return false;
      },
      click: (obj: PointerEventObject) => {
        const points = chart!.getSelectedPoints();
        if (points.length > 0) {
          points.forEach((point) => point.select(false));
        }
      },
    },
  };
};

export const HighchartsTitle = (text: string): Highcharts.TitleOptions => {
  return {
    text,
    style: {
      fontSize: "18px",
      fontWeight: "600",
      color: isHighchartsDarkMode() ? "#e9e9e9" : "#262626",
    },
    align: "center",
  };
};
export const HighchartsXAxisByCategory = (
  labelRotate: number = 0
): Highcharts.XAxisOptions => {
  return {
    labels: {
      y: labelRotate === 0 ? 20 : 10,
      rotation: labelRotate,
    },
  };
};
export const HighchartsXAxisByTime = (): Highcharts.XAxisOptions => {
  return {
    showLastLabel: true,
    labels: {
      formatter: function (data: any) {
        var date = new Date(data.value),
          month = (date.getMonth() + 1).toString(),
          day = date.getDate().toString(),
          year = date.getFullYear();

        if (month.length < 2) month = `0${month}`;
        if (day.length < 2) day = `0${day}`;

        return `${year}-${month}-${day}`;
      },
      y: 10,
      rotation: 45,
    },
    tickInterval: 24 * 3600 * 1000,
    tickLength: 0,
    minorTicks: true,
    minorTickInterval: 24 * 3600 * 1000,
    minorGridLineDashStyle: "Dash",
    minorGridLineColor: isHighchartsDarkMode() ? "#aeaeae" : "#e9e9e9",
    gridLineDashStyle: "Dash",
  };
};

export const HighChartsXAxisByValue = (): Highcharts.XAxisOptions => {
  return {
    showLastLabel: true,
    tickInterval: 1,
    tickLength: 0,
    minorTicks: true,
    minorTickInterval: 1,
    minorGridLineDashStyle: "Dash",
    minorGridLineColor: isHighchartsDarkMode() ? "#aeaeae" : "#e9e9e9",
    gridLineDashStyle: "Dash",
  };
};

export const HighChartsYAxis = (
  primaryLabel: string = "",
  secondaryLabel: string = "",
  primaryLimits: { min: number; max: number } | undefined = undefined,
  secondaryLimits: { min: number; max: number } | undefined = undefined
): Highcharts.YAxisOptions[] => {
  return [
    {
      title: {
        text: primaryLabel,
        align: "high",
        rotation: 0,
        offset: -1 * (primaryLabel.length * 6),
        y: -4,
      },
      gridLineColor: isHighchartsDarkMode() ? "#525252" : "#e9e9e9",
      gridLineDashStyle: "Dash",
      min: primaryLimits?.min,
      max: primaryLimits?.max,
      startOnTick: false,
    },
    {
      title: {
        text: secondaryLabel,
        align: "high",
        rotation: 0,
        offset: -30,
        y: -4,
      },
      gridLineColor: isHighchartsDarkMode() ? "#525252" : "#e9e9e9",
      gridLineDashStyle: "Dash",
      opposite: true,
      min: secondaryLimits?.min,
      max: secondaryLimits?.max,
    },
  ];
};

export const HighchartsLegend = (): Highcharts.LegendOptions => {
  return {
    layout: "horizontal",
    align: "center",
    verticalAlign: "top",

    symbolRadius: 0,
    itemStyle: {
      fontWeight: "normal",
      cursor: "pointer",
      color: isHighchartsDarkMode() ? "#e9e9e9" : "#262626",
    },
    itemMarginTop: 2,
    itemMarginBottom: 2,
  };
};

export const HighchartsPlotOptions = (): Highcharts.PlotOptions => {
  return {
    scatter: {
      marker: {
        radius: 5,
        states: {
          hover: {
            enabled: true,
            lineColor: "rgb(100,100,100)",
          },
        },
      },
      states: {
        hover: {
          // marker: {
          // 	enabled: false,
          // },
        },
      },
      tooltip: {
        headerFormat: "<b>{series.name}</b><br>",
        pointFormat: "{point.x} cm, {point.y} kg",
      },
    },
  };
};

export const HighchartsHeatMapSeries = (): Highcharts.SeriesHeatmapOptions => {
  return {
    type: "heatmap",
    borderWidth: 1,
    borderColor: isHighchartsDarkMode() ? "#1b1f22" : "#ffffff",
    data: [],
    dataLabels: {
      enabled: true,
      color: "#000000",
      style: {
        color: "#ffffff",
        fontWeight: "normal",
        textOutline: "0px contrast",
      },
    },
  };
};

export const HighchartsColorSet = [
  "#0068b5", //classic-blue
  "#8bae46", //moss
  "#edb200", //daisy shade1
  "#8f5da2", //geode
  "#e96115", //rust
  "#00c7fd", //energy blue
  "#548fad", //blue steel
  "#1e2eb8", //cobalt
  "#808080", //carbon
  "#fec91b", //daisy
  "#004a86", //classic-blue shade 1
  "#ff5662", //coral
  "#c81326", //coral shade 2
];
