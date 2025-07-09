import { useDrop } from "react-dnd";
import { useState } from "react";

export default function Canvas() {
  const [components, setComponents] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "component",
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      if (offset) {
        setComponents((prev) => [
          ...prev,
          {
            id: Date.now(),
            type: item.type,
            x: offset.x,
            y: offset.y,
          },
        ]);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <main className="flex-1 relative bg-[#1b1b1e] rounded p-4 overflow-hidden">
      <div
        ref={drop}
        className={`w-full h-full rounded-xl border border-dashed ${
          isOver ? "border-indigo-500" : "border-gray-700"
        }`}
      >
        {components.map((c) => (
          <div
            key={c.id}
            style={{
              position: "absolute",
              left: c.x - 200, // Adjust for left sidebar
              top: c.y - 100, // Adjust for navbar
            }}
            className="p-2 bg-white/10 text-white rounded shadow border border-indigo-400 text-sm"
          >
            {c.type.toUpperCase()}
          </div>
        ))}
      </div>
    </main>
  );
}
