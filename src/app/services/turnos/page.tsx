"use client";
import React, { useState } from "react";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  fecha: string;
  hora: string;
}

const TurnosPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    fecha: "",
    hora: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Formatear el mensaje para WhatsApp
    const mensaje = encodeURIComponent(
      `Hola soy ${formData.nombre} deseo reservar el servicio de ${formData.servicio} el día ${formData.fecha} a la hora ${formData.hora}`
    );

    // Número de teléfono del salón (reemplaza XXXXXXXXXX con el número real)
    const telefono = "5353342152";

    // Crear el enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${telefono}?text=${mensaje}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, "_blank");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                required
              />
            </div>

            <div></div>

            <div>
              <label
                htmlFor="servicio"
                className="block text-sm font-medium text-gray-700"
              >
                Servicio
              </label>
              <select
                id="servicio"
                name="servicio"
                value={formData.servicio}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                required
              >
                <option value="">Selecciona un servicio</option>
                <option value="corte">Corte de cabello</option>
                <option value="peinado">Peinado</option>
                <option value="tinte">Tinte</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="fecha"
                className="block text-sm font-medium text-gray-700"
              >
                Fecha
              </label>
              <input
                id="fecha"
                name="fecha"
                type="date"
                value={formData.fecha}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="hora"
                className="block text-sm font-medium text-gray-700"
              >
                Hora
              </label>
              <input
                id="hora"
                name="hora"
                type="time"
                value={formData.hora}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                required
              />
            </div>

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
