"use client";

import { useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ExternalLink, Github, PlayCircle } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  tech: string[];
  previewLabel: string;
  previewType: "image" | "video";
  previewImage?: string;
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "Campus Nexus",
    description:
      "A student collaboration and campus utility platform with events, notices, and schedule management.",
    tech: ["Python", "Flask", "MongoDB", "Streamlit","SMTP"],
    previewLabel: "Campus dashboard interface",
    previewType: "image",
    previewImage: "/projects/campus-nexus.png",
    githubUrl: "https://github.com/kashish8001/Campus-Nexus",
    liveUrl: "https://software-engineering-5eb1.onrender.com/"
  },
  {
    title: "AI Flashcard Generator",
    description:
      "AI-powered study platform that generates flashcards and quizzes from user input using the Gemini API.",
    tech: ["React", "jQuery", "Gemini API", "HTML", "Javascript", "Tailwind CSS", "Vite", "Vercel"],
    previewLabel: "AI study workflow preview",
    previewType: "image",
    previewImage: "/projects/flashcard-generator.png",
    githubUrl: "https://github.com/kashish8001/flashcard-ai",
    liveUrl: "https://flashcard-ai-snowy.vercel.app/"
  },
  {
    title: "Food Delivery App",
    description:
      "Frontend-based food delivery application with chatbot-powered dish recommendations and Firebase authentication.",
    tech: ["Flutter", "Botpress", "Android Studio", "Firebase"],
    previewLabel: "Real-time order tracking UI",
    previewType: "image",
    previewImage: "/projects/food-delivery.jpeg",
    githubUrl: "https://github.com/kashish8001/food_delivery_app"
  },
  {
    title: "Movie Recommendation System",
    description:
      "Content-based movie recommendation web app that suggests movies based on user preferences and metadata similarity.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit","TMDB API", "Streamlit Cloud"],
    previewLabel: "Recommendation intelligence panel",
    previewType: "image",
    previewImage: "/projects/movie-recommendation.jpeg",
    githubUrl: "https://github.com/kashish8001/Movie-Recommendation-System",
    liveUrl: "https://movie-recommendation-systemgit-ysbyx5fnqifkg4orkni9bg.streamlit.app/"
  },
  {
    title: "3D Multi Window Project",
    description:
      "An immersive multi-window 3D interface experiment with synchronized motion, depth, and cinematic transitions.",
    tech: ["Three.js", "Vanilla JS", "WebGL", "Netlify"],
    previewLabel: "Multi-window 3D environment",
    previewType: "image",
    previewImage: "/projects/3D-multi-window.jpeg",
    liveUrl: "https://3d-multi-window.netlify.app/"
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(240px circle at ${glowX}% ${glowY}%, rgba(126, 168, 255, 0.28), transparent 68%)`;

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    glowX.set(percentX);
    glowY.set(percentY);

    const tiltY = ((x - rect.width / 2) / rect.width) * 10;
    const tiltX = -((y - rect.height / 2) / rect.height) * 10;
    rotateX.set(tiltX);
    rotateY.set(tiltY);
  };

  const onMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="h-full"
      style={{ perspective: 1100 }}
    >
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        whileHover={{ y: -8 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
        className="relative h-full"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{ background: spotlight }}
        />
        <Card className="group relative h-full overflow-hidden border-white/15">
          <div
            aria-hidden
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(145, 190, 255, 0.16), transparent 32%), linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01))"
            }}
          />
          <CardContent className="relative space-y-5 pt-6">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/30 p-4">
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.08)_0%,transparent_45%,rgba(160,200,255,0.16)_100%)] opacity-60" />
              {project.previewImage ? (
                <motion.div
                  animate={{ y: [0, -3, 0], scale: [1, 1.01, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative min-h-28 overflow-hidden rounded-lg border border-white/10 bg-slate-900/80"
                >
                  <img
                    src={project.previewImage}
                    alt={project.previewLabel}
                    className="h-full min-h-28 w-full object-cover object-top"
                  />
                </motion.div>
              ) : (
                <motion.div
                  animate={{ y: [0, -3, 0], scale: [1, 1.01, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative flex min-h-28 items-center justify-between rounded-lg border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-700/10 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">{project.previewLabel}</p>
                    <p className="text-xs text-muted-foreground">
                      {project.previewType === "video" ? "Video preview" : "Image preview"}
                    </p>
                  </div>
                  {project.previewType === "video" ? (
                    <PlayCircle className="h-7 w-7 text-primary" />
                  ) : (
                    <div className="h-7 w-7 rounded-full border border-primary/40 bg-primary/15" />
                  )}
                </motion.div>
              )}
            </div>

            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold tracking-tight md:text-xl">{project.title}</h3>
              <motion.button
                type="button"
                whileTap={{ scale: 0.96 }}
                onClick={() => setIsExpanded((prev) => !prev)}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                aria-expanded={isExpanded}
              >
                {isExpanded ? "Hide" : "Preview"}
              </motion.button>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="glow">
                  {tech}
                </Badge>
              ))}
            </div>

            <AnimatePresence initial={false}>
              {isExpanded ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-muted-foreground">
                    Expanding this project reveals cinematic interaction layers, immersive motion
                    choreography, and responsive visual depth tailored for premium portfolio
                    storytelling.
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <div className="flex flex-wrap gap-3 pt-1">
              <Button size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      title="Featured Projects"
      subtitle="Cinematic project highlights with interactive previews, depth-based hover motion, and premium transitions."
      className="relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-12 -z-10 h-56 w-56 rounded-full bg-violet-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-12 -z-10 h-64 w-64 rounded-full bg-sky-400/15 blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
