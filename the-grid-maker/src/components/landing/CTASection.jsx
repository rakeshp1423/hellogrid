import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function CTASection() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative py-24 px-6 md:px-20 bg-[#0e0e0f] text-white z-10 overflow-hidden">
      {/* CTA */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 leading-snug">
          Ready to <span className="text-indigo-400">design smarter</span>?
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          Join HelloGrids today and create stunning grid-based layouts in seconds. Focus on your creativity — we’ll handle the layout magic.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/signup"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm font-semibold transition-all duration-300 ease-in-out shadow hover:shadow-indigo-700 active:scale-95"
          >
            Get Started
          </Link>
          <Link
            to="/templates"
            className="px-6 py-3 border border-gray-500 hover:border-white text-gray-300 hover:text-white rounded-full text-sm font-medium transition-all duration-300 ease-in-out"
          >
            Explore Templates
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full mt-20 border-t border-[#232325] pt-6 text-sm text-gray-500 text-center">
        <div className="mb-4">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-indigo-400 font-semibold">HelloGrids</span>. All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400 mb-4">
          
          
          <Link to="/marketplace" className="hover:text-indigo-400 transition">Marketplace</Link>
          <Link to="/about" className="hover:text-indigo-400 transition">About Us</Link>

          <Link to="#" className="hover:text-indigo-400 transition">Contribute</Link>
          <Link to="#" className="hover:text-indigo-400 transition">Contact the developer</Link>
        </div>

        {/* 🔗 Social icons */}
        <div className="flex justify-center gap-4 mt-4 text-lg text-gray-400">
          <a href="https://github.com/rakeshp1423" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaLinkedin />
          </a>
        </div>
      </footer>

      {/* 🔝 Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-6 z-50 bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </section>
  );
}
