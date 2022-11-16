import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div>
            <h2>
                YOUR BUILDING IS IN GOOD HANDS
            </h2>
            <p>
                Our mission is to provide the highest level of service for our client-partners from concept through construction.
            </p>
            <button className={styles.button}>ABOUT COMPANY</button>
        </div>
    );
};

export default About;