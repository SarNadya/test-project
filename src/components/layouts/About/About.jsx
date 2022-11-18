import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>
                YOUR BUILDING IS IN GOOD HANDS
            </h1>
            <button className={styles.slider}></button>
            <p className={styles.article}>
                Our mission is to provide the highest level of service for our client-partners from concept through construction.
            </p>
            <button className={styles.button}>ABOUT COMPANY</button>
        </div>
    );
};

export default About;