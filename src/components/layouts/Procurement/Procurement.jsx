import React from 'react';
import styles from './Procurement.module.css';
import SettingsIcon from '@mui/icons-material/Settings';

const Procurement = () => {
    return (
        <div>
            <div className={styles.icon}>
                <SettingsIcon color='primary'/>
            </div>
            <h3>18 000</h3>
            <p> Procurement </p>
        </div>
    );
};

export default Procurement;