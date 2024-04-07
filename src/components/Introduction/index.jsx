// Introduction.js
"use client";
import React, { useContext } from "react";
import styles from "./style.module.scss";
import { useRouter } from "next/navigation";
import { ActiveContext } from "@/context/activeState";
import TutorialCard from "../Tutorial card";
import { Tutorials } from "./data";

const Introduction = () => {
  const activeState = useContext(ActiveContext);
  const router = useRouter();

  const seeAll = () => {
    router.push("/getStarted/gallery");
    const componentName = "Gallery";
    activeState.handleComponentChange(componentName);
  };
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <h1>
          Welcome to my documentation, I&apos;m <span>Sourav</span>. Here, I
          document everything. Demos, code, and more for you to explore.
        </h1>
      </div>
      <div className={styles.titleContainer}>
        <h2>Recent Tutorials</h2>
        <div className={styles.button} onClick={seeAll}>
          See All
        </div>
      </div>
      <div className={styles.tutorials}>
        {Tutorials.map((tutorial, index) => {
          return (
            <TutorialCard
              key={`t_${index}`}
              date={tutorial.date}
              title={tutorial.title}
              info={tutorial.info}
              route = {tutorial.route} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default Introduction;
