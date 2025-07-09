// src/components/DraggableComponent.jsx
import { useDrag } from "react-dnd";

export default function DraggableComponent({ type, label }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "component",
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-2 rounded bg-gray-700 text-sm cursor-pointer ${
        isDragging ? "opacity-40" : ""
      }`}
    >
      {label}
    </div>
  );
}
