import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StarBackground from "../components/StarBackground";
import { ReactNode } from "react";

export const metadata = {
  title: "NSSC 2026",
  description: "National Students' Space Challenge",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StarBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}