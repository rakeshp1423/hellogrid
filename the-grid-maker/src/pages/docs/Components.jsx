import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Text, ImageIcon, LayoutGrid, Cpu } from "lucide-react";

export default function ComponentsDoc() {
  const categories = [
    {
      icon: <Text className="w-5 h-5 text-indigo-500" />,
      title: "Text Components",
      description:
        "Includes headings, paragraphs, and stylized text blocks. You can fully customize fonts, alignment, spacing, and colors.",
      examples: ["Heading", "Paragraph", "Callout", "Quote"],
    },
    {
      icon: <ImageIcon className="w-5 h-5 text-indigo-500" />,
      title: "Media Components",
      description:
        "Add images, videos, and SVG assets to enhance your designs. Supports cropping, fitting, and alt text.",
      examples: ["Image", "Video", "Lottie Animation", "Icon"],
    },
    {
      icon: <LayoutGrid className="w-5 h-5 text-indigo-500" />,
      title: "UI Components",
      description:
        "Common layout and UI tools like buttons, cards, modals, inputs, etc. Style them visually or via inspector.",
      examples: ["Button", "Card", "Modal", "Form Input"],
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
      title: "Functional Tools",
      description:
        "Add timers, counters, dynamic values, tabs, carousels, and responsive grids to your project.",
      examples: ["Timer", "Carousel", "Tab Switcher", "Accordion"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-4">Components</h1>
        <p className="text-gray-600 mb-10">
          Explore the types of components you can add to your canvas and how to use them effectively.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-2">
              {cat.icon}
              <h3 className="text-lg font-semibold">{cat.title}</h3>
            </div>
            <p className="text-gray-500 text-sm mb-2">{cat.description}</p>
            <div className="text-xs text-indigo-500">
              Examples: {cat.examples.join(", ")}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-sm text-gray-500">
        <Link
          to="/docs/theming"
          className="text-indigo-600 hover:underline inline-block mt-4"
        >
          Next: Theming & Customization →
        </Link>
      </div>
    </div>
  );
}
