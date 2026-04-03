import { motion } from "framer-motion";
import { GlassPanel } from "../ui/GlassPanel";
import { PORTFOLIO_DATA } from "../../data/portfolio";
import { ExternalLink, Terminal, FolderGit2 } from "lucide-react";

export const ProjectsGrid = () => {
  return (
    <section id="projects" className="min-h-screen py-24 relative">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 border-b border-[var(--border-glass)] pb-6"
        >
          <div className="flex items-center gap-4 text-[var(--neon-cyan)] mb-2">
            <FolderGit2 size={24} />
            <h2 className="text-3xl font-bold font-system tracking-wider uppercase">Project_Modules</h2>
          </div>
          <p className="text-gray-400 font-system text-sm tracking-widest uppercase">Select module to expand specs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group"
            >
              <GlassPanel className="h-full flex flex-col hover:border-[var(--neon-blue)] transition-colors duration-500">
                {/* Project Header (ID & Category) */}
                <div className="flex justify-between items-center mb-6 font-system text-xs uppercase tracking-widest text-[var(--neon-cyan)] border-b border-[var(--border-glass)] pb-2 opacity-70 group-hover:opacity-100 transition-opacity">
                   <div className="flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-[var(--neon-cyan)] mr-2 group-hover:animate-ping" />
                     MOD_0{project.id}
                   </div>
                   <div className="flex items-center gap-2">
                     {project.category}
                     <ExternalLink size={14} className="text-[var(--neon-blue)]" />
                   </div>
                </div>

                {/* Main Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--neon-cyan)] transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
                
                {/* Tech Stack Requirements */}
                <div className="mb-8">
                   <div className="text-[10px] uppercase font-system text-gray-500 mb-2">SYS_REQUIREMENTS</div>
                   <div className="flex flex-wrap gap-2">
                     {project.techStack.map((tech) => (
                       <span key={tech} className="px-2 py-1 bg-black/50 border border-gray-800 rounded text-[10px] font-system text-gray-300 group-hover:border-[var(--neon-cyan)]/30 transition-colors">
                         {tech}
                       </span>
                     ))}
                   </div>
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[var(--border-glass)]">
                  <a href={project.githubUrl} 
                     target="_blank" 
                     rel="noreferrer"
                     className="flex items-center gap-2 text-sm text-gray-400 hover:text-white font-system transition-colors">
                    <Terminal size={16} />
                    <span>SOURCE</span>
                  </a>
                  <a href={project.liveUrl} 
                     target="_blank" 
                     rel="noreferrer"
                     className="flex items-center gap-2 text-sm text-[var(--neon-cyan)] hover:text-[#00f5ff] hover:text-glow font-system ml-auto transition-colors">
                    <span>DEPLOYMENT</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
