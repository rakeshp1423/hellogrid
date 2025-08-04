import { motion } from "framer-motion";
import { Check, LayoutGrid, Ruler, Layers, PencilRuler } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <LayoutGrid className="w-6 h-6 text-primary" />,
    title: "Visual Drag & Drop Editor",
    description:
      "Design your layout visually using an intuitive drag-and-drop interface. Just pick components and place them wherever you want.",
  },
  {
    icon: <Ruler className="w-6 h-6 text-primary" />,
    title: "Snap-to-Grid Precision",
    description:
      "Maintain pixel-perfect alignment using a responsive grid system. Components automatically snap to grid lines for consistency.",
  },
  {
    icon: <Layers className="w-6 h-6 text-primary" />,
    title: "Layer-Based Editing",
    description:
      "Organize, lock, and toggle visibility of components through a dedicated layers panel for advanced layout control.",
  },
  {
    icon: <PencilRuler className="w-6 h-6 text-primary" />,
    title: "Live Inspector Panel",
    description:
      "Edit styles, text, colors, spacing, borders, and more using a real-time inspector. All changes reflect instantly.",
  },
  {
    icon: <Check className="w-6 h-6 text-primary" />,
    title: "Undo & Redo Support",
    description:
      "Make design changes confidently with full undo and redo functionality built into the editor.",
  },
];

export default function CanvasEditorDocs() {
  return (
    <section className="min-h-screen px-4 py-16 md:px-20 bg-white text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Canvas Editor Overview
        </h1>
        <p className="text-lg text-center text-gray-600 mb-10">
          Our visual canvas editor empowers creators to build responsive designs
          interactively — no coding required. Here's what makes it powerful:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-2">
                {feature.icon}
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/docs/features"
            className="inline-block bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-primary/90 transition"
          >
            Explore Full Feature Set →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
