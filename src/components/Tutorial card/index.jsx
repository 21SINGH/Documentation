import React, { useContext, useRef } from "react";
import styles from "./style.module.scss";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const TutorialCard = ({ date, title, info, route, videoUrl }) => {
  const Router = useRouter();
  const videoRef = useRef(null);

  const handleRoute = () => {
    Router.push(route);
  };

  const handleVideoHover = (event) => {
    const video = videoRef.current;
    if (event.type === "mouseenter") {
      video.play();
    } else if (event.type === "mouseleave") {
      video.pause();
    }
  };

  return (
    <div
      className={styles.animationPreview}
    >
      <motion.div
        className={styles.videoContainer}
        onMouseEnter={handleVideoHover}
        onMouseLeave={handleVideoHover}
        onClick={handleRoute}
        whileHover={{
          translateY: -10,
          transition: { duration: 0.0000001, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        <video
          className={styles.video}
          src={videoUrl}
          width="100%"
          height={100}
          preload="auto"
          loop
          playsInline
          ref={videoRef}
        ></video>
      </motion.div>
      <div className={styles.body}>
        <div className={styles.info}>
          <p>{date}</p>
        </div>
        <div className={styles.text}>
          <div onClick={handleRoute} className={styles.button}>
            {title}
          </div>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
