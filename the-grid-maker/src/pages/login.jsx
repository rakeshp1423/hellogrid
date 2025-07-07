import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/home");
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-[#0e0e0f] text-[#f5f5f5] font-sans relative overflow-hidden">
      {/* 🎨 Mesh gradient backgrounds */}
      <div className="absolute -top-20 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500 via-pink-500 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse z-0" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500 via-teal-400 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse z-0" />

      {/* 📣 Branding / Welcome side */}
      <div className="hidden md:flex flex-col justify-center items-start p-16 w-1/2 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6 leading-tight"
        >
          Welcome to{" "}
          <span className="bg-logo-gradient bg-clip-text text-transparent animate-gradient-move bg-[length:200%_200%] font-pacifico">
            hellogrids
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-400 text-lg leading-relaxed"
        >
          Sign in to start creating stunning grid-based layouts — visually and effortlessly.
        </motion.p>
      </div>

      {/* 📝 Login Form */}
      <div className="flex items-center justify-center w-full md:w-1/2 z-10 py-16">
        <form
          onSubmit={handleSubmit}
          className="w-[90%] max-w-sm bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Log In</h2>

          <div className="mb-4">
            <label className="block mb-1 text-sm text-gray-400">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded bg-[#141415] border border-[#2a2a2d] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm text-gray-400">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 rounded bg-[#141415] border border-[#2a2a2d] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] active:scale-95"
          >
            Log In
          </button>

          <p className="text-sm text-center mt-4 text-gray-400">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-indigo-400 hover:underline transition">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
