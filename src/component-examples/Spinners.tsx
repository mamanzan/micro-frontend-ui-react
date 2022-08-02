import { SquareSpinner } from "../components/spinners/SquareSpinner";
import { SquareSpinnerSvg } from "../components/spinners/SquareSpinnerSvg";

import { IComponentExampleConfiguration } from "../interface/ComponentExamples";

export const Spinners: IComponentExampleConfiguration[] = [
  {
    description: "Square Spinner",
    jsx: <SquareSpinner />,
    title: "Square Spinner",
  },
  {
    description: "Square Spinner",
    jsx: <SquareSpinnerSvg />,
    title: "Square Spinner SVG",
  },
];
