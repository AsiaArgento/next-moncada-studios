import React from 'react';
import styles from '../styles/SectionWhoWeAre.module.css'

function Section({ title, subTitle, description }) {
  return <>
    <div className={styles.container}>
        <main className={styles.main}>
            <div className={styles.blueShade}>
                <h1 className={styles.title}>
                    {title}
                </h1>
            </div>
                <h2 className={styles.subTitle}>
                    {subTitle}
                </h2>
                <p className={styles.description}>
                    {description}
                </p>
        </main>
    </div>
  </>;
}

export default Section;
