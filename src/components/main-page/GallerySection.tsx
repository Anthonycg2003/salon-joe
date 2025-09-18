"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const GallerySection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 bg-white"
    >
      <h2 className="text-4xl font-bold text-center mb-8">Nuestro Espacio</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
        {/* ...remaining gallery images... */}
      </div>
    </motion.section>
  );
};