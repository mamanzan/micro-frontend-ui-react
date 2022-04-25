import { IItem } from "../interface/interface";

//TODO: Fix warning about key not being unique
export const randomizeIds = <T extends IItem>(items: T[]): T[] => {
  const result = items.map((item: T) => ({
    ...item,
    id: Math.floor(Math.random() * 1000000000),
  }));

  return [...result];
};
