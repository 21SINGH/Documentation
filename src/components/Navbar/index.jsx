"use client";
import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Nav from "./Nav";
import Filter from "./Filter";

export const Navbar = () => {

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

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <div className={`${styles.main} ${lightMode ? styles.light : styles.dark}`}>
      <div className={styles.navbar}>
        <div className={styles.imgContainer}><img src="/tree.jpeg" alt="icon" /></div>
        <div onClick={toggleMenu} className={styles.el}>
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="28"
          >
            <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"></path>
          </svg>
        </div>
      </div>
      {isActive && (
        <div className={styles.model}>
          <Nav
            toggleStyle={toggleStyle}
            lightMode={lightMode}
            setIsActive={setIsActive}
          />
        </div>
      )}
      {isActive && <Filter />}
    </div>
  );
};
