import { motion } from "framer-motion";
import { GlassPanel } from "../ui/GlassPanel";
import { PORTFOLIO_DATA } from "../../data/portfolio";
import { User, Key } from "lucide-react";

export const AboutProfile = () => {
  return (
    <section id="about" className="min-h-screen py-24 relative flex items-center">
      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Profile Image with Holographic Frame */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative aspect-square max-w-sm mx-auto group"
        >
           {/* Decorative Frame */}
           <div className="absolute inset-0 border-2 border-[var(--neon-cyan)]/30 group-hover:border-[var(--neon-cyan)] rounded-xl transition-all duration-700 shadow-[0_0_30px_rgba(0,245,255,0.1)] group-hover:shadow-[0_0_50px_rgba(0,245,255,0.4)]" />
           <div className="absolute -inset-4 border border-[var(--neon-blue)]/20 rotate-3 rounded-xl transition-transform duration-700 group-hover:rotate-6" />
           <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-[var(--neon-cyan)] group-hover:animate-ping" />
           <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-[var(--neon-cyan)] group-hover:animate-ping" />
           
           <div className="w-full h-full bg-[#111] overflow-hidden rounded-xl border border-gray-800 p-2 glass-panel">
              <div className="w-full h-full bg-black/50 relative flex items-center justify-center font-system text-[var(--neon-cyan)] opacity-70">
                <span className="animate-pulse flex flex-col items-center">
                  <User size={64} className="mb-4" />
                  AVATAR_SYS_WAIT...
                </span>
                
                {/* Optional actual image uncomment later 
                <img src="/your-photo.jpg" alt="Profile" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" /> 
                */}
              </div>
           </div>
        </motion.div>

        {/* Bio Terminal */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <GlassPanel className="h-full">
            <div className="flex items-center gap-4 text-[var(--neon-cyan)] mb-6 border-b border-[var(--border-glass)] pb-4">
              <Key size={24} />
              <h2 className="text-2xl font-bold font-system tracking-wider uppercase">User_Identity</h2>
            </div>
            
            <div className="flex flex-col gap-4 font-system text-gray-400">
               {PORTFOLIO_DATA.profile.bio.map((paragraph, idx) => (
                  <motion.p 
                     key={idx}
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ delay: 0.2 + (idx * 0.1) }}
                     viewport={{ once: true }}
                     className="leading-relaxed"
                  >
                    {idx === 0 ? <span className="text-[var(--neon-blue)]">[{paragraph}]</span> : paragraph}
                  </motion.p>
               ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border-glass)] flex flex-wrap gap-4 font-system text-xs text-gray-500 uppercase">
              <div className="px-3 py-1 bg-black/40 rounded border border-gray-800">CLASS: SDE</div>
              <div className="px-3 py-1 bg-black/40 rounded border border-gray-800">LEVEL: JR</div>
              <div className="px-3 py-1 bg-black/40 rounded border border-gray-800">BASE: 지구</div>
            </div>
          </GlassPanel>
        </motion.div>

      </div>
    </section>
  );
};
