export interface IEChartsDonutProps<T> {
  data: Map<string, { value: number; name: string }>;
  height?: string;
  width?: string; //by default will fit into parent container, only set if you want explicit height
  title?: string;
  labelFormatter: (item: T) => string;
}
