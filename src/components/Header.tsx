import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-blue-400 p-3 rounded-full">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Bookstore
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/books"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Books
            </Link>
            <Link
              href="/cart"
              className="relative text-gray-700 hover:text-blue-600 transition-colors"
            >
              Cart
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
