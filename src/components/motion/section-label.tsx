"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

/* SectionLabel, the "01, TENTANG KAMI" editorial opener */
export function SectionLabel({
  number,
  label,
  className,
  dark = false,
  light = false,
}: {
  number: string;
  label: string;
  className?: string;
  dark?: boolean;
  light?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  return (
    <motion.div
      ref={ref}
      className={cn("flex items-center gap-3 label", className)}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="tabular-nums text-signal">{number}</span>
      <span
        className={cn(
          "h-px w-8",
          light ? "bg-ink-dark/20" : dark ? "bg-ink/30" : "bg-ink/20"
        )}
      />
      <span
        className={
          light ? "text-graphite-dark" : dark ? "text-ink/70" : "text-graphite"
        }
      >
        {label}
      </span>
    </motion.div>
  );
}
