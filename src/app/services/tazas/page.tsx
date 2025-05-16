"use client";
import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, useTexture } from "@react-three/drei";

interface Textura {
  id: number;
  name: string;
  url: string;
}

interface TazaConAsaProps {
  imageUrl: string;
  nombre: string;
  numero: string;
}

const texturas: Textura[] = [
  { id: 1, name: "Textura 1", url: "/img/barsa.jpg" },
  { id: 2, name: "Textura 2", url: "/img/madrid.png" },
];

const TazaConAsa: React.FC<TazaConAsaProps> = ({
  imageUrl,
  nombre,
  numero,
}) => {
  const tazaRef = useRef(null);
  const texture = useTexture(imageUrl);
  const textColor = imageUrl.includes("madrid") ? "black" : "yellow";

  return (
    <group
      ref={tazaRef}
      position={[0, 1, 0]}
      scale={0.6}
      rotation={[0, -Math.PI / 2, 0]}
    >
      <mesh>
        <cylinderGeometry args={[1, 1, 2, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      <Text
        position={[1, 0.5, -0.1]}
        fontSize={0.3}
        color={textColor}
        anchorX="center"
        anchorY="middle"
        rotation={[0, Math.PI / 2, 0]}
        font="/fonts/VarsityTeam.otf"
      >
        {nombre}
      </Text>

      <Text
        position={[1, -0.3, -0.1]}
        fontSize={1.2}
        color={textColor}
        anchorX="center"
        anchorY="middle"
        rotation={[0, Math.PI / 2, 0]}
        font="/fonts/Varsity.ttf"
      >
        {numero}
      </Text>

      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[1, 1, 0.01, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>

      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[1, 1, 0.01, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>

      <mesh position={[0, 0, 1]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.5, 0.1, 16, 100, Math.PI * 1.5]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
};

const HomePage: React.FC = () => {
  const [img, setImage] = useState<string>(texturas[0].url);
  const [nombre, setNombre] = useState<string>("Nombre");
  const [numero, setNumero] = useState<string>("10");

  return (
    <div className="h-fit bg-gradient-to-t from-white to-blue-500 p-4">
      <main className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Personaliza tu Taza</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Selecciona una textura:
              </label>
              <div className="grid grid-cols-2 gap-4">
                {texturas.map((textura) => (
                  <button
                    type="button"
                    key={textura.id}
                    onClick={() => setImage(textura.url)}
                    className={`p-2 rounded-lg border-2 ${
                      img === textura.url
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 hover:border-blue-300"
                    }`}
                  >
                    <img
                      src={textura.url}
                      alt={textura.name}
                      className="w-full h-24 object-cover rounded"
                    />
                    <p className="mt-2 text-sm text-center">{textura.name}</p>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2">O sube tu propia textura:</p>
              <input
                type="file"
                accept="image/*"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre:
              </label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Ingresa el nombre"
              />
            </div>
            <div>
              <label
                htmlFor="numero"
                className="block text-sm font-medium text-gray-700"
              >
                Número:
              </label>
              <input
                type="text"
                id="numero"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Ingresa el número"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[600px]">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={2} />
            <pointLight position={[10, 10, 10]} />
            <TazaConAsa imageUrl={img} nombre={nombre} numero={numero} />
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.5}
              rotateSpeed={0.5}
            />
          </Canvas>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
