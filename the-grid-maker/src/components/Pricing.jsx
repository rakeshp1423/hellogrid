import { useState } from "react";
import { motion } from "framer-motion";

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Free",
      price: { monthly: "₹0", yearly: "₹0" },
      description: "Get started with essential features.",
      features: [
        "Drag-and-drop builder",
        "Live Preview",
        "Export HTML/CSS"
      ],
      cta: "Start for Free",
      highlight: false,
    },
    {
      name: "Creator",
      price: { monthly: "₹499", yearly: "₹4990" },
      description: "Unlock advanced tools for individual creators.",
      features: [
        "All Free Features",
        "Unlimited Projects",
        "One-click Deployment",
        "Marketplace Access",
        "Asset Uploads"
      ],
      cta: "Upgrade Now",
      highlight: true,
    },
    {
      name: "Team",
      price: { monthly: "₹1499", yearly: "₹14990" },
      description: "Collaborate and build with your team.",
      features: [
        "All Creator Features",
        "Team Collaboration",
        "AI-assisted Layouts",
        "Custom Domain",
        "Team Management"
      ],
      cta: "Start Team Plan",
      highlight: false,
    },
    {
      name: "Enterprise",
      price: { monthly: "Custom", yearly: "Custom" },
      description: "Custom solution for enterprises.",
      features: [
        "All Team Features",
        "Priority Support",
        "API & Integrations",
        "Onboarding Assistance"
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <div className="bg-[#0f0f11] text-white min-h-screen py-16 px-6 md:px-24 font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Flexible Pricing for Everyone</h1>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Start building with HelloGrids for free, and upgrade when you're ready to take it to the next level.
        </p>
        <div className="inline-flex items-center space-x-2 bg-[#1c1c1e] rounded-full px-4 py-2">
          <span className={`cursor-pointer ${billing === "monthly" ? "text-indigo-400" : "text-gray-400"}`} onClick={() => setBilling("monthly")}>Monthly</span>
          <span className="text-gray-500">/</span>
          <span className={`cursor-pointer ${billing === "yearly" ? "text-indigo-400" : "text-gray-400"}`} onClick={() => setBilling("yearly")}>Yearly (2 months free)</span>
        </div>
      </motion.div>

      {/* Pricing Cards */}
      <div className="grid gap-10 md:grid-cols-4">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`border rounded-2xl p-6 flex flex-col justify-between bg-[#18181b] transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl ${plan.highlight ? "border-indigo-500 shadow-xl" : "border-gray-700"}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-4 min-h-[40px]">{plan.description}</p>
              <div className="text-3xl font-bold mb-4">{plan.price[billing]}</div>
              <ul className="text-sm space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-auto px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold">
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="text-center mt-32">
        <h3 className="text-3xl font-bold mb-6">Still unsure? Try HelloGrids Free</h3>
        <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm font-semibold transition-all duration-300">
          Start Free
        </button>
      </div>
    </div>
  );
}
