import React, { useRef, useState, useEffect } from 'react';
import { Planet } from '../data/planets';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Sphere } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

interface PlanetViewerProps {
  selectedPlanet: Planet;
}

interface PlanetMeshProps {
  planet: Planet;
  onHoverChange: (hovered: boolean) => void;
}

const PlanetMesh: React.FC<PlanetMeshProps> = ({ planet, onHoverChange }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(planet.textureUrl);

  const isGasGiant = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'].includes(planet.name);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere
      ref={meshRef}
      args={[2.2, 64, 64]}
      rotation={[0, 0, 0.1]}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHoverChange(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        onHoverChange(false);
        document.body.style.cursor = 'auto';
      }}
    >
      <meshStandardMaterial
        map={texture}
        roughness={isGasGiant ? 0.3 : 0.8}
        metalness={0.1}
      />
    </Sphere>
  );
};

const RingMesh: React.FC<{ planet: Planet }> = ({ planet }) => {
  const ringRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(planet.ringTextureUrl || '/textures/saturn_ring.png');

  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.z -= 0.001;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[-Math.PI / 2 + 0.3, 0, 0.1]}>
      <ringGeometry args={[2.8, 5, 64]} />
      <meshStandardMaterial
        map={texture}
        color={planet.ringColor || '#ffffff'}
        side={THREE.DoubleSide}
        transparent={true}
        opacity={0.8}
      />
    </mesh>
  );
};

const PlanetViewer: React.FC<PlanetViewerProps> = ({ selectedPlanet }) => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsHovering(false);
  }, [selectedPlanet.name]);

  return (
    <div className="flex-1 flex items-center justify-center min-h-[300px] lg:min-h-[400px] relative w-full">
      <AnimatePresence>
        {isHovering && (
          <motion.div
            key={selectedPlanet.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
          >
            <div className="glass-card px-5 py-3 text-center min-w-[200px]">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: selectedPlanet.color }}
                />
                <p
                  className="text-sm font-bold tracking-wide"
                  style={{ color: selectedPlanet.color }}
                >
                  {selectedPlanet.name}
                </p>
              </div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Planet Age</p>
              <p className="text-lg font-bold text-white tabular-nums">
                {selectedPlanet.ageInBillions}{' '}
                <span className="text-sm font-normal text-gray-400">billion years</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full h-full cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 3, 5]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-5, -3, -5]} intensity={0.2} color="#38bdf8" />
          <React.Suspense fallback={null}>
            <group key={selectedPlanet.name}>
              <PlanetMesh planet={selectedPlanet} onHoverChange={setIsHovering} />
              {selectedPlanet.hasRings && <RingMesh planet={selectedPlanet} />}
            </group>
          </React.Suspense>
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={3}
            maxDistance={15}
            autoRotate={false}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default PlanetViewer;
