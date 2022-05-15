import { useEffect, useState } from "react";

export interface ICheckbox {
  isChecked: boolean;
  label: string;
}

export interface ICheckboxProps extends Required<ICheckbox> {
  onChange: (name: string) => void;
}

export const Checkbox = ({ isChecked, label, onChange }: ICheckboxProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange(label)}
      />
    </div>
  );
};

export interface ICheckboxListProps {
  checkboxes: ICheckboxProps[];
}

export const CheckboxList = ({ checkboxes }: ICheckboxListProps) => (
  <div className="checkbox-list">
    {checkboxes.map((checkbox: ICheckboxProps) => (
      <Checkbox {...checkbox} key={checkbox.label} />
    ))}
  </div>
);

export const Test = (): JSX.Element => {
  const onChange = (name: string) => {
    setCheckboxes((prevState: ICheckboxProps[]) => {
      const newState = [...prevState];
      const currentCheckbox = newState.find(
        (value: ICheckboxProps) => value.label === name
      );
      currentCheckbox.isChecked = !currentCheckbox.isChecked;
      return newState;
    });
  };

  const [checkboxes, setCheckboxes] = useState<ICheckboxProps[]>([
    { isChecked: false, label: "A", onChange },
    { isChecked: false, label: "B", onChange },
  ]);

  const [isAllSelected, setIsAllSelected] = useState(false);

  const toggleAll = () => {
    const nextAllState = !isAllSelected;
    setIsAllSelected(nextAllState);
    setCheckboxes((prevState: ICheckboxProps[]) => {
      const newState = [...prevState];
      newState.forEach((value: ICheckboxProps) => {
        value.isChecked = nextAllState;
      });
      return newState;
    });
  };

  useEffect(() => {
    console.log("useEffect[checkboxes]");
    let allChecked = true;
    for (let i = 0; i < checkboxes.length; i++) {
      if (!checkboxes[i].isChecked) {
        allChecked = false;
        break;
      }
    }
    setIsAllSelected(allChecked);
  }, [checkboxes]);

  return (
    <div className="checkbox-list">
      <Checkbox label="All" isChecked={isAllSelected} onChange={toggleAll} />
      <CheckboxList checkboxes={checkboxes} />
    </div>
  );
};
