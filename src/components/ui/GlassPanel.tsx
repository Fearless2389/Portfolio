import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface GlassPanelProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassPanel = ({ 
  children, 
  className, 
  hoverEffect = true,
  ...props 
}: GlassPanelProps) => {
  return (
    <motion.div
      className={cn(
        "glass-panel rounded-lg p-6 relative overflow-hidden",
        hoverEffect && "glass-panel-hover cursor-default",
        className
      )}
      {...props}
    >
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--neon-cyan)] opacity-50" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--neon-cyan)] opacity-50" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--neon-cyan)] opacity-50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--neon-cyan)] opacity-50" />
      
      {children}
    </motion.div>
  );
};
