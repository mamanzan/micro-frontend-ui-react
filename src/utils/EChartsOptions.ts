import {
  GridComponentOption,
  LegendComponentOption,
  registerTheme,
  TitleComponentOption,
  XAXisComponentOption,
  YAXisComponentOption,
} from "echarts";

const lightTheme = require("./EChartsThemeLight.json");
const darkTheme = require("./EChartsThemeDark.json");

registerTheme("light", lightTheme);
registerTheme("dark", darkTheme);

//If you had multiple separate charts, this can control the sizes of each.
export const EChartGrid = (
  top: number = 0,
  right: number = 0,
  bottom: number = 0,
  left: number = 0
): GridComponentOption => {
  return {
    show: true,
    top,
    right,
    bottom,
    left,
  };
};

export const EChartTitle = (
  text: string = "<Title>",
  maxWidth?: number
): TitleComponentOption => {
  return {
    text,
    left: 0,
    top: 0,
    textStyle: {
      fontSize: 24,
      fontWeight: 100,
      width: maxWidth,
      ellipsis: "...",
      overflow: "breakAll",
    } as any,
  };
};

export const EChartXAxisByCategory = (
  categories: string[]
): XAXisComponentOption => {
  return {
    type: "category",
    boundaryGap: true,
    data: categories,
    axisLabel: {
      rotate: -45,
      fontSize: 12,
      color: "black",
      //color: isDarkMode ? '#aeaeae' : 'black',
    },
    axisLine: {
      lineStyle: {
        color: "#aeaeae",
      },
    },
    axisTick: {
      show: false,
    },
  };
};

export const EChartYAxisByValue = (
  name: string,
  min: number,
  max: number | undefined
): YAXisComponentOption => {
  return {
    splitLine: {
      lineStyle: {
        type: "dashed",
        //color: isDarkMode ? '#262626' : '#e9e9e9', //carbon-tint2
        color: "#e9e9e9", //carbon-tint2
      },
    },
    type: "value",
    name,
    nameGap: 0,
    nameTextStyle: {
      padding: 10,
    },
    axisTick: {
      show: false,
    },
    min: min,
    max: max,
    axisLine: {
      lineStyle: {
        color: "#aeaeae",
      },
    },
    axisLabel: {
      //color: isDarkMode ? "#aeaeae" : "black",
      color: "black",
    },
  };
};

export const EChartsLegend = (
  orientation: "horizontal" | "vertical" = "horizontal"
): LegendComponentOption => {
  let options: LegendComponentOption = {
    show: true,
    symbolKeepAspect: true,
    selectedMode: true,
    itemHeight: 8,
    itemWidth: 8,
    itemGap: 12,
    orient: orientation,
    icon: "rect",
    type: "scroll",
    //align: 'left',
    //left: 0,
    // right: 10,
    // top: 0,
    //bottom: 30,
    // width: "100%",
    textStyle: {
      fontSize: 12,
    },
  };
  switch (orientation) {
    case "vertical":
      break;
    case "horizontal":
      // options.left = 0;
      // options.right = 0;
      options.top = 10;
      options.align = "auto";
    default:
      break;
  }
  return options;
};

export const EChartsColorSet = [
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
