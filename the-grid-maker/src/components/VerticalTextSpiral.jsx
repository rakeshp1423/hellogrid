import "./VerticalTextSpiral.css";

const lines = [
  "SHAPE YOUR IDEAS",
  "BUILD GRIDS VISUALLY",
  "DRAG & DROP ELEMENTS",
  "NO CODE REQUIRED",
  "RESPONSIVE DESIGN",
  "EXPORT TO CODE",
  "POWERED BY COMMUNITY",
];

export default function VerticalTextSpiral() {
  return (
    <div className="spiral-banner-container">
      {lines.map((line, i) => (
        <div key={i} className="spiral-line" style={{
          transform: `
            rotateX(${i * 12}deg) 
            translateZ(220px)
          `,
        }}>
          <span>{line}</span>
        </div>
      ))}
    </div>
  );
}
