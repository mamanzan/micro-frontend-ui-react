export interface SquareSpinnerSvgProps {
  size?: number;
}

export const SquareSpinnerSvg = (): JSX.Element => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className="square-spinner-svg"
  >
    <rect className="square-spinner-svg__background" />
    <rect className="square-spinner-svg__stroke" />
  </svg>
);
