import React, { useState } from 'react';
import styles from "./Navbar.module.css"
import { getImageURL } from "../../utils";



export const Navbar = () => {

    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };



    return (
        <div className={styles.mainNav}>

            <div className={styles.imageCont}>
                <img className={styles.image} src={getImageURL("FG_Logo_Blue.svg")} />
            </div>

            <nav className={styles.navbar}>
                <div className={styles.menu}>
                    <ul className={styles.menuItems}>
                        <li className={styles.menuItem1}>
                            <a href="#Home">Home</a>
                        </li>

                        <li className={styles.menuItem2}>
                            <a href="#About">About</a>
                        </li>

                        <li className={styles.menuItem3}>
                            <a href="#Service">Service</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className={styles.link}>
                <a href={"#GetStarted"}>Get Started</a>
            </div>
        </div>

    );
};