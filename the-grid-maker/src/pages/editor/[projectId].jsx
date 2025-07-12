import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Canvas from "../../components/Canvas";
import SidebarLeft from "../../components/SidebarLeft";
import SidebarRight from "../../components/SidebarRight";
import TopBar from "../../components/TopBar";
import BlobsBackground from "../../components/BlobsBackground";
import { motion } from "framer-motion";
import { FiArrowDownCircle, FiZap, FiCode, FiPenTool } from "react-icons/fi";

export default function Editor() {
  const { projectId } = useParams();
  const editorRef = useRef(null);

  // 🔄 Shared state between Canvas and Sidebar
  const [components, setComponents] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  // 🧠 Derive selected component from selectedIds
  const selectedComponent = components.find(comp => comp.id === selectedIds[0]) || null;

  // 🔧 Function to update component properties
  const updateComponent = (id, newProps) => {
    setComponents(prev =>
      prev.map(comp =>
        comp.id === id
          ? {
              ...comp,
              x: newProps.x,
              y: newProps.y,
              width: newProps.width,
              height: newProps.height,
              styles: {
                ...comp.styles,
                fontSize: newProps.fontSize,
                color: newProps.color,
                backgroundColor: newProps.backgroundColor,
                padding: newProps.padding,
                margin: newProps.margin,
              },
            }
          : comp
      )
    );
  };

  const scrollToEditor = () => {
    editorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-[#0e0e0f] text-[#f5f5f5] font-sans overflow-x-hidden">
      {/* 🫧 Mesh Gradient Blobs Background */}
      <BlobsBackground />

      {/* 🎯 Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
        >
          Powerful Editor. Simple Workflow.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl text-gray-400 text-lg mb-8"
        >
          Drag, drop, and design your project with zero hassle. Whether you're a pro dev or just starting, this editor adapts to you.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToEditor}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center gap-2 transition"
        >
          <FiArrowDownCircle className="text-xl" />
          Open Editor
        </motion.button>

        {/* 💡 Dynamic Tips */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl">
          {[
            {
              icon: <FiPenTool />,
              title: "Live Design",
              desc: "Edit components in real-time with instant preview.",
            },
            {
              icon: <FiCode />,
              title: "Code-Ready Output",
              desc: "Export clean, production-friendly code anytime.",
            },
            {
              icon: <FiZap />,
              title: "Speed & Performance",
              desc: "Optimized for fast, lag-free editing.",
            },
          ].map((tip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2 }}
              className="bg-[#1a1a1c] rounded-xl p-6 border border-[#2a2a2d] text-left"
            >
              <div className="text-indigo-400 text-2xl mb-3">{tip.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
              <p className="text-sm text-gray-400">{tip.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🎨 Actual Editor Section */}
      <section ref={editorRef} className="relative z-10">
        <div className="flex flex-col h-screen w-full">
          <TopBar projectId={projectId} />
          <div className="flex flex-1 overflow-hidden">
            <SidebarLeft
              components={components}
              setComponents={setComponents}
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
            />
            <Canvas
              components={components}
              setComponents={setComponents}
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
            />
            <SidebarRight
              selectedComponent={selectedComponent}
              updateComponent={updateComponent}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
