import { useState } from "react";
import { useDrag } from "react-dnd";
import {
  FiType,
  FiImage,
  FiGrid,
  FiBox,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const tools = [
  { name: "Text", icon: FiType, type: "text" },
  { name: "Image", icon: FiImage, type: "image" },
  { name: "Grid", icon: FiGrid, type: "grid" },
  { name: "Component", icon: FiBox, type: "component" },
];

function DraggableTool({ tool }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "TOOL",
    item: { type: tool.type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const Icon = tool.icon;

  return (
    <div
      ref={dragRef}
      className={`w-full flex items-center gap-2 px-3 py-2 rounded-md cursor-move transition-all 
        ${isDragging ? "opacity-40" : "hover:bg-white/5 text-gray-300"}`}
    >
      <Icon size={16} />
      <span>{tool.name}</span>
    </div>
  );
}

export default function SidebarLeft() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="w-52 min-w-[200px] bg-[#1a1a1c] border-r border-[#2a2a2d] p-4 text-sm overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-semibold">Tools</h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-400 hover:text-white"
        >
          {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>

      {/* Tool Buttons */}
      {isExpanded && (
        <div className="space-y-3">
          {tools.map((tool) => (
            <DraggableTool key={tool.name} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}
