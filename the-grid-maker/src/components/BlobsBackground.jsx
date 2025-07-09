import { motion } from "framer-motion";

export default function BlobsBackground() {
  return (
    <div className="fixed inset-0 z-[-10] pointer-events-none overflow-hidden">
      {/* Top Left Blob */}
      <motion.div
        className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Bottom Right Blob */}
      <motion.div
        className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-gradient-to-tr from-teal-400 to-blue-500 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />
    </div>
  );
}
