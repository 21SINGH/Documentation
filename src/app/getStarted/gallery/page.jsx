'use client'
import React, { useState } from "react";
import styles from "./page.module.scss";
import { Tutorials } from "./data";
import TutorialCard from "@/components/Tutorial card";

const Index = () => {
  const [visibleCount, setVisibleCount] = useState(9); // State to manage the number of visible components

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 9); // Increment the count by 9 when "Show More" button is clicked
  };

  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <h1>All Tutorials</h1>
      </div>
      <div className={styles.tutorials}>
        {Tutorials.slice(0, visibleCount).map((tutorial, index) => {
          return (
            <TutorialCard
              key={`t_${index}`}
              date={tutorial.date}
              title={tutorial.title}
              info={tutorial.info}
              route={tutorial.route}
            />
          );
        })}
      </div>
      {visibleCount < Tutorials.length && ( // Render "Show More" button if there are more tutorials to show
        <div className={styles.showMoreBtnContainer}>
          <div  onClick={handleShowMore} className={styles.btn}>Show More</div>
        </div>
      )}
    </div>
  );
};

export default Index;
