import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Donut3D from "./Donut3D";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-[#0e0e0f] text-white font-sans">
      {/* 🔮 Mesh gradient blobs like Login page */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500 via-pink-500 to-purple-600 opacity-30 blur-3xl animate-pulse z-0" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500 via-teal-400 to-purple-500 opacity-30 blur-3xl animate-pulse z-0" />

      {/* 🌀 Donut 3D Background */}
      <Donut3D />

      {/* 📢 Main Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 py-20 max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Welcome to{" "}
          <span className="bg-logo-gradient bg-clip-text text-transparent animate-gradient-move bg-[length:200%_200%] font-pacifico">
            HelloGrids
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
          Dive into a world where layout design meets simplicity, collaboration, and style.
        </p>

        {/* ✨ CTA Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-[0_0_12px_rgba(99,102,241,0.5)] active:scale-95"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white/10 active:scale-95"
          >
            Sign Up
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
