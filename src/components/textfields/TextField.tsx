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

  const tf = "text-field";
  return (
    <div className={tf}>
      <input
        type="text"
        className={`${tf}__input`}
        ref={inputRef}
        placeholder={placeholder}
        value={state.inputText}
        onChange={updateValue.bind(this)}
      />

      {state.showClear && (
        <button className={`${tf}__clear`} onClick={clear}>
          <span className="oi" data-glyph="x"></span>
        </button>
      )}
    </div>
  );
};
