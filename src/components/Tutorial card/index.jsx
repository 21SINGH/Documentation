"use client"

import React, { useContext } from "react";
import styles from "./style.module.scss"
import { useRouter } from "next/navigation";

const TutorialCard = ({date , title , info , route}) => {
    const Router = useRouter();

    const handleRoute = () => {
        Router.push(route);
    }

  return (
    <div className={styles.animationPreview}>
      <div className={styles.imageContainer}></div>
      <div className={styles.body}>
        <div className={styles.info}>
          <p>{date}</p>
        </div>
        <div className={styles.text}>
          <div onClick={handleRoute} className={styles.button}>{title}</div>
          <p>
            {info}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
