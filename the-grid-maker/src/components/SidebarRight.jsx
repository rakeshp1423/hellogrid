import { useEffect, useState } from "react";

export default function SidebarRight({ selectedComponent, updateComponent }) {
  const [data, setData] = useState({
    id: null,
    content: "",
    x: 0,
    y: 0,
    width: 100,
    height: 100,
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
      borderRadius: 0,
    },
  });

  useEffect(() => {
    if (selectedComponent) {
      setData({
        id: selectedComponent.id,
        content: selectedComponent.content || "",
        x: selectedComponent.x,
        y: selectedComponent.y,
        width: selectedComponent.width,
        height: selectedComponent.height,
        locked: selectedComponent.locked,
        visible: selectedComponent.visible !== false,
        styles: { ...data.styles, ...selectedComponent.styles },
      });
    }
  }, [selectedComponent]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    const parsed = type === "number" ? parseInt(value) : type === "checkbox" ? checked : value;
    let updated;

    if (["id", "content", "x", "y", "width", "height", "locked", "visible"].includes(name)) {
      updated = { ...data, [name]: parsed };
    } else {
      updated = { ...data, styles: { ...data.styles, [name]: parsed } };
    }

    setData(updated);
    updateComponent(updated.id, updated);
  };

  if (!selectedComponent) {
    return (
      <aside className="w-72 p-4 bg-[#1e1e1e] text-[#f5f5f5] border-l border-gray-700">
        <p className="text-gray-400">Select a component to edit its properties.</p>
      </aside>
    );
  }

  return (
    <aside className="w-72 p-4 bg-[#1e1e1e] text-[#f5f5f5] h-full overflow-y-auto border-l border-gray-700 space-y-4">
      <h2 className="text-lg font-semibold">Inspector</h2>

      <div>
        <label className="block text-sm text-gray-400">Inner Text</label>
        <input type="text" name="content" value={data.content} onChange={handleChange} className="w-full bg-gray-800 text-white border border-gray-600 rounded px-2 py-1" />
      </div>

      <div className="flex gap-2">
        {["x", "y"].map(pos => (
          <div key={pos}>
            <label className="block text-sm text-gray-400 capitalize">{pos}</label>
            <input type="number" name={pos} value={data[pos]} onChange={handleChange} className="w-full bg-gray-800 text-white border border-gray-600 rounded px-2 py-1" />
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        {["width", "height"].map(dim => (
          <div key={dim}>
            <label className="block text-sm text-gray-400 capitalize">{dim}</label>
            <input type="number" name={dim} value={data[dim]} onChange={handleChange} className="w-full bg-gray-800 text-white border border-gray-600 rounded px-2 py-1" />
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm text-gray-400">Font Size</label>
        <input type="number" name="fontSize" value={data.styles.fontSize} onChange={handleChange} className="w-full bg-gray-800 text-white border border-gray-600 rounded px-2 py-1" />
        <label className="block text-sm text-gray-400 mt-2">Font Family</label>
        <select name="fontFamily" value={data.styles.fontFamily} onChange={handleChange} className="w-full bg-gray-800 text-white border border-gray-600 rounded px-2 py-1">
          <option>Arial</option><option>Georgia</option><option>Courier New</option><option>Poppins</option><option>Roboto</option>
        </select>
        <label className="block text-sm text-gray-400 mt-2">Font Weight</label>
        <select name="fontWeight" value={data.styles.fontWeight} onChange={handleChange} className="w-full bg-gray-800 text-white border border-gray-600 rounded px-2 py-1">
          <option value="normal">Normal</option><option value="bold">Bold</option>
        </select>
        <label className="block text-sm text-gray-400 mt-2">Text Align</label>
        <select name="textAlign" value={data.styles.textAlign} onChange={handleChange} className="w-full bg-gray-800 text-white border border-gray-600 rounded px-2 py-1">
          <option>left</option><option>center</option><option>right</option>
        </select>
      </div>

      <div className="flex gap-2">
        <div>
          <label className="block text-sm text-gray-400">Text Color</label>
          <input type="color" name="color" value={data.styles.color} onChange={handleChange} className="h-8 w-full" />
        </div>
        <div>
          <label className="block text-sm text-gray-400">Background</label>
          <input type="color" name="backgroundColor" value={data.styles.backgroundColor} onChange={handleChange} className="h-8 w-full" />
        </div>
      </div>

      {["padding", "margin", "borderRadius"].map(field => (
        <div key={field}>
          <label className="block text-sm text-gray-400 capitalize">{field}</label>
          <input type="number" name={field} value={data.styles[field]} onChange={handleChange} className="w-full bg-gray-800 text-white border border-gray-600 rounded px-2 py-1" />
        </div>
      ))}

      <div className="flex items-center justify-between pt-2">
        <label className="text-sm text-gray-400">Position Lock</label>
        <input type="checkbox" name="locked" checked={data.locked} onChange={handleChange} />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm text-gray-400">Visible</label>
        <input type="checkbox" name="visible" checked={data.visible} onChange={handleChange} />
      </div>
    </aside>
  );
}
