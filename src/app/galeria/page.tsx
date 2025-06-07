"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface Photo {
  id: number;
  url: string;
  title: string;
  category: string;
}

const PHOTOS_PER_PAGE = 9;

const GaleriaPage = () => {
  const [allPhotos, setAllPhotos] = useState<Photo[]>([]);
  const [displayedPhotos, setDisplayedPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView();

  // Cargar todas las fotos al inicio
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("/api/gallery");
        const photos = await response.json();
        setAllPhotos(photos);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  const loadMorePhotos = () => {
    if (loading || !hasMore) return;

    setLoading(true);

    // Simular delay para una mejor experiencia de usuario
    setTimeout(() => {
      const startIndex = (page - 1) * PHOTOS_PER_PAGE;
      const endIndex = page * PHOTOS_PER_PAGE;
      const newPhotos = allPhotos.slice(startIndex, endIndex);

      if (newPhotos.length > 0) {
        setDisplayedPhotos((prev) => [...prev, ...newPhotos]);
        setPage((prev) => prev + 1);

        // Verificar si quedan más fotos para cargar
        if (endIndex >= allPhotos.length) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }

      setLoading(false);
    }, 500); // Medio segundo de delay
  };

  useEffect(() => {
    if (inView && hasMore && allPhotos.length > 0) {
      loadMorePhotos();
    }
  }, [inView, allPhotos]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">YOHA Estilos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={photo.url}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-semibold">YOHA Estilo</h3>
                    <p className="text-pink-200 text-sm">{photo.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div ref={ref} className="flex justify-center mt-8">
          {loading && (
            <div className="w-16 h-16 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
          )}
          {!hasMore && displayedPhotos.length > 0 && (
            <p className="text-gray-500 text-center">
              Has visto todas las fotos disponibles 🎉
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GaleriaPage;
