import React, { useState, useEffect } from "react";
import styles from "./Welcome.module.css";
import { getImageURL } from "../../utils";

export const Welcome = () => {
    const { behind, setBehind } = useState(false);

    useEffect(() => {
        const balls = document.querySelectorAll('.ball');

        balls.forEach(ball => {
            const number = Math.random();
            if (number < 0.5) {
                ball.style.zIndex = -5;
            }
        });
    }, []);

    return (
        <div>
            {/* <div className={styles.bread}>
                <ul className={styles.crumb}>
                    <li><a className={styles.home} href="#">Home</a></li>
                </ul>
            </div> */}
            <div className={styles.welcome}>
                <div className={styles.words}>
                    <div>
                        <h1 className={styles.heading}>FerryGo</h1>
                        <p className={styles.description}>
                            FerryGo is a digital platform that enables structured ferry seat booking and trip management. It replaces manual queuing and informal boarding processes with a transparent, digital system.
                            <br /><br />
                            FerryGo provides technology only and does not operate ferries or vessels.
                        </p>
                        {/* <div className={styles.buttons}>
                            <button className={styles.buttonOne}>See Our Solutions</button>
                            <button className={styles.buttonTwo}>Book A Demo</button>
                        </div> */}
                    </div>
                </div>

                <div style={{ width: '40%' }}>
                    <img src={getImageURL('FG_Logo_Blue.svg')} alt="" />
                </div>
            </div>
        </div>
    )
}
