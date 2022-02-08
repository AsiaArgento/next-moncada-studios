import React, { useState } from "react"
import Link from "next/link"
import { FaTimes } from "react-icons/fa"
import { FaBars } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import styles from '../styles/Menu.module.css'
import Image from "next/image"
import moncadaStudiosLogoWhite from '../public/moncadaStudiosLogoWhite.png'

function Menu() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    return (
        <>
            <div className={styles.menuIcon}>
                <a onClick={handleToggle}>
                {navbarOpen ? (
                    <FaTimes style={{ color: "#fff", fontSize: "2rem" }} />
                ) : (
                    <FaBars style={{ fontSize: "2rem" }} />
                )}
                </a>
            </div>
            <section id="menu" className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <nav>
                    <Link href="/">
                    <a>
                        <div className={styles.logoWhite}>
                            <Image src={moncadaStudiosLogoWhite} alt="logo" />
                        </div>
                    </a>
                    </Link>
                    <Link href='/'><a>Home</a></Link>
                    <Link href='/about-us'><a>About Us</a></Link>
                    <Link href='/services'><a>Services</a></Link>
                    <Link href='/results'><a>Results</a></Link>
                    <Link href='/contact'><a>Contact</a></Link>
                </nav>
            </section>
            <section className={`menuNavRight ${navbarOpen ? " showMenuRight" : ""}`}>
                <div className={styles.socialIconsList}>
                    <a href='#'><FaInstagram /></a>
                    <a href='#'><FaFacebook /></a>
                    <a href='#'><FaLinkedinIn /></a>
                    <a href='#'><FaYoutube /></a>
                </div>
            </section>
        </>
    )
}

export default Menu
