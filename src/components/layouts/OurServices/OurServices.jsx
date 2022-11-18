import React from 'react';
import styles from './OurServices.module.css';

const OurServices = () => {
    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}> OUR SERVICES</h2>
            <button className={styles.slider}></button>
            <p className={styles.article}>
                Our mission is to provide the highest level of service
                for our client-partners from concept through construction.
            </p>
        </div>
    );
};

export default OurServices;