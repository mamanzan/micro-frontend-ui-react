export interface IItem {
  id?: number | string;
  value: number | string;
}

export interface IItemCheckbox extends IItem {
  isChecked: boolean;
}

export interface IItemCheckboxCustom
  extends IItemCheckbox,
    Record<string, any> {}
