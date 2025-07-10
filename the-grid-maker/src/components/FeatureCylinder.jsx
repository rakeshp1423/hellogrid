// src/components/FeatureCylinder.jsx
import './FeatureCylinder.css';

const features = [
  "Modern UI", "Custom Grids", "Live Preview", "Community Templates",
  "Animation Ready", "Drag & Drop", "Dark Mode", "Export as Code",
  "Real-time Design", "Flexible Layout", "Responsive Design", "Easy Onboarding"
];

export default function FeatureCylinder() {
  return (
    <div className="cylinder-container">
      <div className="cylinder">
        {features.map((text, index) => (
          <div
            key={index}
            className="cylinder-item"
            style={{
              transform: `rotateY(${index * (360 / features.length)}deg) translateZ(300px)`
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
