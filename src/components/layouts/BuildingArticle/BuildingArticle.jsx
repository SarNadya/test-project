import React from 'react';
import styles from './BuildingArticle.module.css';

const BuildingArticle = () => {
    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}> BUILDING THE WORLD AROUND US </h2>
            <button className={styles.slider}></button>
            <p className={styles.article}>
                Still other clients have reserved for capital improvement
                projects and will work directly with our Design and
                Engineering team.
            </p>
            <button className={styles.button}> READ MORE </button>
        </div>
    );
};

export default BuildingArticle;