import React from "react";

interface CartItemProps {
  title: string;
  author: string;
  price: number;
  quantity: number;
  onRemove: () => void;
  onUpdateQuantity: (newQuantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  title,
  author,
  price,
  quantity,
  onRemove,
  onUpdateQuantity,
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{author}</p>
        <p className="text-green-600 font-medium">${price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center border rounded">
          <button
            className="px-3 py-1 border-r hover:bg-gray-100"
            onClick={() => onUpdateQuantity(Math.max(0, quantity - 1))}
          >
            -
          </button>
          <span className="px-3 py-1">{quantity}</span>
          <button
            className="px-3 py-1 border-l hover:bg-gray-100"
            onClick={() => onUpdateQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <button onClick={onRemove} className="text-red-500 hover:text-red-700">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
