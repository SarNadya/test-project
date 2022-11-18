import React from 'react';
import styles from './News.module.css';

const News = () => {
    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}> NEWS</h2>
            <p className={styles.date}> 12 february, 2015</p>
            <p className={styles.subtitle}>
                Project Design and Engineering Services
            </p>
            <p className={styles.comments}> 23 comments </p>
            <div className={styles.switch}>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>
    );
};

export default News;