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

  const handleDirectWhatsApp = () => {
    const telefono = "5353342152";
    const mensaje = encodeURIComponent(
      "Hola, me gustaría reservar un turno en YOHA Style & Beauty Studio"
    );
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Reserva tu Turno</h1>
          <button
            onClick={handleDirectWhatsApp}
            className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center mx-auto gap-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contactar directamente por WhatsApp
          </button>
          <p className="mt-4 text-gray-600">
            O completa el formulario para una reserva más detallada:
          </p>
        </div>
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
