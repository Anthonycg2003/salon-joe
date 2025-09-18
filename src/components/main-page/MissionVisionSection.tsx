"use client";
import React from "react";
import { motion } from "framer-motion";

export const MissionVisionSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 bg-white"
    >
      {/* ...mission vision content... */}
    </motion.section>
  );
};