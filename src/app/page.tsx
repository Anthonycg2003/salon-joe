"use client";
import React from "react";
import {
  HeroSection,
  GallerySection,
  ServicesSection,
  MissionVisionSection,
  ContactSection
} from "@/components/main-page";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white">
      <HeroSection />
      <div>
        <GallerySection />
        <ServicesSection />
        <MissionVisionSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default HomePage;
