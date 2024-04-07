// Sidebar.js
import React, { useContext, useState } from "react";
import styles from "./style.module.scss";
import { GetStarted, Landingpage, Mouse, Scroll,Menu } from "./data";
import DropdownViewer from "./dropdownViewer";
import { useRouter } from "next/navigation";
import { ActiveContext } from "@/context/activeState";

const Sidebar = () => {

  const activeState = useContext(ActiveContext);
  console.log(activeState);

  const [dropdownStates, setDropdownStates] = useState({
    getStarted: true,
    mouse: true,
    scroll: true,
    menu: true,
    landing: true
  });

  const [activeItem, setActiveItem] = useState(null); // State to track the active item

  const toggleDropdown = (dropdownName) => {
    setDropdownStates(prevState => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName]
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
          toggleDropdown={() => toggleDropdown('getStarted')}
          handleClick={handleClick}
          router={router}
          activeComponent={activeState.activeComponent}
          onComponentChange={activeState.handleComponentChange}
        />
      </div>
      {/* <div className={styles.mouse}>
        <DropdownViewer
          dropdowns={Mouse}
          isOpen={dropdownStates.mouse}
          activeItem={activeItem}
          toggleDropdown={() => toggleDropdown('mouse')}
          handleClick={handleClick}
          router={router}
          activeComponent={activeState.activeComponent}
          onComponentChange={activeState.handleComponentChange}
        />
      </div>
      <div className={styles.scroll}>
        <DropdownViewer
          dropdowns={Scroll}
          isOpen={dropdownStates.scroll}
          activeItem={activeItem}
          toggleDropdown={() => toggleDropdown('scroll')}
          handleClick={handleClick}
          router={router}
          activeComponent={activeState.activeComponent}
          onComponentChange={activeState.handleComponentChange}
        />
      </div>
      <div className={styles.menu}>
        <DropdownViewer
          dropdowns={Menu}
          isOpen={dropdownStates.menu}
          activeItem={activeItem}
          toggleDropdown={() => toggleDropdown('menu')}
          handleClick={handleClick}
          router={router}
          activeComponent={activeState.activeComponent}
          onComponentChange={activeState.handleComponentChange}
        />
      </div> */}

      <div className={styles.landing}>
        <DropdownViewer
          dropdowns={Landingpage}
          isOpen={dropdownStates.landing}
          activeItem={activeItem}
          toggleDropdown={() => toggleDropdown('landing')}
          handleClick={handleClick}
          router={router}
          activeComponent={activeState.activeComponent}
          onComponentChange={activeState.handleComponentChange}
        />
      </div>
    
    </div>
  );
};

export default Sidebar;

