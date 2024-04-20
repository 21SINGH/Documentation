"use client";

import React from "react";
import styles from "./page.module.scss";
import Prism from "prismjs"; // Import Prism.js
import "prismjs/components/prism-jsx";
import "../../prism-theme.css";
import {
  pageIndex,
  pageStyle,
  projectCode,
  projectStyle,
  descriptionIndex,
  descriptionStyle,
  earthIndex,
  subProjectIndex,
  subProjectStyle,
  tilteStyle,
  titleIndex,
  smoothScroll,
  theadComponent,
} from "./data";
import Code from "@/components/Code";
import Theader from "@/components/Tutorial Header";

const hilight = (code, language = "markup") => {
  return Prism.highlight(code, Prism.languages[language], language);
};

const ProjectGallery = () => {
  const language = "jsx";
  const paCode = hilight(pageIndex, language);
  const paStyle = hilight(pageStyle, language);
  const proIndex = hilight(projectCode, language);
  const proStyle = hilight(projectStyle, language);
  const desCode = hilight(descriptionIndex, language);
  const desStyle = hilight(descriptionStyle, language);
  const titCode = hilight(titleIndex, language);
  const titStyle = hilight(tilteStyle, language);
  const subCode = hilight(subProjectIndex, language);
  const subStyle = hilight(subProjectStyle, language);
  const earCode = hilight(earthIndex, language);
  const smoothCode = hilight(smoothScroll, language);

  const pageCodeSnippets = [
    { heading: "Page Component", content: paCode, copyContent: pageIndex },
    { heading: "Page Style", content: paStyle, copyContent: pageStyle },
  ];

  const projectEarthCodeSnippets = [
    {
      heading: "Project Earth/index.jsx",
      content: proIndex,
      copyContent: projectCode,
    },
    {
      heading: "Project Earth/style.module.scss",
      content: proStyle,
      copyContent: projectStyle,
    },
  ];

  const descriptionCodeSnippets = [
    {
      heading: "Description/index.jsx",
      content: desCode,
      copyContent: descriptionIndex,
    },
    {
      heading: "Description/style.module.scss",
      content: desStyle,
      copyContent: descriptionStyle,
    },
  ];

  const titleCodeSnippets = [
    {
      heading: "Title/index.jsx",
      content: titCode,
      copyContent: titleIndex,
    },
    {
      heading: "Title/style.module.scss",
      content: titStyle,
      copyContent: tilteStyle,
    },
  ];

  const subProjectCodeSnippets = [
    {
      heading: "Sub Project/index.jsx",
      content: subCode,
      copyContent: subProjectIndex,
    },
    {
      heading: "Title/style.module.scss",
      content: subStyle,
      copyContent: subProjectStyle,
    },
  ];

  const earthCodeSnippets = [
    {
      heading: "Earth/index.jsx",
      content: earCode,
      copyContent: earthIndex,
    }
  ];
  const smoothScrollCodeSnippets = [
    {
      heading: "SmoothScroll/index.jsx",
      content: smoothCode,
      copyContent: smoothScroll,
    }
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
              <h3>Project Component</h3>
              <Code codes={projectEarthCodeSnippets} />
              <h3>Earth 3D Modal Component</h3>
              <Code codes={earthCodeSnippets} />
              <h3>Sub Project Component</h3>
              <Code codes={subProjectCodeSnippets} />
              <h3>Smooth Scroll Component</h3>
              <Code codes={smoothScrollCodeSnippets} />
              <h3>Description Component</h3>
              <Code codes={descriptionCodeSnippets} />
              <h3>Title Component</h3>
              <Code codes={titleCodeSnippets} />
              <h3>Wrapping up</h3>
              <p>As simple as this!</p>
              <p>
                That was it for this animation! Three.js is quite hard to
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

export default ProjectGallery;
