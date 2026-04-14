import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" } : {}}
      className={`glass rounded-2xl overflow-hidden transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}
