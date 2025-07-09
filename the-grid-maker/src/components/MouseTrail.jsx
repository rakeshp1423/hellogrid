import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseTrail() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-purple-500 rounded-full pointer-events-none mix-blend-difference z-[999]" // Optional: reduce to z-[100]
      animate={{ x: pos.x - 16, y: pos.y - 16 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
}
