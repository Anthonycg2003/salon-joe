"use client";
import React from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-pink-50 to-purple-50 py-16 px-4"
    >
      {/* ...contact content... */}
    </motion.section>
  );
};