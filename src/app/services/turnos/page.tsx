"use client";
import React, { useState } from "react";

const TurnosPage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    fecha: "",
    hora: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar la reserva
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8">
          Reserva tu Turno
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre completo
              </label>
              <input
                type="text"
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              />
            </div>

            {/* Añade aquí más campos del formulario */}

            <button
              type="submit"
              className="w-full bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors"
            >
              Reservar Turno
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TurnosPage;
