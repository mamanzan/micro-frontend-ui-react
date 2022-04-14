import { IItem, IItemCheckbox } from "../interface/interface";

export interface IFruit {
  name: string;
  icon: string;
}

export interface IFruitItem extends IItem {
  icon: string;
}
export interface IFruitItemCheckbox extends IItemCheckbox {
  icon: string;
}

export const fruits: IFruit[] = [
  {
    name: "Bananas",
    icon: "🍌",
  },
  {
    name: "Strawberries",
    icon: "🍓",
  },
  {
    name: "Pineapples",
    icon: "🍍",
  },
  {
    name: "Grapes",
    icon: "🍇",
  },
  {
    name: "Watermelons",
    icon: "🍉",
  },
  {
    name: "Cherries",
    icon: "🍒",
  },
  {
    name: "Oranges",
    icon: "🍊",
  },
  {
    name: "Apples",
    icon: "🍎",
  },
];

export const fruitItems: IFruitItem[] = fruits.map(
  (fruit: IFruit, index: number) => {
    return { icon: fruit.icon, value: fruit.name, id: index };
  }
);

export const fruitItemCheckboxes: IFruitItemCheckbox[] = fruits.map(
  (fruit: IFruit, index: number) => {
    return { isChecked: false, icon: fruit.icon, value: fruit.name, id: index };
  }
);
