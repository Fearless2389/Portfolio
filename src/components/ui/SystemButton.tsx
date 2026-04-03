import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface SystemButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  icon?: ReactNode;
}

export const SystemButton = ({
  children,
  className,
  variant = "primary",
  icon,
  ...props
}: SystemButtonProps) => {
  const baseClasses =
    "relative px-4 py-2 font-system text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden";
  
  const variants = {
    primary:
      "bg-[var(--neon-cyan)]/10 text-[var(--neon-cyan)] border border-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)] hover:text-[#050505] shadow-[0_0_10px_rgba(0,245,255,0.2)] hover:shadow-[0_0_20px_rgba(0,245,255,0.8)]",
    outline:
      "bg-transparent text-gray-300 border border-gray-700 hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)]",
    ghost:
      "bg-transparent text-gray-400 hover:text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/5",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ y: -2 }}
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    >
      {/* Small indicator dot on the left */}
      {variant === "primary" && (
        <span className="w-1.5 h-1.5 bg-current rounded-full animate-pulse mr-1" />
      )}
      {icon}
      <span>{children}</span>
      {/* Bottom scanning border line on hover */}
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent opacity-0 hover:opacity-100 transition-opacity" />
    </motion.button>
  );
};
