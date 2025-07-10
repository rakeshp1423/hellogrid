import { motion } from "framer-motion";
import Hero from "../components/landing/Hero";
import AboutSection from "../components/landing/AboutSection";
import Features from "../components/landing/Features";
import DemoShowcase from "../components/landing/DemoShowcase";
import WhyChoose from "../components/landing/WhyChoose";
import CommunityStats from "../components/landing/CommunityStats";
import CTASection from "../components/landing/CTASection";
import VerticalTextSpiral from "../components/VerticalTextSpiral";
import SpiralText from '../components/SpiralText';
export default function Index() {
  return (
    <div className="min-h-screen w-full bg-[#0e0e0f] text-[#f5f5f5] font-sans relative overflow-x-hidden">
      {/* 🔮 Soft mesh gradient blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500 via-pink-500 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse z-0" />
      {/* <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500 via-teal-400 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse z-0" /> */}

      {/* 🚀 Landing Sections */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10"
      >
        <Hero />
        <AboutSection />
        {/* <VerticalTextSpiral />
        <SpiralText /> */}
        <Features />
        <DemoShowcase />
        <WhyChoose />
        <CommunityStats />
        <CTASection />
      </motion.main>
    </div>
  );
}
