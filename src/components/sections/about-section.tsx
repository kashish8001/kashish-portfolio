"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/layout/section-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Hackathons Participated", value: "4+" },
  { label: "Open Source Programs", value: "2+" },
  { label: "Projects Built", value: "5+" }
];

const journey = [
  {
    title: "Foundation in Computer Science",
    period: "2023 - Present",
    description:
      "Pursuing B.Tech in CSE at IIIT Vadodara with focus on software engineering, algorithms, and product thinking."
  },
  {
    title: "Full Stack Building Phase",
    period: "2024 - Present",
    description:
      "Developing modern full stack applications with polished frontend experiences and reliable backend services."
  },
  {
    title: "Exploring AI + Immersive UI + Cloud Computing",
    period: "Current Focus",
    description:
      "Integrating AI-driven workflows, building scalable cloud-based applications, and crafting interactive interfaces for modern web experiences."
  }
];

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      title="About"
      subtitle="Engineering intelligent and interactive web experiences with modern technologies."
      className="relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-10 -z-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <Badge variant="glow" className="mb-4">
            About Me
          </Badge>
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
            B.Tech CSE student at <span className="text-gradient">IIIT Vadodara</span>
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            I am deeply interested in full stack development and love building interactive,
            intelligent web applications that feel effortless to use.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            My journey includes hackathons, open source collaboration, and working across modern
            web technologies. I am currently exploring AI integrations and immersive UI experiences
           and cloud computing to build scalable and impactful digital products.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.55, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.015 }}
            >
              <Card className="group h-full transition-all duration-300 hover:shadow-glow">
                <CardContent className="pt-6">
                  <p className="text-3xl font-semibold text-gradient md:text-4xl">{item.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 md:mt-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <h4 className="text-xl font-semibold tracking-tight md:text-2xl">Journey</h4>
          <div className="relative mt-6 space-y-6 pl-6">
            <div className="absolute bottom-1 left-2 top-1 w-px bg-gradient-to-b from-primary/70 via-primary/30 to-transparent" />
            {journey.map((item, index) => (
              <motion.article
                key={item.title}
                className="relative"
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <span className="absolute -left-[1.1rem] top-2 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_16px_rgba(126,168,255,0.8)]" />
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/[0.08]">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {item.period}
                  </p>
                  <p className="mt-2 text-base font-medium">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
