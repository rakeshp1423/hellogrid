import { useEffect, useState } from "react";
import { FiLogOut, FiEye, FiEdit3, FiCopy, FiTrash2, FiStar, FiCamera, FiUsers, FiBell, FiMoon, FiActivity } from "react-icons/fi";
import { motion } from "framer-motion";

const templates = Array(6).fill({
  name: "Landing Page UI",
  views: 230,
  downloads: 70,
  favorited: true,
});

const avatarOptions = [
  "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=rakesh1",
  "https://api.dicebear.com/7.x/open-peeps/svg?seed=rakesh2",
  "https://api.dicebear.com/7.x/bottts/svg?seed=rakesh3",
  "https://api.dicebear.com/7.x/pixel-art/svg?seed=rakesh4",
];

const bannerOptions = [
  "/banners/banner1.jpg",
  "/banners/banner2.jpg",
  "/banners/banner3.jpg",
  "/banners/banner4.jpg",
  "/banners/banner5.jpg",
];

const recentActivities = [
  "Liked a template: Minimal Portfolio",
  "Created a new project: Dashboard UI",
  "Updated banner image",
  "Earned ‘Top Contributor’ badge",
  "Commented on: Blog Grid Template",
];

const badges = ["🔥 Top Contributor", "🌟 Early Adopter", "🚀 Power User", "💡 Community Helper"];

const Dashboard = () => {
  const [avatarModalOpen, setAvatarModalOpen] = useState(false);
  const [bannerModalOpen, setBannerModalOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState("/avatar.png");
  const [selectedBanner, setSelectedBanner] = useState("/banner-placeholder.jpg");
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setSelectedAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleBannerUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setSelectedBanner(reader.result);
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0e0e0f] text-[#f5f5f5] min-h-screen pt-24 px-6 pb-24">
      {/* Profile Banner */}
      <div className="relative h-48 rounded-xl overflow-hidden mb-16">
        <img src={selectedBanner} alt="Profile Banner" className="w-full h-full object-cover" />
        <button onClick={() => setBannerModalOpen(true)} className="absolute top-3 right-3 bg-white/10 backdrop-blur-md border border-[#2a2a2d] p-2 rounded-full hover:shadow-lg transition-all">
          <FiCamera />
        </button>
      </div>

      {/* User Info Panel */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl bg-white/5 backdrop-blur-md border border-[#2a2a2d] rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-lg mb-16"
      >
        <div className="relative">
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ type: "spring", bounce: 0.5 }}
            className="rounded-full border-4 border-gradient-to-tr from-pink-500 via-indigo-500 to-teal-400 w-24 h-24"
          >
            <img 
              src={selectedAvatar} 
              alt="Avatar" 
              className="rounded-full w-full h-full object-cover" 
            />
            <button 
              onClick={() => setAvatarModalOpen(true)} 
              className="absolute bottom-0 right-0 bg-indigo-500 p-1 rounded-full hover:scale-105"
            >
              <FiCamera size={14} />
            </button>
          </motion.div>
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold">Rakesh Kumar</h2>
          <p className="text-sm text-gray-400">rakeshp1423@gmail.com</p>
          <p className="text-sm text-gray-400">Member since: July 2024</p>
          <p className="mt-2 italic">"Building interfaces that just work."</p>
          <div className="flex flex-wrap gap-4 mt-4 justify-center sm:justify-start">
            <span className="flex items-center gap-2 text-sm text-gray-300"><FiUsers /> 452 Followers</span>
            <span className="flex items-center gap-2 text-sm text-gray-300"><FiUsers /> 180 Following</span>
            <span className="flex items-center gap-2 text-sm text-gray-300"><FiActivity /> 87 Contributions</span>
          </div>
          <button className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow hover:shadow-indigo-500/50 transition-all">
            Edit Profile
          </button>
        </div>
      </motion.div>

      {/* Preferences Panel */}
      <div className="max-w-3xl mx-auto mb-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-[#1a1a1c] p-4 rounded-xl border border-[#2a2a2d]">
          <h4 className="text-lg font-semibold mb-2 flex items-center gap-2"><FiBell /> Notifications</h4>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="accent-indigo-500"
            />
            <span className="text-sm">Email & System Notifications</span>
          </label>
        </div>
        <div className="bg-[#1a1a1c] p-4 rounded-xl border border-[#2a2a2d]">
          <h4 className="text-lg font-semibold mb-2 flex items-center gap-2"><FiMoon /> Theme</h4>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="accent-indigo-500"
            />
            <span className="text-sm">Dark Mode</span>
          </label>
        </div>
      </div>

      {/* Badges */}
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-xl font-semibold mb-4">🏅 Badges Earned</h3>
        <div className="flex flex-wrap gap-4">
          {badges.map((badge, idx) => (
            <span
              key={idx}
              className="bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow hover:shadow-lg transition"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-xl font-semibold mb-4">🕓 Recent Activity</h3>
        <ul className="space-y-3 text-sm text-gray-300">
          {recentActivities.map((activity, idx) => (
            <li key={idx} className="border-l-4 border-indigo-500 pl-4">
              {activity}
            </li>
          ))}
        </ul>
      </div>

      {/* Saved Templates */}
      <div className="max-w-6xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-4">💾 Saved Templates</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05 }} 
              className="bg-white/5 backdrop-blur-md border border-[#2a2a2d] rounded-xl p-4 relative shadow"
            >
              <div className="h-32 bg-gray-700 rounded mb-4" />
              <h4 className="text-lg font-semibold mb-1">{template.name}</h4>
              <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                <span>{template.views} views</span>
                <span>{template.downloads} downloads</span>
              </div>
              <div className="flex gap-2 justify-between">
                <button className="text-xs bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-700 flex items-center gap-1"><FiEye /> View</button>
                <button className="text-xs bg-teal-600 px-3 py-1 rounded hover:bg-teal-700 flex items-center gap-1"><FiEdit3 /> Edit</button>
                <button className="text-xs bg-pink-600 px-3 py-1 rounded hover:bg-pink-700 flex items-center gap-1"><FiCopy /> Duplicate</button>
                <button className="text-xs bg-gray-600 px-3 py-1 rounded hover:bg-gray-700 flex items-center gap-1"><FiTrash2 /> Delete</button>
              </div>
              <button className="absolute top-3 right-3 text-pink-400 hover:text-pink-600"><FiStar /></button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modals (Avatar & Banner Picker) */}
      {/* ... (unchanged from previous code — let me know if you want me to paste these again) */}

      {/* Logout Button */}
      <button className="fixed bottom-6 right-6 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg hover:shadow-pink-400/60 transition-all">
        <FiLogOut size={24} />
      </button>
    </div>
  );
};

export default Dashboard;
