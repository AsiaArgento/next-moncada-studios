import React from 'react';
import styles from '../styles/Home.module.css'
import { FaAngleDoubleDown } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Container } from '@chakra-ui/react'

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
    <div className={styles.blueShade}>
        <main className={styles.main}>
        <Container>
            <div className={styles.blueShade}>
                <h1 className={styles.title}>
                {title}
                </h1>
            </div>
            </Container>
            <div style={{position: "absolute", bottom: "75px"}}>
            <motion.div transition={bounceTransition} animate={{
                y: ["25%", "-25%"]
            }}>
            <a href='#'><FaAngleDoubleDown style={{color: "#fff", fontSize: "3rem"}} /></a>
            </motion.div>
            </div>
        </main>
    </div>
    </div>
  </>;
}

export default Banner;
