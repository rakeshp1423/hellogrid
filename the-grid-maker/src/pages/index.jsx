import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0e0e0f] text-[#f5f5f5] font-sans">
      <section className="relative w-full min-h-screen flex items-center justify-center bg-[#0e0e0f] overflow-hidden">
        {/* 🔮 Soft mesh blobs - one left, one right */}
        <div className="absolute -left-32 top-20 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500 via-pink-500 to-purple-500 rounded-full opacity-30 blur-3xl animate-pulse z-0" />
        <div className="absolute -right-32 bottom-20 w-[400px] h-[400px] bg-gradient-to-tr from-teal-400 via-blue-500 to-purple-600 rounded-full opacity-30 blur-3xl animate-pulse z-0" />

        {/* 📣 Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 py-20 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
            Welcome to{" "}
            <span className="bg-logo-gradient bg-clip-text text-transparent animate-gradient-move bg-[length:200%_200%] font-pacifico">
              hellogrids
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed"
          >
            We need to know about you. Join us to dive into a world where design meets simplicity and speed.
          </motion.p>

          {/* ✨ CTA Buttons */}
          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm font-semibold transition-all duration-300 ease-in-out shadow-md hover:shadow-[0_0_12px_rgba(99,102,241,0.5)] active:scale-95"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-6 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded-full text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-white/10 active:scale-95"
            >
              Sign Up
            </Link>
          </div>
        </motion.div>

        
      </section>
    </div> // ✅ this was missing
  );
}
