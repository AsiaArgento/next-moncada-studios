import React from 'react';
import styles from '../styles/Home.module.css'
import { FaAngleDoubleDown } from 'react-icons/fa'
import { motion } from 'framer-motion'

const bounceTransition = {
    y: {
        duration: 0.4,
        yoyo: Infinity,
        ease: "easeOut"
    }
};

function Banner({ title }) {
  return <>
  <div className={styles.container}>
    <main className={styles.main}>
        <div className={styles.container}>
            <h1 className={styles.title}>
            {title}
            </h1>
        </div>
        
        <div style={{position: "absolute", bottom: "100px"}}>
        <motion.div transition={bounceTransition} animate={{
            y: ["25%", "-25%"]
        }}>
        <FaAngleDoubleDown style={{color: "#fff", fontSize: "3rem"}} />
        </motion.div>
        </div>
    </main>
    </div>
  </>;
}

export default Banner;
