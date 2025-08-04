import { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle, DollarSign, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqData = [
  {
    category: "General",
    icon: <HelpCircle className="h-5 w-5 text-indigo-400" />,
    questions: [
      {
        question: "What is HelloGrids?",
        answer: "HelloGrids is a powerful web-based design and layout tool that helps you build custom grid-based websites easily."
      },
      {
        question: "Who is HelloGrids for?",
        answer: "HelloGrids is for designers, developers, agencies, and businesses who want to build scalable, responsive websites quickly."
      },
      {
        question: "Is HelloGrids beginner-friendly?",
        answer: "Yes! Our intuitive drag-and-drop interface and beginner guides make it easy to get started, even without coding experience."
      }
    ]
  },
  {
    category: "Pricing",
    icon: <DollarSign className="h-5 w-5 text-indigo-400" />,
    questions: [
      {
        question: "What pricing plans are available?",
        answer: "We offer Free, Pro, and Enterprise plans. Each plan includes different features and support levels."
      },
      {
        question: "Can I try HelloGrids before purchasing?",
        answer: "Yes, we offer a free plan with access to essential features. You can upgrade anytime."
      },
      {
        question: "Do you offer student or non-profit discounts?",
        answer: "Yes! Contact our support team with valid verification, and we’d be happy to help."
      }
    ]
  },
  {
    category: "Support",
    icon: <MessageCircle className="h-5 w-5 text-indigo-400" />,
    questions: [
      {
        question: "How can I contact support?",
        answer: "You can reach us through our Contact page or email us directly at support@hellogrids.com."
      },
      {
        question: "Do you offer live chat support?",
        answer: "Yes! Pro and Enterprise users have access to 24/7 live chat support."
      },
      {
        question: "Where can I find tutorials or documentation?",
        answer: "Our Help Center has comprehensive docs, videos, and community forums to guide you through everything."
      }
    ]
  }
];

const filters = ["All", "General", "Pricing", "Support"];

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  const filteredFaq =
    selectedFilter === "All"
      ? faqData
      : faqData.filter((item) => item.category === selectedFilter);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16 mt-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-8"
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedFilter(tag)}
              className={`px-4 py-2 rounded-full border text-sm transition-all duration-200 ${
                selectedFilter === tag
                  ? "bg-indigo-500 text-white"
                  : "border-gray-700 text-gray-400 hover:bg-gray-800"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="space-y-10">
          {filteredFaq.map((section) => (
            <div key={section.category}>
              <div className="flex items-center gap-2 mb-4">
                {section.icon}
                <h2 className="text-2xl font-semibold text-white">
                  {section.category} Questions
                </h2>
              </div>
              <div className="space-y-4">
                {section.questions.map((q) => (
                  <motion.div
                    key={q.question}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border border-gray-700 rounded-lg p-4 bg-gray-800 hover:bg-gray-700 transition"
                  >
                    <button
                      onClick={() => toggleQuestion(q.question)}
                      className="w-full flex justify-between items-center text-left text-white font-medium"
                    >
                      {q.question}
                      <span>{openQuestion === q.question ? "-" : "+"}</span>
                    </button>
                    {openQuestion === q.question && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 text-gray-300 text-sm"
                      >
                        {q.answer}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-800 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2 text-white">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-4">
            Contact our support team anytime and we’ll be happy to help.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
