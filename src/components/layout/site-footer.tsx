export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Kashish. All rights reserved.</p>
        <p>Crafted with Next.js, TypeScript, Tailwind, Framer Motion, and Three.js.</p>
      </div>
    </footer>
  );
}
