export interface IDropdownProps<T> {
  children?: (item: T) => JSX.Element;
  onSelectItem: (item: T) => void;
  items: T[];
  name: string;
}

export interface ITextFieldProps<T> {
  children?: (item: T) => JSX.Element;
  onSelectItem: (item: T) => void;
  items: T[];
  placeholder: string;
}

export interface IToggleProps<T> {
  children?: (item: T) => JSX.Element;
  onSelect: (option: T) => void;
  options: T[];
}
