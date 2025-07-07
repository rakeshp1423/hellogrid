
export default function Account() {
  return (
    <div className="min-h-screen w-full bg-[#0e0e0f] text-[#f5f5f5] font-sans p-8">
      <h1 className="text-3xl font-semibold tracking-wide mb-4">Account</h1>
      <p className="text-gray-400 mb-8">Manage your account settings and profile information.</p>
      <div className="p-4 rounded-lg" style={{ backgroundColor: "#1e1e20", border: "1px solid #232325" }}>
        <span className="text-gray-500">Account details go here.</span>
      </div>
    </div>
  );
}
