import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import PortfolioUI from "@/components/PortfolioUI";

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ScrollyCanvas />
      {/* PortfolioUI flows naturally under the ScrollyCanvas after it un-pins */}
      <div className="relative z-10 w-full bg-[#121212]">
        <PortfolioUI />
      </div>
    </main>
  );
}