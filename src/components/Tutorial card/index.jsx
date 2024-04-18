import React, { useRef, useState } from "react";
import styles from "./style.module.scss";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const TutorialCard = ({ date, title, info, route, videoUrl, placeImage }) => {
  const Router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleRoute = () => {
    Router.push(route);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.animationPreview}>
      <motion.div
        className={styles.videoContainer}
        onClick={handleRoute}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          translateY: -10,
          transition: { duration: 0.0000001, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        {isHovered ? (
          <iframe
            className={styles.video}
            width="100%"
            height={315}
            src={isHovered ? `${videoUrl}?autoplay=1&controls=0&mute=1&loop=1` : videoUrl}
          ></iframe>
        ) : (
          <div className={styles.profile}>
            <Image
              // width={100}
              // height={100}
              layout="fill"
              objectFit="cover"
              alt="Image"
              src={placeImage}
            />
          </div>
        )}
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
