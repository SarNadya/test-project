import React from 'react';
import styles from '../SchultsFeedback/SchultsFeedback.module.css';
import Rating from '@mui/material/Rating';
import avatar from '../../img/60.jpg';

const JhonsonsFeedback = () => {
    return (
        <div>
            <div className={styles.avatar}>
                <img src={avatar} alt="avatar" />
            </div>
            <h4 className={styles.title}> Martin H.Jhonsons </h4>
            <div className={styles.rating}>
                <Rating name="read-only" value={5} size="small" readOnly />
            </div>
            <p className={styles.feedback}>
                Together, we'll couple our knowledge, expertise, and
                innovative capabilities with your astute knowledge of
                your business-to maximize and optimize results. This
                is all accomplished in a number of ways.
            </p>
        </div>
    );
};

export default JhonsonsFeedback;