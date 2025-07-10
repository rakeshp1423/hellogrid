import { useDrop } from "react-dnd";
import { useState } from "react";
import { Rnd } from "react-rnd";

export default function Canvas() {
  const [components, setComponents] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TOOL",
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      if (!offset) return;

      const canvasRect = document.getElementById("canvas-area")?.getBoundingClientRect();
      const x = offset.x - (canvasRect?.left || 0);
      const y = offset.y - (canvasRect?.top || 0);

      setComponents((prev) => [
        ...prev,
        {
          id: Date.now(),
          type: item.type,
          x,
          y,
          width: 200,
          height: 100,
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

  const handleSelect = (id, e) => {
    if (e.shiftKey) {
      setSelectedIds((prev) =>
        prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
      );
    } else {
      setSelectedIds([id]);
    }
  };

  const handleGroupDrag = (id, deltaX, deltaY) => {
    setComponents((prev) =>
      prev.map((el) =>
        selectedIds.includes(el.id)
          ? {
              ...el,
              x: el.x + deltaX,
              y: el.y + deltaY,
            }
          : el
      )
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
            onDragStop={(_, d) => {
              const deltaX = d.x - c.x;
              const deltaY = d.y - c.y;

              if (selectedIds.includes(c.id)) {
                handleGroupDrag(c.id, deltaX, deltaY);
              } else {
                updateComponent(c.id, { x: d.x, y: d.y });
              }
            }}
            onResizeStop={(_, __, ref, ____, pos) =>
              updateComponent(c.id, {
                width: ref.offsetWidth,
                height: ref.offsetHeight,
                ...pos,
              })
            }
            onClick={(e) => handleSelect(c.id, e)}
            className={`bg-white/10 text-white rounded shadow border text-sm flex items-center justify-center overflow-hidden ${
              selectedIds.includes(c.id) ? "border-indigo-400" : "border-gray-500"
            }`}
          >
            {c.type.toUpperCase()}
          </Rnd>
        ))}
      </div>
    </main>
  );
}
