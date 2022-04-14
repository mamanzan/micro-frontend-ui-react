import { IFruitItem } from "../models/Fruits";

export const Fruit = ({ icon, value }: IFruitItem) => (
  <div className="fruit">
    <div className="fruit__icon">{icon}</div>
    <div className="fruit__name">{value}</div>
  </div>
);
