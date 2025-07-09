export default function CommunityStats() {
  const stats = [
    { number: "10K+", label: "Templates Created" },
    { number: "5K+", label: "Active Users" },
    { number: "150+", label: "Community Designers" },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-[#0f0f10] text-center text-white relative z-10">
      <h2 className="text-2xl font-bold mb-10">🚀 Our Growing Community</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-10">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-4xl font-bold text-indigo-500">{stat.number}</h3>
            <p className="text-gray-400 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
