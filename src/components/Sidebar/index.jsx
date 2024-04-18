// Sidebar.js
'use client'
import React, { useState } from "react";
import styles from "./style.module.scss";
import { GetStarted, Landingpage, Preloader, Navbar, ScrollTrigger , Hover} from "./data";
import DropdownViewer from "./dropdownViewer";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js instead of next/navigation

const Sidebar = () => {
  const [dropdownStates, setDropdownStates] = useState({
    getStarted: true,
    landing: true,
    navbar:true,
    preloader: true,
    scroll: true,
    hover: true,
  });

  const [activeItem, setActiveItem] = useState(null); // State to track the active item

  const toggleDropdown = (dropdownName) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  const router = useRouter();

  const handleClick = (index) => {
    setActiveItem(index); // Set the active item across all dropdowns
  };

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.gettingStarted}>
        <DropdownViewer
          dropdowns={GetStarted}
          isOpen={dropdownStates.getStarted}
          activeItem={activeItem}
          toggleDropdown={() => toggleDropdown("getStarted")}
          handleClick={handleClick}
          router={router}
        />
      </div>
      <div className={styles.landing}>
        <DropdownViewer
          dropdowns={Landingpage}
          isOpen={dropdownStates.landing}
          activeItem={activeItem}
          toggleDropdown={() => toggleDropdown("landing")}
          handleClick={handleClick}
          router={router}
        />
      </div>
      <div className={styles.preloader}>
        <DropdownViewer
          dropdowns={ScrollTrigger}
          isOpen={dropdownStates.scroll}
          activeItem={activeItem}
          toggleDropdown={() => toggleDropdown("scroll")}
          handleClick={handleClick}
          router={router}
        />
      </div>
      <div className={styles.preloader}>
        <DropdownViewer
          dropdowns={Hover}
          isOpen={dropdownStates.hover}
          activeItem={activeItem}
          toggleDropdown={() => toggleDropdown("hover")}
          handleClick={handleClick}
          router={router}
        />
      </div>
      <div className={styles.preloader}>
        <DropdownViewer
          dropdowns={Preloader}
          isOpen={dropdownStates.preloader}
          activeItem={activeItem}
          toggleDropdown={() => toggleDropdown("preloader")}
          handleClick={handleClick}
          router={router}
        />
      </div>
      <div className={styles.preloader}>
        <DropdownViewer
          dropdowns={Navbar}
          isOpen={dropdownStates.navbar}
          activeItem={activeItem}
          toggleDropdown={() => toggleDropdown("navbar")}
          handleClick={handleClick}
          router={router}
        />
      </div>
    </div>
  );
};

export default Sidebar;
