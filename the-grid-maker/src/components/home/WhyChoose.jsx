import { motion } from "framer-motion";

export default function WhyChoose() {
  const features = [
    {
      title: "Built for Designers & Developers",
      description:
        "HelloGrids bridges the gap between design and code. Whether you're working solo or in a team, it fits right in your workflow.",
    },
    {
      title: "Fast. Visual. Fun.",
      description:
        "Animate, layout, and export visually — goodbye boilerplate, hello creativity.",
    },
    {
      title: "Responsive by Default",
      description:
        "All templates and exports adapt beautifully across devices. No tweaks needed.",
    },
    {
      title: "Export to Production-Ready Code",
      description:
        "Download clean HTML, CSS, or JSX with zero hassle — pixel-perfect and lightweight.",
    }
  ];

  return (
    <section className="w-full bg-[#0e0e0f] text-white py-24 px-4 flex justify-center items-center">
      <div className="max-w-6xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          💡 Why Choose <span className="text-indigo-400">HelloGrids?</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl p-6 backdrop-blur-lg bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:border-indigo-400"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
