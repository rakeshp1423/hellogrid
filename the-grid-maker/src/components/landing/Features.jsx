import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaRocket, FaPenNib, FaCode, FaCloudUploadAlt } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaRocket size={28} className="text-indigo-400" />,
    title: "Instant Start",
    description:
      "No setup needed. Just sign in and begin designing directly in your browser.",
  },
  {
    id: 2,
    icon: <FaPenNib size={28} className="text-teal-400" />,
    title: "Creative Control",
    description:
      "Craft stunning layouts with pixel-perfect alignment, spacing, and responsiveness.",
  },
  {
    id: 3,
    icon: <FaCode size={28} className="text-pink-400" />,
    title: "Developer Friendly",
    description:
      "Export clean code or integrate with your existing tech stack in seconds.",
  },
  {
    id: 4,
    icon: <FaCloudUploadAlt size={28} className="text-yellow-400" />,
    title: "Share & Deploy",
    description:
      "Share your work with the world or teammates — one click to publish or collaborate.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen px-6 md:px-20 py-24 bg-[#0e0e0f] text-white font-sans overflow-hidden relative"
    >
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
              Powerful Features, <span className="text-indigo-500">Built In</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#1a1a1c] border border-[#2a2a2d] rounded-lg p-6 hover:border-indigo-500 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
