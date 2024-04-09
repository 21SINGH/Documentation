"use client";

import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import Prism, { languages } from "prismjs"; // Import Prism.js
import "prismjs/components/prism-jsx";
import "../../prism-theme.css";
import { useEffect, useState } from "react";
import { code, indexCode, indexStyle } from "./data";
import Code from "@/components/Code";

const hilight = (code, language = "markup") => {
  return Prism.highlight(code, Prism.languages[language], language);
};

const Aurora = () => {
  const language = "jsx";
  const pageCode = hilight(code, language);
  const auroraIndex = hilight(indexCode, language);
  const auroraStyle = hilight(indexStyle, language);

  const pageCodeSnippets = [{ heading: "Page Component", content: pageCode,copyContent :code }];
  const auroraCodeSnippets = [
    { heading: "components/AuroHero/index.jsx", content: auroraIndex , copyContent :indexCode },
    { heading: "components/AuroHero/style.module.scss", content: auroraStyle,copyContent :indexStyle },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.tutorialContainer}>
        <div className={styles.tutorialBody}>
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
            <h1 className={styles.title1}>Aurora Effect Landing Page</h1>
            <h1 className={styles.title2}>
              How to make aurora effect landing page using Next.js and Framer
              Motion.
            </h1>
            <p className={styles.decscription}>
              A website tutorial featuring a aurora effect, where the lower part
              of the screen feels like aurora from <span>Ladakh India,</span>{" "}
              made with Next.js and Framer Motion. Inspired by
              https://www.sidebar.com/.{" "}
            </p>
            <Link className={styles.demoLink} href="/getStarted/gallery">
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
            <Link className={styles.sourceCode} href="/getStarted/gallery">
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
                src="/videos/aurora.mp4"
                width="100%"
                height={100}
                preload="auto"
                autoPlay
                loop
                playsInline
              ></video>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.blog}>
              <h2>Initializing the project</h2>
              <p>
                Let&apos;s start the project by creating a Next.js application.
                We can do that by running{" "}
                <code className="language-jsx">
                  npx create<span className="token operator">-</span>next
                  <span className="token operator">-</span>app@latest client
                </code>{" "}
                inside of a terminal.
              </p>
              <h2>Adding the HTML and CSS</h2>
              <p>
                We can delete everything in the{" "}
                <code className="language-jsx">
                  page<span className="token punctuation">.</span>js
                </code>{" "}
                ,{" "}
                <code className="language-jsx">
                  global<span className="token punctuation">.</span>css
                </code>{" "}
                and{" "}
                <code className="language-jsx">
                  page<span className="token punctuation">.</span>module
                  <span className="token punctuation">.</span>css
                </code>{" "}
                and add our own HTML and CSS, to start with a nice blank
                application.
              </p>
              <div className={styles.note}>
                <ul>
                  <li>
                    We will use Sass for the stylesheets, so we can run{" "}
                    <code className="language-jsx">npm i sass</code>.
                  </li>
                  <li>
                    We will use Framer Motion for the animation, so we can run{" "}
                    <code className="language-jsx">
                      npm i framer<span className="token operator">-</span>
                      motion
                    </code>
                    .
                  </li>
                </ul>
              </div>
              <h3>Page Component</h3>
              <p>
                The parent component will act as the parent of the two main
                components.
              </p>
              <Code codes={pageCodeSnippets} />
              <h3>Aurora Hero Component</h3>
              <Code codes={auroraCodeSnippets} />
            </div>
          </div>{" "}
        </div>
        <div className={styles.tutorialTableofContent}></div>
      </div>
    </div>
  );
};

export default Aurora;
