import { Link } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { to: "/editor/new", label: "New Project" },
    { to: "/templates", label: "Templates" },
    { to: "/marketplace", label: "Marketplace" },
    { to: "/account", label: "Account" },
    { to: "/login", label: "Log Out", danger: true },
  ];

  return (
    <nav className="w-full bg-transparent px-7 py-6 flex items-center justify-between fixed top-0 left-0 z-50 backdrop-blur-md ">
      {/* Logo */}
      <Link
        to="/home"
        className="text-3xl font-pacifico bg-logo-gradient bg-clip-text text-transparent animate-gradient-move bg-[length:200%_200%]"
      >
        hellogrids
      </Link>

      {/* Navigation */}
      <div className="flex gap-4 md:gap-6 text-sm md:text-base font-inter">
        {navItems.map(({ to, label, danger }) => (
          <Link
            key={label}
            to={to}
            className={`px-4 py-2 rounded-md font-medium relative
              transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
              ${danger ? "text-red-400 hover:text-red-500" : "text-gray-300 hover:text-white"}
              hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.6)]
              hover:brightness-125 hover:scale-[1.05]
              active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
