import { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import demoAnim from "../../assets/lottie/demo.json"; // placeholder Lottie file

const demoProjects = [
  {
    id: 1,
    title: "E‑commerce Layout",
    description: "A sleek product grid layout ⚙️",
    status: "Published",
    animation: demoAnim,
  },
  {
    id: 2,
    title: "Dashboard UI",
    description: "Analytics dashboard with cards.",
    status: "Draft",
    animation: demoAnim,
  },
  {
    id: 3,
    title: "Portfolio Gallery",
    description: "Visual grid with hover effects.",
    status: "Published",
    animation: demoAnim,
  },
];

export default function RecentProjects({ onNewProject }) {
  const [filter, setFilter] = useState("All");
  const filteredProjects = demoProjects.filter(p =>
    filter === "All" ? true : p.status === filter
  );

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">📂 Recent Projects</h2>
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="bg-[#1e1e20] text-gray-300 border border-[#232325] rounded px-3 py-1 focus:ring-indigo-500 transition"
        >
          {["All", "Published", "Draft"].map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * i, duration: 0.6 }}
            className="bg-[#1e1e20] border border-[#232325] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative group"
          >
            <div className="w-full h-48 bg-black flex items-center justify-center">
              <Lottie
                loop
                animationData={proj.animation}
                play
                style={{ width: 180, height: 180 }}
              />
            </div>
            <div className="absolute top-3 right-3 bg-indigo-600 text-xs text-white px-2 py-1 rounded-full shadow">
              {proj.status}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{proj.description}</p>
              <button className="px-4 py-2 bg-indigo-500 text-white rounded-full text-sm hover:bg-indigo-600 hover:shadow-[0_0_8px_rgba(99,102,241,0.4)] transition">
                View Project →
              </button>
            </div>
          </motion.div>
        ))}

        {filteredProjects.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No projects found under "{filter}". Create a new one to get started!
          </p>
        )}
      </div>

     
    </section>
  );
}
