import React, { useState, useEffect } from "react";
import styles from "./Welcome.module.css";
import { getImageURL } from "../../utils";

export const Welcome = () => {

    return (
        <div>
            <div className={styles.welcome}>
                <div className={styles.words}>
                    <h1 className={styles.heading}>Skip the Queue & Ride with Us!</h1>
                    <p className={styles.description}>
                        Plan easy trips to beaches and islands across Lagos quickly and without stress
                    </p>


                    <div className={styles.buttons}>
                        <button>
                            <img src={getImageURL('app-store.svg')} alt="" />
                        </button>
                        <button>
                            <img src={getImageURL('play-store.svg')} alt="" />
                        </button>
                    </div>
                </div>

                <div className={styles.image}>
                    <img src={getImageURL('boat-party.png')} alt="" />
                </div>
            </div>
        </div>
    )
}
