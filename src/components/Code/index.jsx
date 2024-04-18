import React, { useState } from "react";
import DOMPurify from "isomorphic-dompurify";
import styles from "./style.module.scss"

const Code = ({ codes }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHeadingClick = (index) => {
    setActiveIndex(index === activeIndex ? activeIndex : index);
  };
  const handleCopyClick = () => {
    const codeToCopy = codes[activeIndex].copyContent;
    navigator.clipboard
      .writeText(codeToCopy)
      .then(() => alert("Code copied to clipboard"))
      .catch((error) => console.error("Failed to copy code: ", error));
  };

  return (
    <div className={styles.multicode}>
      <div className={styles.titleContainer}>
        <div className={styles.titles}>
          {codes.map((code, index) => (
            <div
              key={index}
              className={styles.title}
              onClick={() => handleHeadingClick(index)}
            >
              <h7 className={activeIndex === index ? `${styles.active}`: ""}>
                {code.heading}
              </h7>
            </div>
          ))}
        </div>

        <div onClick={handleCopyClick} className={styles.copy}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
          >
            <path d="M180 975q-24 0-42-18t-18-42V312h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42V235q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440V235H300v560Zm0 0V235v560Z"></path>
          </svg>
        </div>
      </div>
      <div className={styles.codeContainer}>
        {codes.map((code, index) => (
          <div
            key={index}
            style={{ display: activeIndex === index ? "block" : "none" }}
          >
            <pre className="prism-code language-jsx">
              <code
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(code.content),
                }}
              ></code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Code;
