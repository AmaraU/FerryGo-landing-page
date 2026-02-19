import React from "react";
import styles from "./Page2.module.css";
import { getImageURL } from "../../utils";

const tabs = [
    {
        id: "first",
        icon: "icons/gears.png",
        label: "Booking & Ticketing",
        content: "Passengers can book ferry seats in advance and receive digital tickets after successful payment.",
        image: "Image1.png",
    },
    {
        id: "second",
        icon: "icons/key.png",
        label: "Trip & Capacity Management",
        content: "Trips are scheduled with defined routes, departure times, and seat limits. Capacity is enforced per trip to prevent overloading.",
        image: "Image2.png",
    },
    {
        id: "third",
        icon: "icons/chart.png",
        label: "Passenger Records",
        content: "Passenger details are captured during booking and organized into trip-specific manifests for accountability and review.",
        image: "Image3.png",
    }
];
const delay = 10000;

export const Page2 = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex =>
                prevIndex === tabs.length - 1 ? 0 : prevIndex + 1
            );
        }, delay);

        return () => clearInterval(interval);
    }, []);

    const handleTabHover = (tabIndex) => {
        setIndex(tabIndex);
    };

    return (
        <div>
            <div className={styles.heading}>
                <h2>Core Capabilities</h2>
            </div>

            <div className={styles.body}>
                <div className={styles.partOne}>
                    <div className={styles.slideshow} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
                        {tabs.map((tab, tabIndex) => (
                            <img key={tabIndex} src={getImageURL(tab.image)} className={`${styles.image} ${index === tabIndex ? styles.active : ''}`} />
                        ))}
                    </div>
                </div>

                <div className={styles.partTwo}>
                    <ul className={styles.accordion}>
                        {tabs.map((tab, tabIndex) => (
                            <li key={tabIndex}>
                                <input type="radio" name="accordion" id={tab.id} checked={index === tabIndex} readOnly />
                                <div className={styles.each} key={tabIndex} onMouseEnter={() => handleTabHover(tabIndex)}>
                                    <div className={styles.icon}>
                                        <img src={getImageURL(tab.icon)} alt="" />
                                    </div>
                                    <div className={styles.info}>
                                        <label htmlFor={tab.id}>{tab.label}</label>
                                        <div className={styles.content}>
                                            <p>{tab.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
