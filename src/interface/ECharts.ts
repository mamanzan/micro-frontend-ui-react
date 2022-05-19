export interface IEChartDonutSeriesItem<T> {
  name: string;
  value: number;
  color: string;
  item: T;
}

export interface IEChartDonutSeries<T> {
  data: Map<string, IEChartDonutSeriesItem<T>>;
  radius: [inner: string | number, outer: string | number];
  labelFormatter?: (item: T) => string;
}

export interface IEChartsDonutProps<T> {
  series: IEChartDonutSeries<T>[];
  height?: string;
  width?: string; //by default will fit into parent container, only set if you want explicit height
  title?: string;
}
