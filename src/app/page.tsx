"use client";
import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white">
      {/* Hero Section */}
      <section className="relative h-[100vh] md:h-[80vh] bg-[url('/img/salon-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-pink-200 flex items-center justify-center">
          <div className="text-center text-white w-full max-w-4xl px-4">
            <div className="mb-6">
              <h1 className="text-6xl md:text-8xl font-serif mb-2">
                <span className="text-pink-400">Y</span>
                <span className="text-white">OHA</span>
              </h1>
              <p className="text-xl md:text-2xl text-pink-200 tracking-wider">
                Style & Beauty Studio
              </p>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Donde la belleza se encuentra con la elegancia
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link
                href="/services/turnos"
                className="w-full md:w-auto bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors transform hover:scale-105 duration-200 text-center"
              >
                Reserva tu turno
              </Link>
              <Link
                href="#servicios"
                className="w-full md:w-auto bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all text-center"
              >
                Nuestros Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Descubre nuestra gama completa de servicios diseñados para realzar tu
          belleza natural
        </p>
        <div className="container mx-auto grid md:grid-cols-2 gap-8 max-w-4xl">
          <Link href="/services/turnos">
            <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img
                  src="/img/salon-services.jpg"
                  alt="Servicios de Belleza"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">
                  Servicios de Belleza
                </h3>
                <p className="text-gray-600 mb-4">
                  Reserva tu turno para cualquiera de nuestros servicios
                  profesionales: cortes, peinados, tintes y más.
                </p>
                <button className="mt-2 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
                  Reservar Turno
                </button>
              </div>
            </div>
          </Link>

          <Link href="/services/tazas">
            <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img
                  src="/img/custom-mugs.jpg"
                  alt="Tazas Personalizadas"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">
                  Tazas Personalizadas
                </h3>
                <p className="text-gray-600 mb-4">
                  Crea tu taza personalizada con diseños únicos. El regalo
                  perfecto para cualquier ocasión.
                </p>
                <button className="mt-2 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
                  Personalizar Taza
                </button>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Misión y Visión Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nuestra Esencia
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Nuestra misión se centra en ofrecer servicios de belleza
                integrales con un enfoque en el bienestar y la salud del
                cliente. Este compromiso con la calidad del servicio asegura una
                experiencia positiva para el cliente en manos de profesionales
                que superen sus expectativas y exigencias
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser un salón reconocido, distinguido y demandante, en el mundo
                de la belleza, estando a la vanguardia y siempre en contacto con
                la tendencia y la actualidad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Contáctanos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-2xl mb-2">📞</p>
              <p className="text-xl">(+53) 53342152</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-2xl mb-2">📍</p>
              <p className="text-xl">Vedado, La Habana</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-2xl mb-2">✉️</p>
              <p className="text-xl">info@yoha.studio</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
