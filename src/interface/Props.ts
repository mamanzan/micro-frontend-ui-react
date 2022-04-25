export interface IBaseProps<T> {
  children?: (item: T) => JSX.Element;
  onSelectItem: (item: T) => void;
  items: T[];
}
export interface IDropdownProps<T> extends IBaseProps<T> {
  name: string;
}

export interface ITextFieldProps<T> extends IBaseProps<T> {
  placeholder: string;
}

export interface IToggleProps<T> extends IBaseProps<T> {}
