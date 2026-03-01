"use client";
import { MotionConfig } from "framer-motion";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body className="bg-gradient-to-br from-indigo-900 to-black min-h-screen">
        <MotionConfig transition={{ type: "spring", damping: 25, stiffness: 120 }}>
          <main className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 m-4">
            {children}
          </main>
        </MotionConfig>
      </body>
    </html>
  );
}