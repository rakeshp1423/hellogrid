import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import WhyChoose from "../components/home/WhyChoose";
import RecentProjects from "../components/home/RecentProjects";
// import Testimonials from "../components/home/Testimonials";
// import FAQs from "../components/home/FAQs";
// import CallToActionStrip from "../components/home/CallToActionStrip";


export default function HomeAfterLogin() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0e0e0f] text-[#f5f5f5] font-sans">
      <main className="flex-1 w-full relative overflow-hidden min-h-[calc(100vh-80px)] flex flex-col items-center justify-start">
        <Hero />
        <HowItWorks />
        <WhyChoose />
        <RecentProjects />
        {/* <Testimonials /> */}
        {/* <FAQs /> */}
        {/* <CallToActionStrip /> */}
        
      </main>
      
    </div>
  );
}
