import { motion } from "framer-motion";
import { Terminal, User, Briefcase, Cpu, Mail } from "lucide-react";
import { cn } from "../../lib/utils";

const NAV_ITEMS = [
  { id: "hero", label: "INIT", icon: <Terminal size={18} /> },
  { id: "about", label: "WHOAMI", icon: <User size={18} /> },
  { id: "projects", label: "MODULES", icon: <Briefcase size={18} /> },
  { id: "stack", label: "SPECS", icon: <Cpu size={18} /> },
  { id: "contact", label: "PING", icon: <Mail size={18} /> },
];

export const SystemNav = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 w-full z-50 p-4 pointer-events-none"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center pointer-events-auto">
        
        {/* Logo/Status */}
        <div className="flex flex-col">
          <span className="text-[var(--neon-cyan)] font-system font-bold tracking-widest text-lg text-glow">
            SYS.ADMIN
          </span>
          <span className="text-xs text-[var(--neon-blue)] font-system">V 2.0.4 [ONLINE]</span>
        </div>

        {/* Navigation Modules */}
        <div className="hidden md:flex items-center gap-1 bg-[var(--surface-glass)] backdrop-blur-md border border-[var(--border-glass)] rounded-full px-2 py-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                const el = document.getElementById(item.id);
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-sm font-system tracking-wider rounded-full transition-all duration-300 relative overflow-hidden group hover:text-[var(--neon-cyan)] text-gray-400"
              )}
            >
              <span className="group-hover:scale-110 transition-transform text-[var(--neon-cyan)] opacity-70 group-hover:opacity-100">
                {item.icon}
              </span>
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[var(--neon-cyan)] group-hover:w-full transition-all duration-300 opacity-50 shadow-[0_0_10px_rgba(0,245,255,1)]" />
            </button>
          ))}
        </div>
        
        {/* Current Time Display */}
        <div className="hidden lg:flex flex-col text-right font-system text-xs text-gray-400">
          <span>{new Date().toLocaleDateString('en-US', { hour: '2-digit', minute:'2-digit' })}</span>
          <span className="text-[var(--neon-cyan)]">SECURE CONNECTION</span>
        </div>
      </div>
    </motion.nav>
  );
};
