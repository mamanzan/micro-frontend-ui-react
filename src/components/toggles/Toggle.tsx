interface ToggleProps {
  onSelect: (option: string, e: any) => void;
  optionA: string;
  optionB: string;
}

export const Toggle = ({ onSelect, optionA, optionB }: ToggleProps) => {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={(e) => onSelect(optionA, e)}
        data-cy={optionA}
      >
        {optionA}
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={(e) => onSelect(optionB, e)}
        data-cy={optionB}
      >
        {optionB}
      </button>
    </div>
  );
};
