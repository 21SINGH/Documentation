import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

const Theader = ({ theadComponent }) => {
  return (
    <div className={styles.animationHeader}>
      <div className={styles.nav}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.00016 0.666828L6.70016 1.38349L2.5835 5.50016L11.3335 5.50016L11.3335 6.50016L2.5835 6.50016L6.70016 10.6168L6.00016 11.3335L0.66683 6.00016L6.00016 0.666828Z"></path>
        </svg>
        <Link href="/getStarted/gallery">Tutorial</Link>
      </div>
      <div className={styles.info}>
        <div className={styles.profileContainer}>
          <Image
            className={styles.profile}
            width={100}
            height={100}
            alt={"image"}
            src={`/personal.jpeg`}
          />
        </div>
        <div className={styles.body}>
          <p className={styles.name}>Sourav Singh</p>
          <div className={styles.extra}>
            <p>{"March 8, 2024 "}</p>
            <p>/</p>
            <div className={styles.difficulty}></div>
            <p>Intermediate</p>
            <p>/</p>
            <img src="/time_medium .svg" />
            <p>Medium</p>
          </div>
        </div>
      </div>
      <h1 className={styles.title1}>{theadComponent.title1}</h1>
      <h1 className={styles.title2}>{theadComponent.title2}</h1>
      <p className={styles.decscription}>
        {theadComponent.decscription1} <span>{theadComponent.span}</span>{" "}
        {theadComponent.decscription2}{" "}
      </p>
      <Link className={styles.demoLink} href={theadComponent.demoLink}>
        live Demo
        <svg
          width="9"
          height="8"
          viewBox="0 0 9 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.49966 1.01851C8.50988 0.742553 8.29446 0.510563 8.01851 0.500342L3.52159 0.33379C3.24564 0.32357 3.01365 0.538989 3.00343 0.814942C2.99321 1.09089 3.20862 1.32288 3.48458 1.33311L7.48184 1.48115L7.33379 5.47841C7.32357 5.75436 7.53899 5.98635 7.81494 5.99657C8.09089 6.0068 8.32288 5.79138 8.3331 5.51542L8.49966 1.01851ZM1.34023 7.8664L8.34023 1.3664L7.65977 0.633603L0.659774 7.1336L1.34023 7.8664Z"
            fill="#4479E2"
          ></path>
        </svg>
      </Link>
      <Link className={styles.sourceCode} href={theadComponent.SourceCode}>
        Source Code{" "}
        <svg
          width="9"
          height="8"
          viewBox="0 0 9 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.49966 1.01851C8.50988 0.742553 8.29446 0.510563 8.01851 0.500342L3.52159 0.33379C3.24564 0.32357 3.01365 0.538989 3.00343 0.814942C2.99321 1.09089 3.20862 1.32288 3.48458 1.33311L7.48184 1.48115L7.33379 5.47841C7.32357 5.75436 7.53899 5.98635 7.81494 5.99657C8.09089 6.0068 8.32288 5.79138 8.3331 5.51542L8.49966 1.01851ZM1.34023 7.8664L8.34023 1.3664L7.65977 0.633603L0.659774 7.1336L1.34023 7.8664Z"
            fill="#4479E2"
          ></path>
        </svg>
      </Link>
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          src={theadComponent.video}
          width="100%"
          height={100}
          preload="auto"
          autoPlay
          loop
          playsInline
        ></video>
      </div>
    </div>
  );
};

export default Theader;
