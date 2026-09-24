import type { Metadata } from "next";
import { Audiowide, Italianno, Quicksand, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeContext";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
  display: "swap",
});

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italianno",
  display: "swap",
});

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Tasvirul Hasan Riyad | Portfolio",
  description:
    "Portfolio of Tasvirul Hasan Riyad, Computer Science & Engineering undergraduate at North South University. Explore my projects, skills, education, and experience.",
  keywords: [
    "Tasvirul Hasan Riyad",
    "Tasvir Riyad",
    "North South University",
    "Computer Science Portfolio",
    "Software Engineer",
    "Apartment Management System",
    "Full Stack Developer",
  ],
  authors: [{ name: "Tasvirul Hasan Riyad" }],
  creator: "Tasvirul Hasan Riyad",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Tasvirul Hasan Riyad | Portfolio",
    description:
      "Computer Science & Engineering undergraduate at North South University, passionate about programming and problem-solving.",
    siteName: "Tasvirul Hasan Riyad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tasvirul Hasan Riyad | Portfolio",
    description:
      "Computer Science & Engineering undergraduate at North South University, passionate about programming and problem-solving.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${audiowide.variable} ${italianno.variable} ${quicksand.variable} ${geist.variable}`}
    >
      <body className="antialiased min-h-screen flex flex-col font-quicksand bg-[var(--color-background)] text-[var(--color-text)]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
