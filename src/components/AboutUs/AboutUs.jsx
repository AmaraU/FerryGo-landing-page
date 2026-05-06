import React, { useState, useEffect } from "react";
import styles from "./AboutUs.module.css";
import { getImageURL } from "../../utils";

export const AboutUs = () => {

    return (
        <div>
            <div className={styles.main}>

                <img src={getImageURL('clouds.svg')} alt="" className={styles.clouds} />

                <img src={getImageURL('beach-umbrella.svg')} alt="" className={styles.umbrella} />

                <div className={styles.about}>

                    <h3 className={styles.label}>About Us</h3>
                    <h1>Boat Rides, Made Better</h1>


                    <div className={styles.content}>
                        <div className={styles.words}>
                            <h2>No more queues, just book your seat and show up.</h2>
                            <p>
                                Ferrygo makes ferry travel in Lagos simple and reliable.
                                No more long waits, overcrowded boats, or unsafe boarding, just a smooth, transparent booking experience from start to finish.
                            </p>
                        </div>


                        <div className={styles.image}>
                            <img src={getImageURL('img1.svg')} alt="" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
