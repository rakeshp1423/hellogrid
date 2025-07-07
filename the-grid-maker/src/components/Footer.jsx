import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin, FaDribbble } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1e1e20] border-t border-[#232325] px-6 py-10 text-[#f5f5f5] font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-[#2c2c2e] pb-10">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent font-sf mb-3">
            hellogrids
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Your go-to platform for building elegant grid-based layouts — fast, visual, and code-free.
          </p>
          {/* Socials */}
          <div className="flex gap-4 mt-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition text-lg">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition text-lg">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition text-lg">
              <FaLinkedin />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition text-lg">
              <FaDribbble />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/templates" className="hover:text-indigo-400 transition">Templates</Link></li>
            <li><Link to="/marketplace" className="hover:text-indigo-400 transition">Marketplace</Link></li>
            <li><Link to="/pricing" className="hover:text-indigo-400 transition">Pricing</Link></li>
            <li><Link to="/faq" className="hover:text-indigo-400 transition">FAQ</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-base font-semibold text-white mb-3">Need Help?</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/support" className="hover:text-indigo-400 transition">Support Center</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-400 transition">Contact Us</Link></li>
            <li><Link to="/docs" className="hover:text-indigo-400 transition">Documentation</Link></li>
            <li><Link to="/guides" className="hover:text-indigo-400 transition">How-to Guides</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-base font-semibold text-white mb-3">Stay in the Loop</h3>
          <p className="text-sm text-gray-400 mb-3">Get design tips, updates, and news straight to your inbox.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="bg-[#141415] border border-[#232325] text-sm px-3 py-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white text-sm px-4 py-2 rounded hover:bg-indigo-600 transition font-medium active:scale-95"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <span>&copy; {new Date().getFullYear()} hellogrids. All rights reserved.</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link to="/privacy" className="hover:text-indigo-400 transition">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-indigo-400 transition">Terms of Service</Link>
          <Link to="/account" className="hover:text-indigo-400 transition">Account</Link>
        </div>
      </div>
    </footer>
  );
}
