import { IItem, IItemCheckbox } from "../interface/interface";

export interface IFruit {
  name: string;
  icon: string;
  price: number;
  quantity: number;
}

export interface IFruitItem extends IFruit, IItem {}
export interface IFruitItemCheckbox extends IFruit, IItemCheckbox {}

export const fruits: IFruit[] = [
  {
    name: "Bananas",
    icon: "🍌",
    price: 0.1,
    quantity: 100,
  },
  {
    name: "Strawberries",
    icon: "🍓",
    price: 0.2,
    quantity: 10,
  },
  {
    name: "Pineapples",
    icon: "🍍",
    price: 0.7,
    quantity: 15,
  },
  {
    name: "Grapes",
    icon: "🍇",
    price: 0.05,
    quantity: 90,
  },
  {
    name: "Watermelons",
    icon: "🍉",
    price: 2.0,
    quantity: 8,
  },
  {
    name: "Cherries",
    icon: "🍒",
    price: 0.1,
    quantity: 0.3,
  },
  {
    name: "Oranges",
    icon: "🍊",
    price: 0.1,
    quantity: 40,
  },
  {
    name: "Apples",
    icon: "🍎",
    price: 0.03,
    quantity: 80,
  },
];

export const fruitItems: IFruitItem[] = fruits.map(
  (fruit: IFruit, index: number) => {
    return { ...fruit, value: fruit.name, id: index };
  }
);

export const fruitItemCheckboxes: IFruitItemCheckbox[] = fruits.map(
  (fruit: IFruit, index: number) => {
    return { ...fruit, value: fruit.name, id: index, isChecked: false };
  }
);
