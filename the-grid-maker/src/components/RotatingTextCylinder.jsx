// src/components/RotatingTextCylinder.jsx
import { useEffect, useState } from "react";
import "./RotatingTextCylinder.css";

const words = [
  "Minimalist", "Responsive", "DarkMode", "SaaS UI", "Portfolio", "Landing Page",
  "Creative", "3D Design", "Animation", "Glassmorphism", "Retro", "Clean UI"
];

const fonts = [
  "sans-serif", "serif", "monospace", "cursive", "fantasy",
  "'Courier New'", "'Georgia'", "'Trebuchet MS'", "'Comic Sans MS'"
];

const colors = [
  "#ff6b6b", "#6bc5ff", "#ffdd59", "#7bed9f", "#a29bfe",
  "#e84393", "#00cec9", "#fd79a8"
];

export default function RotatingTextCylinder() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.5);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cylinder-container">
      <div
        className="cylinder"
        style={{ transform: `rotateX(${rotation}deg)` }}
      >
        {words.map((word, idx) => (
          <div
            key={idx}
            className="text-layer"
            style={{
              transform: `rotateX(${(360 / words.length) * idx}deg) translateZ(200px)`,
              color: colors[idx % colors.length],
              fontFamily: fonts[idx % fonts.length],
            }}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}
