// This page is no longer used as the main entry point.
// You can safely remove this file or repurpose it for user dashboards in the future.

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full bg-[#0e0e0f] text-[#f5f5f5] font-sans p-8">
      <h1 className="text-3xl font-semibold tracking-wide mb-4">Dashboard</h1>
      <p className="text-gray-400 mb-8">Your recent projects will appear here.</p>
      <div className="p-4 rounded-lg" style={{ backgroundColor: "#1e1e20", border: "1px solid #232325" }}>
        <span className="text-gray-500">No projects yet. Start by creating a new project!</span>
      </div>
    </div>
  );
}
