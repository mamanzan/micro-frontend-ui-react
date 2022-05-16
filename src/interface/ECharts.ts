export interface IEChartDonutSeriesItem<T> {
  name: string;
  value: number;
  item: T;
}

export interface IEChartsDonutProps<T> {
  data: Map<string, IEChartDonutSeriesItem<T>>;
  height?: string;
  width?: string; //by default will fit into parent container, only set if you want explicit height
  title?: string;
  labelFormatter?: (item: T) => string;
}
