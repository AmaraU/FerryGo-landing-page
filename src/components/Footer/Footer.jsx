import React from "react";
import styles from "./Footer.module.css";
import { getImageURL } from "../../utils";

export const Footer = () => {
    return (
        <div className={styles.whole}>

            <img src={getImageURL('big-logo.png')} alt="" />


            <div className={styles.links}>

                <div className={styles.partOne}>
                    <p>Plan easy trips to beaches and islands</p>
                    <span>
                        <a><img src={getImageURL("LinkedIn.svg")} alt="" /></a>
                        <a><img src={getImageURL("Instagram.svg")} alt="" /></a>
                        <a><img src={getImageURL("Facebook.svg")} alt="" /></a>
                        <a><img src={getImageURL("Twitter.svg")} alt="" /></a>
                    </span>
                </div>

                <div className={styles.partTwo}>
                    <div>
                        <p>Company</p>
                        <div className={styles.list}>
                            <a href="">About Us</a>
                            <a href="">FAQs</a>
                            <a href="">Teams</a>
                            <a href="">Contact Us</a>
                        </div>
                    </div>
                    <div className={styles.privacy}>
                        <p>Privacy</p>
                        <div className={styles.list}>
                            <a href="">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.theBottom}>
                <p>© 2026 All Rights Reserved</p>
                <a href="">Terms of Use</a>
            </div>
        </div>
    )
}


