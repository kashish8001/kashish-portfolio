import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.example.com"),
  title: "Kashish | Premium Developer Portfolio",
  description:
    "Premium modern developer portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.",
  keywords: [
    "developer portfolio",
    "next.js portfolio",
    "typescript portfolio",
    "framer motion",
    "react three fiber"
  ],
  openGraph: {
    title: "Kashish | Premium Developer Portfolio",
    description: "Dark futuristic portfolio with premium UI and modern web interactions.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
