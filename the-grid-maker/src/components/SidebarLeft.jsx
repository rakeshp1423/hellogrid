import { useState } from "react";
import { useDrag } from "react-dnd";
import {
  FiType,
  FiImage,
  FiGrid,
  FiBox,
  FiChevronDown,
  FiChevronUp,
  FiVideo,
  FiSearch,
  FiChevronRight,
  FiChevronLeft,
  FiRadio,
  FiToggleLeft,
  FiAlignJustify,
  FiSquare,
  FiMinus,
  FiLayout,
  FiEye,
  FiEyeOff,
  FiLock,
  FiUnlock,
} from "react-icons/fi";

const sections = [
  {
    name: "Text Elements",
    items: [
      { name: "Heading 1", icon: FiType, type: "heading1" },
      { name: "Heading 2", icon: FiType, type: "heading2" },
      { name: "Paragraph", icon: FiAlignJustify, type: "paragraph" },
      { name: "Quote", icon: FiMinus, type: "quote" },
    ],
  },
  {
    name: "Media",
    items: [
      { name: "Image", icon: FiImage, type: "image" },
      { name: "Video", icon: FiVideo, type: "video" },
      { name: "Icon", icon: FiSquare, type: "icon" },
    ],
  },
  {
    name: "UI Components",
    items: [
      { name: "Button", icon: FiBox, type: "button" },
      { name: "Input Field", icon: FiBox, type: "input" },
      { name: "Search Bar", icon: FiSearch, type: "searchbar" },
      { name: "Dropdown", icon: FiChevronDown, type: "dropdown" },
      { name: "Checkbox", icon: FiBox, type: "checkbox" },
      { name: "Radio Button", icon: FiRadio, type: "radio" },
      { name: "Toggle Switch", icon: FiToggleLeft, type: "switch" },
      { name: "Card", icon: FiBox, type: "card" },
      { name: "Grid", icon: FiGrid, type: "grid" },
    ],
  },
  {
    name: "Functional Tools",
    items: [
      { name: "Spacer", icon: FiMinus, type: "spacer" },
      { name: "Divider", icon: FiMinus, type: "divider" },
      { name: "Container", icon: FiLayout, type: "container" },
      { name: "Section", icon: FiLayout, type: "section" },
    ],
  },
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

export default function SidebarLeft({
  components = [],
  setComponents,
  selectedIds = [],
  setSelectedIds,
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedSection, setExpandedSection] = useState("Text Elements");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleVisibility = (id) => {
    setComponents((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, hidden: !el.hidden } : el
      )
    );
  };

  const toggleLock = (id) => {
    setComponents((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, locked: !el.locked } : el
      )
    );
  };

  const filteredSections = sections.map((section) => ({
    ...section,
    items: section.items.filter((tool) =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter(section => section.items.length > 0);

  return (
    <div className="w-60 min-w-[240px] bg-[#1a1a1c] border-r border-[#2a2a2d] p-4 text-sm overflow-y-auto">
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

      {/* Search */}
      <div className="relative mb-4">
        <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search tools..."
          className="w-full bg-[#2a2a2d] text-gray-200 rounded-md pl-9 pr-3 py-2 text-sm outline-none"
        />
      </div>

      {/* Tool Sections */}
      {isExpanded && (
        <div className="space-y-4">
          {filteredSections.map((section) => (
            <div key={section.name}>
              <div
                onClick={() =>
                  setExpandedSection((prev) =>
                    prev === section.name ? null : section.name
                  )
                }
                className="flex justify-between items-center px-2 py-1 cursor-pointer hover:bg-white/5 text-gray-300 rounded"
              >
                <h3 className="font-medium">{section.name}</h3>
                {expandedSection === section.name ? (
                  <FiChevronUp size={14} />
                ) : (
                  <FiChevronDown size={14} />
                )}
              </div>

              {expandedSection === section.name && (
                <div className="mt-2 pl-2 space-y-2">
                  {section.items.map((tool) => (
                    <DraggableTool key={tool.name} tool={tool} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Divider */}
      <hr className="my-4 border-gray-600" />

      {/* Layers Panel */}
      <div>
        <h3 className="text-white font-semibold mb-2">Layers</h3>
        {Array.isArray(components) && components.length > 0 ? (
          components.map((comp) => (
            <div
              key={comp.id}
              onClick={() => setSelectedIds([comp.id])}
              className={`flex justify-between items-center px-3 py-2 rounded cursor-pointer ${
                selectedIds.includes(comp.id)
                  ? "bg-indigo-600 text-white"
                  : "bg-white/5 hover:bg-white/10 text-gray-300"
              }`}
            >
              <span className="truncate">{comp.type.toUpperCase()}</span>
              <div className="flex gap-2 items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleVisibility(comp.id);
                  }}
                >
                  {comp.hidden ? <FiEyeOff size={14} /> : <FiEye size={14} />}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLock(comp.id);
                  }}
                >
                  {comp.locked ? <FiLock size={14} /> : <FiUnlock size={14} />}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No layers yet.</p>
        )}
      </div>
    </div>
  );
}
