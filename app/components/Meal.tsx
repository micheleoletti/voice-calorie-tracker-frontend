export const Meal: React.FC = () => {
  return <div></div>;
};

import { Product } from "../models";

export const ProductRow: React.FC<{ product: Product }> = ({ product }) => {
  return <div className="flex">{product.quantity}</div>;
};
