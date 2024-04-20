export const pageIndex = `'import Project from '@/components/ProjectEarth';
import React from 'react';
import styles from "./page.module.scss";

const page = () => {
    return (
        <div className={styles.main}>
            <div className={styles.top}>Scroll Downwards</div>
            <Project />
            <div className={styles.bottom}>Scroll Upwards</div>
        </div>
    )
}

export default page
`;

export const pageStyle = `.main{
  background-color: rgba(9, 9, 9, 0.915);
  color: var(--text-secondary);
}

.top{
  height: 100vh;
  width: 100vw;
  // border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10vw;
}

.bottom{
  height: 80vh;
  width: 100vw;
  // border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10vw;
}`;

export const projectCode = `'use client'

import styles from "./style.module.scss";
import dynamic from "next/dynamic";
import SubProject from "./Sub Project";
import SmoothScroll from "@/components/SmoothScroll";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Earth = dynamic(() => import("@/components/ProjectEarth/Earth"), {
  ssr: false,
  loading: () => <img src="/assets/earth.png" alt="" />,
});
export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], [50, 0]);
  return (
    <SmoothScroll>
      <div className={styles.main}>
          <div ref={container} className={styles.container}>
            <Earth />
            <SubProject />
          </div>
      </div>
    </SmoothScroll>
  );
}
`;

export const projectStyle = `.main {
  height: 100vh;
  width: 100vw;
  font-family: Boeing;
  z-index: 10;

  .container {
    height: 100vh;
    width: 100%;
    background-color: rgba(9, 9, 9, 0.915);
    display: flex;
    align-items: center;
    position: relative;
    z-index: 5;
    padding-bottom: 20px;

    img {
      height: 100%;
    }
  }
}
`;


export const descriptionIndex = `import React from 'react'
import styles from './style.module.scss';

export default function index({data, selectedProject}) {

    const crop = (string, maxLength) => {
        return string.substring(0, maxLength);
    }
    
    return (
        <div className={styles.descriptions}>
            {
                data.map( (project, i) => {
                    const { title, description } = project;
                    return (
                    <div 
                        key={i} 
                        className={styles.description}
                        style={{clipPath: selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%"}}
                    >
                        <p>{crop(title, 10)}</p>
                        <p>{description}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}`;

export const descriptionStyle = `.descriptions{
  position: absolute;
  top: 2px;
  height: 100%;
  width: 100%;
  z-index: 2;
  pointer-events: none;
  .description{
      background-color: rgba(93, 89, 89, 0.602);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 10%;
      padding-right: 10%;
      clip-path: inset(50% 0 50%);
      transition: clip-path .4s;
      p{
          padding-top: 20px;
          &:nth-of-type(1){
              color: greenyellow;
              text-transform: uppercase;
              font-weight: 700;
              font-size: 8vw;
              line-height: 7.5vw;
              margin: 0px;
              position: relative;
              z-index: 1;
              // width: 60%;
          }
          &:nth-of-type(2){
              margin-left: 3%;
              width: 50%;
              font-size: 20px;
              font-weight: 700;
              color: whitesmoke;
          }
      }
  }
}`;

export const earthIndex = `import { Canvas, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { useTransform,useScroll } from 'framer-motion';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { motion } from 'framer-motion-3d';

export default function Earth() {
    const scene = useRef(null);

    const [color, normal, aoMap] = useLoader(TextureLoader, [
        '/assets/color.jpg',
        '/assets/normal.png',
        '/assets/occlusion.jpg'
    ]);

    // Calculate rotation based on scroll position
    const rotationY = useTransform(
        useScroll().scrollYProgress,
        [0, 1],
        [0, Math.PI * 2]
    );

    return (
        <Canvas ref={scene}>
            <ambientLight intensity={0.1} />
            <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
            <motion.mesh scale={2.5} rotation-y={rotationY} position={[1, 0, 0.75]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
            </motion.mesh>
        </Canvas>
    );
}
`;

export const subProjectIndex= `
'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from '../Title';
import Descriptions from '../Description';

const data = [
    {
        title: "COMPKILLER",
        description: "Crafting an avant-garde web scraping marvel for Amazon.",
        speed: 0.5
    },
    {
        title: "Gramchat",
        description: "Pioneering the digital dialogue landscape.",
        speed: 0.8
    },
    {
        title: "HQIF",
        description: "Embark on a visual odyssey with our high-quality image fetcher tailored for your desires. ",
        speed: 0.67
    }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}`;

export const  subProjectStyle = `.container{
  position: absolute;
  z-index: 1;
  width: 100%;
}`;

export const titleIndex = `
import React, { useRef } from 'react'
import styles from './styles.module.scss';
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';

export default function index({data, setSelectedProject}) {
  return (
    <div className={styles.titles}>
        {
            data.map( (project, i) => {
                return <Title key={i} data={{...project, i}} setSelectedProject={setSelectedProject}/>
            })
        }
    </div>
  )
}

function Title({data, setSelectedProject}) {

    const { title, speed, i } = data;
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', \`\${25 / speed}vw end\`]
    })

    const clipProgress = useTransform(scrollYProgress, [0,1], [100, 0]);
    const clip = useMotionTemplate\`inset(0 \${clipProgress}% 0 0)\`;
    
    return (
        <div ref={container} className={styles.title}>
            <div 
                className={styles.wrapper}
                onMouseOver={() => {setSelectedProject(i)}}
                onMouseLeave={() => {setSelectedProject(null)}}
            >
                <motion.p style={{clipPath: clip}}>
                    {title}
                </motion.p>
                <p>
                    {title}
                </p>
            </div>
        </div>
    )
}`

export const tilteStyle = `.titles{
  width: 100%;
  border-top: 1px solid rgba(183, 171, 152, 0.25);
  .title{
      border-bottom: 1px solid rgba(183, 171, 152, 0.25);
      cursor: default;
      position: relative;
      z-index: 2;
      .wrapper{
          display: inline-block;
          padding-left: 10%;

          p{
              padding-top: 20px;
              display: inline-block;
              color:  rgba(255, 255, 255, 0.838);  //#b7ab98
              text-transform: uppercase;
              font-weight: 700;
              font-size: 8vw;
              line-height: 7.5vw;
              margin: 0px;
              position: relative;
              z-index: 2;

              &:nth-of-type(2){
                  display: block;
                  position: absolute;
                  color: #1c1c1c;
                  top: 0;
                  z-index: 1;
              }
          }
      }
  }
}`

export const smoothScroll = `'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScroll({children}) {

    useEffect( () => {
        window.scrollTo(0,0);
        
        const lenis = new Lenis()
        
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    }, [])

    return children
}`

export const theadComponent = {
  title1 : "Awwwards 3D Earth",
  title2 : "Build an Awwwards winning Project Component featuring an 3D Earth component using Nextjs, Framer Motion-3D and react-three.",
  decscription1 : "A website tutorial featuring an Awwwards winning Project Component featuring an ",
  date:"April 20, 2024",
  span:"3D Earth component",
  decscription2: ", made with Nextjs, Framer Motion-3D and react-three. Inspired by https://minhpham.design/.",
  demoLink : "https://live-demo-sigma.vercel.app/3D-Earth",
  SourceCode : "https://github.com/21SINGH/3D-Earth",
  video : "https://www.youtube.com/embed/nw3aJaRQlQQ"
}