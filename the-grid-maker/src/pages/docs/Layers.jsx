// src/pages/docs/layers.jsx

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function LayersDoc() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-indigo-400"
      >
        Layers Panel
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-300 mb-8"
      >
        The Layers Panel offers full control over the structure of your canvas layout. It allows you to manage the stacking order of components, visibility, lock status, and grouping — similar to what you’d expect in tools like Figma or Photoshop.
      </motion.p>

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#1c1c1e] p-6 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-3 text-indigo-300">Features of Layers Panel</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>Hierarchy View:</strong> View all components in a stack with nesting support.</li>
            <li><strong>Reordering:</strong> Drag to reorder components and adjust their z-index visually.</li>
            <li><strong>Visibility Toggle:</strong> Show or hide specific components during design.</li>
            <li><strong>Locking:</strong> Lock layers to prevent accidental movement or modification.</li>
            <li><strong>Selection:</strong> Select any component from the layers panel directly.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#1c1c1e] p-6 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-3 text-indigo-300">When to Use the Layers Panel</h2>
          <p className="text-gray-300">
            Use the layers panel when working on complex layouts or overlapping components. It simplifies managing structure, especially when the canvas gets crowded or when certain elements are hard to click directly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#1c1c1e] p-6 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-3 text-indigo-300">Pro Tips</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Group related components together for easier toggling and organization.</li>
            <li>Use meaningful names for components to stay organized in the panel.</li>
            <li>Combine layers with the Inspector Panel to adjust properties instantly.</li>
          </ul>
        </motion.div>
      </div>

      <div className="mt-12 flex items-center justify-between">
        <Link
          to="/docs/exporting"
          className="inline-flex items-center text-indigo-400 hover:underline text-base"
        >
          ← Exporting
        </Link>
        <Link
          to="/docs/inspector"
          className="inline-flex items-center text-indigo-400 hover:underline text-base"
        >
          Inspector Panel <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </section>
  );
}
