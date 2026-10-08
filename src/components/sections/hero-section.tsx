"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";
import { HeroScene } from "@/components/three/hero-scene";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-24 md:pb-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-hero-radial" />
      <div className="container relative z-0 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.95fr)] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-4xl text-center lg:mx-0 lg:max-w-none lg:text-left"
        >
          
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            {portfolioData.name} <span className="text-gradient">builds modern web applications</span>{" "}
            and digital experiences.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg lg:mx-0">
            {portfolioData.role} passionate about building modern web applications and interactive user experiences.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button size="lg" asChild>
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Let&apos;s Collaborate</a>
            </Button>
          </div>
        </motion.div>

        <div className="relative z-0 order-first h-[300px] w-full sm:h-[360px] lg:order-none lg:h-[480px]">
          <HeroScene/>
        </div>
      </div>
    </section>
  );
}
