import { useParams } from "react-router-dom";

export default function Preview() {
  const { projectId } = useParams();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#0e0e0f] text-[#f5f5f5] font-sans">
      <h1 className="text-2xl font-semibold tracking-wide mb-4">Preview Project</h1>
      <p className="text-gray-400 mb-2">Project ID: {projectId}</p>
      <div className="p-8 rounded-lg bg-[#1e1e20] border border-[#232325] shadow">
        <span className="text-gray-500">[Preview Area]</span>
      </div>
    </div>
  );
}
