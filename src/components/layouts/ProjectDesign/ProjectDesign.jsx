import React from 'react';
import styles from './ProjectDesign.module.css';

const ProjectDesign = () => {
    return (
        <div>
            <h3 className={styles.title}> Project Design and engineering </h3>
            <button className={styles.slider}></button>
            <p className={styles.article}>
                Through Stage-Gate, Design and Engineering methodology,
                DMCS ensure client-partners realize clearly defined
                project objective to achieve intended results.
            </p>
        </div>
    );
};

export default ProjectDesign;