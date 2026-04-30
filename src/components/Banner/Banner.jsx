import react from "react";

import styles from "./Banner.module.css";
import { getImageURL } from "../../utils";

export const Banner = () => {
    return (
        <div className={styles.banner}>

            <img src={getImageURL('star.svg')} alt="" className={styles.ab1} />
            <img src={getImageURL('tilted-star.svg')} alt="" className={styles.ab2} />
            <img src={getImageURL('white-bg1.svg')} alt="" className={styles.ab3} />
            <img src={getImageURL('white-bg2.svg')} alt="" className={styles.ab4} />


            <div className={styles.words}>
                <h1>Download FerryGo now!</h1>
                <p>Book your seat, beat the queue, and enjoy the ride. All from your phone.</p>

                <div className={styles.buttons}>
                    <button>
                        <img src={getImageURL('white-app-store.svg')} alt="" />
                    </button>
                    <button>
                        <img src={getImageURL('white-play-store.svg')} alt="" />
                    </button>
                </div>
            </div>

            <img src={getImageURL('phones.svg')} alt="" className={styles.image} />

        </div>
    )
}