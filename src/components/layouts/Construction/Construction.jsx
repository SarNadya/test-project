import React from 'react';
import OpacityIcon from '@mui/icons-material/Opacity';
import styles from '../ExpertWitnes/ExpertWitnes.module.css';

const Construction = () => {
    return (
        <div>
            <div className={styles.icon}>
                <OpacityIcon fontSize='large' color='primary'/>
            </div>
            <h3 className={styles.amount}> 124 600</h3>
            <p className={styles.title}> Construction </p>
        </div>
    );
};

export default Construction;