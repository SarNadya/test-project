import React from 'react';
import OpacityIcon from '@mui/icons-material/Opacity';
import styles from './Construction.module.css';

const Construction = () => {
    return (
        <div>
            <div className={styles.icon}>
                <OpacityIcon color='primary'/>
            </div>
            <h3> 124 600</h3>
            <p> Construction </p>
        </div>
    );
};

export default Construction;