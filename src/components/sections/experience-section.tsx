"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/layout/section-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const timelineItems = [
  {
    title: "Research Intern (Machine Learning) | IIIT Vadodara",
    period: "May 2026 – July 2026",
    summary:
      "Conducted research on healthcare datasets for predictive analytics and classification using Python. Worked on data preprocessing, exploratory data analysis, feature engineering, model evaluation, supervised and ensemble learning, neural networks, hyperparameter tuning, and cross-validation. Contributed to an ongoing research project intended for an AAAI 2027 conference paper and an Elsevier book chapter.",
    tags: ["Python", "Machine Learning", "Healthcare Analytics"]
  }
];

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      title="Experience & Open Source"
      subtitle="A timeline of competitions, open-source programs, and community-driven development milestones."
      className="relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-12 top-8 -z-10 h-52 w-52 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-8 -z-10 h-56 w-56 rounded-full bg-violet-400/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl pl-2 md:pl-4">
        <div className="absolute bottom-2 left-2 top-2 w-px bg-gradient-to-b from-primary/80 via-primary/30 to-transparent md:left-3" />
        <div className="space-y-5 md:space-y-6">
          {timelineItems.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.07, duration: 0.5, ease: "easeOut" }}
              className="relative pl-8 md:pl-10"
            >
              <span className="absolute left-0 top-8 h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_rgba(126,168,255,0.95)] md:left-[1px]" />
              <motion.div whileHover={{ y: -6, scale: 1.01 }} transition={{ duration: 0.25 }}>
                <Card className="group border-white/15 transition-all duration-300 hover:shadow-glow">
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight md:text-xl">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                          {item.period}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="glow">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
