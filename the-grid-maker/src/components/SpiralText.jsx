// SpiralText.jsx
import React from "react";
import "./SpiralText.css";

const SpiralText = () => {
  const text = "SHAPE YOUR VALUES";
  const layers = [];

  for (let i = 0; i < 25; i++) {
    layers.push(
      <div
        key={i}
        className="text-layer"
        style={{
          transform: `rotateX(${i * 7}deg) translateZ(150px)`,
          opacity: 1 - i * 0.035,
        }}
      >
        {text}
      </div>
    );
  }

  return (
    <div className="spiral-wrapper">
      <div className="spiral-text">{layers}</div>

      <div className="spiral-info">
        <h2>Typography</h2>
        <p>
          Typography is the visual arrangement of text. It enhances readability,
          aesthetics, and effectively conveys the message. Good typography enhances
          user experience and supports brand identity.
        </p>
      </div>
    </div>
  );
};

export default SpiralText;
