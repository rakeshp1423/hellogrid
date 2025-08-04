// src/pages/docs/DocsLayout.jsx
import { Outlet, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { to: "getting-started", label: "Getting Started" },
  { to: "canvas-editor", label: "Canvas Editor" },
  { to: "components", label: "Components" },
  { to: "layers", label: "Layers" },
  { to: "exporting", label: "Exporting" },
  { to: "shortcuts", label: "Shortcuts" },
  { to: "faq", label: "FAQ" },
];

export default function DocsLayout() {
  return (
    <div className="min-h-screen flex bg-white text-gray-800">
      <aside className="w-64 bg-gray-100 p-6 border-r border-gray-200 hidden md:block">
        <h2 className="text-xl font-bold mb-6">📚 Docs</h2>
        <nav className="flex flex-col gap-3">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm px-4 py-2 rounded transition-all ${
                  isActive ? "bg-black text-white" : "hover:bg-gray-200"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
}
