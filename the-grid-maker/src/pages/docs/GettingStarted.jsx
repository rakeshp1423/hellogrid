import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRightCircle } from "lucide-react"

export default function GettingStarted() {
  return (
    <section className="min-h-screen bg-white text-gray-800 px-6 py-12 md:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Getting Started with HelloGrids
        </motion.h1>

        <p className="text-lg text-gray-600 text-center mb-10">
          HelloGrids empowers designers and developers to build responsive web layouts visually. Whether you're a beginner or a pro, here’s how to start using the platform efficiently.
        </p>

        {/* Section: What is HelloGrids */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">🚀 What is HelloGrids?</h2>
          <p className="text-gray-700 leading-relaxed">
            HelloGrids is a visual drag-and-drop editor that lets you create responsive web pages without touching code. It’s built for designers, marketers, and startups looking to quickly prototype and publish modern websites.
          </p>
        </div>

        {/* Section: Who Can Use It */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">👥 Who Can Use HelloGrids?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Designers building UI mockups</li>
            <li>Startups launching MVPs and landing pages</li>
            <li>Students & educators creating portfolios</li>
            <li>Agencies designing fast web experiences</li>
          </ul>
        </div>

        {/* Section: Key Features */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">✨ Key Features</h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
            <li>🎨 Drag & drop layout editor</li>
            <li>📦 Pre-built UI components</li>
            <li>📐 Grid & snap-to-grid system</li>
            <li>💾 Save/export your projects</li>
            <li>👀 Live preview mode</li>
            <li>🌐 SEO-friendly structure</li>
          </ul>
        </div>

        {/* Section: How to Start */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">🧭 How to Start</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Create an account or sign in</li>
            <li>Choose a template or start from scratch</li>
            <li>Drag components onto the canvas</li>
            <li>Edit content using the inspector panel</li>
            <li>Preview, save, and publish your design</li>
          </ol>
        </div>

        {/* Section: Explore More */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-medium mb-2">Want to learn more?</h3>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link
              to="/faq"
              className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
            >
              FAQ <ArrowRightCircle className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/pricing"
              className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
            >
              Pricing <ArrowRightCircle className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/documentation"
              className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
            >
              Documentation <ArrowRightCircle className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
