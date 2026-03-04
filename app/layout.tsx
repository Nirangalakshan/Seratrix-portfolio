import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { SectionTitleUpdater } from "./components/SectionTitleUpdater";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Seratrix | Engineering Intelligence",
  description:
    "End-to-end intelligent systems combining software engineering, AI, cloud, embedded systems, IoT, and automation.",
  icons: {
    icon: "/logos/label3.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased selection:bg-cyan-500 selection:text-black`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SectionTitleUpdater />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
