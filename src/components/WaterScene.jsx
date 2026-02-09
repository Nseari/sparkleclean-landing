import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';

// 3D water-like sphere background
export default function WaterScene() {
  return (
    <Canvas className="absolute inset-0 z-0">
      <ambientLight intensity={0.5} />
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh>
          <sphereGeometry args={[1.5, 64, 64]} />
          <MeshDistortMaterial color="#3F00FF" distort={0.4} speed={2} />
        </mesh>
      </Float>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
