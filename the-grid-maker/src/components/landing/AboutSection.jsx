import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px", once: false });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen px-6 md:px-20 py-24 bg-[#0e0e0f] text-white font-sans overflow-hidden relative"
    >
      <AnimatePresence mode="wait">
        {isInView && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="text-indigo-500">HelloGrids</span>
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              HelloGrids is a powerful platform that allows you to design beautiful grid-based layouts without touching a single line of code.
              Our mission is to simplify layout creation for everyone — from hobbyists to full-stack developers.
            </p>

            <div className="grid md:grid-cols-2 gap-10 text-left text-gray-300 text-md leading-7">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-400">🎯 Purpose</h3>
                <p>
                  Whether you're building a landing page, a portfolio, or a client project — HelloGrids makes it fast and efficient.
                  You get full visual control while the system takes care of responsiveness and structure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-teal-400">🧠 Smart Design</h3>
                <p>
                  With intuitive grid snapping, reusable templates, and a live editor, your focus stays on creativity.
                  You don’t waste time with boilerplate code or CSS headaches.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-pink-400">👥 For Everyone</h3>
                <p>
                  Whether you're a developer, designer, or student, HelloGrids adapts to your workflow. Just sign up and start building with ease.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">🌍 Built for Scale</h3>
                <p>
                  Templates created with HelloGrids are optimized for real-world use — from product showcases to professional dashboards.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
