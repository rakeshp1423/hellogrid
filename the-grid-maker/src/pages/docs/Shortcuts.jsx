import React from "react";
import { motion } from "framer-motion";

const shortcuts = [
  { keys: "Ctrl + Z", description: "Undo last action" },
  { keys: "Ctrl + Y", description: "Redo last undone action" },
  { keys: "Delete / Backspace", description: "Delete selected component" },
  { keys: "Arrow Keys", description: "Nudge selected component" },
  { keys: "Shift + Drag", description: "Multi-select or group drag" },
  { keys: "Ctrl + C / Ctrl + V", description: "Copy / Paste components" },
  { keys: "Ctrl + G", description: "Group selected components" },
  { keys: "Ctrl + Shift + G", description: "Ungroup components" },
  { keys: "Ctrl + S", description: "Save current project" },
  { keys: "Esc", description: "Deselect components / Close modals" },
];

const Shortcuts = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
      >
        Keyboard Shortcuts
      </motion.h1>

      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Speed up your workflow with these handy keyboard shortcuts. They help you stay productive while building and customizing your canvas layout.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {shortcuts.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {item.keys}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Shortcuts;
