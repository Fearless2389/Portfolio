import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Terminal, Download, Cpu, Battery, Activity } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolio";

export const HeroTerminal = () => {
  const [typedText, setTypedText] = useState("");
  const targetText = "root@sysadmin:~$ ./initialize_profile.sh";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypedText(targetText.slice(0, i));
      i++;
      if (i > targetText.length) clearInterval(typingInterval);
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="hero" className="min-h-screen relative flex items-center pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Left Stats Column */}
        <div className="hidden lg:flex lg:col-span-1 flex-col justify-center gap-12 text-[var(--neon-cyan)] opacity-70">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1 }} className="flex flex-col items-center gap-2">
            <Battery size={24} className="mb-2" />
            <span className="font-system text-xs rotate-[-90deg]">PWR_100%</span>
          </motion.div>
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.2 }} className="flex flex-col items-center gap-2">
            <Activity size={24} className="mb-2" />
            <span className="font-system text-xs rotate-[-90deg]">SYS_OPT</span>
          </motion.div>
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.4 }} className="flex flex-col items-center gap-2">
            <Cpu size={24} className="mb-2" />
            <span className="font-system text-xs rotate-[-90deg] inline-block mt-4">CORE_8</span>
          </motion.div>
        </div>

        {/* Main Terminal Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-11 relative"
        >
          {/* Main Title Banner */}
          <div className="mb-8 font-system">
             <div className="flex items-center gap-3 text-[var(--neon-cyan)] mb-4">
               <Terminal size={20} />
               <span className="text-sm tracking-widest uppercase">Secured Terminal V_2.0</span>
             </div>
             
             <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
               <span className="text-white block">HELLO.</span>
               <span className="text-gray-400">I AM_</span>
               <span className="text-[var(--neon-blue)] text-glow-signature text-flicker-in inline-block">{PORTFOLIO_DATA.profile.name.toUpperCase()}</span>
             </h1>
             
             {/* The Typing Effect */}
             <div className="inline-flex items-center bg-[var(--surface-glass)] border border-[var(--border-glass)] px-4 py-2 rounded font-system text-[var(--neon-cyan)] mt-4 shadow-[0_0_15px_rgba(0,245,255,0.1)]">
                <span className="opacity-80 mr-2">{typedText}</span>
                <span className="w-2 h-4 bg-[var(--neon-cyan)] animate-pulse inline-block" />
             </div>
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col gap-6 max-w-2xl"
          >
            <p className="text-xl text-gray-400 font-system border-l-2 border-[var(--neon-cyan)] pl-4">
              {PORTFOLIO_DATA.profile.role}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-system text-gray-500 uppercase tracking-widest mt-4">
               <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded ring-1 ring-[var(--border-glass)] text-glow-breathe text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
                  {PORTFOLIO_DATA.profile.status}
               </div>
               <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded ring-1 ring-[var(--border-glass)]">
                  <MapPin size={12} className="text-[var(--neon-blue)]" />
                  {PORTFOLIO_DATA.profile.location}
               </div>
               <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded ring-1 ring-[#0066ff33]">
                  {PORTFOLIO_DATA.profile.availability}
               </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#projects" className="btn-glow relative group overflow-hidden px-8 py-3 bg-[var(--neon-blue)] text-black font-system font-bold tracking-widest text-sm hover:bg-[var(--neon-cyan)] transition-colors">
                 <span className="relative z-10 flex items-center gap-2">
                   DEPLOY_MODULES
                 </span>
                 <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </a>
              <button className="px-8 py-3 bg-transparent border border-[var(--neon-cyan)] text-[var(--neon-cyan)] font-system font-bold tracking-widest text-sm hover:bg-[var(--neon-cyan)]/10 transition-colors flex items-center gap-2">
                <Download size={16} />
                EXTRACT_RESUME
              </button>
            </div>
          </motion.div>
          
        </motion.div>
      </div>

      {/* Decorative full-width scanning line */}
      <div className="scanline" />
    </section>
  );
};
