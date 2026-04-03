import { useState } from "react";
import { motion } from "framer-motion";
import { GlassPanel } from "../ui/GlassPanel";
import { Send, TerminalSquare, AlertCircle } from "lucide-react";

export const ContactSystem = () => {
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SENT">("IDLE");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SENDING");
    setTimeout(() => setStatus("SENT"), 2000);
  };

  return (
    <section id="contact" className="min-h-screen py-24 relative flex items-center">
      <div className="max-w-4xl mx-auto px-4 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center gap-4 text-[var(--neon-cyan)] mb-4">
            <TerminalSquare size={32} />
            <h2 className="text-4xl font-bold font-system tracking-wider uppercase">PING_SERVER</h2>
          </div>
          <p className="text-gray-400 font-system tracking-widest uppercase">Open secure communication channel</p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
        >
          <GlassPanel className="p-8 md:p-12 border-[var(--border-glass)] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-system">
               
               {/* Decorative Terminal Header */}
               <div className="flex bg-black/60 p-3 rounded border border-gray-800 text-xs text-gray-500 uppercase">
                  <span>Connection: TCP</span>
                  <span className="mx-auto text-[var(--neon-blue)]">Port: 443</span>
                  <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />SECURE</span>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                   <label className="text-[10px] uppercase text-[var(--neon-cyan)] tracking-widest pl-1">Ident</label>
                   <input required type="text" placeholder="NAME or ALIAS" className="bg-black/40 border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--neon-blue)] transition-colors placeholder:text-gray-700" />
                 </div>
                 <div className="flex flex-col gap-2">
                   <label className="text-[10px] uppercase text-[var(--neon-cyan)] tracking-widest pl-1">Return_Path</label>
                   <input required type="email" placeholder="EMAIL ADDRESS" className="bg-black/40 border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--neon-blue)] transition-colors placeholder:text-gray-700" />
                 </div>
               </div>

               <div className="flex flex-col gap-2">
                   <label className="text-[10px] uppercase text-[var(--neon-cyan)] tracking-widest pl-1">Payload</label>
                   <textarea required rows={5} placeholder="TRANSMISSION DATA..." className="bg-black/40 border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--neon-blue)] transition-colors placeholder:text-gray-700 resize-none" />
               </div>

               <button 
                 type="submit" 
                 disabled={status !== "IDLE"}
                 className="relative w-full py-4 mt-4 bg-[var(--surface)] border border-[var(--neon-cyan)] text-[var(--neon-cyan)] uppercase tracking-widest text-sm hover:bg-[var(--neon-cyan)]/10 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--neon-blue)] disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden"
               >
                 <span className="relative z-10 flex items-center justify-center gap-2 font-bold text-glow">
                   {status === "IDLE" && <><Send size={18} className="group-hover:translate-x-1 transition-transform" /> EXECUTE_TRANSMISSION</>}
                   {status === "SENDING" && <><div className="w-4 h-4 border-2 border-[var(--neon-cyan)] border-t-transparent rounded-full animate-spin" /> ENCRYPTING...</>}
                   {status === "SENT" && <><AlertCircle size={18} /> TRANSMISSION_SUCCESS</>}
                 </span>
                 <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent group-hover:animate-scan" />
               </button>
            </form>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
};
