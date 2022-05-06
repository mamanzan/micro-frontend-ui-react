import HighchartsReact from "highcharts-react-official";
import { HighchartsDonut } from "../components/HighchartsDonut";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";
import { HighchartsGeneral, HighchartsTitle } from "../utils/HighChartsOptions";

export const Highcharts: IComponentExampleConfiguration[] = [
  {
    description: "Highchart Donut",
    jsx: <HighchartsDonut />,
    title: "Donut",
  },
];
