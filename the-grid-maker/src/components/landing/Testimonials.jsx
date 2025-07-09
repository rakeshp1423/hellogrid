import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ritika Sharma",
    feedback: "HelloGrids changed the way I build client dashboards. Intuitive, fast, and beautiful!",
    avatar: "https://i.pravatar.cc/100?img=65",
  },
  {
    name: "DevTushar",
    feedback: "A must-have for any front-end dev. The template editor is top-notch!",
    avatar: "https://i.pravatar.cc/100?img=20",
  },
  {
    name: "UI Nerd",
    feedback: "Can’t believe I lived without this. My team now saves hours every sprint.",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Sneha UIX",
    feedback: "The live preview and collaboration features are game-changers. Love the minimal UI.",
    avatar: "https://i.pravatar.cc/100?img=49",
  },
  {
    name: "Rohit Pixels",
    feedback: "My productivity doubled after using HelloGrids. Everything just works!",
    avatar: "https://i.pravatar.cc/100?img=36",
  },
  {
    name: "Code Guru",
    feedback: "From mockups to production-ready layouts — faster than ever.",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#101011] text-white relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        ❤️ What People Are Saying
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#1e1e20] p-6 rounded-xl border border-[#2a2a2d] shadow-md hover:shadow-indigo-500/10 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border border-indigo-400"
              />
              <h4 className="text-indigo-400 font-semibold">{t.name}</h4>
            </div>
            <p className="text-gray-300 italic leading-relaxed">“{t.feedback}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
