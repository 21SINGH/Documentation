"use client";

import React from "react";
import styles from "./page.module.scss";
import Prism from "prismjs"; // Import Prism.js
import "prismjs/components/prism-jsx";
import "../../prism-theme.css";
import { code, codeStyle, indexCode, indexStyle, theadComponent } from "./data";
import Code from "@/components/Code";
import Theader from "@/components/Tutorial Header";

const hilight = (code, language = "markup") => {
  return Prism.highlight(code, Prism.languages[language], language);
};

const CircularNavbar = () => {
  const language = "jsx";
  const pageCode = hilight(code, language);
  const pageStyle = hilight(codeStyle, language);
  const parallaxIndex = hilight(indexCode, language);
  const parallaxStyle = hilight(indexStyle, language);

  const pageCodeSnippets = [
    { heading: "./page.jsx", content: pageCode, copyContent: code },
    { heading: "./page.module.scss", content: pageStyle, copyContent: code },
  ];
  const navbarCodeSnippets = [
    {
      heading: "Parallax/index.jsx",
      content: parallaxIndex,
      copyContent: indexCode,
    },
    {
      heading: "Parallax/style.module.scss",
      content: parallaxStyle,
      copyContent: indexStyle,
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.tutorialContainer}>
        <div className={styles.tutorialBody}>
          <Theader theadComponent={theadComponent} />
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
              <h3>Parallax Component</h3>
              <Code codes={navbarCodeSnippets} />
              <h3>Wrapping up</h3>
              <p>As simple as this!</p>
              <p>
                That was it for this animation! useScroll and useTransform are quite hard to
                use at first, but when you get used to it, it&apos;s possible to
                create really cool animations. Hope you learned something!
              </p>
            </div>
          </div>{" "}
        </div>
        <div className={styles.tutorialTableofContent}></div>
      </div>
    </div>
  );
};

export default CircularNavbar;
