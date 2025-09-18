"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const ServicesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="servicios"
      className="py-20 px-4"
    >
      {/* ...services content... */}
    </motion.section>
  );
};