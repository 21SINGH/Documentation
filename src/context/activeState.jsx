import { createContext, useState, useEffect } from "react";

export const ActiveContext = createContext(null);

export const ActiveProvider = (props) => {
  // Get the initial activeComponent from localStorage or set it to "Introduction" if not found
  const [activeComponent, setActiveComponent] = useState(
    localStorage.getItem("activeComponent") || "Introduction"
  );

  // useEffect to update localStorage whenever activeComponent changes
  useEffect(() => {
    localStorage.setItem("activeComponent", activeComponent);
  }, [activeComponent]);

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };
  
  return (
    <ActiveContext.Provider value={{ activeComponent, handleComponentChange }}>
      {props.children}
    </ActiveContext.Provider>
  );
};
