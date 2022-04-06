import { useState, useRef } from "react";

interface InputClearProps {
  placeholder: string;
}

export const TextField = ({ placeholder }: InputClearProps) => {
  const inputRef = useRef(null);
  const [state, setState] = useState({ inputText: "", showClear: false });

  const updateValue = (event: Event) => {
    const value = (event.target as any).value.toLowerCase();
    setState({ inputText: value, showClear: value.length > 0 });
  };

  const clear = () => {
    setState({ inputText: "", showClear: false });
    inputRef.current.focus();
  };

  const ic = "input-clear";
  return (
    <div className={ic}>
      <div className="input-group">
        <input
          type="text"
          className={`${ic}__input form-control`}
          ref={inputRef}
          placeholder={placeholder}
          value={state.inputText}
          onChange={updateValue.bind(this)}
        />
      </div>
      {state.showClear ? (
        <button
          className={`${ic}__clear btn btn-sm btn-secondary`}
          onClick={clear}
        >
          <i className={`intelicon-close-max`} />
        </button>
      ) : null}
    </div>
  );
};
