"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
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
              href="/services/tazas"
              className="w-full md:w-auto bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors transform hover:scale-105 duration-200 text-center"
            >
              Personaliza tu Taza
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
  );
};