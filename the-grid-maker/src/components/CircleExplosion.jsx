import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Burst({ id, x, y }) {
  const angle = Math.random() * 2 * Math.PI;
  const radius = Math.random() * 100 + 50;
  const dx = Math.cos(angle) * radius;
  const dy = Math.sin(angle) * radius;

  return (
    <motion.div
      key={id}
      initial={{
        x,
        y,
        scale: 0.5,
        opacity: 1,
      }}
      animate={{
        x: x + dx,
        y: y + dy,
        scale: 1,
        opacity: 0,
      }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed w-5 h-5 bg-purple-400 rounded-full pointer-events-none z-[999]" // High z-index for visibility
    />
  );
}

export default function CircleExplosion() {
  const [bursts, setBursts] = useState([]);

  const handleClick = (e) => {
    const newBursts = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i,
      x: e.clientX,
      y: e.clientY,
    }));
    setBursts((prev) => [...prev, ...newBursts]);

    // Remove them after 1s
    setTimeout(() => {
      setBursts((prev) =>
        prev.filter((b) => !newBursts.some((nb) => nb.id === b.id))
      );
    }, 1000);
  };

  return (
    <div
      className="fixed inset-0 z-[999] pointer-events-none" // ⛔ Prevent UI blocking
      onClick={handleClick}
    >
      <AnimatePresence>
        {bursts.map((b) => (
          <Burst key={b.id} {...b} />
        ))}
      </AnimatePresence>
    </div>
  );
}
