
export default function ComponentCard({ name, description }) {
  return (
    <div className="panel p-4 mb-2 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(99,102,241,0.3)] hover:scale-105 active:scale-95 cursor-pointer">
      <h3 className="font-semibold text-[#f5f5f5]">{name}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
