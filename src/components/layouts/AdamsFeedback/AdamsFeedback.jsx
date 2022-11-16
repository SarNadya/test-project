import React from 'react';
import styles from '../SchultsFeedback/SchultsFeedback.module.css';
import Rating from '@mui/material/Rating';
import avatar from '../../img/60.jpg';

const AdamsFeedback = () => {
    return (
        <div>
            <div className={styles.avatar}>
                <img src={avatar} alt="avatar" />
            </div>
            <h4 className={styles.title}> David Mc. Adams </h4>
            <div className={styles.rating}>
                <Rating name="read-only" value={5} readOnly />
            </div>
            <p className={styles.feedback}>
                In most urban areas, construction has already built
                existing structures, many having been standing
                for decades.
            </p>
        </div>
    );
};

export default AdamsFeedback;