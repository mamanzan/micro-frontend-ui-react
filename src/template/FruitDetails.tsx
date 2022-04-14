import { IFruit } from "../models/Fruits";

export const FruitDetails = ({ icon, name, price, quantity }: IFruit) => (
  <div className="fruit">
    <div className="fruit__icon">{icon}</div>
    <div className="fruit__name">{name}</div>
    <div className="fruit__name">{price}</div>
    <div className="fruit__name">{quantity}</div>
  </div>
);
