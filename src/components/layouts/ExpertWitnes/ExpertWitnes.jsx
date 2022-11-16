import React from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import styles from './ExpertWitnes.module.css';

const ExpertWitnes = () => {
    return (
        <div>
            <div className={styles.icon}>
                <BoltIcon color='primary'/>
            </div>
            <h3>55 000</h3>
            <p> Expert Witness </p>
        </div>
    );
};

export default ExpertWitnes;