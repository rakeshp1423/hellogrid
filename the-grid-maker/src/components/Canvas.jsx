import { useDrop } from "react-dnd";
import { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import ContextMenu from "./ContextMenu";

export default function Canvas({ components, setComponents, selectedIds, setSelectedIds }) {
  const [contextMenu, setContextMenu] = useState({ show: false, x: 0, y: 0, targetId: null });
  const [showGrid, setShowGrid] = useState(true);
  const [projectName, setProjectName] = useState("Untitled Project");
  const gridSize = 10;

  // 🧹 Reset cursor on unmount
  useEffect(() => {
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TOOL",
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      if (!offset) return;

      const canvasRect = document.getElementById("canvas-area")?.getBoundingClientRect();
      let x = offset.x - (canvasRect?.left || 0);
      let y = offset.y - (canvasRect?.top || 0);

      x = Math.round(x / gridSize) * gridSize;
      y = Math.round(y / gridSize) * gridSize;

      const newComponent = {
        id: Date.now(),
        type: item.type,
        x,
        y,
        width: 200,
        height: 100,
        content: "Edit me",
        locked: false,
        visible: true,
        styles: {
          fontSize: 16,
          fontFamily: "Arial",
          color: "#000000",
          backgroundColor: "#ffffff",
          padding: 0,
          margin: 0,
          fontWeight: "normal",
          textAlign: "left",
          borderRadius: 4,
        },
      };

      setComponents((prev) => [...prev, newComponent]);
      setSelectedIds([newComponent.id]);
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
          ? { ...el, x: el.x + deltaX, y: el.y + deltaY }
          : el
      )
    );
  };

  const handleContextMenu = (e, id) => {
    e.preventDefault();
    setContextMenu({
      show: true,
      x: e.clientX,
      y: e.clientY,
      targetId: id,
    });
  };

  const handleContextAction = (action) => {
    const id = contextMenu.targetId;
    const targetIndex = components.findIndex((c) => c.id === id);
    if (targetIndex === -1) return;

    switch (action) {
      case "Delete":
        setComponents((prev) => prev.filter((c) => c.id !== id));
        setSelectedIds((prev) => prev.filter((sid) => sid !== id));
        break;
      case "Duplicate":
        const original = components[targetIndex];
        const copy = {
          ...original,
          id: Date.now(),
          x: original.x + 20,
          y: original.y + 20,
        };
        setComponents((prev) => [...prev, copy]);
        break;
      case "Bring to Front":
        const front = [...components];
        const comp = front.splice(targetIndex, 1)[0];
        front.push(comp);
        setComponents(front);
        break;
      case "Send to Back":
        const back = [...components];
        const compBack = back.splice(targetIndex, 1)[0];
        back.unshift(compBack);
        setComponents(back);
        break;
      case "Edit Text":
        const content = prompt("Edit text content:", components[targetIndex].content || "");
        if (content !== null) {
          updateComponent(id, { content });
        }
        break;
      default:
        break;
    }

    setContextMenu({ show: false, x: 0, y: 0, targetId: null });
  };

  return (
    <main className="flex-1 relative bg-[#1b1b1e] rounded p-4 overflow-hidden">
      {/* 🧠 Utility Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#252526] text-white rounded-t-md mb-1">
        {/* 🏷️ Project Name */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Project:</span>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="bg-transparent border-b border-gray-500 text-white px-1 focus:outline-none focus:border-indigo-500 text-sm"
          />
        </div>

        {/* 🧰 Utilities */}
        <div className="flex items-center gap-4">
          {/* 🌗 Toggle Grid */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Grid</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={showGrid}
                onChange={() => setShowGrid((prev) => !prev)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 rounded-full peer peer-checked:bg-indigo-600 transition-all"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></div>
            </label>
          </div>

          {/* 🔍 Optional future features */}
          <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-sm rounded">Zoom</button>
          <button className="px-2 py-1 bg-gray-700 hover:bg-gray-600 text-sm rounded">Undo</button>
          <button className="px-2 py-1 bg-gray-700 hover:bg-gray-600 text-sm rounded">Redo</button>
        </div>
      </div>

      {/* 🧱 Canvas */}
      <div
        id="canvas-area"
        ref={drop}
        onMouseEnter={() => (document.body.style.cursor = "default")}
        onMouseLeave={() => (document.body.style.cursor = "auto")}
        className={`w-full h-full rounded-xl border border-dashed relative ${
          isOver ? "border-indigo-500" : "border-gray-700"
        }`}
      >
        {/* 🟦 Grid Lines */}
        {showGrid && (
          <div className="absolute inset-0 pointer-events-none z-0">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 border-l border-gray-700 opacity-20"
                style={{ left: `${i * gridSize}px` }}
              />
            ))}
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute left-0 right-0 border-t border-gray-700 opacity-20"
                style={{ top: `${i * gridSize}px` }}
              />
            ))}
          </div>
        )}

        {/* 🔳 Components */}
        {components
          .filter((c) => c.visible !== false)
          .map((c) => (
            <Rnd
              key={c.id}
              size={{ width: c.width, height: c.height }}
              position={{ x: c.x, y: c.y }}
              bounds="parent"
              disableDragging={c.locked}
              onDragStop={(_, d) => {
                const newX = Math.round(d.x / gridSize) * gridSize;
                const newY = Math.round(d.y / gridSize) * gridSize;
                const deltaX = newX - c.x;
                const deltaY = newY - c.y;

                if (selectedIds.includes(c.id)) {
                  handleGroupDrag(c.id, deltaX, deltaY);
                } else {
                  updateComponent(c.id, { x: newX, y: newY });
                }
              }}
              onResizeStop={(_, __, ref, ____, pos) => {
                const snappedWidth = Math.round(ref.offsetWidth / gridSize) * gridSize;
                const snappedHeight = Math.round(ref.offsetHeight / gridSize) * gridSize;
                updateComponent(c.id, {
                  width: snappedWidth,
                  height: snappedHeight,
                  ...pos,
                });
              }}
              onClick={(e) => handleSelect(c.id, e)}
              onContextMenu={(e) => handleContextMenu(e, c.id)}
              className={`rounded shadow text-sm flex items-center justify-center overflow-hidden transition border ${
                selectedIds.includes(c.id)
                  ? "border-indigo-400"
                  : "border-gray-500"
              }`}
              style={{
                backgroundColor: c.styles.backgroundColor,
                color: c.styles.color,
                fontSize: c.styles.fontSize,
                fontFamily: c.styles.fontFamily,
                fontWeight: c.styles.fontWeight,
                textAlign: c.styles.textAlign,
                padding: c.styles.padding,
                margin: c.styles.margin,
                borderRadius: c.styles.borderRadius,
              }}
            >
              {c.content || c.type.toUpperCase()}
            </Rnd>
          ))}

        {/* 🖱️ Context Menu */}
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          show={contextMenu.show}
          onClose={() => setContextMenu({ ...contextMenu, show: false })}
          onAction={handleContextAction}
        />
      </div>
    </main>
  );
}
