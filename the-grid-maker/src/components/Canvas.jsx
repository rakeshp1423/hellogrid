import { useDrop } from "react-dnd";
import { useState } from "react";
import { Rnd } from "react-rnd";

const GRID_SIZE = 20;

export default function Canvas() {
  const [components, setComponents] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TOOL",
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      if (!offset) return;

      const canvasRect = document.getElementById("canvas-area")?.getBoundingClientRect();
      const x = Math.round((offset.x - (canvasRect?.left || 0)) / GRID_SIZE) * GRID_SIZE;
      const y = Math.round((offset.y - (canvasRect?.top || 0)) / GRID_SIZE) * GRID_SIZE;

      setComponents((prev) => [
        ...prev,
        {
          id: Date.now(),
          type: item.type,
          x,
          y,
          width: GRID_SIZE * 10,
          height: GRID_SIZE * 5,
        },
      ]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const updateComponent = (id, newProps) => {
    setComponents((prev) =>
      prev.map((el) => (el.id === id ? { ...el, ...newProps } : el))
    );
  };

  return (
    <main className="flex-1 relative bg-[#1b1b1e] rounded p-4 overflow-hidden">
      <div
        id="canvas-area"
        ref={drop}
        className={`w-full h-full rounded-xl border border-dashed ${
          isOver ? "border-indigo-500" : "border-gray-700"
        }`}
      >
        {components.map((c) => (
          <Rnd
            key={c.id}
            size={{ width: c.width, height: c.height }}
            position={{ x: c.x, y: c.y }}
            bounds="parent"
            dragGrid={[GRID_SIZE, GRID_SIZE]}
            resizeGrid={[GRID_SIZE, GRID_SIZE]}
            onDragStop={(_, d) => updateComponent(c.id, { x: d.x, y: d.y })}
            onResizeStop={(_, __, ref, delta, position) =>
              updateComponent(c.id, {
                width: ref.offsetWidth,
                height: ref.offsetHeight,
                ...position,
              })
            }
            className="bg-white/10 text-white rounded shadow border border-indigo-400 text-sm flex items-center justify-center overflow-hidden"
          >
            {c.type.toUpperCase()}
          </Rnd>
        ))}
      </div>
    </main>
  );
}
