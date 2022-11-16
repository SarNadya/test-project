import React from 'react';
import styles from '../ProjectDesign/ProjectDesign.module.css';

const CapitalImprovements = () => {
    return (
        <div>
            <h3 className={styles.title}> Capital Improvements </h3>
            <button className={styles.slider}></button>
            <p className={styles.article}>
                This results in scope creep and slippage of the schedule
                that ultimately result in additional cost to the owner.
            </p>
        </div>
    );
};

export default CapitalImprovements;