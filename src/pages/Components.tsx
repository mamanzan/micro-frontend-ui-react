import * as React from "react";
import { lazy } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/Card";
import { Dropdowns } from "../component-examples/Dropdowns";
import { TextFields } from "../component-examples/TextFields";
import { Toggles } from "../component-examples/Toggles";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";
import "../scss/Components.scss";

interface ComponenProps {
  description: string;
  jsx: JSX.Element;
  title: string;
  type: string;
}

interface ComponentRouteParams {
  type: string;
}

// const mah = lazy(async () =>
//   await (import('../component-examples/Dropdowns').));

// const NextComponent = lazy(() =>
//   import("../component-examples/Dropdowns").then(({ Dropdowns }) => ({
//     default: Dropdowns,
//   }))
// );

//const NextComponent = lazy(() => import("../component-examples/Dropdowns"));

export const Components = () => {
  let { type } = useParams<ComponentRouteParams>();

  let examples: IComponentExampleConfiguration[] = [];

  switch (type) {
    case "textfields":
      examples = TextFields;
      break;
    case "toggles":
      examples = Toggles;
      break;
    case "dropdowns":
    default:
      examples = Dropdowns;
      break;
  }

  return (
    <div className="components">
      <h1 className="components__title">{type}</h1>
      <div className="components__examples">
        {examples.map((dropdown: IComponentExampleConfiguration) => (
          <Card
            component={dropdown.jsx}
            description={dropdown.description}
            title={dropdown.title}
          ></Card>
        ))}
      </div>
    </div>
  );
};
