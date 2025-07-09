import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

const demos = [
  {
    id: 1,
    title: "Grid Builder",
    description: "Design flexible layouts using drag-and-drop grids and real-time preview.",
    previewUrl: "https://your-editor-preview.vercel.app",
    liveUrl: "https://your-editor-preview.vercel.app",
  },
  {
    id: 2,
    title: "Landing Page Layout",
    description: "Start from a modern layout template to build beautiful landing pages instantly.",
    previewUrl: "https://your-landing-template.vercel.app",
    liveUrl: "https://your-landing-template.vercel.app",
  },
  {
    id: 3,
    title: "Portfolio Grid",
    description: "A clean and responsive layout perfect for personal portfolios and showcases.",
    previewUrl: "https://your-portfolio-grid.vercel.app",
    liveUrl: "https://your-portfolio-grid.vercel.app",
  },
];

const slideInVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
};

export default function DemoShowcase() {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#0e0e0f] text-gray-200 relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-4"
      >
        🎨 Live Demo Showcase
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-gray-400 text-center mb-12 max-w-3xl mx-auto"
      >
        Swipe through interactive demos built using HelloGrids Editor. All responsive and ready to explore.
      </motion.p>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        modules={[Pagination]}
        className="max-w-6xl mx-auto"
      >
        {demos.map((demo, index) => (
          <SwiperSlide key={demo.id}>
            <motion.div
              variants={slideInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="relative bg-[#111112] border border-[#2a2a2d] rounded-lg overflow-hidden shadow-lg group"
            >
              {/* 🧊 Dark Glass Overlay */}
              <div className="absolute inset-0 z-10 bg-black/30 backdrop-blur-sm group-hover:bg-black/10 transition-all duration-300 pointer-events-none rounded-t-lg" />

              <iframe
                src={demo.previewUrl}
                title={demo.title}
                className="w-full h-[300px] rounded-t-lg"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              />

              <div className="p-5 flex flex-col justify-between gap-4 z-20 relative">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{demo.title}</h3>
                  <p className="text-gray-400 text-sm">{demo.description}</p>
                </div>
                <a
                  href={demo.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded transition-all duration-300 text-center"
                >
                  🚀 View Live
                </a>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
