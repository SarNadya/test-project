import React from 'react';
import styles from './ProjectManagments.module.css';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const ProjectManagments = () => {
    return (
        <div>
            <div className={styles.icon}>
                <LightbulbIcon color='primary'/>
            </div>
            <h3>78 150</h3>
            <p> Project Managments </p>
        </div>
    );
};

export default ProjectManagments;