import { motion } from "framer-motion";
import { FaCode, FaPalette, FaGlobe, FaUsers } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="bg-[#0e0e0f] text-white min-h-screen pt-20 px-6 md:px-20 pb-32 font-sans">
      {/* Hero Section */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          We are <span className="text-indigo-500">HelloGrids</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Empowering developers and designers to build faster, smarter, and more beautifully—one grid at a time.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {[
          { icon: <FaCode />, label: "Templates", value: "3K+" },
          { icon: <FaUsers />, label: "Users", value: "15K+" },
          { icon: <FaPalette />, label: "Designs Created", value: "20K+" },
          { icon: <FaGlobe />, label: "Countries Reached", value: "55+" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="p-6 border border-[#2a2a2d] bg-[#1a1a1d] rounded-lg hover:border-indigo-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-indigo-400 text-3xl mb-2">{item.icon}</div>
            <h3 className="text-2xl font-semibold">{item.value}</h3>
            <p className="text-sm text-gray-400">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Our Story Section */}
      <motion.div
        className="max-w-5xl mx-auto space-y-12"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="grid md:grid-cols-2 items-center gap-10"
          whileHover={{ scale: 1.01 }}
        >
          <img
            src="/web1.webp"
            alt="Our beginnings"
            className="w-full rounded-lg shadow-lg border border-[#2a2a2d]"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-indigo-400">Our Beginning</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              HelloGrids was born from a simple idea—what if layout creation could be faster, more modular, and accessible to everyone? In a world of templates that look the same, we envisioned a tool where flexibility meets power.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 items-center gap-10"
          whileHover={{ scale: 1.01 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-indigo-400">Why We Exist</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our mission is to empower creators with the tools they need to innovate. Whether you're a startup founder, UI designer, or student, HelloGrids helps you move fast without sacrificing style or structure.
            </p>
          </div>
          <img
            src="/web2.webp"
            alt="Why HelloGrids"
            className="w-full rounded-lg shadow-lg border border-[#2a2a2d]"
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 items-center gap-10"
          whileHover={{ scale: 1.01 }}
        >
          <img
            src="/web3.webp"
            alt="Our future"
            className="w-full rounded-lg shadow-lg border border-[#2a2a2d]"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-indigo-400">What’s Next</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              We’re building more than a grid editor. Future updates include AI-assisted layouts, real-time collaboration, and a marketplace powered by the community. Your creativity drives us forward.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Final CTA */}
      <div className="text-center mt-32">
        <motion.h3
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Build the web with us.
        </motion.h3>
        <Link
          to="/signup"
          className="inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm font-semibold transition-all duration-300"
        >
          Get Started Today
        </Link>
      </div>
    </div>
  );
}
