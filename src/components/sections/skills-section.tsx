"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/layout/section-shell";
import { Card, CardContent } from "@/components/ui/card";

type SkillItem = {
  name: string;
  level: number;
};

type SkillCategory = {
  title: string;
  accent: string;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    accent: "from-blue-400/70 via-cyan-300/70 to-indigo-400/70",
    skills: [
      { name: "Next.js", level: 93 },
      { name: "React", level: 95 },
      { name: "TypeScript", level: 91 },
      { name: "Tailwind CSS", level: 94 },
      { name: "Framer Motion", level: 88 }
    ]
  },
  {
    title: "Backend",
    accent: "from-violet-400/70 via-fuchsia-300/70 to-blue-400/70",
    skills: [
      { name: "Node.js", level: 87 },
      { name: "Flask", level: 80 }
    ]
  },
  {
    title: "Database",
    accent: "from-emerald-400/70 via-teal-300/70 to-cyan-400/70",
    skills: [
      { name: "MySQL", level: 86 },
      { name: "MongoDB", level: 82 },
      { name: "PostgreSQL", level: 80 }
      
    ]
  },
  {
    title: "Tools",
    accent: "from-orange-400/70 via-yellow-300/70 to-pink-400/70",
    skills: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 75 },
      { name: "Cursor AI", level: 85 },
      { name: "Figma", level: 90 }
    ]
  }
];

function SkillOrb({ level }: { level: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative h-12 w-12 shrink-0 rounded-full"
      style={{
        background: `conic-gradient(rgba(126,168,255,0.95) ${level}%, rgba(255,255,255,0.10) ${level}% 100%)`
      }}
    >
      <div className="absolute inset-[4px] grid place-items-center rounded-full bg-background/95 text-[10px] font-semibold text-muted-foreground">
        {level}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      title="Skills"
      subtitle="A categorized skill matrix focused on full stack engineering, immersive UI, and shipping modern product experiences."
      className="relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-8 -z-10 h-52 w-52 rounded-full bg-violet-400/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 -z-10 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl"
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: categoryIndex * 0.08, duration: 0.55 }}
            whileHover={{ y: -8 }}
            className="h-full"
          >
            <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:shadow-glow">
              <div
                aria-hidden
                className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-r ${category.accent} opacity-30 blur-2xl transition-opacity duration-300 group-hover:opacity-45`}
              />
              <CardContent className="relative pt-6">
                <motion.h3
                  className="text-lg font-semibold tracking-tight md:text-xl"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  {category.title}
                </motion.h3>
                <div className="mt-5 space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ delay: skillIndex * 0.06, duration: 0.4 }}
                      whileHover={{ x: 4 }}
                      className="glass flex items-center justify-between rounded-xl px-3 py-2"
                    >
                      <p className="text-sm font-medium md:text-base">{skill.name}</p>
                      <SkillOrb level={skill.level} />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
