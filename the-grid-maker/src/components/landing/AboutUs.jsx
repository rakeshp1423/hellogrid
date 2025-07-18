import { motion } from "framer-motion";
import { FaCode, FaPalette, FaGlobe, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AboutUs() {
  return (
    <div className="relative overflow-hidden">
      {/* 🫧 Mesh Gradient Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Blob 1 */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-20 rounded-full blur-3xl"
          animate={{ x: [0, 100, -100, 0], y: [0, -80, 80, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
          style={{ top: "10%", left: "-20%" }}
        />
        {/* Blob 2 */}
        <motion.div
          className="absolute w-[400px] h-[400px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 opacity-25 rounded-full blur-3xl"
          animate={{ x: [0, -60, 60, 0], y: [0, 100, -100, 0] }}
          transition={{ repeat: Infinity, duration: 40, ease: "easeInOut" }}
          style={{ top: "50%", left: "60%" }}
        />
        {/* Blob 3 */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-500 opacity-15 rounded-full blur-3xl"
          animate={{ x: [0, 70, -70, 0], y: [0, -90, 90, 0] }}
          transition={{ repeat: Infinity, duration: 35, ease: "easeInOut" }}
          style={{ top: "80%", left: "20%" }}
        />
      </div>

      {/* Main Content */}
      <div className="bg-[#0e0e0f]/90 text-white min-h-screen pt-20 px-6 md:px-20 pb-32 font-sans space-y-32">

        {/* 🚀 Hero Section */}
        <motion.section
          className="min-h-screen flex flex-col items-center justify-center text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Empowering creators with <span className="text-indigo-500">smart grids</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-10">
            Build layouts, faster and better. From developers to designers, HelloGrids helps you move from idea to reality with intuitive drag-and-drop tools and smart layout snapping.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
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
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
        </motion.section>

        {/* 📊 Stats Section */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
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

        {/* 📖 Our Story */}
        <motion.div
          className="max-w-5xl mx-auto space-y-24"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Our Beginning */}
          <motion.div className="grid md:grid-cols-2 items-center gap-10" variants={fadeInUp}>
            <img src="/template-images/web1.webp" alt="Our beginnings" className="w-full rounded-lg shadow-lg border border-[#2a2a2d]" />
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-indigo-400">Our Beginning</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                HelloGrids was born from a simple idea—what if layout creation could be faster, more modular, and accessible to everyone? In a world of templates that look the same, we envisioned a tool where flexibility meets power.
              </p>
            </div>
          </motion.div>

          {/* Why We Exist */}
          <motion.div className="grid md:grid-cols-2 items-center gap-10" variants={fadeInUp}>
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-indigo-400">Why We Exist</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our mission is to empower creators with the tools they need to innovate. Whether you're a startup founder, UI designer, or student, HelloGrids helps you move fast without sacrificing style or structure.
              </p>
            </div>
            <img src="/template-images/web2.webp" alt="Why HelloGrids" className="w-full rounded-lg shadow-lg border border-[#2a2a2d]" />
          </motion.div>

          {/* What’s Next */}
          <motion.div className="grid md:grid-cols-2 items-center gap-10" variants={fadeInUp}>
            <img src="/template-images/web3.webp" alt="Our future" className="w-full rounded-lg shadow-lg border border-[#2a2a2d]" />
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-indigo-400">What’s Next</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                We’re building more than a grid editor. Future updates include AI-assisted layouts, real-time collaboration, and a marketplace powered by the community. Your creativity drives us forward.
              </p>
            </div>
          </motion.div>
        </motion.div>

        

        {/* 🎯 Final CTA */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">Build the web with us.</h3>
          <Link
            to="/signup"
            className="inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm font-semibold transition-all duration-300"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
