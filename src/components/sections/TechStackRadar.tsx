import { motion } from "framer-motion";
import { GlassPanel } from "../ui/GlassPanel";
import { PORTFOLIO_DATA } from "../../data/portfolio";
import { Cpu, Server, Layout, Search, Code2 } from "lucide-react";

export const TechStackRadar = () => {
  const categories = [
    { title: "Languages_&_Core", data: PORTFOLIO_DATA.skills.languages, icon: <Code2 /> },
    { title: "Frontend_UI", data: PORTFOLIO_DATA.skills.frontend, icon: <Layout /> },
    { title: "Backend_Sys", data: PORTFOLIO_DATA.skills.backend, icon: <Server /> },
    { title: "Devops_&_Tools", data: PORTFOLIO_DATA.skills.devtools, icon: <Search /> },
  ];

  return (
    <section id="stack" className="min-h-screen py-24 relative">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 border-b border-[var(--border-glass)] pb-6"
        >
          <div className="flex items-center gap-4 text-[var(--neon-blue)] mb-2">
            <Cpu size={24} />
            <h2 className="text-3xl font-bold font-system tracking-wider uppercase">System_Specs</h2>
          </div>
          <p className="text-gray-400 font-system text-sm tracking-widest uppercase">Hardware & Software Specifications</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <GlassPanel className="h-full group">
                <div className="flex items-center gap-3 font-system text-xl font-bold text-[var(--neon-blue)] mb-6 border-b border-gray-800 pb-4 group-hover:border-[var(--neon-blue)] transition-colors">
                  <span className="opacity-70 group-hover:opacity-100">{category.icon}</span>
                  <span className="tracking-widest capitalize">{category.title.replace(/_/g, " ")}</span>
                </div>
                
                <div className="flex flex-col gap-4">
                  {category.data.map((skill, sIdx) => (
                    <div key={skill} className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center text-sm font-system">
                        <span className="text-gray-300">{skill}</span>
                        {/* Fake memory address for visuals */}
                        <span className="text-xs text-gray-600">0x{Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}</span>
                      </div>
                      
                      {/* Fake Progress / Capacity Bar */}
                      <div className="w-full h-1 bg-gray-900 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-[var(--neon-blue)] rounded-full opacity-70 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(0,102,255,0.8)]"
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${60 + Math.random() * 35}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + (sIdx * 0.1), duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
