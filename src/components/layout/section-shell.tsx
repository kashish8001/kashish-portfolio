"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  title,
  subtitle,
  children,
  className
}: SectionShellProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={cn("py-16 md:py-24", className)}
    >
      <div className="container">
        <div className="mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </motion.section>
  );
}
