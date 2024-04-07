"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import Nav from "./Nav";
import Filter from "./Filter";

export const Navbar = ({ toggleStyle, lightMode }) => {
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
