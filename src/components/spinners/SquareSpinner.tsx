export interface SquareSpinnerProps {
  message?: string;
  dataCy?: string;
}

export const SquareSpinner = ({
  message = "One moment...",
  dataCy = "spinner",
}: SquareSpinnerProps): JSX.Element => {
  return (
    <div className="square-spinner" data-cy={dataCy}>
      <div className="square-spinner__square">
        <div className="square-spinner__square-top"></div>
        <div className="square-spinner__square-right"></div>
        <div className="square-spinner__square-bottom"></div>
        <div className="square-spinner__square-left"></div>
      </div>
      <p className="square-spinner__message" data-cy="message">
        {message}
      </p>
    </div>
  );
};
