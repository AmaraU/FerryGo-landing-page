import React from "react";

import styles from "./UsedBy.module.css"
import { getImageURL } from "../../utils";

export const UsedBy = () => {
    return (
        <div className={styles.banner}>

            <div className={styles.body}>

                <p className={styles.text}>What We Do</p>

                <ul className={styles.list}>
                    <li>Advance booking of ferry seats</li>
                    <li>Digital ticket issuance for boarding confirmation</li>
                    <li>Trip scheduling with enforced seat capacity</li>
                    <li>Digital passenger and trip records</li>
                </ul>
            </div>
        </div>
    )
}