import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";
import TwinklingStars from "./components/TwinklingStars";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhi | Portfolio Website ",
  description: "Abhi's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 transition-colors dark:from-black dark:via-gray-900 dark:to-purple-950 text-white relative overflow-x-hidden`}
      >
        <TwinklingStars count={150} />
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24 relative z-10">{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
