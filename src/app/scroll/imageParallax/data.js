export const code = `'use client'

import styles from './page.module.scss'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import Parallax from '@/components/Parallax'

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <div>
      <div className={styles.top}><h1>Scroll Down</h1></div>
      <Parallax />
    </div>
  )
}
`;

export const codeStyle =`.top{
  color: whitesmoke;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;

  h1{
      font-size: 140px;
  }
}`

export const indexCode = `"use client";

import styles from "./style.module.scss";
import picture1 from "../../../public/images/decimal.jpg";
import picture2 from "../../../public/images/locomotive.png";
import picture3 from "../../../public/images/panda.jpg";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const word = "with framer-motion";

export default function Parallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const sms = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const mds = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lgs = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    {
      src: picture1,
      y: 0
    },
    {
      src: picture2,
      y: lgs
    },
    {
      src: picture3,
      y: mds
    }
  ];

  return (
    <div className={styles.container} ref={container}>
      <div className={styles.body}>
        <motion.h1 style={{ y: sms }}>Parallax</motion.h1>
        <h1>Scroll</h1>
        <div className={styles.word}>
          <p>
            {word.split("").map((letter, i) => {
              const y = useTransform(
                scrollYProgress,
                [0, 1],
                [0, Math.floor(Math.random() * -75) - 25]
              );
              return (
                <motion.span style={{ top: y }} key={\`l_\${i}\`}>
                  {letter}
                </motion.span>
              );
            })}
          </p>
        </div>
        <div className={styles.images}>
          {images.map(({ src, y }, i) => (
            <motion.div
              style={{ y }}
              key={\`i_\${i}\`}
              className={styles.imageContainer}
            >
              <Image src={src} placeholder="blur" alt="image" fill />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
`;

export const indexStyle = `// style.module.scss

.container{
  margin-top: 10vh;
  min-height: 100vh;

  .body{
      margin-left: 10vw;
      h1{
          margin: 0px;
          margin-top: 10px;
          font-size: 5vw;
          line-height: 5vw;
          text-transform: uppercase;
      }
      p{
          color: white;
          margin: 0px;
          margin-top: 10px;
          font-size: 3vw;
          text-transform: uppercase;
          span{
              position: relative;
          }
      }
  }

  .images{
      display: flex;
      width: 100%;
      justify-content: center;
      position: relative;
      margin-top: 5vh;

      .imageContainer{
          position: absolute;
          img{
              object-fit: cover;
          }
          &:nth-of-type(1){
              height: 60vh;
              width: 50vh;
              z-index: 1;
          }
          &:nth-of-type(2){
              left: 55vw;
              top: 15vh;
              height: 40vh;
              width: 30vh;
              z-index: 2;
          }
          &:nth-of-type(3){
              left: 27.5vw;
              top: 40vh;
              height: 25vh;
              width: 20vh;
              z-index: 3;
          }
      }
  }
}
`;


export const theadComponent = {
  title1 : "Image Parallax",
  title2 : "Build an Awwwards winning Image Parallax using Nextjs and Framer Motion.",
  decscription1 : "A website tutorial featuring an Awwwards winning Image Parallax, made with Next.js and Framer Motion. Additionally smooth scroll added via",
  date:"April 17, 2024",
  span:"Lenis Scroll.",
  decscription2: "Changing posion of element were done via using useScroll and useTransform hook from framer motion.",
  demoLink : "#",
  SourceCode : "https://github.com/21SINGH/image_parallax",
  video : "https://www.youtube.com/embed/bo5DhL4RmP0"
}