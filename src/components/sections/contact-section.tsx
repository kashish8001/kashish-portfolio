"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const inputClassName =
  "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/80 focus:border-primary/50 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(126,168,255,0.12)]";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      title="Contact"
      subtitle="Let&apos;s collaborate on full stack products, immersive interfaces, and AI-powered experiences."
      className="relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-8 -z-10 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(126,168,255,0.14), transparent 30%, rgba(108,235,255,0.16) 68%, transparent 100%)"
        }}
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Start a conversation
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                Build something <span className="text-gradient">future-ready</span>
              </h3>
            </div>
            <Badge variant="glow" className="hidden sm:inline-flex">
              AI Startup Aesthetic
            </Badge>
          </div>

          <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
            <motion.div whileHover={{ y: -2 }}>
              <input type="text" name="name" placeholder="Your name" className={inputClassName} />
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className={inputClassName}
              />
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project, product, or collaboration idea..."
                className={`${inputClassName} resize-none`}
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="w-full sm:w-auto" type="submit">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </form>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="space-y-4"
        >
          <div className="glass rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Connect</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Open to internships, freelance work, and product collaborations.
            </p>
            <div className="mt-5 space-y-3">
              <a
                href="mailto:kashish8001@gmail.com"
                className="group flex items-center justify-between rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.08]"
              >
                <span className="flex items-center text-sm">
                  <Mail className="mr-2 h-4 w-4 text-primary" />
                  kashish8001@gmail.com
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://github.com/kashish8001"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.08]"
              >
                <span className="flex items-center text-sm">
                  <Github className="mr-2 h-4 w-4 text-primary" />
                  GitHub
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://www.linkedin.com/in/kashish-sahu-269a4828b/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.08]"
              >
                <span className="flex items-center text-sm">
                  <Linkedin className="mr-2 h-4 w-4 text-primary" />
                  LinkedIn
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <p className="text-lg font-semibold tracking-tight">Resume</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Download my latest resume to explore technical depth, projects, and achievements.
            </p>
            <Button variant="outline" className="mt-4 w-full sm:w-auto" asChild>
              <a href="/projects/Kashish_Sahu_resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </a>
            </Button>
          </div>
        </motion.aside>
      </div>
    </SectionShell>
  );
}
