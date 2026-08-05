import type { Metadata } from "next";
import { Lora, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-p22-mackinac-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-sofia-pro",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Saksham Gupta | Full Stack Developer & AI Builder",
  description: "Portfolio of Saksham Gupta, a Full Stack Developer specializing in modern web applications, AI-powered systems, scalable architectures, and startup-focused products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${dmSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-paper-white)] text-[var(--color-charcoal-navy)]">
        {/* Global Background Code Image */}
        <div 
          className="fixed inset-0 z-[-1] bg-[url('/code-bg.png')] bg-cover bg-center opacity-[0.15] filter invert pointer-events-none" 
        />
        {children}
      </body>
    </html>
  );
}
