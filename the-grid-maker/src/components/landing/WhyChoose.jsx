import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaUserFriends, FaShareAlt, FaRocket } from "react-icons/fa";

const stats = [
  {
    icon: <FaUserFriends size={30} className="text-indigo-500 mb-2" />,
    title: "Active Users",
    end: 12000,
    suffix: "+",
  },
  {
    icon: <FaShareAlt size={30} className="text-indigo-500 mb-2" />,
    title: "Templates Shared",
    end: 3500,
    suffix: "+",
  },
  {
    icon: <FaRocket size={30} className="text-indigo-500 mb-2" />,
    title: "Projects Built",
    end: 22000,
    suffix: "+",
  },
];

export default function CommunityStats() {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#0e0e0f] text-white relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Our Growing Community
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="bg-[#1a1a1c] border border-[#2a2a2d] rounded-lg p-8 shadow-sm hover:shadow-md hover:border-indigo-500 transition-all"
          >
            <div className="flex flex-col items-center">
              {stat.icon}
              <h3 className="text-3xl font-bold text-indigo-400 mb-1">
                <CountUp end={stat.end} duration={2.5} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-400 text-sm">{stat.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
