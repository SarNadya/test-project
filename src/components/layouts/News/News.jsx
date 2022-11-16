import React from 'react';
import styles from './News.module.css';

const News = () => {
    return (
        <div className={styles.wrap}>
            <h2> NEWS</h2>
            <p className={styles.date}> 12 february, 2015</p>
            <h3>
                Project Design and Engineering Services
            </h3>
            <p className={styles.comments}> 23 comments </p>
            <div>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>
    );
};

export default News;