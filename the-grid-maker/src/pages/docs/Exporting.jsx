import { ArrowDownToLine } from "lucide-react";
import { motion } from "framer-motion";

export default function ExportingDocs() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <motion.h1
        className="text-4xl font-bold mb-6 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <ArrowDownToLine className="inline-block mr-2 text-indigo-600" size={32} />
        Exporting Your Design
      </motion.h1>

      <motion.div
        className="space-y-6 text-gray-700 leading-relaxed"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Once you’ve finished designing your layout on the canvas, exporting lets you bring your creation into the real world—whether it’s for web development, presentation, or collaboration.
        </motion.p>

        <motion.h2 className="text-2xl font-semibold mt-6 text-gray-800"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          🔹 Supported Export Formats
        </motion.h2>
        <motion.ul className="list-disc list-inside"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          <li><strong>PNG / JPEG:</strong> For sharing static visuals or screenshots of the canvas.</li>
          <li><strong>PDF:</strong> Suitable for documentation or presentations.</li>
          <li><strong>HTML + CSS:</strong> Developers can export the generated layout structure for faster integration into live websites.</li>
        </motion.ul>

        <motion.h2 className="text-2xl font-semibold mt-6 text-gray-800"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          🔸 How Exporting Works
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Once your design is ready, click the <strong>“Export”</strong> button on the top utility bar. You’ll be prompted to choose your preferred format. The export engine handles layout rendering, converts all visible components into the chosen format, and provides a download immediately.
        </motion.p>

        <motion.h2 className="text-2xl font-semibold mt-6 text-gray-800"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          ⚙️ Customization Options
        </motion.h2>
        <motion.ul className="list-disc list-inside"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          <li>Choose resolution (for image exports)</li>
          <li>Include/exclude grid or background elements</li>
          <li>Minify CSS and HTML for production-ready export</li>
          <li>Preview before download</li>
        </motion.ul>

        <motion.h2 className="text-2xl font-semibold mt-6 text-gray-800"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          🧠 Best Practices
        </motion.h2>
        <motion.ul className="list-disc list-inside"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          <li>Preview your canvas thoroughly before export</li>
          <li>Use high resolution settings for presentations</li>
          <li>Keep a backup by exporting both image and code formats</li>
        </motion.ul>
      </motion.div>
    </div>
  );
}
