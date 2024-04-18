export const code = `import Spinner from '@/components/Spinner'
import React from 'react'

const page = () => {
  return (
    <div>
      <Spinner />
    </div>
  )
}

export default page

`;

export const indexCode = `// Spinner.js

import React from 'react';
import styles from './Spinner.module.scss'; // Import your spinner styles

const Spinner = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

export default Spinner;
`;

export const indexStyle = `/* Spinner.module.scss */

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); ; /* Semi-transparent black overlay */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .spinner {
    border: 5px solid #f3f3f3; /* Light grey */
    border-top: 5px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin-right: 10px;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  `;

export const theadComponent = {
  title1 : "Spinner ",
  title2 : "How to make an easy spinner that can be used while page transition.",
  decscription1 : "A website tutorial featuring a spinner effect.",
  date:"April 18, 2024",
  span:"",
  decscription2: "made with Next.js and scss.",
  demoLink : "#",
  SourceCode : "https://github.com/21SINGH/spinner",
  video : "https://www.youtube.com/embed/PP9NlwZZLL8"
}