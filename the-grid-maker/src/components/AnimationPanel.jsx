
export default function AnimationPanel() {
  return (
    <div className="panel p-4">
      <div className="flex gap-2 mb-2">
        <button className="tab tab-active">Fade</button>
        <button className="tab tab-inactive">Slide</button>
      </div>
      <h2 className="font-semibold mb-2 text-[#f5f5f5]">Animation Panel</h2>
      <p className="text-gray-400">Configure animations here.</p>
    </div>
  );
}
