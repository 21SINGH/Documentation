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
import Theader from "@/components/Tutorial Header";

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

  const theadComponent = {
    title1 : "Aurora Effect Landing Page",
    title2 : "How to make aurora effect landing page using Next.js and Framer Motion.",
    decscription1 : "A website tutorial featuring a aurora effect, where the lower part of the screen feels like aur from",
    span:"Ladakh India,",
    decscription2: "made with Next.js and Framer Motion. Inspired by https://www.sidebar.com/.",
    demoLink : "/getStarted/gallery",
    SourceCode : "/getStarted/gallery",
    video : "/videos/aurora.mp4"
  }

  return (
    <div className={styles.main}>
      <div className={styles.tutorialContainer}>
        <div className={styles.tutorialBody}>
          <Theader theadComponent={theadComponent}/>
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
              <h3>Wrapping up</h3>
            <p>As simple as this!</p>
            <p>Hope you liked the animation, it&apos;s crazy what we can create with simple css properties and an Use Motion Template. Hope you learned something!</p>
            </div>
          </div>{" "}
        </div>
        <div className={styles.tutorialTableofContent}></div>
      </div>
    </div>
  );
};

export default Aurora;
