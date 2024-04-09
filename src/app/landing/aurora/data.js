export const code = `import AuroraHero from "@/components/AuroHero"

const Home = () => {
  return (
    <div>
      <AuroraHero/>
    </div>
  )
}

export default Home

`;

export const indexCode = `"use client";

import styles from "./style.module.scss";
import { useEffect } from "react";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF"];

export default function AuroraHero() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 3,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);
  const backgroundImage = useMotionTemplate\`radial-gradient(130% 130% at 50% 0%, #020617 50%, \${color})\`;
  return (
    <div className={styles.main}>
      <motion.section style={{ backgroundImage }} className={styles.section}>
      </motion.section>
    </div>
  );
}
`

export const indexStyle = `// style.module.scss

.main {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
}

.section {
  display: grid;
  height: 100vh;
  place-content: center;
  background-color: #141414;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 6rem;
  padding-bottom: 6rem;
  color: #e5e7eb;

  &.sticky {
    position: sticky;
    top: 0;
  }
}
`;

export const theadComponent = {
  title1 : "Aurora Effect Landing Page",
  title2 : "How to make aurora effect landing page using Next.js and Framer Motion.",
  decscription1 : "A website tutorial featuring a aurora effect, where the lower part of the screen feels like aur from",
  span:"Ladakh India,",
  decscription2: "made with Next.js and Framer Motion. Inspired by https://www.sidebar.com/.",
  demoLink : "#",
  SourceCode : "https://github.com/21SINGH/DEVLOG/tree/main/aurora",
  video : "/videos/aurora.mp4"
}