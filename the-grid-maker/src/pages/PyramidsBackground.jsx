import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

// Pyramid configuration: custom spread layout
const pyramidConfigs = [
  { position: [-6, 3, -8], size: 1.8 },
  { position: [5, 2, -6], size: 1.4 },
  { position: [3, -3, -5], size: 2.2 },
  { position: [-5, -2, -7], size: 1.6 },
];

function GradientPyramid({ position, size }) {
  const ref = useRef();

  useFrame(() => {
    const scrollY = window.scrollY || 0;
    const rotationSpeed = 0.003 + scrollY * 0.00005;
    ref.current.rotation.y += rotationSpeed;
    ref.current.rotation.x += rotationSpeed * 0.5;
  });

  // Gradient color setup (simulate gradient by vertex color blending)
  const color1 = new THREE.Color("#6EE7B7"); // teal
  const color2 = new THREE.Color("#9333EA"); // purple
  const gradientMaterial = new THREE.MeshPhysicalMaterial({
    vertexColors: true,
    transmission: 1,
    roughness: 0.05,
    metalness: 0.25,
    thickness: 1.5,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    reflectivity: 0.8,
    envMapIntensity: 1,
    transparent: true,
    opacity: 0.8,
  });

  // Geometry with per-vertex color gradient
  const geometry = new THREE.ConeGeometry(size, size * 1.2, 4);
  const colors = [];
  for (let i = 0; i < geometry.attributes.position.count; i++) {
    const lerpColor = color1.clone().lerp(color2, i / geometry.attributes.position.count);
    colors.push(lerpColor.r, lerpColor.g, lerpColor.b);
  }
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

  return <mesh ref={ref} geometry={geometry} material={gradientMaterial} position={position} castShadow />;
}

export default function PyramidsBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        shadows
        gl={{ alpha: true }}
      >
        {/* Ambient and directional lighting for realistic reflection */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]} // Top-right light
          intensity={2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* Shadow receiving ground */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial opacity={0.2} />
        </mesh>

        {/* Gradient Glass Pyramids */}
        {pyramidConfigs.map((cfg, idx) => (
          <GradientPyramid key={idx} position={cfg.position} size={cfg.size} />
        ))}
      </Canvas>
    </div>
  );
}
