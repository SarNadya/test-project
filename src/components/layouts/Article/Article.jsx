import React from 'react';
import styles from '../Article/Article.module.css';

const Article = ({title, article}) => {
    return (
        <div className={styles.wrap}>
            <h3 className={styles.title}> {title} </h3>
            <button className={styles.slider}></button>
            <p className={styles.article}> {article} </p>
        </div>
    );
};

export default Article;