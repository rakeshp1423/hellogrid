
export default function TopBar({ projectId }) {
  return (
    <header className="topbar w-full h-16 flex items-center px-6">
      <h1 className="text-xl font-semibold tracking-wide flex-1 text-[#f5f5f5]">The Grid Maker</h1>
      {projectId && (
        <span className="text-gray-400">Project: {projectId}</span>
      )}
    </header>
  );
}
