import { SystemNav } from "./components/layout/SystemNav";
import { HeroTerminal } from "./components/sections/HeroTerminal";
import { ProjectsGrid } from "./components/sections/ProjectsGrid";
import { TechStackRadar } from "./components/sections/TechStackRadar";
import { AboutProfile } from "./components/sections/AboutProfile";
import { ContactSystem } from "./components/sections/ContactSystem";
import { Terminal, Globe, Hash, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "./data/portfolio";
import { CustomCursor } from "./components/ui/CustomCursor";

function App() {
  return (
    <div className="relative min-h-screen selection:bg-[var(--neon-cyan)] selection:text-black">
      <CustomCursor />
      {/* Background Visual Enhancements */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.03)_0%,transparent_100%)] opacity-50" />
      </div>

      <SystemNav />

      <main>
        <HeroTerminal />
        <AboutProfile />
        <ProjectsGrid />
        <TechStackRadar />
        <ContactSystem />
      </main>

      {/* Futuristic System Footer */}
      <footer className="border-t border-[var(--border-glass)] bg-black/60 backdrop-blur-md py-8 mt-24">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start font-system">
             <span className="text-[var(--neon-cyan)] font-bold tracking-widest text-lg">SYS.ADMIN_2026</span>
             <span className="text-gray-500 text-[10px] uppercase">Designed and built by {PORTFOLIO_DATA.profile.name}</span>
          </div>

          <div className="flex items-center gap-6">
             <a href="#" className="text-gray-500 hover:text-[var(--neon-cyan)] hover:animate-pulse transition-colors"><Terminal size={20} /></a>
             <a href="#" className="text-gray-500 hover:text-[var(--neon-blue)] hover:animate-pulse transition-colors"><Globe size={20} /></a>
             <a href="#" className="text-gray-500 hover:text-[var(--neon-cyan)] hover:animate-pulse transition-colors"><Hash size={20} /></a>
             <a href={PORTFOLIO_DATA.socials[3].url} className="text-gray-500 hover:text-[var(--neon-blue)] hover:animate-pulse transition-colors"><Mail size={20} /></a>
          </div>
          
          <div className="flex items-center gap-2 font-system text-xs text-gray-400">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span>SYSTEM OPS: <span className="text-green-500">NORMAL</span></span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
