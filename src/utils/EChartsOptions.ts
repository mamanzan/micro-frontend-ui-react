import {
  GridComponentOption,
  TitleComponentOption,
  XAXisComponentOption,
  YAXisComponentOption,
} from "echarts";

export const EChartGrid = (
  seriesNames: string[],
  top: number = 0,
  right: number = 0,
  bottom: number = 0,
  left: number = 0
): GridComponentOption => {
  let maxWidth = 0;
  if (!seriesNames || seriesNames.length === 0) maxWidth = 0;

  let div = document.createElement("div");
  div.style.display = "inline";
  div.style.height = "0px";
  div.style.fontFamily = "Intel One Text";
  div.style.margin = "0px";
  div.style.padding = "0px";
  div.style.fontSize = "12px";
  document.body.appendChild(div);
  seriesNames.forEach((name) => {
    //inject into a fake div to see how big it would be on screen.
    div.innerHTML = name;
    const { width } = div.getBoundingClientRect();
    if (width > maxWidth) maxWidth = width;
  });

  document.body.removeChild(div);

  return {
    backgroundColor: "#ffffff",
    show: true,
    top,
    right: right + maxWidth,
    bottom,
    left,
    borderColor: "#cccccc",
  };
};

export const EChartTitle = (
  titleText: () => string,
  maxWidth?: number
): TitleComponentOption => {
  return {
    text: titleText(),
    left: 0,
    top: 0,
    textStyle: {
      //fontFamily: "Intel One Text",
      fontSize: 18,
      fontWeight: 600,
      //color: isDarkMode ? 'white' : 'black',
      color: "black",
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
