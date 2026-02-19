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
                <img className={styles.image} src={getImageURL("FG_Logo_BlueBg.svg")} />
            </div>

            <div className={styles.link}>
                <a href={"#Get in Touch"}>Get in Touch</a>
            </div>
        </div>

    );
};