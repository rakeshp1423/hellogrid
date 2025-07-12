import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFire, FaTags, FaCrown, FaFolderOpen, FaSearch } from "react-icons/fa";

// 🧩 At the top of your component:
const featuredTemplates = [
  {
    id: "feat-1",
    title: "Modern Blog Grid",
    creator: "DevRiya",
    description: "Sleek layout for content writers.",
    tags: ["#modern", "#blog"],
    image: "/template-images/web1.webp",
  },
  {
    id: "feat-2",
    title: "Startup Landing",
    creator: "CodePixel",
    description: "Hero and CTA for SaaS.",
    tags: ["#startup", "#landing"],
    image: "/template-images/web2.webp",
  },
  {
    id: "feat-3",
    title: "Creative Portfolio",
    creator: "ArjunXD",
    description: "Showcase your works.",
    tags: ["#portfolio", "#creative"],
    image: "/template-images/web3.webp",
  },
];



const categories = ["Blog", "Portfolio", "E-commerce", "Resume", "Product", "Dashboard"];
const topCreators = [
  { name: "DevTushar", projects: 12 },
  { name: "UI Ninja", projects: 9 },
  { name: "SanaDesigns", projects: 8 },
];
const trendingTags = ["#modern", "#darkmode", "#animated", "#minimal", "#gridlover"];

export default function Marketplace() {
  const [search, setSearch] = useState("");

  const filteredTemplates = featuredTemplates.filter(
    (tpl) =>
      tpl.title.toLowerCase().includes(search.toLowerCase()) ||
      tpl.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen w-full bg-[#0f0f10] text-white font-sans px-6 md:px-20 pt-0 pb-20 space-y-24">
      {/* 🔥 Hero Section */}
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Explore the Grid Marketplace</h1>
        <p className="text-gray-400 text-lg max-w-2xl mb-6">
          Browse community-created templates, share your own, and supercharge your workflow.
        </p>

        <div className="w-full max-w-md flex gap-2 mt-4 bg-[#1a1a1c] border border-[#2a2a2d] rounded-lg p-2">
          <FaSearch className="text-gray-500 mt-[6px]" />
          <input
            type="text"
            placeholder="Search templates or tags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-white focus:outline-none"
          />
        </div>
        <Link
          to="/upload-template"
          className="mt-8 inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full shadow transition-all duration-300"
        >
          Upload Your Template
        </Link>
      </motion.div>

      {/* 🌟 Featured Templates */}
      <section>
        <div className="flex items-center gap-2 mb-6 text-indigo-400 text-xl font-semibold">
          <FaFire />
          <h2>Featured Templates</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredTemplates.map((tpl, idx) => (
            <motion.div
              key={tpl.id}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1c] p-6 rounded-lg border border-[#2a2a2d] transition-all duration-300 hover:border-indigo-500 hover:shadow-[0_0_15px_#6366f1] group"
            >
              <img
                src={tpl.image}
                alt={tpl.title}
                loading="lazy"
                className="rounded mb-4 w-full h-[180px] object-cover opacity-80 group-hover:opacity-100 transition-all"
              />
              <h3 className="text-lg font-bold text-indigo-400">{tpl.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{tpl.description}</p>
              <p className="text-sm text-teal-400">By {tpl.creator}</p>
              <div className="mt-3 space-x-2">
                {tpl.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-[#232326] px-2 py-1 rounded-full text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to={`/editor/${tpl.id}`}
                className="inline-block mt-4 text-sm text-indigo-400 hover:underline"
              >
                Try this template →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📁 Categories */}
      <section>
        <div className="flex items-center gap-2 mb-6 text-indigo-400 text-xl font-semibold">
          <FaFolderOpen />
          <h2>Categories</h2>
        </div>

        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-[#1c1c1f] py-4 text-center rounded-lg border border-[#2a2a2d] text-sm text-gray-300 cursor-pointer hover:border-indigo-500"
            >
              {cat}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 👑 Top Creators */}
      <section>
        <div className="flex items-center gap-2 mb-6 text-indigo-400 text-xl font-semibold">
          <FaCrown />
          <h2>Top Creators</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topCreators.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1e1e20] border border-[#2a2a2d] p-5 rounded-lg"
            >
              <h4 className="text-lg font-semibold text-indigo-400 mb-1">{c.name}</h4>
              <p className="text-gray-400 text-sm">{c.projects} templates shared</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🏷 Trending Tags */}
      <section>
        <div className="flex items-center gap-2 mb-6 text-indigo-400 text-xl font-semibold">
          <FaTags />
          <h2>Trending Tags</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {trendingTags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-sm border border-indigo-500 text-indigo-300 bg-[#1a1a1c]"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="text-center py-12 border-t border-[#2a2a2d]">
        <h3 className="text-2xl font-bold mb-4">🚀 Ready to contribute?</h3>
        <p className="text-gray-400 mb-6">
          Share your template and help others create faster and better.
        </p>
        <Link
          to="/upload-template"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition"
        >
          Upload Your Template
        </Link>
      </section>
    </div>
  );
}
