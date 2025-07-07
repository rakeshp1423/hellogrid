
export default function TemplateCard({ title, preview }) {
  return (
    <div className="panel p-4 mb-2 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(99,102,241,0.3)] hover:scale-105 active:scale-95 cursor-pointer">
      <h3 className="font-semibold mb-2 text-[#f5f5f5]">{title}</h3>
      <div className="bg-[#141417] h-24 flex items-center justify-center rounded border border-gray-700">
        {preview || <span className="text-gray-500">[Preview]</span>}
      </div>
    </div>
  );
}
