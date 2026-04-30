import React, { useState, useEffect } from "react";
import styles from "./Services.module.css";
import { getImageURL } from "../../utils";

export const Services = () => {

    return (
        <div>
            <div className={styles.main}>

                <div className={styles.about}>

                    <h3 className={styles.label}>Our Service</h3>
                    <h1>Smarter, Safer Ferry Rides</h1>

                    <div className={styles.content}>
                        <div className={styles.words}>
                            <h2>Fast Booking, Zero Hassle</h2>
                            <p>
                                With Ferrygo, you book your seat in advance from your phone pick your route, date, time, and number of passengers, and you're done in under 3 minutes.
                            </p>
                        </div>

                        <div className={styles.image}>
                            <img src={getImageURL('img2.png')} alt="" />
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.image}>
                            <img src={getImageURL('img3.png')} alt="" />
                        </div>

                        <div className={styles.words}>
                            <h2>Safe Rides You Can Count On</h2>
                            <p>
                                Every ride on Ferrygo is capped at its seat limit — no overloading, no overcrowding.
                                We enforce visible safety standards on every vessel so you always know what you're boarding.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
