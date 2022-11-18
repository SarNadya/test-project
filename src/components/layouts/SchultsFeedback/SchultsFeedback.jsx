import React from 'react';
import styles from './SchultsFeedback.module.css';
import Rating from '@mui/material/Rating';
import avatar from '../../img/60.jpg';

const SchultsFeedback = () => {
    return (
        <div>
            <div className={styles.avatar}>
                <img src={avatar} alt="avatar" />
            </div>
            <h4 className={styles.title}> Tony SH. Schults </h4>
            <div className={styles.rating}>
                <Rating name="read-only" value={5} size="small" readOnly />
            </div>
            <p className={styles.feedback}>
                When selecting DMCS as the design-build team, clients
                benefit in terms of efficiency and continuity that
                translate into cost savings and optimized schedules.
                Contact us today and see how DMCS can best serve you from
            </p>
            <div className={styles.switch}>
                <button></button>
                <button></button>
            </div>
        </div>
    );
};

export default SchultsFeedback;