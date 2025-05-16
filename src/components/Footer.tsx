import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bookstore</h3>
            <p>Tu librería online de confianza</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3">Enlaces</h4>
            <ul>
              <li className="mb-2">
                <a href="/">Inicio</a>
              </li>
              <li className="mb-2">
                <a href="/books">Libros</a>
              </li>
              <li className="mb-2">
                <a href="/cart">Carrito</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3">Contacto</h4>
            <p>Email: info@bookstore.com</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
        </div>
        <div className="text-center mt-8 pt-6 border-t border-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Bookstore. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
