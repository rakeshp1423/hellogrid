import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullText = "Design, preview, and export stunning grid-based layouts — effortlessly.";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTypedText((prev) => {
        if (i < fullText.length) {
          i++;
          return fullText.slice(0, i);
        } else {
          clearInterval(typing);
          return prev;
        }
      });
    }, 40);

    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#0e0e0f] overflow-hidden">
      {/* 🌈 Mesh Gradient Backgrounds */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        whileInView={{ opacity: 0.2, scale: 1 }} 
        transition={{ duration: 1 }}
        className="absolute -left-32 top-20 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500 via-pink-500 to-purple-500 rounded-full blur-3xl z-0"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        whileInView={{ opacity: 0.2, scale: 1 }} 
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -right-32 bottom-20 w-[400px] h-[400px] bg-gradient-to-tr from-teal-400 via-blue-500 to-purple-600 rounded-full blur-3xl z-0"
      />

      {/* ✨ Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-6 py-20 max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Welcome to {" "}
          <span className="bg-logo-gradient bg-clip-text text-transparent animate-gradient-move-slow bg-[length:200%_200%] font-pacifico">
            hellogrids
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed min-h-[2.5rem]">
          {typedText}
          <span className={`ml-1 ${cursorVisible ? "opacity-100" : "opacity-0"}`}>|</span>
        </p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4"
        >
          <Link
            to="/editor/new"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm font-semibold transition-all duration-300 ease-in-out shadow-md hover:shadow-[0_0_12px_rgba(99,102,241,0.5)] active:scale-95"
          >
            Start New Project
          </Link>
          <Link
            to="/templates"
            className="px-6 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded-full text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-white/10 active:scale-95"
          >
            Browse Templates
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 text-gray-600 text-sm animate-bounce z-10"
      >
        <span>Scroll to explore ↓</span>
      </motion.div>
    </section>
  );
}