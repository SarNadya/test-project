import React from 'react';
import styles from './ComtemporaryVilla.module.css';

const ComtemporaryVilla = () => {
    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}> Comtemporary Villa </h2>
            <button className={styles.slider}></button>
            <p className={styles.article}>
                Diversity is a buzzword often heard by brand manaders,
                business tycoons, politicians, and more; but it'
                much more than that. To us at DM Construction,
                diversity is the name of the game.
            </p>
            <p className={styles.article}>
                We offer a diverse set of skills to all clients in all
                fields, but also offer a diverse group of individuals
                who are able to deliver those skills. From
            </p>
            <button className={styles.button}> WIEW PROJECT</button>
        </div>
    );
};

export default ComtemporaryVilla;