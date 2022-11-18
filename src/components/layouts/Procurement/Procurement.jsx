import React from 'react';
import styles from '../ExpertWitnes/ExpertWitnes.module.css';
import SettingsIcon from '@mui/icons-material/Settings';

const Procurement = () => {
    return (
        <div>
            <div className={styles.icon}>
                <SettingsIcon fontSize='large' color='primary'/>
            </div>
            <h3 className={styles.amount}>18 000</h3>
            <p className={styles.title}> Procurement </p>
        </div>
    );
};

export default Procurement;