// DropdownViewer.js
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import styles from "./style.module.scss";

const DropdownViewer = ({
  dropdowns,
  isOpen,
  toggleDropdown,
  handleClick,
  router,
}) => {
  const pathname = usePathname();

  const url = `${pathname}`;

  const handleItemClick = (dropdownIndex, bodyIndex, bodyItem) => {
    handleClick(bodyIndex);
    router.push(bodyItem.link);
  };

  return (
    <div className={styles.dropdownContainer}>
      {dropdowns.map((item, index) => (
        <div
          className={`${styles.dropdown} ${isOpen ? styles.active : ""}`}
          key={index}
        >
          <div className={styles.dropdownHeader} onClick={toggleDropdown}>
            <h3>{item.header}</h3>
            <div className={styles.svg}>
              <svg
                height="20"
                viewBox="0 0 48 48"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                onClick={toggleDropdown}
                style={{
                  transform: isOpen
                    ? "rotate(0deg) translateZ(0px)"
                    : "rotate(-90deg) translateZ(0px)",
                }}
              >
                <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z" />
              </svg>
            </div>
          </div>
          <div
            className={`${styles.dropdownBody} ${
              isOpen ? styles.dropdownBodyOpen : ""
            }`}
          >
            {item.body.map((bodyItem, bodyIndex) => (
              <div
                className={`${styles.el} ${
                  url === bodyItem.link ? styles.active : ""
                }`}
                key={bodyIndex}
                onClick={() => handleItemClick(index, bodyIndex, bodyItem)}
              >
                <p>{bodyItem.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownViewer;
