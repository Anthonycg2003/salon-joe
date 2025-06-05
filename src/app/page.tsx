"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[100vh] md:h-[80vh] bg-[url('/img/salon-bg.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black to-pink-200 flex items-center justify-center">
          <div className="text-center text-white w-full max-w-4xl px-4">
            <h1 className="text-6xl md:text-8xl font-serif mb-2">
              <span className="text-pink-400">Y</span>
              <span className="text-white">OHA</span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-200 tracking-wider">
              Style & Beauty Studio
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
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
      </motion.section>

      {/* Contenedor para el resto de las secciones */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Galería Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 px-4 bg-white"
        >
          <h2 className="text-4xl font-bold text-center mb-8">
            Nuestro Espacio
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Foto Principal - ocupa 2 columnas */}
            <div className="col-span-2 md:col-span-2 relative group overflow-hidden rounded-lg">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/img/salon/main.jpg"
                  alt="YOHA Salon Interior"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Fotos Secundarias */}
            <div className="relative group overflow-hidden rounded-lg">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/img/salon/detail1.jpg"
                  alt="Recepción"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <div className="relative w-full h-[200px]">
                <Image
                  src="/img/salon/detail2.jpg"
                  alt="Área facial"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <div className="relative w-full h-[200px]">
                <Image
                  src="/img/salon/detail3.jpg"
                  alt="Área de facial"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <div className="relative w-full h-[200px]">
                <Image
                  src="/img/salon/detail4.jpg"
                  alt="Área de facial"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </motion.section>

        {/* Servicios Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="servicios"
          className="py-20 px-4"
        >
          <h2 className="text-4xl font-bold text-center mb-8">
            Nuestros Servicios
          </h2>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <p className="text-pink-600 font-medium">
              Todo incluye diagnóstico del cabello y propuesta del diseño. Así
              como un espacio de orientación profesional para el cuidado del
              cabello
            </p>
            <p className="text-gray-600">
              Todos los trabajos llevan hidratación y estilizado según el diseño
            </p>
            <p className="text-gray-600">
              Se propone una amplia gama de productos altamente testados en el
              mercado internacional de la belleza
            </p>
            <p className="text-pink-600 font-medium">
              Todos los servicios son premium con una excelencia altamente
              competitiva
            </p>
            <p className="text-gray-600">
              Se ofrecen servicios de manicuri y pedicura.
            </p>
            <p className="text-gray-600">
              Tratamientos faciales con tecnología de punta y una gama de
              productos altamente testados en calidad. Por una Máster en en
              estética y tratamiento facial
            </p>
          </div>
          <p className="text-center max-w-2xl mx-auto mb-12 text-3xl font-bold">
            Descubre nuestra gama completa de servicios diseñados para realzar
            tu belleza natural
          </p>
          <div className="container mx-auto grid md:grid-cols-3 gap-6 max-w-6xl">
            {/* Corte de Cabello */}
            <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Corte de Cabello</h3>
                <p className="text-gray-600">
                  Cortes de cabello para damas y caballeros
                </p>
              </div>
            </div>
            {/* Color de Cabello */}
            <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Color de Cabello</h3>
                <p className="text-gray-600">
                  Trabajos de mechas y degradados de color en todas las
                  modalidades de acuerdo a lo tradicional y las nuevas
                  tendencias
                </p>
              </div>
            </div>
            {/* hidratacion */}
            <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Hidratación</h3>
                <p className="text-gray-600">
                  Tratamientos de hidratación y reparación capilar
                </p>
              </div>
            </div>
            {/*tintes*/}
            <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Aplicacion de tintes con proteccion Plex
                </h3>
                <p className="text-gray-600">Tintes de alta calidad</p>
              </div>
            </div>
            {/* Otros Servicios */}
            <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Alisado</h3>
                <p className="text-gray-600">
                  Tratamiento de alisado del cabello
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Botox Capilar</h3>
                <p className="text-gray-600">
                  Tratamientos de Botox y keratina
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Rizado</h3>
                <p className="text-gray-600">
                  Tratamiento de rizado del cabello
                </p>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="max-w-4xl mx-auto text-center mt-16 mb-12">
            <p className="text-2xl text-gray-800 italic font-light">
              "Nuestro proyecto de belleza en esencia ofrece al cliente una
              experiencia inolvidable que supere las expectativas"
            </p>
            <div className="w-24 h-1 bg-pink-400 mx-auto mt-8"></div>
          </div>

          {/* Botón de Reserva General */}
          <div className="text-center mt-12">
            <Link
              href="/services/turnos"
              className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Ver todos los servicios y reservar
            </Link>
          </div>
        </motion.section>

        {/* Misión y Visión Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 px-4 bg-white"
        >
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
                  cliente. Este compromiso con la calidad del servicio asegura
                  una experiencia positiva para el cliente en manos de
                  profesionales que superen sus expectativas y exigencias
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌟</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Visión</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser un salón reconocido, distinguido y demandante, en el mundo
                  de la belleza, estando a la vanguardia y siempre en contacto
                  con la tendencia y la actualidad
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-pink-50 to-purple-50 py-16 px-4"
        >
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
        </motion.section>
      </motion.div>
    </div>
  );
};

export default HomePage;
