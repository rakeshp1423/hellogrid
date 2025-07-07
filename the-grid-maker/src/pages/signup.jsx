import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

export default function Signup() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Simulate signup logic
    navigate("/dashboard");
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-[#0e0e0f] text-[#f5f5f5] font-sans relative overflow-hidden">
      {/* 🔮 Gradient Blobs */}
      <div className="absolute -top-20 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500 via-pink-500 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse z-0" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500 via-teal-400 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse z-0" />

      {/* 💬 Left Panel with Message */}
      <div className="hidden md:flex flex-col justify-center items-start p-16 w-1/2 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6 leading-tight"
        >
          Join{" "}
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
          Sign up and step into a workspace built for grid designers. Smooth, sleek, and collaborative.
        </motion.p>
      </div>

      {/* 📋 Signup Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center w-full md:w-1/2 p-8 md:p-16"
      >
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold tracking-wide mb-6 text-white">Create Your Account</h2>

          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-lg shadow-lg"
            style={{ backgroundColor: "#1e1e20", border: "1px solid #232325" }}
          >
            <div className="mb-4">
              <label className="block mb-1 text-gray-400">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 rounded bg-[#141415] border border-[#232325] text-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-400">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 rounded bg-[#141415] border border-[#232325] text-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                placeholder="********"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-1 text-gray-400">Confirm Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 rounded bg-[#141415] border border-[#232325] text-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                placeholder="********"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white rounded px-6 py-2 font-medium transition-all duration-300 ease-in-out shadow-none hover:bg-indigo-600 hover:shadow-[0_0_10px_rgba(99,102,241,0.3)] focus:outline-none focus:ring-2 focus:ring-indigo-500 active:scale-95"
            >
              Sign Up
            </button>
          </form>

          {/* 🔗 Social Login Options */}
          <div className="my-6 flex flex-col gap-3">
            <div className="text-center text-gray-400">or continue with</div>
            <div className="flex justify-center gap-4">
              <button className="bg-[#1e1e20] text-white px-4 py-2 rounded-full border border-[#232325] hover:border-indigo-500 hover:text-indigo-400 transition">
                <FaGoogle size={24} />
              </button>
              <button className="bg-[#1e1e20] text-white px-4 py-2 rounded-full border border-[#232325] hover:border-indigo-500 hover:text-indigo-400 transition">
                <FaGithub size={24} />
              </button>
              <button className="bg-[#1e1e20] text-white px-4 py-2 rounded-full border border-[#232325] hover:border-indigo-500 hover:text-indigo-400 transition">
                <FaFacebook size={24} />
              </button>
            </div>
          </div>

          <p className="mt-4 text-gray-400 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-400 hover:text-indigo-500 underline transition">
              Log In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
