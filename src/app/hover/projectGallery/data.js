export const pageIndex = `'use client';
import styles from './page.module.css'
import { useState } from 'react';
import Project from '../components/project';
import Modal from '../components/modal';

const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000"
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C"
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3"
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63"
  }
]

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <main className={styles.main}>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} setModal={setModal} key={index}/>
        })
      }
    </div>
  <Modal modal={modal} projects={projects}/> 
  </main>
  )
}
`;

export const pageStyle = `.main{
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.body{
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}`;

export const modalCode = `import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './style.module.css';
import gsap from 'gsap';

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function index({modal, projects}) {

  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect( () => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})

    window.addEventListener('mousemove', (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX)
      yMoveContainer(pageY)
      xMoveCursor(pageX)
      yMoveCursor(pageY)
      xMoveCursorLabel(pageX)
      yMoveCursorLabel(pageY)
    })
  }, [])

  return (
    <>
        <motion.div ref={modalContainer} variants={scaleAnimation} 
        initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
            <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
            {
                projects.map( (project, index) => {
                const { src, color } = project
                return <div className={styles.modal} style={{backgroundColor: color}} key={\`modal_\${index}\`}>
                    <Image 
                    src={\`/images/\${src}\`}
                    width={300}
                    height={0}
                    alt="image"
                    />
                </div>
                })
            }
            </div>
        </motion.div>
        <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} 
        initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={styles.cursorLabel} 
        variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
    </>
  )
}`;

export const modalStyle = `.modalContainer{
  height: 350px;
  width: 400px;
  position: absolute;
  background-color: white;
  overflow: hidden;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modalSlider{
  height: 100%;
  width: 100%;
  position: absolute;
  transition: top 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

.modal{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal img{
  height: auto;
}

.cursor, .cursorLabel{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #455CE9;
  color: white;
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 300;
  pointer-events: none;
}

.cursorLabel{
  background-color: transparent;
}`;


export const projectIndex = `'use client';
import React from 'react'
import styles from './style.module.css';

export default function index({index, title, setModal}) {

    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} 
        onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
            <h2>{title}</h2>
            <p>Design & Development</p>
        </div>
    )
}`;

export const projectStyle = `.project{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 50px 100px 50px 100px;
  border-top: 1px solid rgb(201, 201, 201);
  cursor: pointer;
  transition: all 0.2s;
}
.project:last-of-type{
  border-bottom: 1px solid rgb(201, 201, 201);
}

.project:hover{
  opacity: 0.5;
}

.project:hover h2{
  transform: translateX(-10px);
}

.project:hover p{
  transform: translateX(10px);
}

.project h2{
  font-size: 60px;
  margin: 0px;
  font-weight: 400;
  transition: all 0.4s;
}

.project p{
  transition: all 0.4s;
  font-weight: 300;
}`;

export const theadComponent = {
  title1 : "Awwwards Project Gallery",
  title2 : "Build an Awwwards winning Project Gallery using Nextjs, Framer Motion and Gsap.",
  decscription1 : "A website tutorial featuring an Awwwards winning Project Gallery, made with ",
  date:"April 16, 2024",
  span:"Next.js, Framer Motion and Gsap",
  decscription2: "By using simple motion property from Frmaer Motion we can create something awesome, Inspired by https://dennissnellenberg.com/.",
  demoLink : "https://live-demo-sigma.vercel.app/projectGallery",
  SourceCode : "https://github.com/21SINGH/project-section",
  video : "https://www.youtube.com/embed/qS8YmZE_0gQ"
}