export const code = `"use client";

import { useEffect, useState } from "react";
import Preloader from "../components/Preloader/index";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0); 
        // after loading the preloader the site will only start from beginning not where u letf it
      }, 2000);
    })();
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
    </main>
  );
}


`;

export const indexCode = `'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]

export default function Index() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height:0});

    useEffect( () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

    useEffect( () => {
        if(index == words.length - 1) return;
        setTimeout( () => {
            setIndex(index + 1)
        }, index == 0 ? 1000 : 150)
    }, [index])

    const initialPath = \`M0 0 L\${dimension.width} 0 L\${dimension.width} 
    \${dimension.height} Q\${dimension.width/2} \${dimension.height + 300} 0 \${dimension.height}  L0 0\`;
    const targetPath = \`M0 0 L\${dimension.width} 0 L\${dimension.width} 
    \${dimension.height} Q\${dimension.width/2} \${dimension.height} 0 \${dimension.height}  L0 0\`;


    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
        }
    }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
            {dimension.width > 0 && 
            <>
                <motion.p variants={opacity} initial="initial" animate="enter"><span></span>{words[index]}</motion.p>
                <svg>
                    <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                </svg>
            </>
            }
        </motion.div>
    )
}
`;

export const indexStyle = `// style.module.scss

.introduction{
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 99;
  background-color: #141516;
  svg{
      position: absolute;
      top: 0;
      width: 100%;
      height: calc(100% + 300px);
      path{
          fill: #141516;
      }
  }
  p{
      display: flex;
      color: white;
      font-size: 42px;
      align-items: center;
      position: absolute;
      z-index: 1;
      span{
          display: block;
          width: 10px;
          height: 10px;
          background-color: white;
          border-radius: 50%;
          margin-right: 10px;
      }
  }
}
`;

export const indexAnim = `// anim.js

export const slideUp = {
    initial: {
        y: "0"
    },
    exit: {
        y:"-100vh",
        transition: {
             duration:  0.8,
             ease : [0.76, 0 , 0.24, 1],
             delay : 0.2
        }
    }
}


export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: {duration: 1, delay: 0.2}
    },
}

`;

export const theadComponent = {
  title1 : "Curve Preloader",
  title2 : "Build an Awwwards Curved Preloader using Next.js and Framer Motion.",
  decscription1 : "A website tutorial featuring an Awwwards curve preloader with text rendering over it, made with Next.js and Framer Motion.",
  span:"",
  decscription2: "A curve is created using SVG path commands Inspired by https://dennissnellenberg.com/.",
  demoLink : "#",
  SourceCode : "https://github.com/21SINGH/curve_preloader",
  video : "/videos/curve.mp4"
}