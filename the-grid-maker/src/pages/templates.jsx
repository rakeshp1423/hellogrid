import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart, FaPlus } from "react-icons/fa";

const dummyTemplates = [
  { id: 1, name: "Blog Grid", tag: "Blog" },
  { id: 2, name: "Portfolio Showcase", tag: "Portfolio" },
  { id: 3, name: "Landing Page", tag: "Landing" },
];

export default function Templates() {
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); // simulate loading
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const filteredTemplates = dummyTemplates.filter(
    (tpl) => selectedTag === "All" || tpl.tag === selectedTag
  );

  const featured = [
  { id: 1, title: "Portfolio Grid", description: "A personal branding layout for creatives." },
  { id: 2, title: "Product Showcase", description: "Slick layout for displaying items." },
  { id: 3, title: "Landing Page", description: "Hero-centric design for modern apps." },
];

const community = [
  { id: "comm-1", title: "Blog Grid", creator: "AlexDev" },
  { id: "comm-2", title: "Resume Layout", creator: "SanaUI" },
  { id: "comm-3", title: "Newsletter Design", creator: "GridMaster" },
];

  return (
    
    <div className="min-h-screen w-full bg-[#0e0e0f] text-[#f5f5f5] font-sans p-8">
      

      <h1 className="text-3xl font-semibold tracking-wide mb-4">Templates</h1>
      <p className="text-gray-400 mb-8">
        Browse and use ready-made templates for your projects.
      </p>

      {/* 🌈 Filter buttons */}
      <div className="flex gap-3 mb-6">
        {["All", "Blog", "Portfolio", "Landing"].map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-full border ${
              selectedTag === tag
                ? "bg-indigo-600 text-white"
                : "border-gray-600 text-gray-400 hover:text-white hover:border-white"
            } transition-all duration-300`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* ➕ Create New Template Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center p-8 border border-dashed border-gray-500 rounded-lg bg-[#1e1e20] cursor-pointer hover:border-indigo-500 transition-all"
        >
          <FaPlus size={24} className="text-indigo-400" />
          <span className="ml-3 text-indigo-400 font-medium">Create New</span>
        </motion.div>

        {/* 🌀 Template Cards or Skeletons */}
        {loading
          ? [...Array(3)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse h-40 rounded-lg bg-[#1e1e20] border border-[#232325]"
              />
            ))
          : filteredTemplates.map((tpl) => (
              <motion.div
                key={tpl.id}
                whileHover={{ scale: 1.03 }}
                className="p-5 rounded-lg bg-[#1e1e20] border border-[#232325] relative"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium">{tpl.name}</h3>
                  <button onClick={() => toggleFavorite(tpl.id)}>
                    {favorites.includes(tpl.id) ? (
                      <FaHeart className="text-pink-500" />
                    ) : (
                      <FaRegHeart className="text-gray-500" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mb-3">{tpl.tag} Template</p>
                <button
                  onClick={() => alert(`Using template: ${tpl.name}`)}
                  className="w-full mt-auto px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-all"
                >
                  Use Template
                </button>
              </motion.div>
            ))}
      </div>

       <div>
      <h2 className="text-2xl font-semibold mb-6 text-white">✨ Featured Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map(template => (
          <div
            key={template.id}
            className="bg-[#1e1e20] border border-[#2a2a2d] p-6 rounded-lg hover:shadow-lg hover:border-indigo-500 transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-indigo-400 mb-2">{template.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{template.description}</p>
            <Link
              to={`/editor/${template.id}`}
              className="text-sm text-indigo-500 hover:underline"
            >
              Try this template →
            </Link>
          </div>
        ))}
      </div>
    </div>

      <div>
      <h2 className="text-2xl font-semibold mb-6 text-white">🌍 Community Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {community.map(t => (
          <div
            key={t.id}
            className="bg-[#1a1a1c] border border-[#2a2a2d] rounded-lg p-5 hover:border-teal-400 transition-all duration-300"
          >
            <h3 className="text-indigo-300 font-semibold text-md mb-2">{t.title}</h3>
            <p className="text-sm text-gray-400 mb-4">Shared by <span className="text-teal-400">{t.creator}</span></p>
            <Link
              to={`/editor/${t.id}`}
              className="text-sm text-teal-500 hover:underline"
            >
              Use this template →
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
