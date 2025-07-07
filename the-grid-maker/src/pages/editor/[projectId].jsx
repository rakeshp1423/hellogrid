// Editor page placeholder for [projectId]
import { useParams } from "react-router-dom";
import Canvas from "../../components/Canvas";
import SidebarLeft from "../../components/SidebarLeft";
import SidebarRight from "../../components/SidebarRight";
import TopBar from "../../components/TopBar";

export default function Editor() {
  const { projectId } = useParams();

  return (
    <div className="flex flex-col h-screen w-full bg-[#0e0e0f] text-[#f5f5f5] font-sans">
      <TopBar projectId={projectId} />
      <div className="flex flex-1 overflow-hidden">
        <SidebarLeft />
        <Canvas />
        <SidebarRight />
      </div>
    </div>
  );
}
