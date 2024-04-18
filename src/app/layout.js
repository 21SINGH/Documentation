"use client";

import React from "react";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { metadata } from "./metadata";
import Sidebar from "@/components/Sidebar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [lightMode, setLightMode] = useState(() => {
    // Check if window is defined before accessing localStorage
    if (typeof window !== "undefined") {
      // Retrieve mode preference from local storage on component mount
      const savedMode = localStorage.getItem("mode");
      return savedMode ? JSON.parse(savedMode) : false;
    } else {
      return false; // Default to false if localStorage is not available
    }
  });

  // Function to toggle light/dark mode
  const toggleStyle = () => {
    setLightMode((prevMode) => {
      const newMode = !prevMode;
      if (typeof window !== "undefined") {
        // Store mode preference in local storage
        localStorage.setItem("mode", JSON.stringify(newMode));
      }
      return newMode;
    });
  };

  // Apply light/dark mode to root element on state change
  useEffect(() => {
    const root = document.documentElement;
    if (lightMode) {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
  }, [lightMode]);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title> {/* Set title from metadata */}
        <meta name="description" content={metadata.description} />{" "}
        {/* Set description from metadata */}
      </head>

      <body className={inter.className}>
        <Navbar toggleStyle={toggleStyle} lightMode={lightMode} />
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
