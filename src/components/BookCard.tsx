import React from "react";

interface BookCardProps {
  title: string;
  author: string;
  price: number;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, price }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">Author: {author}</p>
      <p className="text-green-600 font-semibold text-lg">
        ${price.toFixed(2)}
      </p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200">
        Add to Cart
      </button>
    </div>
  );
};

export default BookCard;
