"use client";

import { createContext, useState } from "react";

export const TutorialContext = createContext(null);

export const TutorialProvider = (props) => {

  
  return (
    <TutorialProvider.Provider>
      {props.children}
    </TutorialProvider.Provider>
  );
};
