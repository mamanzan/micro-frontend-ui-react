import {
  GridComponentOption,
  XAXisComponentOption,
  YAXisComponentOption,
} from "echarts";

export const EChartGrid = (
  seriesNames: string[],
  top: number = 50,
  right: number = 40,
  bottom: number = 60,
  left: number = 40
): GridComponentOption => {
  let maxWidth = 0;
  if (!seriesNames || seriesNames.length === 0) maxWidth = 80;

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
    backgroundColor: "#fff",
    top,
    right: right + maxWidth,
    bottom,
    left,
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
