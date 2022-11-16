import React from 'react';
import styles from '../ProjectDesign/ProjectDesign.module.css';

const GeneralContracting = () => {
    return (
        <div>
            <h3 className={styles.title}> General Contracting </h3>
            <button className={styles.slider}></button>
            <p className={styles.article}>
                This allows the Design and Engineering team to originate
                drawings, specifications, structural calculations, details
                and scopes of work that deliver exactly what the client
                had intended to achieve.
            </p>
        </div>
    );
};

export default GeneralContracting;