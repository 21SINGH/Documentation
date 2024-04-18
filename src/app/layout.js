import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { metadata } from "./metadata";
import Sidebar from "@/components/Sidebar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title> {/* Set title from metadata */}
        <meta name="description" content={metadata.description} />{" "}
        {/* Set description from metadata */}
      </head>

      <body className={inter.className}>
        <Navbar/>
        <div className="home">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="container">
            {children}
            <SpeedInsights />
          </div>
        </div>
      </body>
    </html>
  );
}
