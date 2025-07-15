import { motion } from "framer-motion";
import { FaCode, FaPalette, FaGlobe, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="bg-[#0e0e0f] text-white min-h-screen pt-20 px-6 md:px-20 pb-32 font-sans">
      {/* Hero Section */}
      {/* 🚀 Hero Section - Fullscreen Interactive */}
<motion.section
  className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-20"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <motion.h1
    className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.6 }}
  >
    Empowering creators with <span className="text-indigo-500">smart grids</span>
  </motion.h1>

  <motion.p
    className="text-lg text-gray-400 max-w-2xl mb-10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.6 }}
  >
    Build layouts, faster and better. From developers to designers, HelloGrids helps you move from idea to reality with intuitive drag-and-drop tools and smart layout snapping.
  </motion.p>

  <motion.div
    className="flex flex-wrap justify-center gap-6 mb-12"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.7, duration: 0.4 }}
  >
    <div className="bg-[#1a1a1c] p-4 rounded-lg shadow border border-gray-700 hover:border-indigo-500 transition duration-300">
      <h3 className="text-white font-semibold text-lg mb-1">No-Code Grid Editor</h3>
      <p className="text-sm text-gray-400">Design beautiful layouts with zero code.</p>
    </div>
    <div className="bg-[#1a1a1c] p-4 rounded-lg shadow border border-gray-700 hover:border-indigo-500 transition duration-300">
      <h3 className="text-white font-semibold text-lg mb-1">Live Preview</h3>
      <p className="text-sm text-gray-400">See your layout in real-time while editing.</p>
    </div>
    <div className="bg-[#1a1a1c] p-4 rounded-lg shadow border border-gray-700 hover:border-indigo-500 transition duration-300">
      <h3 className="text-white font-semibold text-lg mb-1">One-Click Deploy</h3>
      <p className="text-sm text-gray-400">Instantly publish your grid-based projects.</p>
    </div>
  </motion.div>

  <motion.div
    className="flex flex-col sm:flex-row gap-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.9 }}
  >
    <Link
      to="/signup"
      className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-semibold transition-all duration-300"
    >
      Get Started
    </Link>
    <Link
      to="/marketplace"
      className="px-6 py-3 border border-gray-600 text-gray-300 hover:text-white hover:border-white rounded-full text-sm font-medium transition-all duration-300"
    >
      Browse Templates
    </Link>
  </motion.div>
</motion.section>

      {/* Stats Section */}
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {/* {[
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
        ))} */}
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
            src="/template-images/web1.webp"
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
            src="/template-images/web2.webp"
            alt="Why HelloGrids"
            className="w-full rounded-lg shadow-lg border border-[#2a2a2d]"
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 items-center gap-10"
          whileHover={{ scale: 1.01 }}
        >
          <img
            src="/template-images/web3.webp"
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

      
      
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {/* {[
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
        ))} */}
      </motion.div>

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


      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {/* {[
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
        ))} */}
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
