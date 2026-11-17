import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cloud & DevOps Lab — Belajar Cloud dan Deployment",
    template: "%s · Cloud & DevOps Lab",
  },
  description:
    "Portal belajar cloud dan DevOps: Amazon EC2, Docker, Kubernetes, Linux, Databricks, Next.js, Tailwind CSS, dan shadcn/ui.",
  keywords: [
    "AWS",
    "EC2",
    "Next.js",
    "Docker",
    "Terraform",
    "Kubernetes",
    "Helm",
    "GitHub Actions",
    "Databricks",
    "WSL 2",
    "Ubuntu",
    "PuTTY",
    "Tailwind CSS",
    "shadcn/ui",
    "UI/UX",
  ],
  openGraph: {
    title: "Cloud & DevOps Lab",
    description:
      "Belajar cloud, Linux, Amazon EC2, Docker, Kubernetes, Databricks, dan pengembangan antarmuka.",
    type: "website",
    locale: "id_ID",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
