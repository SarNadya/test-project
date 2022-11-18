import React from 'react';
import styles from '../ExpertWitnes/ExpertWitnes.module.css';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const ProjectManagments = () => {
    return (
        <div>
            <div className={styles.icon}>
                <LightbulbIcon fontSize='large' color='primary'/>
            </div>
            <h3 className={styles.amount}>78 150</h3>
            <p className={styles.title}> Project Managments </p>
        </div>
    );
};

export default ProjectManagments;