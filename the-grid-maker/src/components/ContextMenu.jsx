import { useEffect, useRef } from "react";

export default function ContextMenu({ x, y, show, onClose, onAction }) {
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!show) return null;

  return (
    <ul
      ref={menuRef}
      style={{ top: y, left: x }}
      className="fixed bg-[#2c2c2c] text-white rounded shadow-lg z-50 py-1 text-sm border border-gray-700 w-40"
    >
      {["Edit Text", "Duplicate", "Delete", "Bring to Front", "Send to Back"].map(
        (label, index) => (
          <li
            key={index}
            onClick={() => onAction(label)}
            className="px-4 py-2 hover:bg-indigo-600 cursor-pointer"
          >
            {label}
          </li>
        )
      )}
    </ul>
  );
}
