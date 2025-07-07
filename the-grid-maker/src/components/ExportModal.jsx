
export default function ExportModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2 className="text-xl font-semibold mb-4 text-[#f5f5f5]">Export Project</h2>
        <button
          className="btn"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
