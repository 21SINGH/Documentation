import styles from "./style.module.scss";
import { Links } from "./data";
import Link from "next/link";
import React from "react";

const Nav = ({ toggleStyle, lightMode, setIsActive }) => {
  const handleClick = () => {
    setIsActive((prev) => !prev); // Toggle isActive state
  };

  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {Links.map((link, i) => {
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <div onClick={link.title === "Mode" ? toggleStyle : null}>
                <Link onClick={handleClick} href={link.href}>
                  {link.title === "Mode"
                    ? lightMode
                      ? "☾ Go Dark"
                      : "⛅︎ Go Light"
                    : link.title}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
