export interface IHighchartsDonutValues {
  values: Map<string, [string, number] | Highcharts.PointOptionsObject>;
}
export const defaultHighchartsDonutValues: IHighchartsDonutValues = {
  values: new Map(),
};

export enum HighchartsLineBarType {
  Line = "line",
  Bar = "column",
}

export interface IHighchartsLineBarYValues {
  type: HighchartsLineBarType;
  data: number[];
  axisIndex?: number;
}
export interface IHighchartsLineBarDataValues {
  xValues: string[];
  yValues: Map<string, IHighchartsLineBarYValues>;
}
export const defaultHighChartsLineBarDataValues =
  (): IHighchartsLineBarDataValues => {
    return {
      xValues: [],
      yValues: new Map(),
    };
  };

export interface IHighChartsScatterDataValues {
  values: Map<string, number[][] | Highcharts.PointOptionsObject[]>;
}

export const defaultHighChartsScatterDataValues =
  (): IHighChartsScatterDataValues => {
    return {
      values: new Map(),
    };
  };

export interface IHighchartsWaferMapDataValue {
  x: number;
  y: number;
  ib: number;
}

export interface IHighchartsSelectionRange {
  xMin: number | string;
  xMax: number | string;
  yMin: number | string;
  yMax: number | string;
}

export enum HighchartsToolType {
  Zoom = "Zoom",
  Selection = "Selection",
}

export enum HighchartsExternalApps {
  YodaCreekLot7 = "YodaCreekLot7",
  YodaCreekLot8 = "YodaCreekLot8",
  Genome = "Genome",
}
export interface IHighchartsGotoExternalApp {
  app: HighchartsExternalApps;
  points: Highcharts.Point[];
}

export const defaultHighChartsBoxDataValues = (): IHighchartsBoxes => {
  return {
    xValues: [],
    boxes: new Map(),
  };
};

export interface IHighchartsBoxes {
  xValues: string[];
  boxes: Map<string, IHighchartsBox[]>;
}

export interface IHighchartsBox {
  xLabel: string;
  median: number;
  mean: number;
  Q1: number;
  Q3: number;
  high: number;
  low: number;
}
