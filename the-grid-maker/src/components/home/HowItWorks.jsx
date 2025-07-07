import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import Tilt from "react-parallax-tilt";
import createAnim from "../../assets/lottie/create.json";
import designAnim from "../../assets/lottie/design.json";
import exportAnim from "../../assets/lottie/export.json";
import previewAnim from "../../assets/lottie/preview.json";
import collaborateAnim from "../../assets/lottie/collaborate.json";
import deployAnim from "../../assets/lottie/deploy.json";

const steps = [
  {
    title: "Create",
    description: "Start with a blank grid or a template.",
    animation: createAnim,
    tooltip: "Step 1: Create your layout idea."
  },
  {
    title: "Design",
    description: "Visually customize with ease.",
    animation: designAnim,
    tooltip: "Step 2: Style and personalize."
  },
  {
    title: "Export",
    description: "Generate clean code instantly.",
    animation: exportAnim,
    tooltip: "Step 3: Export your layout."
  },
  {
    title: "Preview",
    description: "Visualize it before going live.",
    animation: previewAnim,
    tooltip: "Step 4: Real-time preview."
  },
  {
    title: "Collaborate",
    description: "Invite team members to join in.",
    animation: collaborateAnim,
    tooltip: "Step 5: Share & edit together."
  },
  {
    title: "Deploy",
    description: "Push to production in one click.",
    animation: deployAnim,
    tooltip: "Step 6: Launch your site!"
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full min-h-screen bg-[#0e0e0f] flex flex-col items-center justify-center py-24 px-4 overflow-hidden">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        ⚙️ How It Works
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Tilt
              glareEnable={false}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              scale={1.03}
              transitionSpeed={800}
              className="w-full"
            >
              <div className="relative group flex flex-col items-center justify-center bg-[#1e1e20]/60 border border-[#2e2e30] rounded-xl w-full aspect-square backdrop-blur-xl shadow-[0_0_30px_#00000080] hover:shadow-[0_0_60px_#7b2ff7aa] transition-all duration-500 p-6 overflow-hidden hover:scale-[1.03]">
                
                {/* Tooltip */}
                <div className="absolute top-3 right-3 text-[10px] bg-[#232325] text-gray-300 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 text-xs z-10">
                  {step.tooltip}
                </div>

                {/* Step number */}
                <div className="absolute top-3 left-3 bg-indigo-500 text-white text-xs px-2 py-1 rounded-md shadow-sm">
                  Step {index + 1}
                </div>

                {/* Animation */}
                <Lottie
                  loop
                  animationData={step.animation}
                  play
                  className="w-24 h-24 mb-4"
                />
                <h3 className="text-lg font-semibold mb-1 text-center">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 text-center">
                  {step.description}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
