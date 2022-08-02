import * as React from "react";
import { lazy } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/Card";
import { Dropdowns } from "../component-examples/Dropdowns";
import { TextFields } from "../component-examples/TextFields";
import { Toggles } from "../component-examples/Toggles";
import { Tables } from "../component-examples/Tables";
import { Highcharts } from "../component-examples/Highcharts";
import { ECharts } from "../component-examples/ECharts";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";
import { CheckboxList } from "../component-examples/Sandbox";
import { Spinners } from "../component-examples/Spinners";

interface ComponenProps {
  description: string;
  jsx: JSX.Element;
  title: string;
  type: string;
}

interface ComponentRouteParams {
  type: string;
}

export const Components = () => {
  let { type } = useParams<ComponentRouteParams>();

  let examples: IComponentExampleConfiguration[] = [];
  let humanizeTitle: string = "";

  switch (type) {
    case "textfields":
      examples = TextFields;
      humanizeTitle = "Text Fields";
      break;
    case "toggles":
      examples = Toggles;
      humanizeTitle = "Toggles";
      break;
    case "tables":
      examples = Tables;
      humanizeTitle = "Tables";
      break;
    case "highcharts":
      examples = Highcharts;
      humanizeTitle = "Highcharts";
      break;
    case "echarts":
      examples = ECharts;
      humanizeTitle = "ECharts";
      break;
    case "dropdowns":
      examples = Dropdowns;
      humanizeTitle = "Dropdowns";
      break;
    case "spinners":
      examples = Spinners;
      humanizeTitle = "Spinners";
      break;
    case "sandbox":
    default:
      examples = CheckboxList;
      humanizeTitle = "Sandbox";

      break;
  }

  console.log(`Type: ${type}`);
  return (
    <div className="components">
      <h1 className="components__title">{humanizeTitle}</h1>
      <div className="components__examples">
        {examples.map((dropdown: IComponentExampleConfiguration) => (
          <Card
            key={dropdown.title}
            component={dropdown.jsx}
            description={dropdown.description}
            title={dropdown.title}
          ></Card>
        ))}
      </div>
    </div>
  );
};
