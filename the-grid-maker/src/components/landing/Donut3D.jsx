import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function Donut() {
  const meshRef = useRef();

  return (
    <mesh ref={meshRef} rotation={[0.6, 0.2, 0]}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial
        color="#a855f7"
        metalness={0.6}
        roughness={0.2}
        emissive="#9333ea"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export default function Donut3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <Donut />
        <OrbitControls autoRotate enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
