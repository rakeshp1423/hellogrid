import Footer from "./Footer";
import Navbar from "./Navbar";

export default function LoggedInLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0e0e0f] text-[#f5f5f5] font-sans">
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
