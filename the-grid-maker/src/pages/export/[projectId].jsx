import { useParams } from "react-router-dom";

export default function Export() {
  const { projectId } = useParams();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#0e0e0f] text-[#f5f5f5] font-sans">
      <h1 className="text-2xl font-semibold tracking-wide mb-4">Export Project</h1>
      <p className="text-gray-400 mb-2">Project ID: {projectId}</p>
      <button className="bg-indigo-500 text-white rounded px-6 py-2 font-medium transition-all duration-300 ease-in-out shadow-none hover:bg-indigo-600 hover:shadow-[0_0_10px_rgba(99,102,241,0.3)] focus:outline-none focus:ring-2 focus:ring-indigo-500 active:scale-95">
        Export Now
      </button>
    </div>
  );
}
