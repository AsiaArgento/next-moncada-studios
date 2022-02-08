import React from 'react';
import styles from '../styles/Navigation.module.css'
import Image from 'next/image';
import Link from 'next/link'
import moncadaStudiosLogo from '../public/moncadaStudiosLogo.png'
import { useRouter } from 'next/router';

function Navigation() {
    const router = useRouter();
    return <>
        <div className={styles.container}>
            <nav className={styles.navigation}>
                <Link href="/">
                    <a>
                        <div className={styles.logo}>
                            <Image src={moncadaStudiosLogo} alt="logo" />
                        </div>
                    </a>
                </Link>
                <div className={styles.navLinks}>
                    <Link href="/">
                    <a className={router.pathname == "/" ? "active" : ""}>Home</a>
                    </Link>
                    <Link href="/about-us">
                    <a className={router.pathname == "/about" ? "active" : ""}>About Us</a>
                    </Link>
                    <Link href="/services">
                    <a className={router.pathname == "/services" ? "active" : ""}>Services</a>
                    </Link>
                    <Link href="/results">
                    <a className={router.pathname == "/results" ? "active" : ""}>Results</a>
                    </Link>
                    <Link href="/contact">
                    <a className={router.pathname == "/contact" ? "active" : ""}>Contact</a>
                    </Link>
                </div>
            </nav>
        </div>
    </>;
}

export default Navigation;
