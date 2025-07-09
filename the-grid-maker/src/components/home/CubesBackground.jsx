import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const cubeConfigs = [
  { position: [-3, 2, -5], size: 0.5 },
  { position: [5.4, 2.5, -6], size: 0.88 },
  { position: [2., -3.9, -4], size: 1.55 },
  { position: [-3.8, -2.9, -3], size: 0.99 },
  { position: [0, 0, -5], size: 1.2 },
];

function GlassGradientCube({ position, size }) {
  const ref = useRef();

  useFrame(() => {
    const scrollY = window.scrollY || 0;
    const rotationSpeed = 0.002 + scrollY * 0.00004;
    ref.current.rotation.x += rotationSpeed;
    ref.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshPhysicalMaterial
        transmission={0.5} // strong glass
        roughness={0.05}
        thickness={1.5}
        clearcoat={9}
        clearcoatRoughness={0.1}
        reflectivity={1}
        metalness={0.2}
        ior={1.3}
        transparent
        opacity={0.4}
        color={new THREE.Color("#c084fc").lerp(new THREE.Color("#ec4899"), 0.5)}
        envMapIntensity={1}
      />
    </mesh>
  );
}

export default function CubesBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1.2} position={[5, 5, 5]} />
        
        {cubeConfigs.map((cube, idx) => (
          <GlassGradientCube key={idx} position={cube.position} size={cube.size} />
        ))}
      </Canvas>
    </div>
  );
}
